# Paybots underwriting seal — ruleset `2026-06-12`

This document defines what a seal with `"version": "2026-06-12"` covers and how to verify it offline.

## Seal members

| Member | Meaning |
|--------|---------|
| `underwriter` | HTTPS URL identifying who issued the seal (default `https://paybots.io`) |
| `version` | Ruleset id — this file |
| `purchase_hash` | `sha-256:` + hex digest of JCS-canonical purchase terms |
| `issued_at` | RFC 3339 UTC instant (seconds, `Z` suffix) |
| `expires_at` | RFC 3339 UTC instant; default TTL 300s from issuance |
| `signature` | Detached ES256 JWS: `<protected>..<signature>` with `b64=false` |

## What the hash covers

### UCP checkout (`signals.io.paybots.underwriting`)

When the seal rides in `signals["io.paybots.underwriting"]`, the hash covers only these checkout members:

- `id`
- `line_items`
- `currency`
- `totals`
- `fulfillment`

Lifecycle fields (`status`, `order`, `payment`, `buyer`, etc.) may change after underwriting without invalidating the seal.

### In-place placement (`underwriting` on the purchase)

When the seal is an `underwriting` member on the purchase object itself, the hash covers the whole purchase except the in-place `underwriting` member (a seal must not sign itself).

## Signature

1. Build the signing object: all seal members **except** `signature`.
2. Canonicalize with [JCS (RFC 8785)](https://www.rfc-editor.org/rfc/rfc8785).
3. Sign those UTF-8 bytes with ES256 (P-256, IEEE P1363 raw `r||s`).
4. Protected header must include `alg: ES256`, `typ: paybots-underwriting+jws`, `kid`, `b64: false`, `crit: ["b64"]`.

## Verification steps

1. Extract the seal from `signals["io.paybots.underwriting"]` or `underwriting`.
2. Reconstruct the material-terms object for the named `version`.
3. Compute `purchase_hash` and compare.
4. Fetch the published JWK for `kid` from `/.well-known/jwks.json`.
5. Verify the detached JWS over the JCS signing payload.
6. Optionally enforce `issued_at ≤ now ≤ expires_at`.

Use the [Verify](/verify/) page on paybots.io — it runs these steps in your browser.

## Versioning

Whitelist or canonicalization changes ship as a **new dated version**. Old seals keep verifying under the version they name.
