import React from "react";

/**
 * Paybots primary action button. Pill-radius, DM Sans Medium, quiet hover.
 * Variants map to the product's button roles; `approve`/`reject` are the
 * operator decision actions and borrow the semantic decision colors.
 */
export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: { minHeight: 32, padding: "0 16px", fontSize: 13 },
    md: { minHeight: 40, padding: "0 24px", fontSize: 14 },
    lg: { minHeight: 48, padding: "0 28px", fontSize: 15 },
  };

  const variants = {
    primary: {
      background: "var(--pb-primary)",
      color: "#fff",
      borderColor: "var(--pb-primary)",
    },
    ghost: {
      background: "var(--pb-surface)",
      color: "var(--pb-text)",
      borderColor: "var(--pb-border-strong)",
    },
    neutral: {
      background: "var(--pb-surface-hover)",
      color: "var(--pb-text)",
      borderColor: "transparent",
    },
    approve: {
      background: "var(--pb-decision-approve)",
      color: "#fff",
      borderColor: "var(--pb-decision-approve)",
    },
    reject: {
      background: "var(--pb-surface)",
      color: "var(--pb-decision-reject)",
      borderColor: "var(--pb-decision-reject)",
    },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    fontFamily: "var(--pb-font-sans)",
    fontWeight: "var(--pb-weight-medium)",
    borderRadius: "var(--pb-radius-pill)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--pb-dur) var(--pb-ease), border-color var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)",
    whiteSpace: "nowrap",
    outline: "none",
    boxShadow: focus && !disabled ? "var(--pb-ring)" : "none",
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  return (
    <button type={type} disabled={disabled} style={base}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
