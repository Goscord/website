import { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/text";
import { FiSun, FiMoon } from "react-icons/fi";
import { useThemeStore } from "#/lib/stores/theme";
import { clsx } from "clsx";

export function Theme(): ReactElement {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Text size="2xl" onClick={() => toggleTheme()} className={clsx(
      "p-4 rounded cursor-pointer",
      "transition-colors duration-300",
      "hover:bg-primary-2"
    )}>
      {theme === "light" ? <FiSun /> : <FiMoon />}
    </Text>
  );
}