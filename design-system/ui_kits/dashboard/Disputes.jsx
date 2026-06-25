/* Disputes screen — sealed purchases a buyer later contested. Paybots stands
   behind approved (sealed) transactions; this is where coverage plays out. */
const { Card, StatusPill } = window.PaybotsDesignSystem_e75ed6;

const DISPUTE_STATUS = {
  open: { tone: "working", label: "Open" },
  covered: { tone: "approve", label: "Covered & paid" },
  recovered: { tone: "approve", label: "Recovered" },
  upheld: { tone: "neutral", label: "Upheld — no fault" },
};

function Disputes() {
  const d = window.PB_DISPUTES;
  const th = window.PB_STYLE.th;
  const td = { ...window.PB_STYLE.td, verticalAlign: "top" };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 500 }}>Disputes</h1>
        <p style={{ margin: 0, fontSize: 14, color: "var(--pb-ink-2)" }}>Sealed purchases a buyer contested. Paybots stands behind approved transactions — <em>no seal, no coverage</em>. Read-only.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 16 }}>
        {d.summary.map((s) => (
          <div key={s.label} style={{ background: "var(--pb-surface)", border: "1px solid var(--pb-border)", borderRadius: "var(--pb-radius)", padding: "14px 16px" }}>
            <div style={{ ...window.PB_STYLE.eyebrow, margin: 0, marginBottom: 8 }}>{s.label}</div>
            <div style={{ fontSize: 24, fontWeight: 500, fontVariantNumeric: "tabular-nums", color: s.tone === "danger" ? "var(--pb-decision-reject)" : "var(--pb-text)" }}>{s.value}</div>
            {s.sub && <div style={{ fontSize: 13, color: "var(--pb-ink-2)", marginTop: 4 }}>{s.sub}</div>}
          </div>
        ))}
      </div>

      <Card title="Open & recent disputes" bodyStyle={{ padding: 0 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr>
            <th style={th}>When</th><th style={th}>Business</th><th style={th}>Merchant</th>
            <th style={{ ...th, textAlign: "right" }}>Amount</th><th style={th}>Seal</th><th style={th}>Status</th>
          </tr></thead>
          <tbody>
            {d.rows.map((r) => {
              const s = DISPUTE_STATUS[r.status] || DISPUTE_STATUS.open;
              return (
                <tr key={r.id}>
                  <td style={{ ...td, fontFamily: "var(--pb-font-mono)", fontSize: 13, color: "var(--pb-ink-2)", whiteSpace: "nowrap" }}>{r.ts}</td>
                  <td style={td}>{r.business}<div style={{ fontSize: 13, color: "var(--pb-ink-2)", marginTop: 3, maxWidth: 280 }}>{r.reason}</div></td>
                  <td style={{ ...td, color: "var(--pb-ink-2)" }}>{r.merchant}</td>
                  <td style={{ ...td, textAlign: "right", fontFamily: "var(--pb-font-mono)", fontVariantNumeric: "tabular-nums" }}>{window.money(r.amount)}</td>
                  <td style={{ ...td, fontFamily: "var(--pb-font-mono)", fontSize: 13, color: "var(--pb-link)" }}>{r.seal}</td>
                  <td style={td}><StatusPill status={s.tone}>{s.label}</StatusPill></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

Object.assign(window, { Disputes });
