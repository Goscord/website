import { create } from "zustand";
import { ThemeStore } from "./theme.type";

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  setTheme: theme => set({ theme }),
  switchTheme: () => set(state => ({ theme: state.theme === "light" ? "dark" : "light" }))
}));