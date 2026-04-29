"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext<any>(null);

// 🔹 Updated defaults to include Status Keys matching the Editor Panel
const defaults = {
  brand: "#7c3aed",
  brandDark: "#5b21b6",
  brandLight: "#a78bfa",
  brandFront: "#ffffff",
  accent: "#B91048",
  accentDark: "#9d174d",
  accentLight: "#f472b6",
  // Map these to your new Editor keys
  statusSuccess: "#16a34a", 
  statusWarning: "#d97706",
  statusDanger: "#dc2626",
  bgPage: "#f8fafc",
  bgSurface: "#ffffff",
  bgElevated: "#f1f5f9",
  bgSunken: "#0f172a",
  textHeading: "#0f172a",
  textBody: "#334155",
  textMuted: "#64748b",
  neutralSat: 5,
};

/**
 * Helper to convert Hex to HSL string for CSS Variables
 */
const hexToHsl = (hex: string) => {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return `${(h * 360).toFixed(1)} ${(s * 100).toFixed(1)}% ${(l * 100).toFixed(1)}%`;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(defaults);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("app-theme");
    if (saved) {
      try { setTheme(JSON.parse(saved)); } catch (e) { console.error(e); }
    }
    setMounted(true);
  }, []);

  // 🔹 ENGINE: Update CSS Variables in the DOM
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Mapping Theme State to CSS Variables
    const mapping: Record<string, string> = {
      "--brand": theme.brand,
      "--status-success": theme.statusSuccess,
      "--status-warning": theme.statusWarning,
      "--status-danger": theme.statusDanger,
      "--bg-page": theme.bgPage,
      "--text-body": theme.textBody,
      "--text-muted": theme.textMuted,
      "--text-heading": theme.textHeading,
      "--accent": theme.accent,
    };

    Object.entries(mapping).forEach(([key, value]) => {
      root.style.setProperty(key, hexToHsl(value));
    });

    localStorage.setItem("app-theme", JSON.stringify(theme));
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};