import type { StaticImageData } from "next/image";

export type TeamCardProps = {
  img: StaticImageData;

  name: string;
  description: string;

  twitterLink?: string;
  githubLink?: string;
  websiteLink?: string;
}

export type TeamMemberLinkType = "twitter" | "github" | "website";

export type TeamMemberLink = {
  link: string;
  type: TeamMemberLinkType;
}