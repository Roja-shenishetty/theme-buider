"use client"

import React from "react"
import { useThemeEngine } from "@/hooks/useThemeEngine"
import { Typography } from "@/components/ui/typography"
import { Check, Palette } from "lucide-react"

const PRESETS = [
  {
    id: "midnight",
    name: "Midnight Nebula",
    data: {
      brand: "#7c3aed",
      brandDark: "#5b21b6",
      brandLight: "#a78bfa",
      accent: "#f472b6",
      bgPage: "#0f172a",
      bgSurface: "#1e293b",
      textHeading: "#ffffff",
      textBody: "#94a3b8",
    }
  },
  {
    id: "emerald",
    name: "Emerald Forest",
    data: {
      brand: "#10b981",
      brandDark: "#065f46",
      brandLight: "#6ee7b7",
      accent: "#f59e0b",
      bgPage: "#f0fdf4",
      bgSurface: "#ffffff",
      textHeading: "#064e3b",
      textBody: "#14532d",
    }
  },
  {
    id: "cyber",
    name: "Cyber Punk",
    data: {
      brand: "#06b6d4",
      brandDark: "#0891b2",
      brandLight: "#67e8f9",
      accent: "#f43f5e",
      bgPage: "#000000",
      bgSurface: "#111111",
      textHeading: "#ffffff",
      textBody: "#9ca3af",
    }
  },
  {
    id: "rose-gold",
    name: "Rose Luxury",
    data: {
      brand: "#e11d48",      // Deep Rose
      brandDark: "#9f1239",
      brandLight: "#fb7185",
      accent: "#f59e0b",     // Gold Amber
      bgPage: "#fff1f2",     // Soft Petal
      bgSurface: "#ffffff",
      textHeading: "#4c0519",
      textBody: "#881337",
    }
  },
  {
    id: "ocean-deep",
    name: "Oceanic Depth",
    data: {
      brand: "#0ea5e9",      // Sky Blue
      brandDark: "#0369a1",
      brandLight: "#7dd3fc",
      accent: "#2dd4bf",     // Teal
      bgPage: "#f0f9ff",     // Ice White
      bgSurface: "#ffffff",
      textHeading: "#0c4a6e",
      textBody: "#075985",
    }
  },
  {
    id: "crimson-void",
    name: "Crimson Void",
    data: {
      brand: "#dc2626",      // Red
      brandDark: "#7f1d1d",
      brandLight: "#f87171",
      accent: "#ffffff",     // Pure White
      bgPage: "#0a0a0a",     // Pitch Black
      bgSurface: "#171717",
      textHeading: "#ffffff",
      textBody: "#a3a3a3",
    }
  },
  {
    id: "nordic-frost",
    name: "Nordic Frost",
    data: {
      brand: "#6366f1",      // Indigo
      brandDark: "#3730a3",
      brandLight: "#a5b4fc",
      accent: "#10b981",     // Emerald
      bgPage: "#f8fafc",     // Ghost White
      bgSurface: "#ffffff",
      textHeading: "#1e293b",
      textBody: "#475569",
    }
  },
  {
    id: "matrix",
    name: "Terminal Green",
    data: {
      brand: "#22c55e",      // Matrix Green
      brandDark: "#14532d",
      brandLight: "#86efac",
      accent: "#3b82f6",     // Blue
      bgPage: "#050505",     // Deep Black
      bgSurface: "#0f172a",
      textHeading: "#4ade80",
      textBody: "#16a34a",
    }
  }
];

export function ThemePaletteSelector() {
  const { theme, setTheme } = useThemeEngine()

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRESETS.map((preset) => {
          const isActive = theme.brand === preset.data.brand;
          
          return (
            <div 
              key={preset.id}
              onClick={() => setTheme((prev: any) => ({ ...prev, ...preset.data }))}
              className={`group relative cursor-pointer p-6 rounded-[2rem] border-2 transition-all duration-500 
                ${isActive ? "border-primary bg-primary/5 shadow-xl" : "border-border hover:border-primary/30 bg-card"}`}
            >
              {isActive && (
                <div className="absolute top-4 right-4 bg-primary p-1 rounded-full text-white animate-in zoom-in">
                  <Check size={12} strokeWidth={4} />
                </div>
              )}
              
              <Typography variant="h4" className="font-bold mb-4">{preset.name}</Typography>
              
              {/* Swatch Preview */}
              <div className="flex gap-2 mb-6">
                <div className="h-10 flex-1 rounded-lg shadow-sm" style={{ backgroundColor: preset.data.brand }} />
                <div className="h-10 flex-1 rounded-lg shadow-sm" style={{ backgroundColor: preset.data.accent }} />
                <div className="h-10 flex-1 rounded-lg border border-black/5 shadow-sm" style={{ backgroundColor: preset.data.bgPage }} />
              </div>

              <div className="flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Apply Preset</span>
                <Palette size={14} className="text-primary" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}