import { HTMLAttributes, PropsWithChildren } from "react";

export type TextProps = PropsWithChildren & HTMLAttributes<HTMLParagraphElement> & {
  type?: "p" | "h3" | "h2" | "h1";
  color?: "white" | "black" | "gray" | "gray-2" | "primary";
  size?: "small" | "base" | "large" | "xl" | "2xl" | "3xl";
}