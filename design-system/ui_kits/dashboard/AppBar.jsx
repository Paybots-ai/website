/* Paybots dashboard app bar — wordmark + nav + business selector + backend status. */
const { DecisionDot, Tabs } = window.PaybotsDesignSystem_e75ed6;

const dashStyles = {
  bar: { position: "sticky", top: 0, zIndex: 90, background: "var(--pb-surface)", borderBottom: "1px solid var(--pb-border)" },
  inner: { display: "flex", alignItems: "center", gap: 24, maxWidth: "var(--pb-page-max)", margin: "0 auto", minHeight: 64, padding: "0 24px" },
  word: { fontFamily: "var(--pb-font-display)", fontSize: 21, fontWeight: 700, letterSpacing: "-0.4px", color: "var(--pb-ink)", textDecoration: "none", flexShrink: 0 },
  nav: { flex: "1 1 auto", display: "flex", alignItems: "center", justifyContent: "center" },
  actions: { display: "inline-flex", alignItems: "center", gap: 14, flexShrink: 0 },
};

const NAV_TABS = [
  { id: "ledger", label: "Ledger" },
  { id: "analytics", label: "Analytics" },
  { id: "audit", label: "Audit" },
  { id: "disputes", label: "Disputes", badge: 2 },
  { id: "rules", label: "Settings" },
  { id: "demo", label: "Demo" },
];

function AppBar({ page, onNav, business, businesses, onBusiness, online = true }) {
  const active = page === "detail" ? "ledger" : page;
  return (
    <header style={dashStyles.bar}>
      <div style={dashStyles.inner}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav("ledger"); }} style={dashStyles.word}>
          Pay<span style={{ color: "var(--pb-blue)" }}>bots</span>
        </a>
        <nav style={dashStyles.nav}>
          <Tabs value={active} onChange={onNav} tabs={NAV_TABS} style={{ border: "none", gap: 22 }} />
        </nav>
        <div style={dashStyles.actions}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--pb-ink-2)", whiteSpace: "nowrap" }}>
            <DecisionDot decision={online ? "approve" : "offline"} /> {online ? "Backend online" : "Backend offline"}
          </span>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { AppBar, dashStyles });
