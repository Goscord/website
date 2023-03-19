import { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { PromoteProps } from "./promote.type";

export function Promote({ icon, title, description }: PromoteProps): ReactElement {
  return (
    <div className="w-96">
      <Text color="black" size="2xl" className="flex items-center gap-2">{icon} {title}</Text>

      <Text color="black">{description}</Text>
    </div>
  );
}