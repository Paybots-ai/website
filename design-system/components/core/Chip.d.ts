import * as React from "react";

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selected state — soft blue tint, link-blue text, no border. */
  active?: boolean;
  /** System size scale. */
  size?: "sm" | "md";
  children?: React.ReactNode;
}

/** Pill filter chip — used in the dashboard's decision filter row. */
export function Chip(props: ChipProps): JSX.Element;
