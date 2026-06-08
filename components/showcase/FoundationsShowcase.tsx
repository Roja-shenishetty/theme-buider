"use client"

import React from "react"
import { Typography } from "@/components/ui/typography"
import { Palette, Baseline, Ruler, CircleDashed, Layers } from "lucide-react"

export function FoundationsShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Palette className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Tokens</span>
        </div>
        
        <Typography variant="h1" className="text-h2 font-bold mb-4 tracking-tight">
          Design Foundations
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
          <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
            Our foundations rely on a heavily calibrated fluid scale. Spacing, typography, and geometry automatically adjust based on viewport width, guaranteeing perfect density.
          </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Layout */}
      <div className="space-y-16">
        
        {/* 1. Typography Showcase (Using card-blueprint) */}
        <section className="space-section animate-fade-up">
          <div className="flex items-center gap-2 mb-6">
            <Baseline className="w-5 h-5 text-primary" />
            <h2 className="text-h4 font-bold">Typography Hierarchy</h2>
          </div>
          
          <div className="card card-blueprint">
            <div className="card-content space-y-8">
              <div className="flex flex-col gap-1 border-b border-primary/10 pb-6">
                <span className="text-label text-primary/50">.text-h1 (Fluid: 2.5rem - 4.5rem)</span>
                <Typography variant="h1" className="text-h1">The quick brown fox</Typography>
              </div>
              <div className="flex flex-col gap-1 border-b border-primary/10 pb-6">
                <span className="text-label text-primary/50">.text-h2 (Fluid: 2rem - 3rem)</span>
                <Typography variant="h2" className="text-h2">Jumps over the lazy dog</Typography>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-label text-primary/50">.text-body (Base: 1rem)</span>
                <Typography variant="body" className="text-body max-w-2xl text-muted-foreground">
                  This is standard body text used for descriptions, paragraphs, and general UI reading elements. It features a relaxed line height for optimal legibility across mobile, tablet, and desktop layers.
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Spacing Showcase (Using standard cards + hover effects) */}
        <section className="space-section animate-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-2 mb-6">
            <Ruler className="w-5 h-5 text-primary" />
            <h2 className="text-h4 font-bold">Micro-Scale Spacing</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['space-2', 'space-4', 'space-8', 'space-12'].map((space) => (
              <div key={space} className="card card-hover-effect card-metric-glow">
                <div className="card-content flex flex-col items-center justify-center gap-6">
                  {/* Visual bounding box */}
                  <div className="bg-primary/10 border border-primary/30 border-dashed radius-md w-full h-16 flex items-center justify-center relative overflow-hidden">
                    {/* The actual fluid padding representation */}
                    <div className="bg-primary/40 h-full w-full flex items-center justify-center transition-all duration-300" style={{ padding: `var(--${space})` }}>
                       <div className="bg-background w-full h-full radius-sm shadow-sm"></div>
                    </div>
                  </div>
                  <span className="text-code">var(--{space})</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Geometry & Radius (New: Showcasing the Radius Blueprint) */}
        <section className="space-section animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center gap-2 mb-6">
            <CircleDashed className="w-5 h-5 text-primary" />
            <h2 className="text-h4 font-bold">Geometric Radius</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['radius-sm', 'radius-md', 'radius-lg', 'radius-xl', 'radius-full'].map((radius) => (
              <div key={radius} className="card card-hover-effect flex flex-col items-center justify-center p-6 gap-4 text-center">
                <div className={`w-16 h-16 bg-primary border-2 border-primary/20 ${radius} shadow-sm`} />
                <span className="text-label text-primary/70">.{radius}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Surfaces & Glassmorphism (New: Showcasing card-glass) */}
        <section className="space-section animate-fade-up" style={{ animationDelay: "300ms" }}>
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-primary" />
            <h2 className="text-h4 font-bold">Advanced Surfaces</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-8 radius-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background border border-primary/10 relative overflow-hidden">
            
            {/* Standard Card */}
            <div className="card card-hover-effect">
              <div className="card-header border-b border-primary/10">
                <h3 className="card-title text-lg">Standard Card</h3>
                <p className="card-description">Solid background layer</p>
              </div>
              <div className="card-content">
                <p className="text-small text-muted-foreground">Uses the foundational `--background` and `--border` variables for clean, opaque content delivery.</p>
              </div>
            </div>

            {/* Glass Card */}
            <div className="card card-glass card-hover-effect relative z-10">
              <div className="card-header border-b border-white/10">
                <h3 className="card-title text-lg">Glass Interface</h3>
                <p className="card-description text-primary/80">Cyber / Dashboard aesthetic</p>
              </div>
              <div className="card-content">
                <p className="text-small opacity-90">Powered by `.card-glass`. Uses `backdrop-filter: blur(12px)` to visually elevate elements above dense background meshes.</p>
              </div>
            </div>

            {/* Decorative background element to prove the glass works */}
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/40 rounded-full blur-3xl pointer-events-none" />
          </div>
        </section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="system-footer-title">Foundation Rules</div>
        <div className="system-footer-grid">
          <div className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
            <span className="system-footer-item-heading">Fluid Clamp Squashing</span>
            <p className="system-footer-item-text">
              Notice how <code>--space-4</code> uses <code>clamp()</code>. This ensures layouts do not crash when mobile keyboards open by strictly calculating <code>vw</code> against established baselines.
            </p>
          </div>
          <div className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
            <span className="system-footer-item-heading">System State Borders</span>
            <p className="system-footer-item-text">
              Borders leverage alpha channels like <code>border-primary/10</code>. This guarantees that your glassmorphism effects and light/dark mode transitions blend seamlessly into backgrounds.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}