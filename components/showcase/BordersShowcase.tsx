"use client"

import { Typography } from "@/components/ui/typography"
import { Layout, Box, Focus, Layers, PencilRuler } from "lucide-react"

/* 🔹 Contextual Section Wrapper */
function ShowcaseSection({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6">
        <Typography variant="h3" className="tracking-tight font-bold text-primary/90">
          {title}
        </Typography>
        {description && (
          <Typography variant="body" className="text-body-muted text-sm max-w-2xl">
            {description}
          </Typography>
        )}
      </div>

      <div className="card bg-muted/5 border-dashed border-2 border-primary/10 p-10 flex flex-wrap items-center gap-wide overflow-hidden relative">
        <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none rotate-12">
          <PencilRuler className="w-12 h-12" />
        </div>
        {children}
      </div>
    </section>
  )
}

export function BordersShowcase() {
  return (
    <div className="page-container space-page">

      {/* 🔹 Technical Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Structural Engine
        </div>
   
        <Typography variant="body" className="text-body-muted max-w-2xl text-lg mt-2">
          Defining spatial boundaries, elevation, and hit-box clarity using your system's design tokens.
        </Typography>
      </header>

      {/* 🔹 Elevation through Width */}
      <ShowcaseSection 
        title="Stroke Weight" 
        description="Varying border widths to establish structural hierarchy."
      >
        <div className="flex flex-wrap items-center gap-wide">
          <div className="border border-primary/20 pad-4 radius-md bg-background shadow-sm text-sm font-mono">1px</div>
          <div className="border-2 border-primary/20 pad-4 radius-md bg-background shadow-sm text-sm font-mono">2px</div>
          <div className="border-4 border-primary/20 pad-4 radius-md bg-background shadow-sm text-sm font-mono">4px</div>
          <div className="border-8 border-primary/20 pad-4 radius-md bg-background shadow-sm text-sm font-mono">8px</div>
        </div>
      </ShowcaseSection>

      {/* 🔹 Geometric Radius */}
      <ShowcaseSection 
        title="Radius Architecture" 
        description="Your core tokens for rounding corners, from technical (sm) to organic (full)."
      >
        <div className="flex flex-wrap items-end gap-wide">
          <div className="w-16 h-16 bg-primary/10 border border-primary/20 radius-sm flex items-center justify-center text-[10px] font-bold">SM</div>
          <div className="w-16 h-16 bg-primary/10 border border-primary/20 radius-md flex items-center justify-center text-[10px] font-bold">MD</div>
          <div className="w-20 h-20 bg-primary/10 border border-primary/20 radius-lg flex items-center justify-center text-[10px] font-bold">LG</div>
          <div className="w-20 h-20 bg-primary/10 border border-primary/20 radius-xl flex items-center justify-center text-[10px] font-bold">XL</div>
          <div className="w-16 h-16 bg-primary/10 border border-primary/20 radius-full flex items-center justify-center text-[10px] font-bold">FULL</div>
        </div>
      </ShowcaseSection>

      {/* 🔹 Side-Specific Accents */}
      <ShowcaseSection 
        title="Directional Accents" 
        description="Using single-side borders for callouts, navigation items, and active states."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-wide w-full">
          <div className="border-t-4 border-primary bg-muted/30 pad-6 text-center font-bold uppercase text-caption">Top</div>
          <div className="border-b-4 border-accent bg-muted/30 pad-6 text-center font-bold uppercase text-caption">Bottom</div>
          <div className="border-l-4 border-success bg-muted/30 pad-6 text-center font-bold uppercase text-caption">Left</div>
          <div className="border-r-4 border-danger bg-muted/30 pad-6 text-center font-bold uppercase text-caption">Right</div>
        </div>
      </ShowcaseSection>

      {/* 🔹 Glass Dividers */}
      <ShowcaseSection 
        title="Dividers & Lists" 
        description="Clean content separation using your divide utilities."
      >
        <div className="divide-y divide-primary/10 border border-primary/10 radius-lg bg-background/50 backdrop-blur-sm overflow-hidden w-full max-w-sm">
          <div className="pad-4 hover:bg-primary/5 transition-colors cursor-pointer flex items-center gap-3">
            <Layers className="w-4 h-4 text-primary" /> Item Alpha
          </div>
          <div className="pad-4 hover:bg-primary/5 transition-colors cursor-pointer flex items-center gap-3">
             <Box className="w-4 h-4 text-primary" /> Item Beta
          </div>
          <div className="pad-4 hover:bg-primary/5 transition-colors cursor-pointer flex items-center gap-3 text-destructive">
             <Focus className="w-4 h-4" /> Item Gamma
          </div>
        </div>
      </ShowcaseSection>

      {/* 🔹 Interaction & Focus */}
      <ShowcaseSection 
        title="Accessibility Rings" 
        description="Focus states that ensure high-visibility during keyboard navigation."
      >
        <div className="flex gap-wide">
          <button className="pad-4 bg-foreground text-background radius-md focus:ring-4 focus:ring-primary/40 focus:outline-none transition-all duration-300">
            Primary Focus
          </button>
          <button className="pad-4 border border-primary/20 radius-md focus:ring-offset-2 focus:ring-2 focus:ring-primary transition-all">
            Offset Focus
          </button>
        </div>
      </ShowcaseSection>

      {/* 🔹 Real Usage: Technical Components */}
      <ShowcaseSection 
        title="Pattern Implementation" 
        description="Real-world combinations of borders, radius, and shadows."
      >
        <div className="grid md:grid-cols-2 gap-wide w-full">
          {/* Card with Glow */}
          <div className="pad-6 border border-primary/10 radius-xl bg-background hover:border-primary/40 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all group">
            <Typography variant="body" className="font-bold group-hover:text-primary transition-colors">
              Elevated Component
            </Typography>
            <Typography variant="muted" className="text-xs mt-1">
              Border + Radius + Soft Glow
            </Typography>
          </div>

          {/* Dotted State */}
          <div className="pad-6 border-2 border-dotted border-primary/30 radius-xl flex flex-col items-center justify-center gap-2 hover:bg-primary/5 transition-all cursor-pointer">
            <div className="w-10 h-10 radius-full bg-primary/10 flex items-center justify-center">
              <Layout className="w-5 h-5 text-primary" />
            </div>
            <Typography variant="caption" className="font-bold">Drop File or Click</Typography>
          </div>
        </div>
      </ShowcaseSection>

      {/* 🔹 Guidelines */}
     <footer className="system-footer">
  {/* Semantic Title for the Border Guidelines */}
  <h4 className="system-footer-title">System Guidelines</h4>
  
  <div className="system-footer-grid">
    
    {/* Item 01: Subtlety */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        01 Subtlety
      </div>
      <span className="system-footer-item-heading text-lg">Visual Air</span>
      <p className="system-footer-item-text">
        Use 1px borders with lowered opacity (10-20%) for a modern, glass-like aesthetic that doesn't overwhelm the content.
      </p>
    </div>

    {/* Item 02: Contrast */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        02 Contrast
      </div>
      <span className="system-footer-item-heading text-lg">State Clarity</span>
      <p className="system-footer-item-text">
        Reserve <code>dashed</code> or <code>dotted</code> borders exclusively for non-interactive regions or "empty" drop-zone states.
      </p>
    </div>

    {/* Item 03: Context */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        03 Context
      </div>
      <span className="system-footer-item-heading text-lg">Geometric Rhythm</span>
      <p className="system-footer-item-text">
        Stick to <code>radius-md</code> for buttons and <code>radius-xl</code> for large cards to maintain a consistent structural rhythm.
      </p>
    </div>

  </div>
</footer>

    </div>
  )
}