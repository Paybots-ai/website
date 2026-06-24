import React from "react";

/**
 * VerdictBadge — the decision verdict for the result page / decision-detail
 * header. Shares the StatusPill family look (soft tinted fill, decision-color
 * text, thin colored outline, dot) but bigger and louder, with an optional mono
 * subtitle (a percentage or reason code). `variant` switches to solid/outline.
 */
const V = {
  approve: { fg: "var(--pb-decision-approve)", bg: "var(--pb-decision-approve-bg)", label: "Approved" },
  reject: { fg: "var(--pb-decision-reject)", bg: "var(--pb-decision-reject-bg)", label: "Rejected" },
};
const ALIAS = {
  approved: "approve", auto_approve: "approve",
  denied: "reject", rejected: "reject",
};

export function VerdictBadge({ decision = "approve", subtitle = "", variant = "soft", style = {}, ...rest }) {
  const key = ALIAS[String(decision).toLowerCase()] || String(decision).toLowerCase();
  const t = V[key] || V.approve;

  let skin;
  if (variant === "solid") skin = { background: t.fg, color: "#fff", border: "1px solid " + t.fg, dot: "#fff" };
  else if (variant === "outline") skin = { background: "transparent", color: t.fg, border: "1.5px solid " + t.fg, dot: t.fg };
  else skin = { background: t.bg, color: t.fg, border: "1px solid " + t.fg, dot: t.fg }; // soft (default)

  const wrap = {
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    padding: "8px 16px",
    borderRadius: "var(--pb-radius-pill)",
    fontFamily: "var(--pb-font-sans)",
    background: skin.background,
    color: skin.color,
    border: skin.border,
    ...style,
  };
  return (
    <div style={wrap} {...rest}>
      <span style={{ width: 9, height: 9, borderRadius: "50%", background: skin.dot, flex: "none" }} />
      <span style={{ fontWeight: 600, fontSize: 16 }}>{t.label}</span>
      {subtitle && (
        <span style={{ opacity: variant === "solid" ? 0.9 : 0.75, fontFamily: "var(--pb-font-mono)", fontSize: 13 }}>· {subtitle}</span>
      )}
    </div>
  );
}
