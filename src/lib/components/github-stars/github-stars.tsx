import { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { useQuery } from "@tanstack/react-query";
import { getGithubStars } from "#/lib/utils/github";
import { FiGithub } from "react-icons/fi";

export function GitHubStars(): ReactElement {
  const { isSuccess: githubStarsReady, data: githubStars } = useQuery(["github", "stars"], getGithubStars);

  return (
    <Text size="large" className="flex items-center gap-2">
      <FiGithub />

      <span>{githubStarsReady ? githubStars : "..."}</span> STARS AND COUNTING
    </Text>
  );
}