import React from "react";

/**
 * The decision atom: a small filled dot colored by underwriting decision.
 * `decision` accepts the canonical values and common synonyms.
 */
const DECISION_COLOR = {
  approve: "var(--pb-decision-approve)",
  approved: "var(--pb-decision-approve)",
  auto_approve: "var(--pb-decision-approve)",
  reject: "var(--pb-decision-reject)",
  rejected: "var(--pb-decision-reject)",
  denied: "var(--pb-decision-reject)",
  working: "var(--pb-status-working)",
  offline: "var(--pb-ink-faint)",
};

export function DecisionDot({ decision = "approve", size = 9, pulse = false, style = {}, ...rest }) {
  const dot = {
    display: "inline-block",
    width: size,
    height: size,
    borderRadius: "50%",
    flex: "none",
    background: DECISION_COLOR[String(decision).toLowerCase()] || "var(--pb-ink-faint)",
    animation: pulse ? "pb-pulse 1.2s ease-in-out infinite" : "none",
    ...style,
  };
  return (
    <>
      <style>{"@keyframes pb-pulse{0%,100%{opacity:1}50%{opacity:.35}}"}</style>
      <span style={dot} {...rest} />
    </>
  );
}

export { DECISION_COLOR };
