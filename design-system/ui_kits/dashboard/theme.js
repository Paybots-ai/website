/* Shared dashboard style atoms — defined once, used by every screen.
   Keeps the eyebrow label and table cells on one voice (RISD: define once). */
window.PB_STYLE = {
  // Eyebrow / section label — single source of truth (matches --pb-text-eyebrow / --pb-tracking-eyebrow).
  eyebrow: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "var(--pb-ink-2)",
    fontWeight: 500,
    margin: "0 0 8px",
  },
  // Table header cell.
  th: {
    textAlign: "left",
    padding: "12px 16px",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "var(--pb-ink-2)",
    fontWeight: 500,
    background: "var(--pb-surface-muted)",
    borderBottom: "1px solid var(--pb-border)",
  },
  // Table body cell.
  td: {
    padding: "12px 16px",
    fontSize: 14,
    borderBottom: "1px solid var(--pb-border)",
    verticalAlign: "middle",
  },
};
