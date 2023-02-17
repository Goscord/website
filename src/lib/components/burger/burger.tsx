import { clsx } from "clsx";
import { ReactElement } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BurgerProps } from "./burger.type";

export function Burger({ open, setOpen, className, ...props }: BurgerProps): ReactElement {
  const Tag = open ? FiX : FiMenu;

  return (
    <span className={clsx(
      "p-4 rounded cursor-pointer",
      "transition-colors duration-300",
      "hover:bg-primary-1",
      className
    )}>
      <Tag
        className={clsx("text-3xl text-white")}
        onClick={() => setOpen(state => !state)}
        {...props}
      />
    </span>
  );
}