import type { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/text";
import type { StatisticProps } from "./statistic.type";

export function Statistic({ icon, count, text }: StatisticProps): ReactElement {
  return (
    <Text size="2xl" color="black" className="flex gap-2 items-center">
      {icon} {count || "..."} {text}
    </Text>
  );
}