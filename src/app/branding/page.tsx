import type { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/text";

export function Branding(): ReactElement {
  return (
    <div className="flex items-center justify-center flex-col gap-5 h-96">
      <Text color="black">Coming soon...</Text>
    </div>
  );
}