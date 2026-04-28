"use client"
import { useState, useEffect } from "react"

export function hexToHSL(hex: string) {
  let r = parseInt(hex.slice(1, 3), 16) / 255
  let g = parseInt(hex.slice(3, 5), 16) / 255
  let b = parseInt(hex.slice(5, 7), 16) / 255
  let max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0, l = (max + min) / 2

  if (max !== min) {
    let d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
    string: `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
  }
}

export function useThemeEngine() {
  const [theme, setTheme] = useState({
    brand: "#7c3aed",
    accent: "#B91048",
    success: "#16a34a",
    error: "#dc2626",
    warning: "#d97706",
    info: "#2563eb",
    neutralSat: 5
  })

  // 🔹 LOAD FROM STORAGE: Runs once on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("system-theme")
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme))
    }
  }, [])

  // 🔹 INJECT CSS & SAVE TO STORAGE: Runs every time 'theme' changes
  useEffect(() => {
    // Save to persistence
    localStorage.setItem("system-theme", JSON.stringify(theme))

    const brand = hexToHSL(theme.brand)
    const accent = hexToHSL(theme.accent)
    const success = hexToHSL(theme.success)
    const error = hexToHSL(theme.error)
    const warning = hexToHSL(theme.warning)
    const info = hexToHSL(theme.info)

    const setProp = (name: string, value: string) => 
      document.documentElement.style.setProperty(name, value)

    // Brand Set
    setProp('--primary', brand.string)
    setProp('--primary-dark', `${brand.h} ${brand.s}% ${brand.l - 15}%`)
    setProp('--primary-light', `${brand.h} ${brand.s}% ${brand.l + 20}%`)
    setProp('--primary-foreground', brand.l > 60 ? "222 47% 11%" : "0 0% 100%")

    // Accent Set
    setProp('--accent', accent.string)
    setProp('--accent-dark', `${accent.h} ${accent.s}% ${accent.l - 15}%`)
    setProp('--accent-light', `${accent.h} ${accent.s}% ${accent.l + 20}%`)
    setProp('--accent-foreground', accent.l > 60 ? "222 47% 11%" : "0 0% 100%")

    // Status Set
    setProp('--success', success.string)
    setProp('--error', error.string)
    setProp('--warning', warning.string)
    setProp('--info', info.string)

    // Background Set 
    setProp('--background-page', `${brand.h} ${theme.neutralSat}% 98%`)
    setProp('--background-surface', `0 0% 100%`)
    setProp('--background-elevated', `${brand.h} ${theme.neutralSat}% 92%`)
    setProp('--background-sunken', `${brand.h} ${theme.neutralSat}% 10%`)

    // Text Set
    setProp('--text-heading', `${brand.h} ${brand.s}% 10%`)
    setProp('--text-body', `${brand.h} 10% 30%`)
    setProp('--text-muted', `${brand.h} 5% 50%`)
    setProp('--text-link', brand.string)

  }, [theme])

  return { theme, setTheme }
}