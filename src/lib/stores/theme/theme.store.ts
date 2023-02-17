import { create } from "zustand";
import { ThemeStore } from "./theme.type";

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  setTheme: theme => set({ theme })
}));