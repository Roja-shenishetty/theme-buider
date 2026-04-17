"use client";

import { applyTheme } from "./applyTheme";
import { tokens } from "./tokens";

export function toggleDarkMode() {
  if (typeof window === "undefined") return;

  const current =
    localStorage.getItem("mode") === "dark" ? "light" : "dark";

  // ✅ SAVE MODE
  localStorage.setItem("mode", current);

  console.log("🌗 Switching to:", current);

  // ✅ APPLY IMMEDIATELY
  const saved = localStorage.getItem("themeTokens");

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      applyTheme(parsed, current);
    } catch {
      applyTheme(tokens, current);
    }
  } else {
    applyTheme(tokens, current);
  }
}