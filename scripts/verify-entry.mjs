/**
 * Browser port of paybots/backend/underwriting seal inspection + verification.
 * Runs entirely on paybots.io — no third-party JWT tools.
 */
import canonicalize from 'canonicalize';

const UNDERWRITING_FIELD_KEY = 'underwriting';
const UNDERWRITING_SIGNAL_KEY = 'io.paybots.underwriting';
const UNDERWRITING_JWS_TYP = 'paybots-underwriting+jws';
const RULESET_VERSION = '2026-06-12';
const UCP_TERMS_MEMBERS = ['id', 'line_items', 'currency', 'totals', 'fulfillment'];
const RULESET_VERSIONS = { [RULESET_VERSION]: UCP_TERMS_MEMBERS };
const MEMBERS = ['underwriter', 'version', 'purchase_hash', 'issued_at', 'expires_at', 'signature'];

function b64urlDecode(str) {
    const pad = str.length % 4 === 0 ? '' : '='.repeat(4 - (str.length % 4));
    const b64 = str.replace(/-/g, '+').replace(/_/g, '/') + pad;
    const bin = atob(b64);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
}

function jcs(obj) {
    const out = canonicalize(obj);
    if (typeof out !== 'string') throw new TypeError('value is not JCS-canonicalizable');
    return out;
}

async function sha256Hex(text) {
    const data = new TextEncoder().encode(text);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
}

async function purchaseHash(purchase) {
    const { [UNDERWRITING_FIELD_KEY]: _omit, ...snapshot } = purchase;
    return 'sha-256:' + (await sha256Hex(jcs(snapshot)));
}

function signingPayload(field) {
    const { signature: _sig, ...rest } = field;
    return jcs(rest);
}

function extractSealCandidates(purchase) {
    const candidates = [];
    const signals = purchase.signals;
    if (signals && typeof signals === 'object' && !Array.isArray(signals) && UNDERWRITING_SIGNAL_KEY in signals) {
        candidates.push({ field: signals[UNDERWRITING_SIGNAL_KEY], inSignals: true });
    }
    if (UNDERWRITING_FIELD_KEY in purchase) {
        candidates.push({ field: purchase[UNDERWRITING_FIELD_KEY], inSignals: false });
    }
    return candidates;
}

function parseJwks(text) {
    const doc = JSON.parse(text);
    if (doc.keys && Array.isArray(doc.keys)) return doc.keys;
    if (doc.kty) return [doc];
    return [];
}

function parseJwsHeader(token) {
    const parts = token.split('.');
    if (parts.length !== 3 || parts[1] !== '') throw new Error('Expected detached JWS <protected>..<signature>');
    return JSON.parse(new TextDecoder().decode(b64urlDecode(parts[0])));
}

async function importEcP256PublicKey(jwk) {
    return crypto.subtle.importKey(
        'jwk',
        { kty: 'EC', crv: 'P-256', x: jwk.x, y: jwk.y },
        { name: 'ECDSA', namedCurve: 'P-256' },
        false,
        ['verify'],
    );
}

async function verifyDetachedSignature(token, payloadBytes, jwks) {
    const parts = token.split('.');
    const protectedB64 = parts[0];
    const sigB64 = parts[2];
    const header = parseJwsHeader(token);
    if (header.alg !== 'ES256') throw new Error('alg_rejected');
    if (header.b64 !== false) throw new Error('b64_mismatch');
    const kid = header.kid;
    const jwk = kid ? jwks.find((k) => k.kid === kid) : jwks.length === 1 ? jwks[0] : null;
    if (!jwk) throw new Error(kid ? 'kid_unknown' : 'kid_missing');
    const signingInput = new TextEncoder().encode(protectedB64 + '.');
    const combined = new Uint8Array(signingInput.length + payloadBytes.length);
    combined.set(signingInput, 0);
    combined.set(payloadBytes, signingInput.length);
    const sig = b64urlDecode(sigB64);
    if (sig.length !== 64) throw new Error('signature_malformed');
    const key = await importEcP256PublicKey(jwk);
    const ok = await crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, key, sig, combined);
    if (!ok) throw new Error('signature_invalid');
    return header;
}

async function verifyCandidate(purchase, field, inSignals, jwks, now) {
    const failures = [];
    if (!field || typeof field !== 'object' || Array.isArray(field)) {
        return { valid: false, failures: ['field_missing'] };
    }

    for (const member of MEMBERS) {
        if (!(member in field)) failures.push('member_missing:' + member);
        else if (typeof field[member] !== 'string') failures.push('member_malformed:' + member);
    }
    if (failures.length) return { valid: false, failures, field };

    const version = field.version;
    const members = RULESET_VERSIONS[version];
    let termsObj = null;
    if (!members) failures.push('version_unknown');
    else if (inSignals) {
        termsObj = {};
        for (const k of members) if (k in purchase) termsObj[k] = purchase[k];
    } else {
        termsObj = purchase;
    }

    let kid = null;
    try {
        const payloadStr = signingPayload(field);
        const header = await verifyDetachedSignature(
            field.signature,
            new TextEncoder().encode(payloadStr),
            jwks,
        );
        kid = header.kid || null;
    } catch (err) {
        failures.push('signature:' + (err.message || String(err)));
    }

    if (termsObj !== null) {
        try {
            const hash = await purchaseHash(termsObj);
            if (field.purchase_hash !== hash) failures.push('purchase_hash_mismatch');
        } catch (err) {
            failures.push('purchase_noncanonical:' + (err.name || 'Error'));
        }
    }

    if (now) {
        const exp = new Date(field.expires_at);
        const iss = new Date(field.issued_at);
        if (Number.isNaN(exp.getTime()) || Number.isNaN(iss.getTime())) {
            failures.push('window_uncheckable:InvalidDate');
        } else {
            if (now.getTime() > exp.getTime()) failures.push('expired');
            if (now.getTime() < iss.getTime()) failures.push('not_yet_valid');
        }
    }

    return {
        valid: failures.length === 0,
        failures,
        field,
        kid,
        version,
        signingPayload: signingPayload(field),
    };
}

async function verifyPurchase(purchase, jwksText, checkWindow) {
    const candidates = extractSealCandidates(purchase);
    if (candidates.length === 0) {
        return { valid: false, failures: ['field_missing'], results: [] };
    }
    const jwks = jwksText.trim() ? parseJwks(jwksText) : [];
    const now = checkWindow ? new Date() : undefined;
    const results = [];
    for (const c of candidates) {
        results.push(await verifyCandidate(purchase, c.field, c.inSignals, jwks, now));
    }
    const best = results.find((r) => r.valid) || results[0];
    return { ...best, results };
}

function parseInput(raw) {
    const trimmed = raw.trim();
    if (!trimmed) throw new Error('Paste a purchase JSON object or underwriting seal JSON.');
    const data = JSON.parse(trimmed);
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
        throw new Error('Input must be a JSON object.');
    }
    if ('signature' in data && 'purchase_hash' in data) {
        return { purchase: { [UNDERWRITING_FIELD_KEY]: data }, sealOnly: true };
    }
    return { purchase: data, sealOnly: false };
}

function renderResult(container, result, purchase) {
    const seal = result.field;
    const rulesUrl = seal && seal.version
        ? '/versions/' + encodeURIComponent(seal.version) + '/rules.md'
        : null;

    let html = '';
    if (result.valid) {
        html += '<p class="verify-banner verify-banner--ok">Seal verified locally on this device.</p>';
    } else if (result.failures && result.failures.length) {
        html += '<p class="verify-banner verify-banner--fail">Verification failed.</p>';
        html += '<ul class="verify-failures">';
        for (const f of result.failures) html += '<li><code>' + escapeHtml(f) + '</code></li>';
        html += '</ul>';
    }

    if (seal) {
        html += '<dl class="verify-dl">';
        for (const k of MEMBERS) {
            if (k === 'signature') {
                html += '<dt>signature</dt><dd><code class="verify-mono verify-wrap">' + escapeHtml(seal.signature) + '</code></dd>';
                try {
                    const hdr = parseJwsHeader(seal.signature);
                    html += '<dt>JWS header</dt><dd><pre class="verify-pre">' + escapeHtml(JSON.stringify(hdr, null, 2)) + '</pre></dd>';
                } catch (_) { /* skip */ }
            } else {
                html += '<dt>' + k + '</dt><dd><code class="verify-mono">' + escapeHtml(seal[k]) + '</code></dd>';
            }
        }
        if (rulesUrl) {
            html += '<dt>Rules</dt><dd><a href="' + rulesUrl + '">' + escapeHtml(rulesUrl) + '</a></dd>';
        }
        html += '</dl>';
        if (result.signingPayload) {
            html += '<h3>Signed payload (JCS)</h3><pre class="verify-pre">' + escapeHtml(result.signingPayload) + '</pre>';
        }
    }

    html += '<h3>Purchase (parsed)</h3><pre class="verify-pre">' + escapeHtml(JSON.stringify(purchase, null, 2)) + '</pre>';
    container.innerHTML = html;
}

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

async function init() {
    const form = document.getElementById('verify-form');
    const input = document.getElementById('verify-input');
    const jwksInput = document.getElementById('verify-jwks');
    const windowCheck = document.getElementById('verify-window');
    const output = document.getElementById('verify-output');
    const errorEl = document.getElementById('verify-error');
    const loadJwksBtn = document.getElementById('verify-load-jwks');

    if (!form || !input || !output) return;

    if (loadJwksBtn && jwksInput) {
        loadJwksBtn.addEventListener('click', async function () {
            try {
                const res = await fetch('/.well-known/jwks.json');
                if (!res.ok) throw new Error('HTTP ' + res.status);
                jwksInput.value = await res.text();
            } catch (err) {
                errorEl.hidden = false;
                errorEl.textContent = 'Could not load JWKS: ' + err.message;
            }
        });
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        errorEl.hidden = true;
        output.innerHTML = '<p class="verify-muted">Running verification…</p>';

        try {
            const { purchase } = parseInput(input.value);
            const result = await verifyPurchase(
                purchase,
                jwksInput ? jwksInput.value : '',
                windowCheck ? windowCheck.checked : false,
            );
            renderResult(output, result, purchase);
        } catch (err) {
            errorEl.hidden = false;
            errorEl.textContent = err.message || String(err);
            output.innerHTML = '';
        }
    });
}

init();
