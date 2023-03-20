import { Code } from "#/lib/components/atoms/code";
import { Text } from "#/lib/components/atoms/text";
import { GoGetButton } from "#/lib/components/molecules/go-get-button";
import { codeExample } from "#/lib/configs/code-example";
import { ReactElement } from "react";

export function SetupSection(): ReactElement {
  return (
    <section className="bg-gray bg-setup-section bg-cover py-12 px-5 flex justify-center gap-5 flex-wrap">
      <div className="py-16 space-y-6 max-w-xl mx-auto">
        <Text size="2xl">How to Set Up?</Text>
        <Text size="3xl">You can use the <strong className="text-primary">Goscord</strong> package by copying this:</Text>

        <GoGetButton size="large" />

        <Text size="xl">
          That{"'"}s it, now you can copy the following example and start creating your Discord bot!
          You can also discover more possibilities on our documentation.
        </Text>
      </div>

      <div className="opacity-90 max-w-2xl w-full mx-auto">
        <Code code={codeExample} language="go" />
      </div>
    </section>
  );
}