/* Ledger screen — filter chips + the underwriting decisions table. */
const { Chip, StatusPill } = window.PaybotsDesignSystem_e75ed6;

const FILTERS = [
  { id: "", label: "All" },
  { id: "approve", label: "Approved" },
  { id: "reject", label: "Rejected" },
];

function money(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function Ledger({ records, business, onOpen }) {
  const [filter, setFilter] = React.useState("");
  const rows = records.filter(
    (r) => (!business || r.business === business) && (!filter || r.decision === filter)
  );

  const th = window.PB_STYLE.th;
  const td = window.PB_STYLE.td;

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <h1 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 500 }}>Underwriting ledger</h1>
        <p style={{ margin: 0, fontSize: 14, color: "var(--pb-ink-2)", maxWidth: 640 }}>
          Every decision Paybots stood behind — approved or rejected — across the agent businesses. Read-only.
        </p>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "20px 0 16px" }}>
        {FILTERS.map((f) => (
          <Chip key={f.id} active={filter === f.id} onClick={() => setFilter(f.id)}>{f.label}</Chip>
        ))}
      </div>
      <div style={{ background: "var(--pb-surface)", border: "1px solid var(--pb-border)", borderRadius: "var(--pb-radius)", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={th}>When</th>
              <th style={th}>Business</th>
              <th style={th}>Merchant</th>
              <th style={th}>Amount</th>
              <th style={th}>Decision</th>
              <th style={th}></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <Row key={r.id} r={r} td={td} onOpen={onOpen} />
            ))}
            {rows.length === 0 && (
              <tr><td style={{ ...td, textAlign: "center", color: "var(--pb-ink-2)", padding: 32 }} colSpan={6}>No decisions match this filter.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Row({ r, td, onOpen }) {
  const [hover, setHover] = React.useState(false);
  return (
    <tr
      onClick={() => onOpen(r.id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ cursor: "pointer", background: hover ? "var(--pb-surface-muted)" : "transparent" }}
    >
      <td style={{ ...td, fontFamily: "var(--pb-font-mono)", fontSize: 13, color: "var(--pb-ink-2)", whiteSpace: "nowrap" }}>{r.ts}</td>
      <td style={td}>{r.businessLabel}</td>
      <td style={{ ...td, color: "var(--pb-ink-2)" }}>{r.merchant}</td>
      <td style={{ ...td, fontFamily: "var(--pb-font-mono)", fontVariantNumeric: "tabular-nums" }}>{money(r.amount)}</td>
      <td style={td}><StatusPill status={r.decision} /></td>
      <td style={{ ...td, textAlign: "right", color: "var(--pb-ink-faint)" }}>→</td>
    </tr>
  );
}

Object.assign(window, { Ledger, money });
