"use client"

import React from "react"
import { ThemePaletteSelector } from "@/components/system/ThemePaletteSelector"
import { ThemeShowcase } from "@/components/showcase/ThemeShowCase"
import { Typography } from "@/components/ui/typography"
import { CustomThemeBuilder } from "@/components/system/CustomThemeBuilder"

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        
        {/* 🔹 Header Section */}
        <header className="max-w-3xl space-y-6">
          <Typography variant="h1" className="text-7xl font-black tracking-tighter">
            System <span className="text-primary italic font-serif">Visuals</span>
          </Typography>
          <Typography variant="body" className="text-xl text-muted-foreground leading-relaxed">
            Build your foundation below. Changes synchronize instantly across hardware readouts and components.
          </Typography>
        </header>

        {/* 🔹 Controls Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: The Builder (Where you define custom colors) */}
          <div className="lg:col-span-1">
             <CustomThemeBuilder />
          </div>

          {/* Right: The Presets (Quick selection) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-border" />
              <Typography variant="label" className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
                Preset Selection
              </Typography>
              <div className="h-px flex-1 bg-border" />
            </div>
            <ThemePaletteSelector />
          </div>
        </div>

        {/* 🔹 Live Preview */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <Typography variant="label" className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
              Live Component Preview
            </Typography>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="rounded-[3rem] border border-border bg-card/30 p-1">
            <ThemeShowcase />
          </div>
        </div>
      </div>
    </main>
  )
}