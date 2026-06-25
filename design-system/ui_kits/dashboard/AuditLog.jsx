/* Audit log screen — append-only event stream. Every decision logged as a
   discrete event the moment it happens. Read-only. */
const { Card, DecisionDot } = window.PaybotsDesignSystem_e75ed6;

const EVENT_LABEL = {
  "decision.issued": "Decision issued",
  "seal.signed": "Seal signed",
  "checkout.received": "Checkout received",
  "intent.checked": "Intent checked",
  "rules.loaded": "Rules loaded",
  "dispute.opened": "Dispute opened",
  "jwks.rotated": "Signing key rotated",
};

function AuditLog() {
  const rows = window.PB_AUDIT;
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 500 }}>Audit log</h1>
        <p style={{ margin: 0, fontSize: 14, color: "var(--pb-ink-2)" }}>Every underwriting decision, logged as a discrete event the moment it happens. Append-only · read-only.</p>
      </div>
      <Card bodyStyle={{ padding: 0 }}>
        <div>
          {rows.map((r, i) => (
            <div key={r.seq} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 16px", borderTop: i === 0 ? "none" : "1px solid var(--pb-surface-muted)" }}>
              <span style={{ fontFamily: "var(--pb-font-mono)", fontSize: 12, color: "var(--pb-ink-faint)", width: 52, flex: "none", paddingTop: 2 }}>#{r.seq}</span>
              <span style={{ fontFamily: "var(--pb-font-mono)", fontSize: 13, color: "var(--pb-ink-2)", width: 150, flex: "none", paddingTop: 2, whiteSpace: "nowrap" }}>{r.ts}</span>
              <span style={{ width: 12, flex: "none", display: "flex", justifyContent: "center", paddingTop: 6 }}>
                {r.decision ? <DecisionDot decision={r.decision} /> : <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--pb-border-strong)" }} />}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 500 }}>
                  {EVENT_LABEL[r.event] || r.event}
                  <code style={{ fontFamily: "var(--pb-font-mono)", fontSize: 12, color: "var(--pb-ink-faint)", marginLeft: 8 }}>{r.event}</code>
                </div>
                <div style={{ fontSize: 13, color: "var(--pb-ink-2)", marginTop: 2 }}>{r.detail}</div>
              </div>
              <span style={{ fontFamily: "var(--pb-font-mono)", fontSize: 13, color: "var(--pb-link)", flex: "none", paddingTop: 2 }}>{r.purchase}</span>
              <span style={{ fontSize: 12, color: "var(--pb-ink-faint)", width: 76, flex: "none", textAlign: "right", paddingTop: 2 }}>{r.actor}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

Object.assign(window, { AuditLog });
