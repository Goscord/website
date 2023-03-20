import { ReactElement } from "react";
import { HeaderSection } from "./header.section";
import { AboutSection } from "./about.section";
import { SetupSection } from "./setup.section";
import { StatisticSection } from "./statistic.section";

export default function Home(): ReactElement {
  return (
    <>
      <HeaderSection />

      <AboutSection />

      <SetupSection />

      <StatisticSection />
    </>
  );
}