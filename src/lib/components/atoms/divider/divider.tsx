import type { ReactElement } from "react";
import { DividerProps } from "./divider.type";
import { clsx } from "clsx";

export function Divider({ className, ...props }: DividerProps): ReactElement {
  return <hr className={clsx("border-t-0 border-b-2 border-b-gray-2", className)} {...props} />;
}