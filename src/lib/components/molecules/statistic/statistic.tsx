import { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/text";
import { StatisticProps } from "./statistic.type";

export function Statistic({ icon, count, text }: StatisticProps): ReactElement {
  return (
    <div>
      <Text size="large" color="black">
        {icon} {count || "..."} {text}
      </Text>
    </div>
  );
}