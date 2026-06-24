import * as React from "react";

export interface TabItem {
  id: string;
  label: string;
  /** Optional count badge (e.g. open disputes). */
  badge?: string | number;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Tab list — strings or {id,label,badge} objects. */
  tabs: (string | TabItem)[];
  /** Active tab id. */
  value: string;
  onChange?: (id: string) => void;
}

/** Underlined segmented nav — link-blue active tab with a 2px underline. */
export function Tabs(props: TabsProps): JSX.Element;
