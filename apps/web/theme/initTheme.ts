"use client";

import { applyTheme } from "./applyTheme";
import { tokens } from "./tokens";

export function initTheme() {
  if (typeof window === "undefined") return;

  const mode =
    localStorage.getItem("mode") === "dark" ? "dark" : "light";

  console.log("🚀 initTheme mode:", mode);

  const saved = localStorage.getItem("themeTokens");

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      applyTheme(parsed, mode);
    } catch {
      applyTheme(tokens, mode);
    }
  } else {
    applyTheme(tokens, mode);
  }
}