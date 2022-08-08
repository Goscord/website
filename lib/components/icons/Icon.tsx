import Image from "next/image";
import { ReactElement } from "react";

interface IconProps {
  src: string;
  alt: string;

  size?: number | string;
}

export default function Icon({ src, alt, size = 22 }: IconProps): ReactElement {
  return <Image src={src} alt={alt} height={size} width={size} layout="fixed" />;
}