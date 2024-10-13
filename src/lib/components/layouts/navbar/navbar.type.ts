import type { AnchorHTMLAttributes } from "react";

export type NavbarItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  href: string;
  external?: boolean;
}