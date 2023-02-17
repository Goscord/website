import { goscord } from "#/lib/configs/goscord";
import { NavbarItem } from "./navbar.type";

export const navbarPages: NavbarItem[] = [
  { label: goscord.webiste.domain, href: "/" },
  { label: "Documentation", href: "/documentation" },
  { label: "GitHub", href: "/github", external: true }
];