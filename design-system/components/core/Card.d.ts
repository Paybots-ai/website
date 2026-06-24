import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional header title (rendered as an h3). */
  title?: React.ReactNode;
  /** Optional header actions, right-aligned next to the title. */
  actions?: React.ReactNode;
  /** Pad the body (default true). Set false for tables / flush content. */
  padded?: boolean;
  bodyStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

/** Flat white container — the default Paybots surface (border, 12px radius, no shadow). */
export function Card(props: CardProps): JSX.Element;
