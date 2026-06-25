/* Checkout settings + spending rules — the consumer-facing controls Paybots
   underwrites against, shown read-only to the operator. Mirrors the storefront
   CheckoutPrefs model: purchase preferences, site policies, notifications, and
   the per-card authorization rules. Uses Card + Toggle + the chip language. */
const { Card, Toggle, PaymentCard, Dialog, Button } = window.PaybotsDesignSystem_e75ed6;

const chipBase = { display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 11px", borderRadius: "var(--pb-radius-pill)", fontSize: 13, fontWeight: 600, lineHeight: 1.3, whiteSpace: "nowrap" };
const TAG = { ...chipBase, background: "var(--pb-blue-soft)", color: "var(--pb-blue-link)", border: "1px solid var(--pb-blue)" };
const DANGER = { ...chipBase, background: "var(--pb-red-bg)", color: "var(--pb-red)", border: "1px solid var(--pb-red)" };
const CAP = { ...chipBase, background: "var(--pb-surface-muted)", color: "var(--pb-ink)", border: "1px solid var(--pb-border)" };

const TONE = {
  approve: { fg: "var(--pb-green)", bg: "var(--pb-green-bg)" },
  working: { fg: "var(--pb-amber)", bg: "var(--pb-amber-bg)" },
  reject: { fg: "var(--pb-red)", bg: "var(--pb-red-bg)" },
};

function eyebrow(label) {
  return <div style={{ ...window.PB_STYLE.eyebrow, margin: 0, marginBottom: 7 }}>{label}</div>;
}

function statusChip(status) {
  const map = {
    active: { tone: "approve", label: "Active" },
    frozen: { tone: "working", label: "Frozen" },
    revoked: { tone: "reject", label: "Revoked" },
  };
  const m = map[status] || map.active;
  const t = TONE[m.tone];
  return <span style={{ ...chipBase, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", background: t.bg, color: t.fg, border: "1px solid " + t.fg }}>{m.label}</span>;
}

/* ---- Purchase preferences (real toggles, demo-local state) ---- */
function PurchasePrefs({ toggles }) {
  const [state, setState] = React.useState(() => Object.fromEntries(toggles.map((t) => [t.key, t.on])));
  return (
    <Card title="Purchase preferences">
      <p style={{ margin: "0 0 4px", fontSize: 13, color: "var(--pb-ink-2)" }}>How Paybots handles repeat orders during chat checkout.</p>
      {toggles.map((t, i) => {
        const on = state[t.key];
        return (
          <div key={t.key} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 0", borderTop: i === 0 ? "none" : "1px solid var(--pb-surface-muted)" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{t.title}</div>
              <div style={{ fontSize: 13, color: "var(--pb-ink-2)", lineHeight: 1.45 }}>{t.sub}</div>
              <div style={{ fontSize: 13, color: on ? "var(--pb-green)" : "var(--pb-ink-faint)", marginTop: 6 }}>{on ? t.onText : t.offText}</div>
            </div>
            <div style={{ paddingTop: 2 }}>
              <Toggle checked={on} onChange={(v) => setState((p) => ({ ...p, [t.key]: v }))} />
            </div>
          </div>
        );
      })}
    </Card>
  );
}

/* ---- Site policies (always / greylist / blacklist) ---- */
function SitePolicies({ policies }) {
  return (
    <Card title="Site policies">
      <p style={{ margin: "0 0 14px", fontSize: 13, color: "var(--pb-ink-2)" }}>Where Paybots searches, which merchants need extra approval, and which are blocked.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {policies.map((p) => {
          const t = TONE[p.tone];
          return (
            <div key={p.list} style={{ border: "1px solid var(--pb-border)", borderRadius: "var(--pb-radius)", overflow: "hidden" }}>
              <div style={{ background: t.bg, color: t.fg, borderBottom: "1px solid " + t.fg, padding: "8px 12px", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.fg }} />{p.list}
              </div>
              <div style={{ padding: "10px 12px" }}>
                <div style={{ fontSize: 12, color: "var(--pb-ink-2)", lineHeight: 1.4, marginBottom: 10 }}>{p.desc}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {p.sites.map((s) => (
                    <div key={s.domain} style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: 13 }}>{s.label}</span>
                      <span style={{ fontFamily: "var(--pb-font-mono)", fontSize: 12, color: "var(--pb-ink-faint)" }}>{s.domain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

/* ---- Notifications ---- */
function Notifications({ items }) {
  const [state, setState] = React.useState(() => Object.fromEntries(items.map((n) => [n.key, n.on])));
  return (
    <Card title="Notifications">
      <p style={{ margin: "0 0 12px", fontSize: 13, color: "var(--pb-ink-2)" }}>Which alerts Paybots sends during checkout.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((n) => (
          <label key={n.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderTop: "1px solid var(--pb-surface-muted)", fontSize: 14, cursor: "pointer" }}>
            <span>{n.label}</span>
            <Toggle checked={state[n.key]} onChange={(v) => setState((p) => ({ ...p, [n.key]: v }))} />
          </label>
        ))}
      </div>
    </Card>
  );
}

/* ---- Card controls (freeze/unfreeze + allowed categories) ---- */
function CardControls({ cards }) {
  const [state, setState] = React.useState(() => Object.fromEntries(cards.map((c) => [c.id, c.frozen])));
  const [confirm, setConfirm] = React.useState(null); // card pending freeze

  const doFreeze = () => { setState((p) => ({ ...p, [confirm.id]: true })); setConfirm(null); };

  return (
    <Card title="Card controls">
      <p style={{ margin: "0 0 14px", fontSize: 13, color: "var(--pb-ink-2)" }}>Freeze or unfreeze your Paybots card, and choose the merchant categories it's allowed to be charged at. Changes take effect at checkout right away.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {cards.map((c) => {
          const frozen = state[c.id];
          return (
            <div key={c.id} style={{ border: "1px solid var(--pb-border)", borderRadius: "var(--pb-radius)", padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <PaymentCard brand={c.brand} label={c.label} last4={c.last4} exp={c.exp} status={frozen ? "frozen" : "active"} />
                </div>
                <label style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--pb-ink-2)", flex: "none" }}>
                  {frozen ? "Frozen" : "Active"}
                  <Toggle checked={!frozen} onChange={(v) => { if (v) setState((p) => ({ ...p, [c.id]: false })); else setConfirm(c); }} />
                </label>
              </div>
              <div>{eyebrow("Allowed at")}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, opacity: frozen ? 0.5 : 1 }}>
                  {c.categories.map((t) => <span key={t} style={TAG}>{t}</span>)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Dialog
        open={!!confirm}
        title="Freeze this card?"
        onClose={() => setConfirm(null)}
        footer={<><Button variant="ghost" onClick={() => setConfirm(null)}>Cancel</Button><Button variant="reject" onClick={doFreeze}>Freeze card</Button></>}
      >
        {confirm && <>Paybots will reject new purchases on <strong>{confirm.label}</strong> (···· {confirm.last4}) until you unfreeze it. In-flight orders are unaffected.</>}
      </Dialog>
    </Card>
  );
}

/* ---- Per-card authorization rules ---- */
function RuleCard({ c }) {
  return (
    <Card>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, minWidth: 0 }}>
          <span style={{ fontSize: 16, fontWeight: 600 }}>{c.label}</span>
          <span style={{ fontSize: 13, color: "var(--pb-ink-2)", fontFamily: "var(--pb-font-mono)" }}>{c.scope}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {statusChip(c.status)}
          <span style={{ fontSize: 12, color: "var(--pb-ink-faint)", fontFamily: "var(--pb-font-mono)" }}>v{c.version}</span>
        </div>
      </div>
      <div style={{ marginTop: 14 }}>{eyebrow("Caps")}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          <span style={CAP}>Per purchase&nbsp;<b style={{ fontFamily: "var(--pb-font-mono)" }}>{c.perPurchase}</b></span>
          <span style={CAP}>Daily&nbsp;<b style={{ fontFamily: "var(--pb-font-mono)" }}>{c.daily}</b></span>
        </div>
      </div>
      <div style={{ marginTop: 14 }}>{eyebrow("Allowed categories")}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{c.categories.map((t) => <span key={t} style={TAG}>{t}</span>)}</div>
      </div>
      {c.blocked.length > 0 && (
        <div style={{ marginTop: 14 }}>{eyebrow("Blocked")}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{c.blocked.map((t) => <span key={t} style={DANGER}>{t}</span>)}</div>
        </div>
      )}
      <div style={{ marginTop: 14 }}>{eyebrow("Substitution policy")}
        <span style={{ fontSize: 14, color: "var(--pb-text)" }}>{c.substitution}</span>
      </div>
    </Card>
  );
}

function Rules() {
  const s = window.PB_SETTINGS;
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 500 }}>Checkout settings</h1>
        <p style={{ margin: 0, fontSize: 14, color: "var(--pb-ink-2)" }}>
          The preferences and rules Paybots underwrites against for <code style={{ fontFamily: "var(--pb-font-mono)", fontSize: 13 }}>{s.user}</code>.
          This mirrors the consumer's storefront settings — card controls below are interactive.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <PurchasePrefs toggles={s.toggles} />
        <CardControls cards={s.cardControls} />
        <SitePolicies policies={s.sitePolicies} />
        <Notifications items={s.notifications} />
        <div>{eyebrow("Per-card authorization rules")}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {s.cards.map((c) => <RuleCard key={c.label} c={c} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Rules });
