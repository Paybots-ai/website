import * as React from "react";

export type Decision =
  | "approve" | "approved" | "auto_approve"
  | "reject" | "rejected" | "denied"
  | "working"
  | "offline";

export interface DecisionDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  decision?: Decision;
  size?: number;
  /** Soft opacity pulse — use for an in-progress / "working" state. */
  pulse?: boolean;
}

/** The recurring status atom — a small dot colored by underwriting decision. */
export function DecisionDot(props: DecisionDotProps): JSX.Element;
export const DECISION_COLOR: Record<string, string>;
