import { Promote } from "#/lib/components/promote";
import { Text } from "#/lib/components/text";
import { promotes } from "#/lib/configs/promote";
import { ReactElement } from "react";

export function AboutSection(): ReactElement {
  return (
    <section className="py-20 flex justify-center items-center flex-col gap-10">
      <Text color="primary" size="3xl">What is Goscord?</Text>

      <Text color="black" size="xl" className="text-center w-11/12 max-w-4xl">
        Goscord is a Discord bot creation API written in the Go programming language.
        It offers a high level API rich in possibilities and which evolves at the same pace as Discord.
      </Text>

      <div className="max-w-full grid grid-cols-2 gap-20 lg:flex lg:flex-wrap lg:justify-center">
        {promotes.map(promote => (
          <Promote
            key={promote.title}
            icon={promote.icon}
            title={promote.title}
            description={promote.description}
          />
        ))}
      </div>
    </section>
  );
}