import { ReactElement } from "react";
import { NavbarItemProps } from "./navbar.type";
import { FiExternalLink } from "react-icons/fi";
import { Text } from "#/lib/components/atoms/text";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavbarItem({ label, href, external = false, ...props }: NavbarItemProps): ReactElement {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} target={external ? "_blank" : "_self"} {...props}>
      <Text size="large" className={clsx(
        "py-3 px-4 rounded",
        "transition-colors duration-300",
        {
          "flex items-center gap-2": external,
          "bg-primary-2": isActive,
          "hover:bg-primary-2": !isActive
        }
      )}>
        {label}
        {external && <FiExternalLink />}
      </Text>
    </Link>
  );
}