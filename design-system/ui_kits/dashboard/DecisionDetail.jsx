/* Decision detail — verdict header, score, evidence (transcript + line items),
   reason codes, and the signed seal. Mirrors the dashboard's detail view. */
const { VerdictBadge, StatusPill, Card, Button } = window.PaybotsDesignSystem_e75ed6;

function DecisionDetail({ r, onBack }) {
  const eyebrow = window.PB_STYLE.eyebrow;

  return (
    <div>
      <button onClick={onBack} style={{ background: "none", border: 0, color: "var(--pb-link)", fontSize: 14, cursor: "pointer", padding: 0, marginBottom: 16, fontFamily: "var(--pb-font-sans)" }}>← Ledger</button>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <VerdictBadge decision={r.decision} subtitle={Math.round(r.score * 100) + "%"} />
            <div>
              <div style={{ fontSize: 19, fontWeight: 500 }}>{window.money(r.amount)}</div>
              <div style={{ fontSize: 13, color: "var(--pb-ink-2)" }}>{r.businessLabel} → {r.merchant} · {r.rail}</div>
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "var(--pb-font-mono)", fontSize: 13, color: "var(--pb-ink-2)", textAlign: "right" }}>
          <div>{r.id}</div>
          <div>{r.ts}</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
        <Card title="Automated decision logic">
          <p style={{ margin: "0 0 16px", fontSize: 14, lineHeight: 1.5 }}>{r.reason}</p>
          <div style={{ marginTop: 16 }}>
            <p style={eyebrow}>Reason codes</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {r.reasonCodes.map((c) => (
                <code key={c} style={{ fontFamily: "var(--pb-font-mono)", fontSize: 12, background: "var(--pb-surface-muted)", border: "1px solid var(--pb-border)", borderRadius: "var(--pb-radius-sm)", padding: "2px 7px", color: "var(--pb-ink-2)" }}>{c}</code>
              ))}
            </div>
          </div>
        </Card>

        <Card title="Line items">
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {r.items.map((it, i) => (
              <li key={i} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "9px 0", borderBottom: i < r.items.length - 1 ? "1px solid var(--pb-surface-muted)" : 0 }}>
                <span style={{ fontSize: 14 }}>{it.qty > 1 ? it.qty + "× " : ""}{it.name}</span>
                <span style={{ fontFamily: "var(--pb-font-mono)", fontSize: 13, fontVariantNumeric: "tabular-nums", color: "var(--pb-ink-2)", whiteSpace: "nowrap" }}>{window.money(it.price)}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Conversation evidence" bodyStyle={{ padding: 0 }}>
          <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            {r.transcript.map((m, i) => {
              const isUser = m.role === "user";
              return (
                <div key={i} style={{ alignSelf: isUser ? "flex-end" : "flex-start", maxWidth: "82%" }}>
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--pb-ink-faint)", marginBottom: 3, textAlign: isUser ? "right" : "left" }}>{isUser ? "User" : "Agent"}</div>
                  <div style={{ padding: "9px 13px", borderRadius: "var(--pb-radius)", fontSize: 14, lineHeight: 1.45, background: isUser ? "var(--pb-primary)" : "var(--pb-surface)", color: isUser ? "#fff" : "var(--pb-text)", border: isUser ? "none" : "1px solid var(--pb-border)" }}>{m.content}</div>
                </div>
              );
            })}
          </div>
        </Card>

        <Seal r={r} />
      </div>
    </div>
  );
}

function Seal({ r }) {
  const approved = r.decision === "approve";
  return (
    <Card title="Underwriting seal">
      {approved ? (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <StatusPill status="approve">Sealed · backed</StatusPill>
          </div>
          <p style={{ margin: "0 0 12px", fontSize: 13, color: "var(--pb-ink-2)", lineHeight: 1.5 }}>
            A signed ES256 attestation rides along with the order. Any party verifies it offline against Paybots' published JWKS — no call to us in the loop.
          </p>
          <pre style={{ margin: 0, background: "var(--pb-surface-muted)", border: "1px solid var(--pb-border)", borderRadius: "var(--pb-radius-sm)", padding: "12px 14px", fontFamily: "var(--pb-font-mono)", fontSize: 12, lineHeight: 1.6, color: "var(--pb-ink-2)", overflowX: "auto" }}>{`{
  "underwriter": "paybots.com",
  "version": "v0",
  "purchase_hash": "sha256:9c1f…",
  "decision": "approve",
  "issued_at": "${r.ts.replace(" ", "T")}Z",
  "signature": "eyJhbGci…"
}`}</pre>
        </div>
      ) : (
        <div>
          <StatusPill status={r.decision} />
          <p style={{ margin: "12px 0 0", fontSize: 13, color: "var(--pb-ink-2)", lineHeight: 1.5 }}>
            No seal issued. Returned as reject — the business blocks the purchase and explains. No seal, no coverage.
          </p>
        </div>
      )}
    </Card>
  );
}

Object.assign(window, { DecisionDetail });
