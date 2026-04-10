// theme/tokens.ts

export const tokens = {
  // 🔥 SINGLE SOURCE OF TRUTH
  base: {
    primary: "#6366F1",
  },

  colors: {
    // 🎯 GENERATED (will be overridden by createTheme)
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
      500: "#06B6D4",
      600: "#0891B2",
      700: "#0E7490",
    },

    success: { 500: "#22C55E" },
    warning: { 500: "#F59E0B" },
    destructive: { 500: "#EF4444" },

    // 🎯 semantic layers
    background: "#F9FAFB",
    foreground: "#111827",

    surface: "#FFFFFF",
    surfaceHover: "#F3F4F6",

    muted: "#6B7280",
    mutedBg: "#F3F4F6",

    border: "#E5E7EB",
    input: "#FFFFFF",
    ring: "#6366F1",

    card: "#FFFFFF",
  },

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

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "32px",
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },

  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 10px rgba(0,0,0,0.08)",
    lg: "0 10px 25px rgba(0,0,0,0.12)",
    xl: "0 20px 40px rgba(0,0,0,0.18)",
  },
};