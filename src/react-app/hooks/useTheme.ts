import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const color = document.querySelector('meta[name="theme-color"]');
    color?.setAttribute("content", theme === "light" ? "#F4F6FB" : "#080B12");
    const light = document.getElementById("favicon-light") as HTMLLinkElement | null;
    const dark = document.getElementById("favicon-dark") as HTMLLinkElement | null;
    if (light) light.media = theme === "light" ? "all" : "not all";
    if (dark) dark.media = theme === "dark" ? "all" : "not all";
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return { theme, toggle };
}
