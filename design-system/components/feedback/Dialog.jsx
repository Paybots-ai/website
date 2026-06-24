import React from "react";

/**
 * Dialog — a centered modal over a scrim. Floats (shadow + radius). Optional
 * title, footer actions, and backdrop/Escape close. Render conditionally on `open`.
 */
export function Dialog({ open = true, title = "", onClose, footer = null, width = 460, children, ...rest }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape" && onClose) onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const scrim = {
    position: "fixed", inset: 0, background: "rgba(32,33,36,0.5)",
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: 24, zIndex: 1000,
  };
  const panel = {
    width, maxWidth: "100%", maxHeight: "calc(100vh - 48px)", overflow: "auto",
    background: "var(--pb-surface)", borderRadius: "var(--pb-radius)",
    boxShadow: "var(--pb-elevate-float)", fontFamily: "var(--pb-font-sans)",
    display: "flex", flexDirection: "column",
  };
  const head = {
    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
    padding: "16px 20px", borderBottom: "1px solid var(--pb-border)",
  };
  const foot = {
    display: "flex", justifyContent: "flex-end", gap: 10,
    padding: "14px 20px", borderTop: "1px solid var(--pb-border)",
  };

  return (
    <div style={scrim} onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div role="dialog" aria-modal="true" style={panel} {...rest}>
        <style>{".pb-dialog-close:focus-visible{outline:none;box-shadow:var(--pb-shadow-focus);}"}</style>
        {(title || onClose) && (
          <div style={head}>
            <h2 style={{ margin: 0, fontSize: "var(--pb-text-h2)", fontWeight: "var(--pb-weight-medium)", color: "var(--pb-text)" }}>{title}</h2>
            {onClose && <button onClick={onClose} aria-label="Close" className="pb-dialog-close" style={{ border: 0, background: "none", color: "var(--pb-ink-faint)", cursor: "pointer", fontSize: 18, lineHeight: 1, padding: 2, borderRadius: 4 }}>✕</button>}
          </div>
        )}
        <div style={{ padding: 20, fontSize: "var(--pb-text-body)", color: "var(--pb-text)", lineHeight: 1.5 }}>{children}</div>
        {footer && <div style={foot}>{footer}</div>}
      </div>
    </div>
  );
}
