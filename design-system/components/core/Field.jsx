import React from "react";

/**
 * Bordered text field with a small uppercase label sitting above the input —
 * the Paybots / Google-style "filled field" pattern. Focus draws a blue ring.
 * Shares the system `size` scale (sm/md/lg).
 */
const FIELD_SIZE = {
  sm: { padding: "6px 10px", fontSize: 14 },
  md: { padding: "8px 12px", fontSize: 15 },
  lg: { padding: "10px 14px", fontSize: 16 },
};

export function Field({
  label = "",
  hint = "",
  prefix = null,
  type = "text",
  size = "md",
  value,
  onChange,
  placeholder = "",
  style = {},
  ...rest
}) {
  const sz = FIELD_SIZE[size] || FIELD_SIZE.md;
  const wrap = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: sz.padding,
    border: "1px solid var(--pb-border)",
    borderRadius: "var(--pb-radius-sm)",
    background: "var(--pb-surface)",
    transition: "border-color var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)",
    ...style,
  };
  const labelStyle = {
    fontSize: "var(--pb-text-eyebrow)",
    fontWeight: "var(--pb-weight-medium)",
    letterSpacing: "var(--pb-tracking-eyebrow)",
    textTransform: "uppercase",
    color: "var(--pb-text-muted)",
  };
  const inputRow = { display: "flex", alignItems: "center", gap: 6 };
  const input = {
    width: "100%",
    border: 0,
    outline: 0,
    background: "transparent",
    color: "var(--pb-text)",
    fontFamily: "var(--pb-font-sans)",
    fontSize: sz.fontSize,
    padding: 0,
  };

  const [focused, setFocused] = React.useState(false);
  const focusStyle = focused
    ? { borderColor: "var(--pb-focus-ring)", boxShadow: "var(--pb-shadow-focus)" }
    : null;

  return (
    <label style={{ ...wrap, ...focusStyle }}>
      {label && <span style={labelStyle}>{label}</span>}
      <span style={inputRow}>
        {prefix && <span style={{ color: "var(--pb-text-muted)" }}>{prefix}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={input}
          {...rest}
        />
      </span>
      {hint && (
        <span style={{ fontSize: 11, color: "var(--pb-text-faint)" }}>{hint}</span>
      )}
    </label>
  );
}
