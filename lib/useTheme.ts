"use client"

import { useEffect } from "react"
import { generateTheme, hexToHsl } from "@/lib/theme"

export function useApplyTheme(theme: any) {
  useEffect(() => {
    const root = document.documentElement

    const t = generateTheme(theme.colors.primary)

    const set = (name: string, value?: string) => {
      if (!value) return

      const hsl = hexToHsl(value)

      // Debug (optional)
      console.log(name, value, "→", hsl)

      root.style.setProperty(name, hsl)
    }

    // 🎨 PRIMARY SYSTEM (Material roles)
    set("--primary", t.primary)
    set("--primary-foreground", t.primaryForeground)

    set("--primary-container", t.primaryContainer)
    set("--primary-container-foreground", t.primaryContainerForeground)

    set("--secondary", t.secondary)
    set("--secondary-foreground", t.secondaryForeground)

    // 🎨 USER OVERRIDES
    set("--background", theme.colors?.background)
    set("--surface", theme.colors?.surface)

    // 🎨 SYSTEM FALLBACKS
    set("--foreground", t.foreground)
    set("--border", t.outline)
    set("--muted", t.surfaceVariant) // ✅ correct

    // 🔤 TYPOGRAPHY (safe access)
    root.style.setProperty("--font-size", `${theme.typography?.fontSize ?? 16}px`)
    root.style.setProperty("--font-weight", `${theme.typography?.fontWeight ?? 500}`)
    root.style.setProperty("--line-height", `${theme.typography?.lineHeight ?? 1.5}`)

    // 📐 LAYOUT
    root.style.setProperty("--radius", `${theme.radius ?? 16}px`)
    root.style.setProperty("--spacing", `${theme.spacing ?? 16}px`)

    // 🧩 COMPONENT TOKENS
    root.style.setProperty(
      "--button-radius",
      `${theme.components?.button?.radius ?? 16}px`
    )

    root.style.setProperty(
      "--card-radius",
      `${theme.components?.card?.radius ?? 16}px`
    )

  }, [theme])
}