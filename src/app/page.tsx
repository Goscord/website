import { ReactElement } from "react";
import { HeaderSection } from "./header.section";
import { AboutSection } from "./about.section";
import { SetupSection } from "./setup.section";

export default function Home(): ReactElement {
  return (
    <>
      <HeaderSection />

      <AboutSection />

      <SetupSection />
    </>
  );
}