import { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { HeaderSection } from "./header.section";
import { AboutSection } from "./about.section";

export default function Home(): ReactElement {
  return (
    <>
      <HeaderSection />

      <AboutSection />

      <section className="flex flex-col gap-5 p-16 bg-gray">
        {Array.from({ length: 20 }).map((_, i) => (
          <Text key={i} color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui porro exercitationem soluta placeat hic, voluptates, ex magnam, animi vero est earum.
            Nihil, dolore. Facere perferendis quod obcaecati iure, fuga autem?

            {i % 2 === 0 && `
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui porro exercitationem soluta placeat hic, voluptates, ex magnam, animi vero est earum.
              Nihil, dolore. Facere perferendis quod obcaecati iure, fuga autem?
            `}
          </Text>
        ))}
      </section>
    </>
  );
}