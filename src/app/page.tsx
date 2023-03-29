import { ReactElement } from "react";
import { HeaderSection } from "./header.section";
import { AboutSection } from "./about.section";
import { SetupSection } from "./setup.section";
import { StatisticSection } from "./statistic.section";
import { TeamSection } from "./team.section";

export default function Home(): ReactElement {
  return (
    <>
      <HeaderSection />

      <AboutSection />

      <SetupSection />

      {/* TODO: https://github.com/vercel/next.js/issues/42292 */}
      {/* @ts-expect-error Server Component */}
      <StatisticSection />

      <TeamSection />
    </>
  );
}