import * as React from "react";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** success (green) · error (red) · info (blue). */
  tone?: "success" | "error" | "info";
  title?: string;
  message?: string;
  /** Show a dismiss button when provided. */
  onClose?: () => void;
}

/** Floating transient confirmation with a decision-colored accent and shadow. */
export function Toast(props: ToastProps): JSX.Element;
