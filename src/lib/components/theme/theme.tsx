import { ReactElement } from "react";
import { Text } from "#/lib/components/text";
import { FiSun, FiMoon } from "react-icons/fi";
import { useThemeStore } from "#/lib/stores/theme";
import { clsx } from "clsx";

export function Theme(): ReactElement {
  const { theme, switchTheme } = useThemeStore();

  return (
    <Text size="2xl" onClick={() => switchTheme()} className={clsx(
      "p-4 rounded cursor-pointer",
      "transition-colors duration-300",
      "hover:bg-primary-1"
    )}>
      {theme === "light" ? <FiSun /> : <FiMoon />}
    </Text>
  );
}