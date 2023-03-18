import { ReactElement } from "react";
import { ButtonProps } from "./button.type";
import { clsx } from "clsx";

export function Button({ size = "base", icon, fullWidth = false, className, children, ...props }: ButtonProps): ReactElement {
  const styles = clsx(
    "rounded shadow",
    "border-2 border-transparent",
    "flex items-center justify-center gap-2",
    "bg-primary text-white",
    "hover:brightness-110 active:scale-95 transition-transform",
    {
      "py-1 px-3 text-base": size === "small",
      "py-2 px-5 text-base": size === "base",
      "py-3 px-8 text-lg": size === "large",

      "w-full": fullWidth
    },
    className
  );

  return <button className={styles} {...props}>{children} {icon}</button>;
}