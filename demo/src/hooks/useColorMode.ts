import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants";

export type ColorMode = "light" | "dark";

function getInitialMode(): ColorMode {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(LOCAL_STORAGE_KEYS.colorMode);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

// The light/dark mode, kept in localStorage (on the first run, the system's)
export function useColorMode() {
  const [mode, setMode] = useState<ColorMode>(getInitialMode);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEYS.colorMode, mode);
  }, [mode]);

  const toggleMode = () => setMode(m => (m === "dark" ? "light" : "dark"));

  return { mode, toggleMode };
}
