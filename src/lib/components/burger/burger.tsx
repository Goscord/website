import { clsx } from "clsx";
import { ReactElement } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BurgerProps } from "./burger.type";

export function Burger({ open, setOpen, className, ...props }: BurgerProps): ReactElement {
  const Tag = open ? FiX : FiMenu;

  return (
    <Tag
      className={clsx("text-3xl text-white", className)}
      onClick={() => setOpen(state => !state)}
      {...props}
    />
  );
}