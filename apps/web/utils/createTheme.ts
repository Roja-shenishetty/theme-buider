import { generateShades } from "./generateShades";

export function createTheme(baseColor: string) {
  const primary = generateShades(baseColor);

  // 🔥 auto secondary (slightly shifted color)
  const secondary = generateShades("#06B6D4");

  return {
    primary,
    secondary,

    background: "#F9FAFB",
    foreground: "#111827",

    text: {
      primary: "#111827",
      secondary: "#374151",
      muted: "#6B7280",
    },

    card: "#FFFFFF",
    border: "#E5E7EB",
    input: "#FFFFFF",
  };
}