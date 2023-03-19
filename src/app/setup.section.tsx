import { Code } from "#/lib/components/atoms/code";
import { Text } from "#/lib/components/atoms/text";
import { GoGetButton } from "#/lib/components/molecules/go-get-button";
import { codeExample } from "#/lib/configs/code-example";
import { ReactElement } from "react";

export function SetupSection(): ReactElement {
  return (
    <section className="bg-gray grid grid-cols-2 bg-setup-section bg-cover">
      <div className="py-28 mx-auto w-3/4 space-y-4">
        <Text size="2xl">How to Set Up?</Text>
        <Text size="3xl">You can use the <strong className="text-primary">Goscord</strong> package by copying this:</Text>

        <GoGetButton />

        <Text size="large">
          That{"'"}s it, now you can copy the following example and start creating your Discord bot!
          You can also discover more possibilities on our documentation.
        </Text>
      </div>

      <div className="p-10 opacity-90">
        <Code code={codeExample} language="go" />
      </div>
    </section>
  );
}