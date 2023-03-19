import { Promote } from "#/lib/components/promote";
import { Text } from "#/lib/components/text";
import { promotes } from "#/lib/configs/promote";
import { ReactElement } from "react";

export function AboutSection(): ReactElement {
  return (
    <section className="py-20 flex justify-center items-center flex-col gap-10">
      <Text color="primary" size="3xl">What is Goscord?</Text>

      <Text color="black" size="xl" className="text-center w-6/12">
        Goscord is a Discord bot creation API written in the Go programming language.
        It offers a high level API rich in possibilities and which evolves at the same pace as Discord.
      </Text>

      <div className="flex flex-wrap items-center justify-between gap-5 w-1/2 mx-auto">
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