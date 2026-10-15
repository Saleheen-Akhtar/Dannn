import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";

const ThemeProviderContext = createContext(null);

export function ThemeProvider({ children, defaultTheme = "dark", storageKey = "yfb-dashboard-theme" }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return defaultTheme;
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") return stored;
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setTheme = useCallback((nextTheme) => {
    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch {}
    setThemeState(nextTheme);
  }, [storageKey]);

  const toggleTheme = useCallback(() => {
    setThemeState((curr) => {
      const next = curr === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(storageKey, next);
      } catch {}
      return next;
    });
  }, [storageKey]);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }
  return context;
}
