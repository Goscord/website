export type Theme = "light" | "dark";

export type ThemeStore = {
  current: Theme;
  set: (theme: Theme) => void;
};