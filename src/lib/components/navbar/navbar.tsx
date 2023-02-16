import { ReactElement, useState } from "react";
import { FiGithub, FiExternalLink, FiSun, FiMoon } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { getGithubStars } from "#/lib/utils/github";
import { Text } from "#/lib/components/text";
import { goscord } from "#/lib/configs/goscord";

export function Navbar(): ReactElement {
  const { isSuccess: githubStarsReady, data: githubStars } = useQuery(["github", "stars"], getGithubStars);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <nav className="bg-primary h-20 flex items-center justify-between px-16">
      {/* GitHub Stars */}
      <Text size="large" className="flex items-center gap-2">
        <FiGithub color="white" />
        <span>{githubStarsReady ? githubStars : "..."}</span> STARS AND COUNTING
      </Text>

      <div className="flex items-center gap-10">
        <Text size="large" className="bg-primary-1 py-3 px-4 rounded">{goscord.webiste.domain}</Text>
        <Text size="large">Documentation</Text>
        <Text size="large" className="flex items-center gap-2">GitHub <FiExternalLink /></Text>

        <Text size="2xl" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <FiSun /> : <FiMoon />}
        </Text>
      </div>
    </nav>
  );
}