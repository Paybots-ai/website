import * as React from "react";

export interface ToggleProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** System size scale. */
  size?: "sm" | "md";
  /** Optional trailing label. */
  label?: string;
  style?: React.CSSProperties;
}

/** On/off switch — brand-blue track when on. Used for demo flags & rule enables. */
export function Toggle(props: ToggleProps): JSX.Element;
