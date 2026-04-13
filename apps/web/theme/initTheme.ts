"use client";

import { applyTheme } from "@/theme/applyTheme";

export function initTheme() {
  if (typeof window === "undefined") return; // ✅ safety (SSR)

  const root = document.documentElement;

  // ✅ 1. CLEAN existing classes (important)
  root.classList.remove(
    "theme-dashboard",
    "theme-minimal",
    "theme-glass",
    "dark"
  );

  // ✅ 2. Load UI theme (class)
  const themeName = localStorage.getItem("themeName");
  if (themeName && !themeName.includes("{")) {
    root.classList.add(themeName);
  }

  // ✅ 3. Load dark mode
  const dark = localStorage.getItem("dark");
  if (dark === "true") {
    root.classList.add("dark");
  }

  // ✅ 4. Load design tokens (safe parse)
  const savedTokens = localStorage.getItem("themeTokens");

  if (savedTokens) {
    try {
      const parsed = JSON.parse(savedTokens);

      // extra safety check
      if (parsed && typeof parsed === "object") {
        applyTheme(parsed);
      }
    } catch (e) {
      console.error("Invalid theme JSON", e);
      localStorage.removeItem("themeTokens"); // ✅ cleanup bad data
    }
  }
}