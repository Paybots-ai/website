import * as React from "react";

export interface PaymentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  brand?: "visa" | "mastercard" | "amex" | "generic";
  /** Last four digits (rendered masked: ···· 4921). */
  last4?: string;
  /** Display name, e.g. "Travel card". */
  label?: string;
  /** Expiry string, e.g. "08/27". */
  exp?: string;
  status?: "active" | "frozen" | "revoked";
  selected?: boolean;
  onSelect?: () => void;
}

/** Saved-card chip: brand mark, masked PAN, optional freeze/selected state. */
export function PaymentCard(props: PaymentCardProps): JSX.Element;
