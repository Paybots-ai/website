import React from "react";

/**
 * Tabs — the underlined segmented nav used in the app bar and section headers.
 * Active tab gets link-blue text + a 2px underline; quiet hover otherwise.
 * Controlled: pass `value` and `onChange`.
 */
export function Tabs({ tabs = [], value, onChange, style = {}, ...rest }) {
  const [focusKey, setFocusKey] = React.useState(null);
  const bar = {
    display: "flex",
    gap: 24,
    borderBottom: "1px solid var(--pb-border)",
    fontFamily: "var(--pb-font-sans)",
    ...style,
  };
  return (
    <div role="tablist" style={bar} {...rest}>
      {tabs.map((t) => {
        const key = typeof t === "string" ? t : t.id;
        const label = typeof t === "string" ? t : t.label;
        const badge = typeof t === "string" ? null : t.badge;
        const active = key === value;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(key)}
            onFocus={() => setFocusKey(key)}
            onBlur={() => setFocusKey(null)}
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              border: 0,
              background: "none",
              cursor: "pointer",
              padding: "12px 4px",
              fontSize: 14,
              fontWeight: "var(--pb-weight-medium)",
              fontFamily: "inherit",
              color: active ? "var(--pb-link)" : "var(--pb-text-muted)",
              outline: "none",
              whiteSpace: "nowrap",
              borderRadius: "var(--pb-radius-sm)",
              boxShadow: focusKey === key ? "var(--pb-ring)" : "none",
              transition: "color var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)",
            }}
          >
            {label}
            {badge != null && (
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 16, height: 16, background: "var(--pb-decision-reject)", color: "#fff", fontSize: 10, fontWeight: 600, borderRadius: 999, padding: "0 5px", lineHeight: 1 }}>{badge}</span>
            )}
            {active && <span style={{ position: "absolute", left: 0, right: 0, bottom: -1, height: 2, background: "var(--pb-link)", borderRadius: "1px 1px 0 0" }} />}
          </button>
        );
      })}
    </div>
  );
}
