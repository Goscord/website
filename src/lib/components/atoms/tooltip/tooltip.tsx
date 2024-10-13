import type { ReactElement } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import type { TooltipProps } from "./tooltip.type";
import { Text } from "#/lib/components/atoms/text";

export function Tooltip({ text, children }: TooltipProps): ReactElement {
  return (
    <div className="w-fit">
      <HoverCard.Root>
        <HoverCard.Trigger>
          <div>{children}</div>
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
    </div>
  );
}