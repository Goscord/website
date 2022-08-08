import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import Icon from "$lib/components/icons/Icon";
import Text from "$lib/components/Text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "simple" | "primary";
  size?: "normal" | "large";

  iconSrc?: string;

  href?: string;
}

export default function Button(
  { children, color = "primary", size = "normal", iconSrc, href, className, ...props }: PropsWithChildren<ButtonProps>
): ReactElement {
  const buttonStyle = clsx(
    "h-fit w-fit",
    "rounded",
    "transition-transform hover:scale-105", 
    {
      "bg-primary shadow hover:brightness-105": color === "primary",
      "bg-gray shadow-sm border border-separator-secondary hover:border-separator-primary": color === "simple"
    },
    {
      "py-2 px-3": size === "normal",
      "py-2 px-6": size === "large"
    }
  );

  function Button(): ReactElement {
    return (
      <button type='button' className={`${buttonStyle} ${className ?? ""}`} {...props}>
        <Text 
          color={color === "primary" ? "white" : "black"} 
          size={size === "large" ? "large" : "base"} 
          className='flex items-center gap-2'
        >
          {children}
          {iconSrc && <Icon src={iconSrc} alt='button icon' size={18} />}
        </Text>
      </button>
    );
  };

  if (href) return <Link href={href}><Button /></Link>;

  return <Button />;
}