import * as React from "react";

export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Decision/status — canonical or synonym (approved, needs_approval, reject, captured…). */
  status?: string;
  /** Show the leading colored dot (default true). */
  dot?: boolean;
  /** System size scale. */
  size?: "sm" | "md";
  /** Override the label; defaults to the decision's standard label. */
  children?: React.ReactNode;
}

/**
 * Tinted status pill for ledger rows & detail headers — soft bg, saturated text.
 * @startingPoint section="Underwriting" subtitle="Decision pills & verdict badges" viewport="700x150"
 */
export function StatusPill(props: StatusPillProps): JSX.Element;
