import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import Icon from "$lib/components/icons/Icon";
import Text from "$lib/components/Text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "normal" | "large";
  iconSrc?: string;
  href?: string;
}

export default function Button(
  { children, size = "normal", iconSrc, href, className, ...props }: PropsWithChildren<ButtonProps>
): ReactElement {
  const buttonStyle = clsx(
    "h-fit w-fit bg-white",
    "rounded shadow",
    "transition-transform hover:scale-105",
    {
      "py-2 px-3": size === "normal",
      "py-2 px-6": size === "large"
    }
  );

  function Button(): ReactElement {
    return (
      <button type="button" className={`${buttonStyle} ${className ?? ""}`} {...props}>
        <Text 
          color="gray"
          size={size === "large" ? "large" : "base"} 
          className="flex items-center gap-2"
        >
          {children}
          {iconSrc && <Icon src={iconSrc} alt="button icon" size={18} />}
        </Text>
      </button>
    );
  };

  if (href) return <Link href={href}><Button /></Link>;

  return <Button />;
}