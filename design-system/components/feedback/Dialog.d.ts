import * as React from "react";

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mount the dialog (default true). Render conditionally for transitions. */
  open?: boolean;
  title?: string;
  /** Close handler — wired to backdrop click, Escape, and the ✕ button. */
  onClose?: () => void;
  /** Footer node, typically action buttons (right-aligned). */
  footer?: React.ReactNode;
  /** Panel width in px (default 460). */
  width?: number;
  children?: React.ReactNode;
}

/** Centered modal over a scrim — floats with shadow; backdrop/Escape to close. */
export function Dialog(props: DialogProps): JSX.Element | null;
