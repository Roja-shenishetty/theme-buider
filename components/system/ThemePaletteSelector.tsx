"use client"

import React from "react"
import { useThemeEngine } from "@/hooks/useThemeEngine"
import { Typography } from "@/components/ui/typography"
import { Check, Palette } from "lucide-react"

// 1. Define strict TypeScript interfaces for better IntelliSense and safety
export interface ThemeData {
  brand: string;
  brandDark: string;
  brandLight: string;
  accent: string;
  bgPage: string;
  bgSurface: string;
  textHeading: string;
  textBody: string;
  statusSuccess: string;
  statusWarning: string;
  statusDanger: string;
}

export interface ThemePreset {
  id: string;
  name: string;
  data: ThemeData;
}

const PRESETS: ThemePreset[] = [
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
      statusSuccess: "#10b981",
      statusWarning: "#f59e0b",
      statusDanger: "#ef4444",
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
      statusSuccess: "#00ff41",
      statusWarning: "#fdf500",
      statusDanger: "#ff0055",
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
      statusSuccess: "#059669",
      statusWarning: "#d97706",
      statusDanger: "#be123c",
    }
  },
  {
    id: "matrix",
    name: "Terminal Green",
    data: {
      brand: "#22c55e",
      brandDark: "#14532d",
      brandLight: "#86efac",
      accent: "#3b82f6",
      bgPage: "#050505",
      bgSurface: "#0f172a",
      textHeading: "#4ade80",
      textBody: "#16a34a",
      statusSuccess: "#22c55e",
      statusWarning: "#facc15",
      statusDanger: "#dc2626",
    }
  },
  {
    id: "rose-gold",
    name: "Rose Luxury",
    data: {
      brand: "#e11d48",
      brandDark: "#9f1239",
      brandLight: "#fb7185",
      accent: "#f59e0b",
      bgPage: "#fff1f2",
      bgSurface: "#ffffff",
      textHeading: "#4c0519",
      textBody: "#881337",
      statusSuccess: "#10b981",
      statusWarning: "#d97706",
      statusDanger: "#e11d48",
    }
  },
  {
    id: "ocean-deep",
    name: "Oceanic Depth",
    data: {
      brand: "#0ea5e9",
      brandDark: "#0369a1",
      brandLight: "#7dd3fc",
      accent: "#2dd4bf",
      bgPage: "#f0f9ff",
      bgSurface: "#ffffff",
      textHeading: "#0c4a6e",
      textBody: "#075985",
      statusSuccess: "#059669",
      statusWarning: "#ea580c",
      statusDanger: "#e11d48",
    }
  },
  {
    id: "crimson-void",
    name: "Crimson Void",
    data: {
      brand: "#dc2626",
      brandDark: "#7f1d1d",
      brandLight: "#f87171",
      accent: "#ffffff",
      bgPage: "#0a0a0a",
      bgSurface: "#171717",
      textHeading: "#ffffff",
      textBody: "#a3a3a3",
      statusSuccess: "#16a34a",
      statusWarning: "#f59e0b",
      statusDanger: "#ff4d4d",
    }
  },
  {
    id: "nordic-frost",
    name: "Nordic Frost",
    data: {
      brand: "#6366f1",
      brandDark: "#3730a3",
      brandLight: "#a5b4fc",
      accent: "#10b981",
      bgPage: "#f8fafc",
      bgSurface: "#ffffff",
      textHeading: "#1e293b",
      textBody: "#475569",
      statusSuccess: "#059669",
      statusWarning: "#d97706",
      statusDanger: "#e11d48",
    }
  },
  {
    id: "clay-minimal",
    name: "Modern Clay",
    data: {
      brand: "#171717",
      brandDark: "#000000",
      brandLight: "#404040",
      accent: "#f43f5e",
      bgPage: "#f5f5f4",
      bgSurface: "#e7e5e4",
      textHeading: "#1c1917",
      textBody: "#44403c",
      statusSuccess: "#16a34a",
      statusWarning: "#d97706",
      statusDanger: "#ef4444",
    }
  },
  {
    id: "dracula-pro",
    name: "Dracula Legacy",
    data: {
      brand: "#bd93f9",
      brandDark: "#6272a4",
      brandLight: "#ff79c6",
      accent: "#50fa7b",
      bgPage: "#282a36",
      bgSurface: "#44475a",
      textHeading: "#f8f8f2",
      textBody: "#6272a4",
      statusSuccess: "#50fa7b",
      statusWarning: "#f1fa8c",
      statusDanger: "#ff5555",
    }
  },
  {
    id: "vivid-canary",
    name: "Electric Startup",
    data: {
      brand: "#facc15",
      brandDark: "#a16207",
      brandLight: "#fef08a",
      accent: "#000000",
      bgPage: "#ffffff",
      bgSurface: "#fafafa",
      textHeading: "#000000",
      textBody: "#171717",
      statusSuccess: "#16a34a",
      statusWarning: "#ca8a04",
      statusDanger: "#dc2626",
    }
  },
  {
    id: "espresso-roast",
    name: "Espresso Roast",
    data: {
      brand: "#78350f",
      brandDark: "#451a03",
      brandLight: "#b45309",
      accent: "#d97706",
      bgPage: "#fffbeb",
      bgSurface: "#fef3c7",
      textHeading: "#451a03",
      textBody: "#92400e",
      statusSuccess: "#166534",
      statusWarning: "#b45309",
      statusDanger: "#991b1b",
    }
  }
];

export function ThemePaletteSelector() {
  const { theme, setTheme } = useThemeEngine()

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar p-1">
        {PRESETS.map((preset) => {
          const isActive = theme.brand === preset.data.brand;
          
          return (
            <button 
              key={preset.id}
              type="button"
              aria-pressed={isActive}
              // 2. Safely type the prev state
              onClick={() => setTheme((prev: ThemeData) => ({ ...prev, ...preset.data }))}
              // 3. Changed to <button> for accessibility, added focus rings and hover transforms
              className={`text-left group relative w-full p-5 rounded-[1.5rem] border-2 transition-all duration-300 
                hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
                ${isActive 
                  ? "border-primary bg-primary/5 shadow-md" 
                  : "border-border hover:border-primary/40 bg-card hover:shadow-sm"
                }`}
            >
              {isActive && (
                <div className="absolute top-4 right-4 bg-primary p-1 rounded-full text-primary-foreground shadow-sm animate-in zoom-in duration-300">
                  <Check size={14} strokeWidth={3} />
                </div>
              )}
              
              <Typography variant="h4" className="font-semibold text-base mb-4 pr-6">
                {preset.name}
              </Typography>
              
              {/* 4. Mini App-Layout Preview (Much better UX context than plain swatches) */}
              <div 
                className="h-24 w-full rounded-xl border border-black/10 dark:border-white/10 mb-4 overflow-hidden flex flex-col shadow-inner"
                style={{ backgroundColor: preset.data.bgPage }}
                aria-hidden="true"
              >
                {/* Header mock */}
                <div 
                  className="h-5 w-full flex items-center px-2 border-b border-black/5 dark:border-white/5" 
                  style={{ backgroundColor: preset.data.bgSurface }}
                >
                  <div className="w-12 h-1.5 rounded-full" style={{ backgroundColor: preset.data.textHeading, opacity: 0.8 }} />
                </div>
                
                {/* Body mock */}
                <div className="flex flex-1 p-2 gap-2">
                  {/* Sidebar mock */}
                  <div className="w-5 h-full rounded-md shadow-sm" style={{ backgroundColor: preset.data.brand }} />
                  
                  {/* Content area mock */}
                  <div className="flex-1 flex flex-col gap-1.5 py-1">
                    <div className="h-2 w-2/3 rounded-full" style={{ backgroundColor: preset.data.textHeading }} />
                    <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: preset.data.textBody, opacity: 0.7 }} />
                    <div className="h-1.5 w-4/5 rounded-full" style={{ backgroundColor: preset.data.textBody, opacity: 0.7 }} />
                    
                    {/* Action button mock */}
                    <div className="mt-auto h-4 w-10 rounded-md shadow-sm" style={{ backgroundColor: preset.data.accent }} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-muted-foreground">
                  Apply Theme
                </span>
                <Palette size={14} className="text-primary" />
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}