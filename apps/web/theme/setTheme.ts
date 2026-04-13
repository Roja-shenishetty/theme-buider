"use client";

export function setTheme(theme: string) {
  const root = document.documentElement;

  root.classList.remove(
    "theme-dashboard",
    "theme-minimal",
    "theme-glass"
  );

  root.classList.add(theme);

  // ✅ persist
localStorage.setItem("themeName", theme); // ✅ FIX
}