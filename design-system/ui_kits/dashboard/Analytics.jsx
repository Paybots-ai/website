/* Analytics screen — KPI tiles, decisions over time, approve/reject mix,
   by-business breakdown, top rejection reasons, score distribution.
   Charts are plain CSS/SVG (data viz, no images). */
const { Card } = window.PaybotsDesignSystem_e75ed6;

function dailySeries() {
  const out = [];
  let seed = 42;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  for (let i = 0; i < 30; i++) {
    const total = 110 + Math.round(rnd() * 90);
    const reject = Math.round(total * (0.09 + rnd() * 0.11));
    out.push({ total, approve: total - reject, reject });
  }
  return out;
}

function KpiTile({ k }) {
  const valColor = k.tone === "reject" ? "var(--pb-red)" : k.tone === "approve" ? "var(--pb-green)" : "var(--pb-text)";
  return (
    <div style={{ background: "var(--pb-surface)", border: "1px solid var(--pb-border)", borderRadius: "var(--pb-radius)", padding: "14px 16px" }}>
      <div style={{ ...window.PB_STYLE.eyebrow, margin: 0, marginBottom: 8 }}>{k.label}</div>
      <div style={{ fontSize: 26, fontWeight: 500, color: valColor, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.01em" }}>{k.value}</div>
      <div style={{ fontSize: 13, color: "var(--pb-ink-2)", marginTop: 4 }}>{k.sub}</div>
    </div>
  );
}

function DecisionsOverTime() {
  const data = dailySeries();
  const max = Math.max(...data.map((d) => d.total));
  const H = 150;
  return (
    <Card title="Decisions over time" actions={<Legend />}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: H }}>
        {data.map((d, i) => {
          const aH = (d.approve / max) * H;
          const dH = (d.reject / max) * H;
          return (
            <div key={i} title={`${d.total} decisions · ${d.reject} rejected`} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: H }}>
              <div style={{ height: dH, background: "var(--pb-red)", borderRadius: "2px 2px 0 0" }} />
              <div style={{ height: aH, background: "var(--pb-green)" }} />
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--pb-ink-faint)", marginTop: 8, fontFamily: "var(--pb-font-mono)" }}>
        <span>30 days ago</span><span>today</span>
      </div>
    </Card>
  );
}

function Legend() {
  const dot = (c) => ({ width: 8, height: 8, borderRadius: 2, background: c, display: "inline-block", marginRight: 5 });
  return (
    <div style={{ display: "flex", gap: 14, fontSize: 12, color: "var(--pb-ink-2)" }}>
      <span><i style={dot("var(--pb-green)")} />Approved</span>
      <span><i style={dot("var(--pb-red)")} />Rejected</span>
    </div>
  );
}

function DecisionMix() {
  const approve = 86;
  const ring = `conic-gradient(var(--pb-green) 0 ${approve}%, var(--pb-red) ${approve}% 100%)`;
  return (
    <Card title="Decision mix">
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <div style={{ position: "relative", width: 130, height: 130, borderRadius: "50%", background: ring, flex: "none" }}>
          <div style={{ position: "absolute", inset: 22, background: "var(--pb-surface)", borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 500 }}>86%</div>
            <div style={{ fontSize: 11, color: "var(--pb-ink-2)" }}>approved</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <MixRow color="var(--pb-green)" label="Approved" value="4,143" pct="86.0%" />
          <MixRow color="var(--pb-red)" label="Rejected" value="677" pct="14.0%" />
        </div>
      </div>
    </Card>
  );
}

function MixRow({ color, label, value, pct }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ width: 10, height: 10, borderRadius: 2, background: color, flex: "none" }} />
      <span style={{ fontSize: 14, minWidth: 76 }}>{label}</span>
      <span style={{ fontFamily: "var(--pb-font-mono)", fontSize: 13, color: "var(--pb-ink-2)", fontVariantNumeric: "tabular-nums" }}>{value} · {pct}</span>
    </div>
  );
}

function ByBusiness({ rows }) {
  const th = { ...window.PB_STYLE.th, padding: "10px 14px" };
  const td = { ...window.PB_STYLE.td, padding: "12px 14px", verticalAlign: "middle" };
  const num = { ...td, textAlign: "right", fontFamily: "var(--pb-font-mono)", fontVariantNumeric: "tabular-nums" };
  return (
    <Card title="By business" bodyStyle={{ padding: 0 }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr>
          <th style={th}>Business</th><th style={{ ...th, textAlign: "right" }}>Decisions</th>
          <th style={{ ...th, textAlign: "right" }}>Approve rate</th><th style={{ ...th, textAlign: "right" }}>Sealed GMV</th>
          <th style={{ ...th, textAlign: "right" }}>Loss ratio</th><th style={{ ...th, textAlign: "right" }}>Fee</th>
        </tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td style={td}>{r.name}<span style={{ color: "var(--pb-ink-2)", marginLeft: 6, fontSize: 13 }}>· {r.vertical}</span></td>
              <td style={num}>{r.decisions.toLocaleString()}</td>
              <td style={num}>{Math.round(r.approve * 100)}%</td>
              <td style={num}>{r.gmv}</td>
              <td style={num}>{r.loss}</td>
              <td style={num}>{r.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

function RejectionReasons({ reasons }) {
  const max = Math.max(...reasons.map((r) => r.pct));
  return (
    <Card title="Top rejection reasons">
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {reasons.map((r) => (
          <div key={r.code} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <code style={{ fontFamily: "var(--pb-font-mono)", fontSize: 12, color: "var(--pb-ink-2)", width: 130, flex: "none" }}>{r.code}</code>
            <div style={{ flex: 1, height: 10, background: "var(--pb-surface-muted)", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: (r.pct / max) * 100 + "%", height: "100%", background: "var(--pb-red)", borderRadius: 999 }} />
            </div>
            <span style={{ fontFamily: "var(--pb-font-mono)", fontSize: 13, color: "var(--pb-ink-2)", width: 34, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{r.pct}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Analytics() {
  const a = window.PB_ANALYTICS;
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 500 }}>Analytics</h1>
        <p style={{ margin: 0, fontSize: 14, color: "var(--pb-ink-2)" }}>Underwriting performance across the agent businesses · {a.window}. Read-only.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 16 }}>
        {a.kpis.map((k) => <KpiTile key={k.label} k={k} />)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 16, marginBottom: 16 }}>
        <DecisionsOverTime />
        <DecisionMix />
      </div>
      <div style={{ marginBottom: 16 }}><ByBusiness rows={a.byBusiness} /></div>
      <div><RejectionReasons reasons={a.reasons} /></div>
    </div>
  );
}

Object.assign(window, { Analytics });
