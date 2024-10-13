import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ThemeStore } from "./theme.type";

export const useThemeStore = create(
  persist<ThemeStore>(
    set => ({
      theme: "light",
      setTheme: theme => set({ theme }),
      toggleTheme: () => set(state => ({
        theme: state.theme === "light" ? "dark" : "light"
      }))
    }),

    { name: "theme" }
  )
);