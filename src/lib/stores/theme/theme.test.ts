import { afterEach, describe, expect, test } from "vitest";
import { useThemeStore } from "./theme.store";

describe("useThemeStore", () => {
  const { setTheme, toggleTheme } = useThemeStore.getState();

  test("the default theme must be light", () => {
    expect(useThemeStore.getState().theme).toBe("light");
  });

  afterEach(() => {
    useThemeStore.setState({ theme: "light" });
  });

  test("must be updated with the setter", () => {
    setTheme("dark");
    expect(useThemeStore.getState().theme).toBe("dark");

    setTheme("light");
    expect(useThemeStore.getState().theme).toBe("light");
  });

  test("should switch theme", () => {
    toggleTheme();
    expect(useThemeStore.getState().theme).toBe("dark");

    toggleTheme();
    expect(useThemeStore.getState().theme).toBe("light");
  });
});