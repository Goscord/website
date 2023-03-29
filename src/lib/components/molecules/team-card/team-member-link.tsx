import type { ReactElement } from "react";
import type { TeamMemberLink, TeamMemberLinkType } from "./team-card.type";
import { FiGithub, FiLink, FiTwitter } from "react-icons/fi";
import Link from "next/link";

export function TeamMemberLink({ link, type }: TeamMemberLink): ReactElement {
  const styles = "cursor-pointer text-gray hover:brightness-125 active:scale-95";

  const icons: Record<TeamMemberLinkType, ReactElement> = {
    "twitter": <FiTwitter className={styles} />,
    "github": <FiGithub className={styles} />,
    "website": <FiLink className={styles} />
  };

  return <Link href={link} target="_blank">{icons[type]}</Link>;
}