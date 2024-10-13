import type { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/text";
import type { PromoteProps } from "./promote.type";

export function Promote({ icon, title, description }: PromoteProps): ReactElement {
  return (
    <div className="w-96 px-3 max-w-full sm:text-center">
      <Text color="black" size="2xl" className="flex items-center gap-2 sm:justify-center">{icon} {title}</Text>

      <Text color="black">{description}</Text>
    </div>
  );
}