"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/context/ThemeContext"

// Keep your existing helper function here
export function hexToHSLString(hex: string) {
  if (!hex || !hex.startsWith('#')) return "0 0% 50%"
  
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
  const { theme, setTheme: setContextTheme } = useTheme()

  // Wrapper function to update both Context and LocalStorage
  const setTheme = (newTheme: any) => {
    const updatedTheme = typeof newTheme === 'function' ? newTheme(theme) : newTheme
    setContextTheme(updatedTheme)
    localStorage.setItem('custom-theme', JSON.stringify(updatedTheme))
  }

  useEffect(() => {
    if (!theme) return
    const root = document.documentElement

    const setProp = (name: string, hex: string) => {
      if (!hex) return
      root.style.setProperty(name, hexToHSLString(hex))
    }

    // 🎨 Mapping to CSS Variables
    setProp('--primary', theme.brand)
    setProp('--primary-foreground', theme.brandFront)
    setProp('--accent', theme.accent)
    setProp('--background', theme.bgPage)
    setProp('--foreground', theme.textBody)
    setProp('--muted', theme.bgSurface)
    setProp('--muted-foreground', theme.textMuted)
    setProp('--success', theme.success)
    setProp('--error', theme.error)
    setProp('--warning', theme.warning)
    setProp('--info', theme.info)
    
    // Custom System Tokens
    root.style.setProperty('--text-active', hexToHSLString(theme.textHeading))

  }, [theme])

  return { theme, setTheme }
}