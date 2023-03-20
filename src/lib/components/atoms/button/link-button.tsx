import { ReactElement } from "react";
import { LinkButtonProps } from "./button.type";
import { clsx } from "clsx";
import Link from "next/link";

export function LinkButton({ size = "base", target = "_self", fullWidth, icon, children, className, ...props }: LinkButtonProps): ReactElement {
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

      "w-full": fullWidth,
      "w-fit": !fullWidth
    },
    className
  );

  return <Link className={styles} target={target} {...props}>{children} {icon}</Link>;
}