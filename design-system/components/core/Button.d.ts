import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual role. `approve`/`reject` are the operator decision actions. */
  variant?: "primary" | "ghost" | "neutral" | "approve" | "reject";
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Paybots action button — pill radius, DM Sans Medium, Material-quiet hover.
 * @startingPoint section="Core" subtitle="Buttons in every variant & size" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
