import { tokens } from "./tokens";

type Theme = typeof tokens;
type ColorValue = string | Record<number, string>;

export function applyTheme(theme: Theme) {
  const root = document.documentElement;

  Object.entries(theme.colors).forEach(([key, value]) => {
    if (!value) return;

    const color = value as ColorValue;

    // 🎨 COLOR SCALE (primary, secondary)
    if (typeof color === "object") {
      Object.entries(color).forEach(([shade, val]) => {
        if (!val) return;
        root.style.setProperty(`--${key}-${shade}`, String(val));
      });

      // ✅ SAFE access to 500
      if ("500" in color) {
        root.style.setProperty(`--${key}`, String(color[500]));
      }
    } else {
      // 🎨 SINGLE VALUE (background, etc.)
      root.style.setProperty(`--${key}`, String(color));
    }
  });

  // 🔤 TYPOGRAPHY
 root.style.setProperty(
  "--font-heading",
  theme.typography.fontFamily.heading
);

root.style.setProperty(
  "--font-body",
  theme.typography.fontFamily.body
);

  // 📏 SPACING
  Object.entries(theme.spacing).forEach(([key, val]) => {
    root.style.setProperty(`--space-${key}`, String(val));
  });

  // 🔘 RADIUS
  Object.entries(theme.radius).forEach(([key, val]) => {
    root.style.setProperty(`--radius-${key}`, String(val));
  });

  // 🌫 SHADOW
  Object.entries(theme.shadow).forEach(([key, val]) => {
    root.style.setProperty(`--shadow-${key}`, String(val));
  });
}