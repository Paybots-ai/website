import React from "react";

/**
 * Status pill — a tinted, rounded label for a decision/status. Soft background
 * + saturated text + matching border. The dashboard's ledger & detail use these.
 */
const PILL = {
  approve: { bg: "var(--pb-green-bg)", fg: "var(--pb-green)", bd: "var(--pb-green)", label: "Approved" },
  reject: { bg: "var(--pb-red-bg)", fg: "var(--pb-red)", bd: "var(--pb-red)", label: "Rejected" },
  working: { bg: "var(--pb-amber-bg)", fg: "var(--pb-amber)", bd: "var(--pb-amber)", label: "Working" },
  neutral: { bg: "var(--pb-surface-muted)", fg: "var(--pb-text-muted)", bd: "var(--pb-border)", label: "" },
};

const ALIAS = {
  approved: "approve", auto_approve: "approve", captured: "approve",
  denied: "reject", rejected: "reject", failed: "reject",
  pending: "working", in_progress: "working",
};

export function StatusPill({ status = "neutral", dot = true, size = "md", children, style = {}, ...rest }) {
  const key = ALIAS[String(status).toLowerCase()] || String(status).toLowerCase();
  const t = PILL[key] || PILL.neutral;
  const sz = size === "sm" ? { padding: "2px 8px", fontSize: 11, dotSize: 6 } : { padding: "3px 10px", fontSize: 12, dotSize: 7 };
  const pill = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: sz.padding,
    borderRadius: "var(--pb-radius-pill)",
    fontFamily: "var(--pb-font-sans)",
    fontSize: sz.fontSize,
    fontWeight: 600,
    lineHeight: 1.4,
    whiteSpace: "nowrap",
    background: t.bg,
    color: t.fg,
    border: `1px solid ${t.bd}`,
    ...style,
  };
  return (
    <span style={pill} {...rest}>
      {dot && <span style={{ width: sz.dotSize, height: sz.dotSize, borderRadius: "50%", background: t.fg, flex: "none" }} />}
      {children || t.label}
    </span>
  );
}
