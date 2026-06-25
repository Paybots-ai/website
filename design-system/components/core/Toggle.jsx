import React from "react";

/**
 * On/off switch (toggle). Track fills brand blue when on. Shares the system
 * `size` scale (sm/md) and the uniform focus ring. Used for demo flags and
 * spending-rule enables.
 */
const TOGGLE_SIZE = {
  sm: { w: 32, h: 18, knob: 14, travel: 14 },
  md: { w: 36, h: 20, knob: 16, travel: 18 },
};

export function Toggle({ checked = false, onChange, disabled = false, size = "md", label = "", style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const s = TOGGLE_SIZE[size] || TOGGLE_SIZE.md;
  const track = {
    position: "relative",
    width: s.w,
    height: s.h,
    borderRadius: "var(--pb-radius-pill)",
    background: checked ? "var(--pb-primary)" : "var(--pb-border-strong)",
    transition: "background var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)",
    flex: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    outline: "none",
    boxShadow: focus && !disabled ? "var(--pb-ring)" : "none",
  };
  const knob = {
    position: "absolute",
    top: 2,
    left: checked ? s.travel : 2,
    width: s.knob,
    height: s.knob,
    borderRadius: "50%",
    background: "var(--pb-surface)",
    boxShadow: "var(--pb-shadow-sm)",
    transition: "left var(--pb-dur) var(--pb-ease)",
  };
  const wrap = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--pb-space-3)",
    fontFamily: "var(--pb-font-sans)",
    fontSize: "var(--pb-text-body)",
    color: "var(--pb-text)",
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    ...style,
  };
  return (
    <label style={wrap} {...rest}>
      <span
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && onChange && onChange(!checked)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onKeyDown={(e) => {
          if (!disabled && (e.key === " " || e.key === "Enter")) {
            e.preventDefault();
            onChange && onChange(!checked);
          }
        }}
        style={track}
      >
        <span style={knob} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
