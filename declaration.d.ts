import type { StaticImageData } from "next/image";

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png" {
  const content: StaticImageData;
  export default content;
}