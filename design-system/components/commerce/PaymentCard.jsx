import React from "react";

/**
 * PaymentCard — a saved card chip with brand, masked PAN, and a status.
 * `selected` draws the blue tinted/selected treatment; `status` shows freeze/etc.
 */
const BRAND_LABEL = { visa: "VISA", mastercard: "Mastercard", amex: "AMEX", generic: "Card" };

export function PaymentCard({
  brand = "visa",
  last4 = "0000",
  label = "",
  exp = "",
  status = "active",
  selected = false,
  onSelect,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const frozen = status === "frozen" || status === "revoked";
  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 16px",
    borderRadius: "var(--pb-radius-sm)",
    border: "1px solid " + (selected ? "var(--pb-primary)" : "var(--pb-border)"),
    background: selected ? "var(--pb-accent-soft)" : "var(--pb-surface)",
    cursor: onSelect ? "pointer" : "default",
    fontFamily: "var(--pb-font-sans)",
    opacity: frozen ? 0.7 : 1,
    outline: "none",
    boxShadow: focus && onSelect ? "var(--pb-ring)" : "none",
    transition: "border-color var(--pb-dur) var(--pb-ease), background var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)",
    ...style,
  };
  const chip = {
    width: 44, height: 30, borderRadius: 5, flex: "none",
    background: "linear-gradient(135deg, var(--pb-ink) 0%, var(--pb-ink-2) 100%)",
    color: "#fff", fontSize: 9, fontWeight: 700, letterSpacing: "0.04em",
    display: "flex", alignItems: "center", justifyContent: "center",
  };
  return (
    <div onClick={onSelect} role={onSelect ? "button" : undefined} tabIndex={onSelect ? 0 : undefined}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={wrap} {...rest}>
      <span style={chip}>{BRAND_LABEL[brand] || BRAND_LABEL.generic}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--pb-text)" }}>{label || (BRAND_LABEL[brand] || "Card")}</span>
          <span style={{ fontFamily: "var(--pb-font-mono)", fontSize: 13, color: "var(--pb-text-muted)" }}>···· {last4}</span>
        </div>
        {exp && <div style={{ fontSize: 12, color: "var(--pb-ink-faint)", marginTop: 2 }}>Exp {exp}</div>}
      </div>
      {frozen && (
        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--pb-text-muted)", background: "var(--pb-surface-muted)", border: "1px solid var(--pb-border)", borderRadius: "var(--pb-radius-pill)", padding: "2px 9px" }}>Frozen</span>
      )}
      {selected && !frozen && <span style={{ color: "var(--pb-primary)", fontSize: 16 }}>✓</span>}
    </div>
  );
}
