import type { StaticImageData } from "next/image";

export type TeamCardProps = {
  img: StaticImageData;

  name: string;
  description: string;

  twitterLink?: string;
  githubLink?: string;
  websiteLink?: string;
}