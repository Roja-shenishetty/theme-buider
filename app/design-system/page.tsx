"use client"

import React from "react"
import { ThemePaletteSelector } from "@/components/system/ThemePaletteSelector"
import { ColorShowcase } from "@/components/showcase/ColorShowcase"
import { Typography } from "@/components/ui/typography"

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
            Choose a foundation palette below. The entire design system, components, 
            and hardware readouts will synchronize to your choice instantly.
          </Typography>
        </header>

        {/* 🔹 Macro Controls: Palette Selector */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <Typography variant="label" className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
              Select Preset
            </Typography>
            <div className="h-px flex-1 bg-border" />
          </div>
          <ThemePaletteSelector />
        </div>

        {/* 🔹 Live Preview: Color Showcase */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <Typography variant="label" className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
              Live Component Preview
            </Typography>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="rounded-[3rem] border border-border bg-card/30 p-1">
            <ColorShowcase />
          </div>
        </div>

      </div>
    </main>
  )
}