import type { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/text";
import { Statistic } from "#/lib/components/molecules/statistic";
import { goscord } from "#/lib/configs/goscord";
import { getGitHubStars, getGitHubClone } from "#/lib/utils/github";
import { FiBarChart, FiGithub } from "react-icons/fi";

export async function StatisticSection(): Promise<ReactElement> {
  const starsCount = await getGitHubStars(goscord.github.owner, goscord.github.repo);
  const cloneCount = await getGitHubClone(goscord.github.owner, goscord.github.repo);

  return (
    <section className="flex items-center justify-center flex-col gap-8 mt-5 mb-14">
      <Text color="primary" size="3xl" className="font-bold">Want some Goscord stats?</Text>

      <div className="flex items-center gap-20 flex-wrap">
        <Statistic icon={<FiGithub />} text="GitHub stars" count={starsCount} />
        <Statistic icon={<FiBarChart />} text="Downloads" count={cloneCount} />
      </div>
    </section>
  );
}