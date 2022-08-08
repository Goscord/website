import clsx from "clsx";
import { ParamHTMLAttributes, PropsWithChildren, ReactElement } from "react";

interface TextProps extends ParamHTMLAttributes<HTMLParagraphElement> {
  type?: "p" | "h3" | "h2" | "h1";
  color?: "black" | "white" | "gray" | "primary" | "error";
  size?: "base" | "large" | "xl" | "2xl" | "3xl";
  fontWeight?: "bold" | "normal" | "medium" | "thin";
}

export default function Text({ 
  children, type = "p", color = "black", size = "base", fontWeight = "normal", className, ...props 
}: PropsWithChildren<TextProps>) : ReactElement {
  const style = clsx({
    // Text color :
    "text-black": color === "black",
    "text-white": color === "white",
    "text-black-light": color === "gray",

    // Font size :
    "text-base": size === "base",
    "text-lg": size === "large",
    "text-xl": size === "xl",
    "text-2xl": size === "2xl",
    "text-3xl": size === "3xl",

    "font-bold": fontWeight === "bold",
    "font-normal": fontWeight === "normal",
    "font-medium": fontWeight === "medium",
    "font-thin": fontWeight === "thin",
  });

  const Tag = type;

  return <Tag className={`${style} ${className ?? ""}`} {...props}>{children}</Tag>;
}