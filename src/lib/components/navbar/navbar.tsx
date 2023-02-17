import { ReactElement } from "react";
import { navbarPages } from "#/lib/configs/navbar";
import { NavbarItem } from "./navbav-item";
import { Theme } from "#/lib/components/theme";
import { GitHubStars } from "../github-stars";

export function Navbar(): ReactElement {
  return (
    <nav className="bg-primary h-20 flex items-center justify-between px-16">
      <GitHubStars />

      <div className="flex items-center gap-10">
        {navbarPages.map(page => (
          <NavbarItem key={page.label} label={page.label} href={page.href} external={page.external} />
        ))}

        <Theme />
      </div>
    </nav>
  );
}