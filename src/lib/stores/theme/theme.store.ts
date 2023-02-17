import { create } from "zustand";
import { ThemeStore } from "./theme.type";

export const useThemeStore = create<ThemeStore>((set) => ({
  current: "light",
  set: theme => set({
    current: theme
  })
}));