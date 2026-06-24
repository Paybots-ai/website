import * as React from "react";

export type TrustBadgeVariant =
  | "pill-soft"   // tinted pill, thin brand border (system pill language)
  | "solid"       // deep-brand-blue bar, reversed
  | "outline"     // transparent, brand border
  | "ghost"       // no container, muted footer style
  | "seal"        // circular certification stamp
  | "shield"      // shield mark + benefit subline
  | "lock"        // "Purchases protected by Paybots"
  | "verified"    // green check guarantee
  | "mono"        // dashed monospace certification tag
  | "card";       // stacked headline + benefit subline

export interface TrustBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Which of the ten treatments to render. Default "pill-soft". */
  variant?: TrustBadgeVariant;
  /** Primary label. Default "Underwritten by Paybots". */
  label?: string;
  /** Benefit subline (used by shield/card variants). Default "You never carry the risk." */
  subline?: string;
}

/**
 * Consumer-facing "Underwritten by Paybots" trust badge — the acquisition lever
 * a partner shows its own end users. Ten variants via one `variant` prop.
 * @startingPoint section="Underwriting" subtitle="Underwritten-by-Paybots trust badge — 10 variants" viewport="700x420"
 */
export function TrustBadge(props: TrustBadgeProps): JSX.Element;
