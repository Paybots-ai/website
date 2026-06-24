/* Demo controls — the operator panel that toggles what each storefront demo
   shows. Mirrors paybots/surfaces/ui/demo.html (demo-flags-ui). Local state. */
const { Card, Toggle, StatusPill } = window.PaybotsDesignSystem_e75ed6;

const FLAG_GROUPS = [
  {
    group: "Storefront surfaces",
    flags: [
      { key: "showTryOn", label: "Virtual try-on (Studio)", sub: "Show the avatar try-on entry on product pages.", on: true },
      { key: "showRecs", label: "Recommendations", sub: "Show 'you may also like' rails.", on: true },
      { key: "showExternalCheckout", label: "External Stripe checkout", sub: "Open a Stripe tab per item instead of in-storefront.", on: false },
    ],
  },
  {
    group: "Underwriting behavior",
    flags: [
      { key: "forceReject", label: "Force reject next checkout", sub: "Demo a rejection regardless of cart.", on: false },
      { key: "slowMode", label: "Slow-motion underwriting", sub: "Stretch the check animation for presentations.", on: false },
      { key: "showSeal", label: "Show signed seal", sub: "Reveal the ES256 attestation on approve.", on: true },
    ],
  },
  {
    group: "Operator dashboard",
    flags: [
      { key: "showAnalytics", label: "Analytics tab", sub: "Expose the analytics screen in the nav.", on: true },
      { key: "showDisputes", label: "Disputes tab", sub: "Expose the disputes screen in the nav.", on: true },
    ],
  },
];

function DemoControls() {
  const [state, setState] = React.useState(() => {
    const o = {};
    FLAG_GROUPS.forEach((g) => g.flags.forEach((f) => (o[f.key] = f.on)));
    return o;
  });
  const onCount = Object.values(state).filter(Boolean).length;
  const total = Object.keys(state).length;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12 }}>
        <div>
          <h1 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 500 }}>Demo controls</h1>
          <p style={{ margin: 0, fontSize: 14, color: "var(--pb-ink-2)" }}>Toggle what each page shows in the storefront demos. Internal tooling.</p>
        </div>
        <StatusPill status="neutral">{onCount} / {total} on</StatusPill>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {FLAG_GROUPS.map((g) => (
          <Card key={g.group} title={g.group}>
            {g.flags.map((f, i) => (
              <div key={f.key} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "13px 0", borderTop: i === 0 ? "none" : "1px solid var(--pb-surface-muted)" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{f.label}</div>
                  <div style={{ fontSize: 13, color: "var(--pb-ink-2)", lineHeight: 1.45 }}>{f.sub}</div>
                </div>
                <div style={{ paddingTop: 2 }}>
                  <Toggle checked={state[f.key]} onChange={(v) => setState((p) => ({ ...p, [f.key]: v }))} />
                </div>
              </div>
            ))}
          </Card>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { DemoControls });
