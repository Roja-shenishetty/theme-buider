"use client";

export function toggleDarkMode() {
  const root = document.documentElement;

  root.classList.toggle("dark");

  const isDark = root.classList.contains("dark");
  localStorage.setItem("dark", isDark ? "true" : "false");
}

export function isDarkMode() {
  const root = document.documentElement;
  return root.classList.contains("dark");
}