"use client"
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext<any>(null);

const defaults = {
  brand: "#7c3aed",
  accent: "#B91048",
  success: "#16a34a",
  error: "#dc2626",
  warning: "#d97706",
  info: "#2563eb",
  neutralSat: 5,
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("app-theme");
      return saved ? JSON.parse(saved) : defaults;
    }
    return defaults;
  });

  // Simple sync to localStorage
  useEffect(() => {
    localStorage.setItem("app-theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};