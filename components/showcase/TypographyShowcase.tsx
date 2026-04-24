"use client"

import { Typography } from "@/components/ui/typography"
import { useState } from "react"
import { Type, AlignLeft, Bold, Hash, Layers } from "lucide-react"

const typeScale = [
  { name: "H1 / Hero", variant: "h1", size: "3rem", weight: "900" },
  { name: "H2 / Title", variant: "h2", size: "2.25rem", weight: "800" },
  { name: "H3 / Section", variant: "h3", size: "1.875rem", weight: "700" },
  { name: "H4 / Subsection", variant: "h4", size: "1.5rem", weight: "600" },
  { name: "Body / Default", variant: "body", size: "1rem", weight: "400" },
  { name: "Muted / Secondary", variant: "muted", size: "1rem", weight: "400" },
  { name: "Small / Utility", variant: "small", size: "0.875rem", weight: "400" },
  { name: "Label / UI", variant: "label", size: "0.875rem", weight: "600" },
  { name: "Caption / Legal", variant: "caption", size: "0.75rem", weight: "400" },
]

function ShowcaseSection({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6">
        <Typography variant="h3" className="tracking-tighter font-bold text-primary/90 flex items-center gap-2">
          {title}
        </Typography>
        {description && (
          <Typography variant="body" className="text-body-muted text-sm max-w-2xl">
            {description}
          </Typography>
        )}
      </div>
      <div className="card bg-muted/5 border-dashed border-2 border-primary/10 p-10 overflow-hidden relative">
        {children}
      </div>
    </section>
  )
}

export function TypographyShowcase() {
  const [copied, setCopied] = useState("")

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(""), 1500)
  }

  return (
    <div className="page-container space-page">

      {/* 🔹 Technical Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 radius-full bg-primary/10 text-primary text-caption font-black uppercase tracking-widest">
          Type Protocol v1.0
        </div>
        
        <Typography variant="body" className="text-body-muted max-w-2xl text-lg">
          The structural voice of the system. Built for maximum legibility across 
          code editors, hardware dashboards, and editorial content.
        </Typography>
      </header>

      {/* 🔹 The Type Matrix */}
      <ShowcaseSection 
        title="Scale Matrix" 
        description="Our predefined typographic tokens. Click to copy the variant name."
      >
        <div className="w-full divide-y divide-primary/5">
          {typeScale.map((item) => (
            <div
              key={item.name}
              onClick={() => copy(item.variant)}
              className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 py-8 group cursor-pointer hover:bg-primary/5 transition-all px-4 radius-md"
            >
              <div className="md:col-span-3">
                <Typography variant="label" className="text-primary font-black uppercase tracking-widest text-[10px]">
                  {item.name}
                </Typography>
                <Typography variant="caption" className="text-muted-foreground font-mono">
                  {item.size} • {item.weight}
                </Typography>
              </div>

              <div className="md:col-span-7">
                <Typography variant={item.variant as any} className="truncate group-hover:text-primary transition-colors">
                  System Engine Architecture
                </Typography>
              </div>

              <div className="md:col-span-2 flex justify-end">
                 <div className={`px-3 py-1 radius-sm text-[10px] font-bold transition-all border ${
                   copied === item.variant ? "bg-primary text-white border-primary" : "bg-muted text-muted-foreground border-transparent"
                 }`}>
                   {copied === item.variant ? "COPIED" : item.variant.toUpperCase()}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* 🔹 Weights & Tone */}
      <div className="grid md:grid-cols-2 gap-wide">
        <ShowcaseSection title="Weight System" description="Defining emphasis levels.">
          <div className="space-y-4">
            {["light", "normal", "medium", "semibold", "bold", "black"].map((w) => (
              <div key={w} className="flex items-center justify-between border-b border-primary/5 pb-2">
                <Typography className={`font-${w} text-xl capitalize`}>{w}</Typography>
                <code className="text-[10px] opacity-40">font-{w}</code>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="Numerical Logic" description="Optimized for dashboards.">
          <div className="space-y-6">
            <div className="bg-background p-4 radius-md border border-primary/10">
              <Typography variant="label" className="mb-2 block opacity-50">Tabular (Dashboards)</Typography>
              <Typography className="tabular-nums text-2xl font-mono text-primary">
                111.99 <br/> 888.22
              </Typography>
            </div>
            <div className="bg-background p-4 radius-md border border-primary/10">
              <Typography variant="label" className="mb-2 block opacity-50">Proportional (Reading)</Typography>
              <Typography className="proportional-nums text-2xl">
                111.99 <br/> 888.22
              </Typography>
            </div>
          </div>
        </ShowcaseSection>
      </div>

      {/* 🔹 Layout Controls */}
      <ShowcaseSection title="Editorial Patterns" description="Handling line-height and letter-spacing for large text blocks.">
        <div className="grid md:grid-cols-3 gap-wide">
          <div className="space-group">
            <Typography variant="label" className="text-primary underline decoration-primary/30">Tracking (Wide)</Typography>
            <Typography className="tracking-widest uppercase text-xs font-bold leading-none">
              Modernist Approach
            </Typography>
          </div>
          <div className="space-group">
            <Typography variant="label" className="text-primary underline decoration-primary/30">Leading (Loose)</Typography>
            <Typography className="leading-loose text-sm text-body-muted">
              Space between lines creates a premium, airy feel often used in creator portfolios.
            </Typography>
          </div>
          <div className="space-group">
            <Typography variant="label" className="text-primary underline decoration-primary/30">Overflow Control</Typography>
            <Typography className="line-clamp-2 text-sm bg-primary/5 p-2 radius-sm italic">
              This is a very long sentence that will be clamped after two lines to ensure your grid remains perfectly aligned even with long user content.
            </Typography>
          </div>
        </div>
      </ShowcaseSection>

      {/* 🔹 Real Usage Layout */}
      <ShowcaseSection title="Integrated UI" description="A composition of various typography tokens.">
        <div className="card max-w-md bg-background border-primary/20 shadow-xl shadow-primary/5">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <Typography variant="label" className="bg-primary/10 text-primary px-2 py-0.5 radius-sm text-[10px]">DESIGN SYSTEM</Typography>
              <Typography variant="caption" className="font-mono">APRIL 2026</Typography>
            </div>
            
            <Typography variant="h2" className="leading-[0.9] tracking-tighter">
              The Art of <span className="text-primary italic">Precision.</span>
            </Typography>
            
            <Typography variant="body" className="text-body-muted">
              Typography is the silent ambassador of your brand. It speaks before the user even reads.
            </Typography>
            
            <div className="pt-4 border-t border-primary/5 flex items-center justify-between">
               <Typography variant="small" className="font-bold">Venkateshwarlu A.</Typography>
               <Typography variant="caption" className="opacity-50 underline">Read More</Typography>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* 🔹 Guidelines */}
      <footer className="system-footer">
  {/* Semantic Title for Typography Guidelines */}
  <h4 className="system-footer-title">Typography Guidelines</h4>
  
  <div className="system-footer-grid">
    
    {/* Item 01: Hierarchy */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        01 Structure
      </div>
      <span className="system-footer-item-heading text-lg">Hierarchy</span>
      <p className="system-footer-item-text">
        Never skip heading levels. Use <code>H1</code> for page titles and <code>H2</code> for section headers to maintain SEO integrity and screen-reader accessibility.
      </p>
    </div>

    {/* Item 02: Contrast */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        02 Legibility
      </div>
      <span className="system-footer-item-heading text-lg">Contrast Ratio</span>
      <p className="system-footer-item-text">
        Use <code>muted</code> or <code>caption</code> for secondary info. Always ensure at least a <strong>4.5:1</strong> contrast ratio for WCAG AA compliance.
      </p>
    </div>

    {/* Item 03: Utility */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        03 Data
      </div>
      <span className="system-footer-item-heading text-lg">Numeric Intelligence</span>
      <p className="system-footer-item-text">
        Use <code>tabular-nums</code> for data that changes rapidly, like hardware sensor stats or clock timers, to prevent layout shifting.
      </p>
    </div>

  </div>
</footer>

    </div>
  )
}