import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement } from "react";

export type ButtonSize = "small" | "base" | "large";

type BaseButtonProps = {
  size?: ButtonSize;
  icon?: ReactElement;
  fullWidth?: boolean;
}

export type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export type LinkButtonProps = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "href"> & {
  href: string;
  target?: "_blank" | "_self";
}