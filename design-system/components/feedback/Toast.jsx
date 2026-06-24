import React from "react";

/**
 * Toast — a transient confirmation that floats above the UI. Flat hairline border
 * + float shadow; the colored circular badge carries the tone (no left-border
 * accent). Use for "Payment captured", "Rule saved", etc.
 */
const TONE = {
  success: { accent: "var(--pb-decision-approve)", glyph: "✓" },
  error: { accent: "var(--pb-decision-reject)", glyph: "✕" },
  info: { accent: "var(--pb-primary)", glyph: "i" },
};

export function Toast({ tone = "success", title = "", message = "", onClose, style = {}, ...rest }) {
  const t = TONE[tone] || TONE.info;
  const wrap = {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    minWidth: 280,
    maxWidth: 420,
    padding: "12px 14px",
    background: "var(--pb-surface)",
    border: "1px solid var(--pb-border)",
    borderRadius: "var(--pb-radius)",
    boxShadow: "var(--pb-elevate-float)",
    fontFamily: "var(--pb-font-sans)",
    ...style,
  };
  const badge = {
    width: 20, height: 20, borderRadius: "50%", flex: "none",
    display: "flex", alignItems: "center", justifyContent: "center",
    background: t.accent, color: "#fff", fontSize: 12, fontWeight: 700, marginTop: 1,
  };
  return (
    <div role="status" style={wrap} {...rest}>
      <span style={badge}>{t.glyph}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pb-text)" }}>{title}</div>}
        {message && <div style={{ fontSize: 13, color: "var(--pb-text-muted)", marginTop: title ? 2 : 0, lineHeight: 1.45 }}>{message}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss" style={{ border: 0, background: "none", color: "var(--pb-ink-faint)", cursor: "pointer", fontSize: 16, lineHeight: 1, padding: 2, marginTop: -1 }}>✕</button>
      )}
    </div>
  );
}
