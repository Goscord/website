"use client";

import { Text } from "#/lib/components/atoms/text";
import { Statistic } from "#/lib/components/molecules/statistic";
import { getGithubClone, getGithubStars } from "#/lib/utils/github";
import { useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";
import { FiBarChart, FiGithub } from "react-icons/fi";

export function StatisticSection(): ReactElement {
  const { data } = useQuery(["github", "stats"], async() => ({
    starsCount: await getGithubStars(),
    cloneCount: await getGithubClone()
  }));

  return (
    <section className="flex items-center justify-center flex-col gap-8">
      <Text color="primary" size="3xl">Want some Goscord stats?</Text>

      <div className="flex items-center gap-20 flex-wrap">
        <Statistic icon={<FiGithub />} text="GitHub stars" count={data?.starsCount} />
        <Statistic icon={<FiBarChart />} text="Downloads" count={data?.cloneCount} />
      </div>
    </section>
  );
}