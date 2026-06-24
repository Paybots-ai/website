import * as React from "react";

export interface FieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  /** Small uppercase label rendered above the input. */
  label?: string;
  /** Helper text below the input. */
  hint?: string;
  /** Inline leading adornment (e.g. a "$"). */
  prefix?: React.ReactNode;
  /** System size scale. */
  size?: "sm" | "md" | "lg";
}

/** Bordered "filled field" with a label above the input; blue focus ring. */
export function Field(props: FieldProps): JSX.Element;
