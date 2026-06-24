import React from "react";

/**
 * "Underwritten by Paybots" — the consumer-facing trust badge a partner shows
 * its own end users. Ten variants, one prop. The badge is the acquisition lever
 * ("your users never carry the risk") turned into a visible product feature.
 *
 * All variants reference design-system tokens; the bullet ("P") mark is drawn
 * inline so the badge is fully self-contained (no asset dependency).
 */

function PMark({ size = 16, bg = "var(--pb-brand-deep)", fg = "#fff", radius = 4 }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: radius,
        background: bg,
        color: fg,
        fontWeight: 700,
        fontStyle: "italic",
        fontFamily: "var(--pb-font-sans)",
        fontSize: Math.round(size * 0.66),
        lineHeight: 1,
        textIndent: "-0.07em",
        flex: "none",
      }}
    >
      P
    </span>
  );
}

const LABEL = "Underwritten by Paybots";

export function TrustBadge({
  variant = "pill-soft",
  label = LABEL,
  subline = "You never carry the risk.",
  style = {},
  ...rest
}) {
  const base = { fontFamily: "var(--pb-font-sans)", boxSizing: "border-box" };

  // 1 — Soft pill (system pill language: tinted fill, thin brand border)
  if (variant === "pill-soft") {
    return (
      <span style={{ ...base, display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px 6px 8px", borderRadius: "var(--pb-radius-pill)", background: "var(--pb-accent-soft)", border: "1px solid var(--pb-primary)", color: "var(--pb-blue-link)", fontSize: 13, fontWeight: 600, ...style }} {...rest}>
        <PMark size={18} /> {label}
      </span>
    );
  }

  // 2 — Solid bar (deep brand blue, reversed)
  if (variant === "solid") {
    return (
      <span style={{ ...base, display: "inline-flex", alignItems: "center", gap: 9, padding: "8px 16px 8px 10px", borderRadius: "var(--pb-radius-pill)", background: "var(--pb-brand-deep)", color: "#fff", fontSize: 13, fontWeight: 600, ...style }} {...rest}>
        <PMark size={18} bg="rgba(255,255,255,0.18)" fg="#fff" /> {label}
      </span>
    );
  }

  // 3 — Outline pill (transparent, brand border)
  if (variant === "outline") {
    return (
      <span style={{ ...base, display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px 6px 8px", borderRadius: "var(--pb-radius-pill)", background: "transparent", border: "1.5px solid var(--pb-primary)", color: "var(--pb-primary)", fontSize: 13, fontWeight: 600, ...style }} {...rest}>
        <PMark size={18} /> {label}
      </span>
    );
  }

  // 4 — Ghost / footer (no container, muted)
  if (variant === "ghost") {
    return (
      <span style={{ ...base, display: "inline-flex", alignItems: "center", gap: 7, color: "var(--pb-text-muted)", fontSize: 12.5, fontWeight: 500, ...style }} {...rest}>
        <PMark size={15} radius={3} /> {label}
      </span>
    );
  }

  // 5 — Stamp / seal (circular certification mark)
  if (variant === "seal") {
    return (
      <span style={{ ...base, position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 92, height: 92, borderRadius: "50%", background: "var(--pb-surface)", border: "2px solid var(--pb-brand-deep)", color: "var(--pb-brand-deep)", textAlign: "center", ...style }} {...rest}>
        <span style={{ position: "absolute", top: 11, fontSize: 8.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>Underwritten</span>
        <PMark size={30} radius={7} />
        <span style={{ position: "absolute", bottom: 12, fontSize: 8.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>by Paybots</span>
      </span>
    );
  }

  // 6 — Shield (protection metaphor)
  if (variant === "shield") {
    const shield = "polygon(50% 0, 100% 16%, 100% 60%, 50% 100%, 0 60%, 0 16%)";
    return (
      <span style={{ ...base, display: "inline-flex", alignItems: "center", gap: 11, padding: "8px 16px 8px 10px", borderRadius: "var(--pb-radius)", background: "var(--pb-surface)", border: "1px solid var(--pb-border)", boxShadow: "var(--pb-elevate-flat)", ...style }} {...rest}>
        <span aria-hidden="true" style={{ width: 26, height: 28, clipPath: shield, background: "var(--pb-brand-deep)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontStyle: "italic", fontSize: 14, flex: "none" }}>P</span>
        <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1.25 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--pb-text)" }}>{label}</span>
          <span style={{ fontSize: 11.5, color: "var(--pb-text-muted)" }}>{subline}</span>
        </span>
      </span>
    );
  }

  // 7 — Lock / secured
  if (variant === "lock") {
    return (
      <span style={{ ...base, display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: "var(--pb-radius-pill)", background: "var(--pb-surface-muted)", border: "1px solid var(--pb-border)", color: "var(--pb-text-muted)", fontSize: 12.5, fontWeight: 600, ...style }} {...rest}>
        <span aria-hidden="true" style={{ fontSize: 13, color: "var(--pb-brand-deep)" }}>&#128274;</span>
        Purchases protected by <PMark size={14} radius={3} /> <span style={{ color: "var(--pb-text)" }}>Paybots</span>
      </span>
    );
  }

  // 8 — Verified check (green guarantee)
  if (variant === "verified") {
    return (
      <span style={{ ...base, display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px 6px 8px", borderRadius: "var(--pb-radius-pill)", background: "var(--pb-decision-approve-bg)", border: "1px solid var(--pb-decision-approve)", color: "var(--pb-decision-approve)", fontSize: 13, fontWeight: 600, ...style }} {...rest}>
        <span aria-hidden="true" style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--pb-decision-approve)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, flex: "none" }}>&#10003;</span>
        Every purchase verified by Paybots
      </span>
    );
  }

  // 9 — Mono certification tag
  if (variant === "mono") {
    return (
      <span style={{ ...base, display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: "var(--pb-radius-sm)", background: "var(--pb-surface)", border: "1px dashed var(--pb-border-strong)", color: "var(--pb-text-muted)", fontFamily: "var(--pb-font-mono)", fontSize: 11.5, letterSpacing: "0.02em", ...style }} {...rest}>
        <PMark size={14} radius={3} /> underwritten · paybots.com
      </span>
    );
  }

  // 10 — Stacked card (headline + benefit subline + mark)
  if (variant === "card") {
    return (
      <span style={{ ...base, display: "inline-flex", alignItems: "center", gap: 12, padding: "14px 18px", borderRadius: "var(--pb-radius)", background: "var(--pb-surface)", border: "1px solid var(--pb-border)", maxWidth: 320, ...style }} {...rest}>
        <PMark size={32} radius={8} />
        <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1.35 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--pb-text)" }}>{label}</span>
          <span style={{ fontSize: 12.5, color: "var(--pb-text-muted)" }}>{subline}</span>
        </span>
      </span>
    );
  }

  return null;
}
