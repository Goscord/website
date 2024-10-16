import { clsx } from "clsx";
import type { ReactElement } from "react";
import type { TextProps } from "./text.type";

export function Text({ children, type, color, size, className, ...props }: TextProps): ReactElement {
  const style = clsx(className, {
    // Text color:
    "text-white": !color || color === "white",
    "text-black": color === "black",
    "text-gray": color === "gray",
    "text-gray-2": color === "gray-2",
    "text-gray-3": color === "gray-3",
    "text-primary": color === "primary",

    // Font size:
    "text-sm": size === "small",
    "text-base": !size || size === "base",
    "text-lg": size === "large",
    "text-xl": size === "xl",
    "text-2xl": size === "2xl",
    "text-3xl": size === "3xl"
  });

  const Tag = type ?? "p";

  return <Tag className={style} {...props}>{children}</Tag>;
}