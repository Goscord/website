import { ButtonHTMLAttributes, ReactElement } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactElement;
  size?: "small" | "base" | "large";
  fullWidth?: boolean;
}