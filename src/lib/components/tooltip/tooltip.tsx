import { ReactElement } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { TooltipProps } from "./tooltip.type";
import { Text } from "../text";

export function Tooltip({ text, children }: TooltipProps): ReactElement {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <div className="mb-2">{children}</div>
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content>
          <HoverCard.Arrow />

          <div className="bg-black rounded p-5 py-2">
            <Text color="white">{text}</Text>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}