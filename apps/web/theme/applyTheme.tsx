import { tokens as defaultTokens } from "./tokens";

type Theme = typeof defaultTokens;
type Mode = "light" | "dark";

export function applyTheme(theme: Theme, mode: Mode) {
  const root = document.documentElement;

  const active = theme?.[mode] || defaultTokens[mode];

  if (!active?.colors) {
    console.error("Invalid theme:", theme);
    return;
  }

  // 🔥 APPLY ALL COLORS
  Object.entries(active.colors).forEach(([key, value]) => {
    if (!value) return;

    if (typeof value === "object") {
      Object.entries(value).forEach(([shade, val]) => {
        root.style.setProperty(`--${key}-${shade}`, String(val));
      });

      if ("500" in value) {
        root.style.setProperty(`--${key}`, String(value[500]));
      }
    } else {
      root.style.setProperty(`--${key}`, String(value));
    }
  });

  // 🔤 typography
  root.style.setProperty(
    "--font-heading",
    theme.typography.fontFamily.heading
  );

  root.style.setProperty(
    "--font-body",
    theme.typography.fontFamily.body
  );

  console.log("✅ Applied theme mode:", mode);
}