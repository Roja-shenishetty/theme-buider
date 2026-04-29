"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext<any>(null);

const defaults = {
  brand: "#7c3aed", accent: "#B91048",
  brandDark: "#5b21b6", brandLight: "#a78bfa", brandFront: "#ffffff",
  accentDark: "#9d174d", accentLight: "#f472b6",
  success: "#16a34a", error: "#dc2626", warning: "#d97706", info: "#2563eb",
  bgPage: "#f8fafc", bgSurface: "#ffffff", bgElevated: "#f1f5f9", bgSunken: "#0f172a",
  textHeading: "#0f172a", textBody: "#334155", textMuted: "#64748b", textLink: "#7c3aed",
  neutralSat: 5,
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start with defaults to prevent hydration mismatch
  const [theme, setTheme] = useState(defaults);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage only after component mounts
  useEffect(() => {
    const saved = localStorage.getItem("app-theme");
    if (saved) {
      try {
        setTheme(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse theme", e);
      }
    }
    setMounted(true);
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("app-theme", JSON.stringify(theme));
    }
  }, [theme, mounted]);

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