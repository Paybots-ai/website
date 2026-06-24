import React from "react";

/**
 * Flat white container — the default Paybots surface. 1px border, 12px radius,
 * no shadow. Optional padding and an optional header (title + actions).
 */
export function Card({
  title = null,
  actions = null,
  padded = true,
  style = {},
  bodyStyle = {},
  children,
  ...rest
}) {
  const card = {
    background: "var(--pb-surface-card)",
    border: "1px solid var(--pb-border)",
    borderRadius: "var(--pb-radius)",
    overflow: "hidden",
    ...style,
  };
  const head = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "var(--pb-space-3)",
    padding: "14px 16px",
    borderBottom: "1px solid var(--pb-border)",
  };
  const titleStyle = {
    margin: 0,
    fontFamily: "var(--pb-font-sans)",
    fontSize: "var(--pb-text-h3)",
    fontWeight: "var(--pb-weight-medium)",
    color: "var(--pb-text)",
    whiteSpace: "nowrap",
  };
  const body = { padding: padded ? "16px" : 0, ...bodyStyle };

  return (
    <div style={card} {...rest}>
      {(title || actions) && (
        <div style={head}>
          {title ? <h3 style={titleStyle}>{title}</h3> : <span />}
          {actions}
        </div>
      )}
      <div style={body}>{children}</div>
    </div>
  );
}
