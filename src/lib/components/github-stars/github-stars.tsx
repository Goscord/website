import { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { useQuery } from "@tanstack/react-query";
import { getGithubStars } from "#/lib/utils/github";
import { FiGithub } from "react-icons/fi";
import { goscord } from "#/lib/configs/goscord";
import Link from "next/link";

export function GitHubStars(): ReactElement {
  const { isSuccess: githubStarsReady, data: githubStars } = useQuery(["github", "stars"], getGithubStars);

  return (
    <Link href={goscord.github.mainRepoUrl} target="_blank">
      <Text size="large" className="flex items-center gap-2">
        <FiGithub />

        <span>{githubStarsReady ? githubStars : "..."} STARS <span className="sm:hidden">AND COUNTING</span></span>
      </Text>
    </Link>
  );
}