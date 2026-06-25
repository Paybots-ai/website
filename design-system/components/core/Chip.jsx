import React from "react";

/**
 * Filter chip — pill, used in the dashboard's decision filter row. Active state
 * uses the soft blue tint with link-blue text. Shares the system `size` scale
 * (sm/md) and the uniform focus ring.
 */
const CHIP_SIZE = {
  sm: { minHeight: 28, padding: "4px 12px", fontSize: 12 },
  md: { minHeight: 32, padding: "6px 14px", fontSize: 13 },
};

export function Chip({ active = false, size = "md", onClick, style = {}, children, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--pb-space-1)",
    borderRadius: "var(--pb-radius-pill)",
    fontFamily: "var(--pb-font-sans)",
    fontWeight: "var(--pb-weight-medium)",
    cursor: "pointer",
    outline: "none",
    transition: "background var(--pb-dur) var(--pb-ease), color var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)",
    background: active ? "var(--pb-accent-soft)" : "var(--pb-surface)",
    border: active ? "1px solid transparent" : "1px solid var(--pb-border)",
    color: active ? "var(--pb-link)" : "var(--pb-text-muted)",
    boxShadow: focus ? "var(--pb-ring)" : "none",
    ...(CHIP_SIZE[size] || CHIP_SIZE.md),
    ...style,
  };
  return (
    <button type="button" onClick={onClick} aria-pressed={active} style={base}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}>
      {children}
    </button>
  );
}
