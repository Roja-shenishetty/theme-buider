/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
 theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      "primary-foreground": "hsl(var(--primary-foreground))",

      secondary: "hsl(var(--secondary))",
      "secondary-foreground": "hsl(var(--secondary-foreground))",

      muted: "hsl(var(--muted))",
      border: "hsl(var(--border))",
      foreground: "hsl(var(--foreground))",
      "muted-foreground": "hsl(var(--muted-foreground))",
      accent: "hsl(var(--accent))",
      "accent-foreground": "hsl(var(--accent-foreground))",
    },
  },
      screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  },
  plugins: [],
}