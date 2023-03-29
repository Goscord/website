import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { ReactElement, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BurgerProps } from "./burger.type";

export function Burger({ open, setOpen, className, ...props }: BurgerProps): ReactElement {
  // Close the burger menu when the user navigates to a new page:
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  // Render the burger menu:
  const Tag = open ? FiX : FiMenu;

  return (
    <span
      id="burger"
      className={clsx(
        "p-4 rounded cursor-pointer",
        "transition-colors duration-300",
        "hover:bg-primary-2",
        className
      )}
      onClick={() => setOpen(state => !state)}
    >
      <Tag
        className={clsx("text-3xl text-white")}
        {...props}
      />
    </span>
  );
}