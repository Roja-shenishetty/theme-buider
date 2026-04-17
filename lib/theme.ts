import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
} from "@material/material-color-utilities"

export function generateTheme(baseColor: string) {
  const argb = argbFromHex(baseColor)
  const theme = themeFromSourceColor(argb)
  const light = theme.schemes.light

  return {
    primary: hexFromArgb(light.primary),
    primaryForeground: hexFromArgb(light.onPrimary),

    primaryContainer: hexFromArgb(light.primaryContainer),
    primaryContainerForeground: hexFromArgb(light.onPrimaryContainer),

    secondary: hexFromArgb(light.secondary),
    secondaryForeground: hexFromArgb(light.onSecondary),

    background: hexFromArgb(light.background),
    foreground: hexFromArgb(light.onBackground),

    surface: hexFromArgb(light.surface),
    surfaceVariant: hexFromArgb(light.surfaceVariant),

    outline: hexFromArgb(light.outline),
  }
}

export function hexToHsl(hex?: string) {
  if (!hex) return "0 0% 50%" // fallback color

  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0, s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }

    h /= 6
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}