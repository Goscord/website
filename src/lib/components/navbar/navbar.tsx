import { ReactElement, useState } from "react";
import { navbarPages } from "#/lib/configs/navbar";
import { NavbarItem } from "./navbav-item";
import { Theme } from "#/lib/components/theme";
import { GitHubStars } from "#/lib/components/github-stars";
import { Burger } from "#/lib/components/burger";
import { clsx } from "clsx";

export function Navbar(): ReactElement {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <nav className={clsx(
      "bg-primary h-96 max-h-20",
      "flex items-center justify-between",
      "px-16 sm:px-3",
      "transition-[max-height] duration-300",
      {
        "max-h-96 flex-col justify-evenly gap-5": burgerOpen
      }
    )}>
      <GitHubStars />

      <div className={clsx(
        "flex items-center",
        {
          "gap-10 lg:hidden": !burgerOpen,
          "place-content-end w-full mr-10": !burgerOpen,
          "flex-col gap-2": burgerOpen
        }
      )}>
        {navbarPages.map(page => (
          <NavbarItem key={page.label} label={page.label} href={page.href} external={page.external} />
        ))}

      </div>

      <div className="flex items-center gap-2">
        <Theme />
        <Burger open={burgerOpen} setOpen={setBurgerOpen} className="hidden lg:block" />
      </div>
    </nav>
  );
}