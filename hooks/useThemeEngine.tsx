"use client"
import { useEffect } from "react"
import { useTheme } from "@/context/ThemeContext"

export function hexToHSLString(hex: string) {
  if (!hex || hex.length < 7) return "0 0% 50%"
  
  let r = parseInt(hex.slice(1, 3), 16) / 255
  let g = parseInt(hex.slice(3, 5), 16) / 255
  let b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0, l = (max + min) / 2

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

export function useThemeEngine() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (!theme) return
    const root = document.documentElement

    const setProp = (name: string, hex: string) => {
      if (!hex) return
      root.style.setProperty(name, hexToHSLString(hex))
    }

    // 🎨 MAPPING TO YOUR GLOBALS.CSS VARIABLES
    // This connects your "brand" selection to the "--primary" CSS variable
    setProp('--primary', theme.brand)
    setProp('--primary-foreground', theme.brandFront)
    
    setProp('--accent', theme.accent)
    setProp('--background', theme.bgPage)
    setProp('--foreground', theme.textBody)

    // 🎨 MAPPING THE REST FOR COMPONENTS
    setProp('--muted', theme.bgSurface)
    setProp('--muted-foreground', theme.textMuted)
    
    setProp('--success', theme.success)
    setProp('--error', theme.error)
    setProp('--warning', theme.warning)
    setProp('--info', theme.info)

    // 🎨 CUSTOM SYSTEM TOKENS
    setProp('--brand', theme.brand)
    setProp('--brand-dark', theme.brandDark)
    setProp('--brand-light', theme.brandLight)
    setProp('--bg-page', theme.bgPage)
    setProp('--text-body', theme.textBody)
    // Inside your setProp section
setProp('--text-active', theme.textHeading); // or theme.brand if you want it to match the brand color

    root.style.setProperty('--neutral-sat', `${theme.neutralSat}%`)

  }, [theme])

  return { theme, setTheme }
}