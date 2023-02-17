import { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { FiSun, FiMoon } from "react-icons/fi";
import { useThemeStore } from "#/lib/stores/theme";

export function Theme(): ReactElement {
  const { theme, switchTheme } = useThemeStore();

  return (
    <Text size="2xl" onClick={() => switchTheme()}>
      {theme === "light" ? <FiSun /> : <FiMoon />}
    </Text>
  );
}