"use client"

import React, { useState } from "react" // 🔹 Added useState for modal control
import { useThemeEngine } from "@/hooks/useThemeEngine"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ThemePaletteSelector } from "../system/ThemePaletteSelector" // 🔹 Ensure this is imported
import { 
  Zap, 
  Cpu, 
  ArrowRight, 
  ShieldCheck, 
  Workflow,
  Palette, // 🔹 Icon for the new button
  X        // 🔹 Icon to close the modal
} from "lucide-react"

export function ThemeShowcase() {
  const { theme } = useThemeEngine()
  const [isModalOpen, setIsModalOpen] = useState(false) // 🔹 Local state for the modal

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background px-6 py-12 transition-colors duration-500">
      
      {/* 🔹 THEME PRESETS MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          {/* Backdrop blur */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-lg" 
            onClick={() => setIsModalOpen(false)} 
          />
          
          {/* Modal Card */}
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] border border-border bg-background p-8 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Palette className="text-primary" size={24} />
                <Typography variant="h3" className="font-black tracking-tight">System Presets</Typography>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)} className="rounded-full">
                <X size={20} />
              </Button>
            </div>

            {/* 🔹 The Palette Selector component rendered inside the modal */}
            <ThemePaletteSelector />
            
            <div className="mt-12 flex justify-center border-t border-border pt-8">
              <Button onClick={() => setIsModalOpen(false)} className="rounded-full px-12 py-6 font-bold">
                Finish Customizing
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 DYNAMIC AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute -left-[10%] -top-[10%] h-[700px] w-[700px] animate-pulse rounded-full blur-[120px] opacity-20 transition-colors duration-1000" 
          style={{ backgroundColor: theme.brand }}
        />
        <div 
          className="absolute bottom-[20%] -right-[10%] h-[500px] w-[500px] rounded-full blur-[100px] opacity-10 transition-colors duration-1000" 
          style={{ backgroundColor: theme.accent }}
        />
      </div>

      {/* 🔹 HERO SECTION */}
      <header className="flex flex-col items-center text-center animate-fade-up">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
          <Zap className="h-3 w-3 fill-primary" />
          Themed Foundation
        </div>
        
        <Typography variant="h1" className="text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl">
          Design <span className="font-serif italic text-primary">Redefined.</span>
        </Typography>
        
        <Typography variant="body" className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Experience the power of a fully dynamic design system. Every element on this page 
          is currently reactive to your <span className="font-bold text-primary">{theme.brand}</span> configuration.
        </Typography>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button className="group rounded-xl bg-primary px-8 py-6 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95">
            Explore System
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* 🔹 TRIGGER BUTTON FOR MODAL */}
          <Button 
            variant="outline" 
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl border-primary/20 px-8 py-6 text-lg hover:bg-primary/5 transition-all"
          >
            <Palette className="mr-2 h-5 w-5 text-primary" />
            Browse Presets
          </Button>
        </div>
      </header>

      {/* 🔹 COMPONENT GRID */}
      <section className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Hardware Status Card */}
        <div className="group rounded-2xl border border-primary/10 bg-card/50 p-8 shadow-xl shadow-primary/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2">
          <div className="flex justify-between items-start mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Cpu size={24} />
            </div>
            <div className="text-right">
              <Typography variant="label" className="text-[10px] font-black uppercase text-primary">Core-01</Typography>
              <Typography variant="h4" className="font-bold">84% Speed</Typography>
            </div>
          </div>
          <div className="space-y-3">
             <div className="h-2 w-full overflow-hidden rounded-full bg-primary/10">
                <div className="h-full bg-primary transition-all duration-1000" style={{ width: '84%' }} />
             </div>
             <Typography variant="small" className="text-xs leading-relaxed text-muted-foreground">
                Primary tokens drive your core hardware readouts and critical interaction paths.
             </Typography>
          </div>
        </div>

        {/* Security Hub Card */}
        <div className="rounded-2xl border border-accent/10 bg-card/50 p-8 shadow-xl shadow-accent/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2">
           <div className="mb-6 flex items-center gap-4">
             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
               <ShieldCheck size={24} />
             </div>
             <Typography variant="h4" className="font-bold">Security Hub</Typography>
           </div>
           <div className="mb-6 rounded-md border border-accent/20 bg-black/5 p-4 dark:bg-black/40 font-mono text-[10px]">
              <span className="text-accent opacity-50 uppercase tracking-tighter">Hex Reference:</span>
              <div className="text-accent font-bold mt-1 uppercase">{theme.accent}</div>
           </div>
           <Button variant="outline" className="w-full rounded-lg border-accent/30 py-5 text-[10px] font-bold uppercase tracking-widest text-accent hover:bg-accent/10">
             Reset Firewall
           </Button>
        </div>

        {/* Workflow Card */}
        <div className="rounded-2xl border border-border bg-card/30 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
           <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground text-background">
                <Workflow size={24} />
              </div>
              <Typography variant="h4" className="font-bold">Workflow</Typography>
           </div>
           <div className="mb-4 flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary/20 text-[10px] font-bold shadow-sm">
                  U{i}
                </div>
              ))}
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] font-bold text-muted-foreground">+2</div>
           </div>
           <Typography variant="small" className="italic text-muted-foreground">
             Connecting with family across devices...
           </Typography>
        </div>
      </section>
    </div>
  )
}