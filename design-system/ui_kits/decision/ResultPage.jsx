/* Consumer-facing underwriting result, redesigned per the approved mock, with a
   live "checkout with Paybots" sequence: the three checks resolve one-by-one
   (Price -> Catalog -> Intent), then the verdict, item and receipt fade up.
   Motion stays quiet per the system: fades + the working pulse, no bounce. */
const { StatusPill } = window.PaybotsDesignSystem_e75ed6;

const PAPER = "var(--pb-surface)";
const PAPER_BORDER = "var(--pb-border)";

const SCENARIOS = {
  approve: {
    pill: "approve",
    verdict: "Approved",
    verdictColor: "var(--pb-green)",
    badge: { label: "Purchased", tone: "approve" },
    decisionBody: "Paybots approved the purchase — your agent completed the order.",
    callout: {
      kind: "info",
      title: "Substitution verified by Paybots",
      text: "Rodeo Champ Socks (Navy) wasn’t available, so your agent substituted Rodeo Champ Socks (Black) within the flexibility you gave it — Paybots verified the swap against your chat and approved.",
    },
    request: { time: "11:15 AM", text: "Order a pair of Rodeo Champ socks in navy — if navy’s out, any dark color works." },
    checks: [
      { n: 1, title: "Price", desc: "Checked 5 rules — within your transaction limits.", link: "5 rules", pass: true },
      { n: 2, title: "Catalog", desc: "Double-checked the product exists and is in inventory.", pass: true },
      { n: 3, title: "Intent", desc: "Triple-checked the swap matches what you asked for.", pass: true },
    ],
    banner: { label: "Approved" },
    product: {
      eyebrow: "Rodeo Champ Socks (Black)",
      name: "Rodeo Champ Socks",
      meta: "Accessories · Size ONE SIZE",
      match: "Matched your search for rodeo, champ, socks · size ONE SIZE.",
    },
    summary: { rows: [["Subtotal", "$25"], ["Taxes & fees", "Included"]], total: "$25" },
  },
  reject: {
    pill: "reject",
    verdict: "Rejected",
    verdictColor: "var(--pb-red)",
    badge: { label: "Not charged", tone: "reject" },
    decisionBody: "Paybots blocked the purchase — your agent picked the wrong item. Nothing was charged.",
    callout: {
      kind: "reject",
      title: "Why Paybots rejected this",
      text: "You asked for 48-port switches; the agent selected the 24-port model. That’s the wrong item, so Paybots rejected it before any charge.",
    },
    request: { time: "11:15 AM", text: "Order four 48-port managed switches for the new rack." },
    checks: [
      { n: 1, title: "Price", desc: "Checked 5 rules — within your transaction limits.", link: "5 rules", pass: true },
      { n: 2, title: "Catalog", desc: "Double-checked the product exists and is in inventory.", pass: true },
      { n: 3, title: "Intent", desc: "The agent ordered a 24-port switch — you asked for 48-port.", pass: false },
    ],
    banner: { label: "Rejected" },
    product: {
      eyebrow: "Boltworth BX-24 (24-port)",
      name: "Boltworth BX-24 managed switch",
      meta: "Networking · Qty 4",
      match: "Does not match your request for 48-port switches.",
      blocked: true,
    },
    summary: { rows: [["Subtotal", "$4,920"], ["Status", "Blocked — not charged"]], total: "$0.00" },
  },
};

const KEYFRAMES = `
@keyframes pb-rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
@keyframes pb-pulse { 0%,100% { opacity: 1; } 50% { opacity: .3; } }
@keyframes pb-pop { 0% { transform: scale(.6); opacity: .4; } 100% { transform: scale(1); opacity: 1; } }
@keyframes pb-spin { to { transform: rotate(360deg); } }
.pb-reveal { animation: pb-rise .4s var(--pb-ease, cubic-bezier(.2,0,0,1)) both; }
`;

function rise(delay) {
  return { animation: `pb-rise .4s var(--pb-ease, cubic-bezier(.2,0,0,1)) both`, animationDelay: (delay || 0) + "ms" };
}

function PaybotsDecisionCard({ s, done }) {
  return (
    <div style={{ background: PAPER, border: "1px solid " + PAPER_BORDER, borderRadius: "var(--pb-radius)", padding: 22 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--pb-ink-2)", marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}>
            <img src="../../assets/paybots-mark.svg" width="13" height="13" alt="" style={{ borderRadius: 3 }} /> Paybots decision
          </div>
          {done
            ? <div style={{ fontSize: 22, fontWeight: 500, color: s.verdictColor, letterSpacing: "-0.01em" }}>{s.verdict}</div>
            : <div style={{ fontSize: 22, fontWeight: 500, color: "var(--pb-amber)", letterSpacing: "-0.01em", display: "flex", alignItems: "center", gap: 9 }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "var(--pb-amber)", animation: "pb-pulse 1.1s ease-in-out infinite" }} />
                Underwriting…
              </div>}
        </div>
        {done && <span style={{ ...rise(0) }}><StatusPill status={s.badge.tone}>{s.badge.label}</StatusPill></span>}
      </div>
      {done && (
        <div className="pb-reveal">
          <p style={{ margin: "12px 0 0", fontSize: 14, lineHeight: 1.5, color: "var(--pb-text)" }}>{s.decisionBody}</p>
          <Callout c={s.callout} />
        </div>
      )}
    </div>
  );
}

function Callout({ c }) {
  const info = c.kind === "info";
  const bg = info ? "var(--pb-blue-soft)" : "var(--pb-red-bg)";
  const accent = info ? "var(--pb-blue-hover)" : "var(--pb-red)";
  return (
    <div style={{ marginTop: 14, background: bg, border: "1px solid " + accent, borderRadius: "var(--pb-radius-sm)", padding: "12px 14px" }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: accent, marginBottom: 4 }}>{c.title}</div>
      <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--pb-text)" }}>{c.text}</div>
    </div>
  );
}

function RequestCard({ r }) {
  return (
    <div style={{ background: "var(--pb-surface-hover)", borderRadius: "var(--pb-radius)", padding: "20px 22px" }}>
      <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Requested {r.time}</div>
      <div style={{ fontSize: 17, fontStyle: "italic", lineHeight: 1.45, color: "var(--pb-text)" }}>{r.text}</div>
    </div>
  );
}

function CheckRow({ c, status }) {
  const dim = status === "pending";
  const working = status === "working";
  const fail = status === "fail";
  const pass = status === "pass";
  // Speak the decision-color language: passed = soft green + thin green outline,
  // failed = soft red + thin red outline, working = amber, pending = neutral.
  const circleBg = fail ? "var(--pb-red-bg)" : working ? "var(--pb-amber-bg)" : pass ? "var(--pb-green-bg)" : "var(--pb-surface-muted)";
  const circleBorder = fail ? "1px solid var(--pb-red)" : pass ? "1px solid var(--pb-green)" : "1px solid transparent";
  const numColor = fail ? "var(--pb-red)" : pass ? "var(--pb-green)" : "var(--pb-ink)";

  let glyph;
  if (working) glyph = <span style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--pb-amber)", animation: "pb-pulse 1.1s ease-in-out infinite" }} />;
  else if (fail) glyph = <span style={{ animation: "pb-pop .25s var(--pb-ease) both" }}>✕</span>;
  else if (pass) glyph = <span style={{ animation: "pb-pop .25s var(--pb-ease) both" }}>✓</span>;
  else glyph = c.n;

  const descColor = working ? "var(--pb-amber)" : fail ? "var(--pb-red)" : "var(--pb-ink-2)";
  const descText = working ? "Checking…" : c.desc;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, background: "var(--pb-surface)", border: "1px solid var(--pb-border)", borderRadius: "var(--pb-radius)", padding: "16px 18px", opacity: dim ? 0.45 : 1, transition: "opacity .3s var(--pb-ease)" }}>
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: circleBg, border: circleBorder, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", fontSize: 17, fontWeight: 600, color: numColor, transition: "background .3s var(--pb-ease), border-color .3s var(--pb-ease)" }}>
        {glyph}
      </div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 2 }}>{c.title}</div>
        <div style={{ fontSize: 13, color: descColor, lineHeight: 1.4, transition: "color .3s var(--pb-ease)" }}>
          {!working && c.link
            ? <>Checked <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "inherit", textDecoration: "underline" }}>{c.link}</a>{c.desc.replace("Checked " + c.link, "")}</>
            : descText}
        </div>
      </div>
    </div>
  );
}

function ApprovedProduct({ s }) {
  const isApprove = s.pill === "approve";
  const bannerBg = isApprove ? "var(--pb-green-bg)" : "var(--pb-red-bg)";
  const bannerFg = isApprove ? "var(--pb-green)" : "var(--pb-red)";
  return (
    <div>
      <div style={{ background: bannerBg, color: bannerFg, border: "1px solid " + bannerFg, borderBottom: "none", borderRadius: "var(--pb-radius) var(--pb-radius) 0 0", padding: "14px 20px", fontSize: 18, fontWeight: 600, display: "flex", alignItems: "center", gap: 9 }}>
        <span aria-hidden="true">{isApprove ? "✓" : "✕"}</span> {s.banner.label}
      </div>
      <div style={{ background: PAPER, border: "1px solid " + PAPER_BORDER, borderTop: "none", borderRadius: "0 0 var(--pb-radius) var(--pb-radius)", padding: 18, display: "flex", gap: 16, alignItems: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "var(--pb-radius-sm)", background: "var(--pb-surface-muted)", border: "1px solid " + PAPER_BORDER, flex: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--pb-ink-2)", fontSize: 10, textAlign: "center", opacity: s.product.blocked ? 0.55 : 1 }}>
          photo
        </div>
        <div>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--pb-ink-2)", marginBottom: 3 }}>{s.product.eyebrow}</div>
          <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 2 }}>{s.product.name}</div>
          <div style={{ fontSize: 13, color: "var(--pb-ink-2)", marginBottom: 6 }}>{s.product.meta}</div>
          <div style={{ fontSize: 13, color: s.product.blocked ? "var(--pb-red)" : "var(--pb-ink-2)", lineHeight: 1.4 }}>{s.product.match}</div>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ sm }) {
  return (
    <div style={{ background: PAPER, border: "1px solid " + PAPER_BORDER, borderRadius: "var(--pb-radius)", padding: "18px 22px" }}>
      <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>Summary</div>
      {sm.rows.map((r, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, padding: "6px 0", color: "var(--pb-ink-2)" }}>
          <span>{r[0]}</span><span style={{ fontVariantNumeric: "tabular-nums" }}>{r[1]}</span>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 600, padding: "12px 0 0", marginTop: 6, borderTop: "1px solid " + PAPER_BORDER }}>
        <span>Total</span><span style={{ fontVariantNumeric: "tabular-nums" }}>{sm.total}</span>
      </div>
    </div>
  );
}

function ResultPage({ which, onPick }) {
  const s = SCENARIOS[which];
  const [statuses, setStatuses] = React.useState(s.checks.map(() => "pending"));
  const [done, setDone] = React.useState(false);
  const [runKey, setRunKey] = React.useState(0);

  React.useEffect(() => {
    const checks = s.checks;
    const firstFail = checks.findIndex((c) => !c.pass);
    const lastIdx = firstFail === -1 ? checks.length - 1 : firstFail;
    setStatuses(checks.map(() => "pending"));
    setDone(false);
    const timers = [];
    const base = 450, per = 820, work = 620;
    for (let i = 0; i <= lastIdx; i++) {
      timers.push(setTimeout(() => setStatuses((p) => p.map((st, j) => (j === i ? "working" : st))), base + i * per));
      timers.push(setTimeout(() => setStatuses((p) => p.map((st, j) => (j === i ? (checks[i].pass ? "pass" : "fail") : st))), base + i * per + work));
    }
    timers.push(setTimeout(() => setDone(true), base + lastIdx * per + work + 480));
    return () => timers.forEach(clearTimeout);
  }, [which, runKey]);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px 80px" }}>
      <style>{KEYFRAMES}</style>
      <div style={{ height: 24 }}></div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <RequestCard r={s.request} />
        <PaybotsDecisionCard s={s} done={done} />
        {s.checks.map((c, i) => <CheckRow key={c.n} c={c} status={statuses[i]} />)}
        {done && <div className="pb-reveal" style={rise(60)}><ApprovedProduct s={s} /></div>}
        {done && <div style={rise(160)}><SummaryCard sm={s.summary} /></div>}
      </div>
    </div>
  );
}

Object.assign(window, { ResultPage });
