import { ButtonHTMLAttributes, ReactElement } from "react";

export type ButtonSize = "small" | "base" | "large";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactElement;
  size?: ButtonSize;
  fullWidth?: boolean;
}