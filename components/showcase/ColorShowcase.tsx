"use client"

import React from "react"
import { useThemeEngine } from "@/hooks/useThemeEngine"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  Layers, 
  Cpu, 
  ArrowRight, 
  ShieldCheck, 
  Activity,
  Workflow
} from "lucide-react"

export function ColorShowcase() {
  const { theme } = useThemeEngine()

  return (
    <div className="page-container space-page relative overflow-x-hidden min-h-screen">
      
      {/* 🔹 DYNAMIC AMBIENT BACKGROUND */}
      {/* These blurs react to your primary color selection */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-primary/10 radius-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 radius-full blur-[100px]" />
      </div>

      {/* 🔹 HERO SECTION */}
      <header className="space-section py-12 flex flex-col items-center text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 radius-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
          <Zap className="w-3 h-3 fill-primary" />
          Themed Foundation
        </div>
        
        <Typography variant="h1" className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
          Design <span className="text-primary italic font-serif">Redefined.</span>
        </Typography>
        
        <Typography variant="body" className="max-w-2xl mx-auto text-body-muted mt-8 text-lg leading-relaxed">
          Experience the power of a fully dynamic design system. Every element on this page 
          is currently reactive to your <span className="text-primary font-bold">{theme.brand}</span> configuration.
        </Typography>

        <div className="flex flex-wrap justify-center gap-wide mt-10">
          <Button className="btn-primary px-8 py-6 radius-xl text-lg font-bold shadow-2xl shadow-primary/30 group">
            Explore System
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="px-8 py-6 radius-xl border-primary/20 hover:bg-primary/5 text-lg">
            System Specs
          </Button>
        </div>
      </header>

      {/* 🔹 COMPONENT GRID (The "Random" Cards) */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-wide pt-12">
        
        {/* 1. Hardware Status Card */}
        <div className="card p-8 border-primary/20 bg-primary/5 space-y-6 hover:-translate-y-2 transition-all duration-500 shadow-xl shadow-primary/5">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 radius-lg bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
              <Cpu size={24} />
            </div>
            <div className="text-right">
              <Typography variant="label" className="text-[10px] font-black text-primary uppercase">Core-01</Typography>
              <Typography variant="h4" className="font-bold">84% Speed</Typography>
            </div>
          </div>
          <div className="space-y-3">
             <div className="h-2 w-full bg-primary/10 radius-full overflow-hidden">
                <div className="h-full bg-primary animate-shimmer" style={{ width: '84%' }} />
             </div>
             <Typography variant="small" className="text-body-muted text-xs leading-relaxed">
               Primary tokens drive your core hardware readouts and critical interaction paths.
             </Typography>
          </div>
        </div>

        {/* 2. Security Hub Card */}
        <div className="card p-8 border-accent/20 bg-accent/5 space-y-6 hover:-translate-y-2 transition-all duration-500">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 radius-lg bg-accent text-accent-foreground flex items-center justify-center">
               <ShieldCheck size={24} />
             </div>
             <Typography variant="h4" className="font-bold">Security Hub</Typography>
           </div>
           <div className="p-4 bg-black/40 radius-md border border-accent/20">
              <code className="text-accent text-xs font-mono">STATUS: {theme.accent}</code>
           </div>
           <Button variant="outline" className="w-full border-accent/30 text-accent hover:bg-accent/10 py-5 radius-lg font-bold uppercase tracking-widest text-[10px]">
             Reset Firewall
           </Button>
        </div>

        {/* 3. Workflow Integration Card */}
        <div className="card p-8 border-white/10 bg-muted/20 backdrop-blur-md space-y-6 lg:col-span-1 md:col-span-2">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 radius-lg bg-foreground text-background flex items-center justify-center">
                <Workflow size={24} />
              </div>
              <Typography variant="h4" className="font-bold">Workflow</Typography>
           </div>
           <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 radius-full border-2 border-background bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                  U{i}
                </div>
              ))}
              <div className="w-10 h-10 radius-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground">+2</div>
           </div>
           <Typography variant="small" className="text-body-muted italic">
             Connecting with your whole family with your watch...
           </Typography>
        </div>

      </section>

      {/* 🔹 SUB-HERO / CTA */}
      <section className="mt-20 py-20 radius-3xl bg-primary/5 border border-primary/10 flex flex-col items-center text-center space-y-8 overflow-hidden relative">
         {/* Decorative element */}
         <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
            <Activity size={200} className="text-primary" />
         </div>
         
         <Typography variant="h2" className="text-4xl md:text-6xl font-black tracking-tighter">
            Ready to <span className="text-primary italic">Deploy?</span>
         </Typography>
         
         <Button className="btn-primary px-12 py-7 radius-full text-xl font-black shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)]">
            Initialize Design System
         </Button>
      </section>

    </div>
  )
}