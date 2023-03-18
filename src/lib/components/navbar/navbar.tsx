"use client";

import { ReactElement, useState } from "react";
import { navbarPages } from "#/lib/configs/navbar";
import { NavbarItem } from "./navbav-item";
import { Theme } from "#/lib/components/theme";
import { Burger } from "#/lib/components/burger";
import { clsx } from "clsx";
import { useMediaQuery } from "#/lib/hooks/media-query";

export function Navbar(): ReactElement {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const mediaQuery = useMediaQuery({ type: "max", width: "1023px" });

  if (mediaQuery === "loading") return <nav className="bg-primary h-20" />;

  if (mediaQuery === "match") return (
    <nav className="bg-primary px-16 sm:px-3">
      {/* Menu */}
      <div className="h-20 flex items-center justify-between gap-2">
        <Theme />
        <Burger open={burgerOpen} setOpen={setBurgerOpen} />
      </div>

      {/* Pages and links */}
      <div className={clsx(
        "h-96 flex flex-col gap-3",
        "transition-[max-height] duration-300",
        {
          // Warning: this value is hardcoded,
          // it is not possible to make maxHeight responsive
          // to content without breaking the desired behavior:
          "max-h-48": burgerOpen,

          "max-h-0 overflow-hidden": !burgerOpen
        }
      )}>
        {navbarPages.map(page => (
          <NavbarItem
            key={page.label}
            label={page.label}
            href={page.href}
            external={page.external}
            className={clsx(
              "transition-opacity duration-300",
              !burgerOpen && "opacity-0",
            )}
          />
        ))}
      </div>
    </nav>
  );

  return (
    <nav className="bg-primary h-20 flex items-center justify-between px-16">
      <div className="flex items-center gap-10">
        {navbarPages.map(page => (
          <NavbarItem key={page.label} label={page.label} href={page.href} external={page.external} />
        ))}
      </div>

      <Theme />
    </nav>
  );
}