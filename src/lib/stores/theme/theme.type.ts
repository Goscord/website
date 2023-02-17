export type Theme = "light" | "dark";

export type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};