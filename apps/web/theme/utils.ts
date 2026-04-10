"use client";

export function getCssVar(
  name: string,
  fallback: string = "rgb(0,0,0)"
) {
  if (typeof window === "undefined") return fallback;

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  return value || fallback; // ✅ prevents empty string crash
}