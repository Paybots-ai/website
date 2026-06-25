import * as React from "react";

export interface VerdictBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** approve / reject (or synonyms). */
  decision?: string;
  /** Optional mono subtitle, e.g. a score or reason code. */
  subtitle?: string;
  /** Treatment. Default "soft" (tinted fill + colored text + thin outline). */
  variant?: "soft" | "solid" | "outline";
}

/** Large solid decision verdict for result pages & detail headers — louder than StatusPill. */
export function VerdictBadge(props: VerdictBadgeProps): JSX.Element;
