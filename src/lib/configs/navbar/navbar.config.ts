import { goscord } from "#/lib/configs/goscord";
import type { NavbarItem } from "./navbar.type";

export const navbarPages: NavbarItem[] = [
  { label: goscord.webiste.domain, href: "/" },
  { label: "Documentation", href: "/documentation" },
  { label: "GitHub", href: goscord.github.mainRepoUrl, external: true }
];