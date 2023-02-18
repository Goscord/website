import { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import Image from "next/image";

export default function Home(): ReactElement {
  return (
    <>
      <header className="bg-gray py-36 flex justify-center items-center flex-col gap-14">
        <div className="relative w-10/12 h-44">
          <Image src="/goscord-brand.png" alt="Goscord brand" fill />
        </div>

        <Text size="3xl">The best Discord API in Golang.</Text>
      </header>

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