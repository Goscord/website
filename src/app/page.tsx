import { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { HeaderSection } from "./header.section";

export default function Home(): ReactElement {
  return (
    <>
      <HeaderSection />

      <section className="flex flex-col items-center gap-5 w-10/12 mx-auto my-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <Text key={i} color="black">
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