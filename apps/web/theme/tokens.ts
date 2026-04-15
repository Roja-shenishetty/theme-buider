// theme/tokens.ts

export const tokens = {
  // 🔥 BASE COLOR (used for generation if needed)
  base: {
    primary: "#6366F1",
  },

  // 🌞 LIGHT THEME
  light: {
    colors: {
      primary: {
        50: "#EEF2FF",
        100: "#E0E7FF",
        200: "#C7D2FE",
        300: "#A5B4FC",
        400: "#818CF8",
        500: "#6366F1",
        600: "#4F46E5",
        700: "#4338CA",
        800: "#3730A3",
        900: "#312E81",
      },

      secondary: {
        50: "#ECFEFF",
        100: "#CFFAFE",
        200: "#A5F3FC",
        300: "#67E8F9",
        400: "#22D3EE",
        500: "#06B6D4",
        600: "#0891B2",
        700: "#0E7490",
        800: "#155E75",
        900: "#164E63",
      },

      background: "#F9FAFB",
      foreground: "#111827",

      card: "#FFFFFF",
      border: "#E5E7EB",

      muted: "#6B7280",
      mutedBg: "#F3F4F6",

      input: "#FFFFFF",
      ring: "#6366F1",
    },
  },

  // 🌙 DARK THEME
  dark: {
    colors: {
      primary: {
        50: "#EEF2FF",
        100: "#E0E7FF",
        200: "#C7D2FE",
        300: "#A5B4FC",
        400: "#818CF8",
        500: "#818CF8", // brighter for dark mode
        600: "#6366F1",
        700: "#4F46E5",
        800: "#4338CA",
        900: "#3730A3",
      },

      secondary: {
        50: "#ECFEFF",
        100: "#CFFAFE",
        200: "#A5F3FC",
        300: "#67E8F9",
        400: "#22D3EE",
        500: "#22D3EE", // brighter in dark
        600: "#06B6D4",
        700: "#0891B2",
        800: "#0E7490",
        900: "#155E75",
      },

      background: "#0B1220",
      foreground: "#E2E8F0",

      card: "#1E293B",
      border: "#334155",

      muted: "#94A3B8",
      mutedBg: "#1E293B",

      input: "#0F172A",
      ring: "#818CF8",
    },
  },

  // 🔤 TYPOGRAPHY
  typography: {
    fontFamily: {
      heading: "Inter, sans-serif",
      body: "Inter, sans-serif",
    },

    heading: {
      h1: "32px",
      h2: "28px",
      h3: "24px",
      h4: "20px",
    },

    body: {
      sm: "14px",
      md: "16px",
      lg: "18px",
    },

    weight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },

  // 📏 SPACING
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "32px",
  },

  // 🔘 BORDER RADIUS
  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },

  // 🌫 SHADOWS
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 10px rgba(0,0,0,0.08)",
    lg: "0 10px 25px rgba(0,0,0,0.12)",
    xl: "0 20px 40px rgba(0,0,0,0.18)",
  },
};