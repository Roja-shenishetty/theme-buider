"use client"

import { Typography } from "@/components/ui/typography"
import { Ruler, Layout, Move, Maximize } from "lucide-react"

/* 🔹 Refined Blueprint Section */
function Section({ title, description, children }: any) {
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

      <div className="card bg-muted/5 border-dashed border-2 border-primary/10 p-10 overflow-hidden relative">
        {/* Subtle background ruler icon */}
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none rotate-12">
          <Ruler className="w-16 h-16" />
        </div>
        {children}
      </div>
    </section>
  )
}

export function SpacingShowcase() {
  const spacing = [
    { key: "1", value: "4px" },
    { key: "2", value: "8px" },
    { key: "4", value: "16px" },
    { key: "6", value: "24px" },
    { key: "8", value: "32px" },
    { key: "12", value: "48px" },
  ]

  return (
    <div className="page-container space-page">

      {/* 🔹 Technical Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Rhythm & Flow
        </div>
     
        <Typography variant="body" className="text-body-muted max-w-2xl text-lg mt-2">
          The mathematical foundation of your UI. Precise control over layout density and white space.
        </Typography>
      </header>

      {/* 🔹 Padding Visualizer */}
      <Section 
        title="Internal Padding" 
        description="Defining the breathing room inside a component using p-{size} utilities."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-wide">
          {spacing.map((s) => (
            <div key={s.key} className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-1">
                <code className="text-xs text-primary font-bold">p-{s.key}</code>
                <span className="text-[10px] uppercase opacity-40 font-mono">{s.value}</span>
              </div>
              <div className="bg-primary/5 border border-primary/10 radius-md relative">
                {/* Visual padding indicator */}
                <div className={`bg-primary/20 ${`p-${s.key}`} transition-all group hover:bg-primary/30`}>
                   <div className="bg-background border border-primary/20 radius-sm h-12 flex items-center justify-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                     Content
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 🔹 Margin Visualizer */}
      <Section 
        title="External Margins" 
        description="Control the distance between components. Represented here by the highlighted outer zone."
      >
        <div className="flex flex-wrap items-end gap-wide">
          {["2", "4", "8"].map((m) => (
            <div key={m} className="flex flex-col items-center gap-3">
              <div className="bg-primary/5 border border-primary/10 radius-md p-4">
                <div className={`bg-primary radius-sm px-4 py-2 text-primary-foreground text-xs font-bold ${`m-${m}`} shadow-lg shadow-primary/20`}>
                  Box
                </div>
              </div>
              <code className="text-[10px] text-primary">m-{m}</code>
            </div>
          ))}
        </div>
      </Section>

      {/* 🔹 Grid Gap & Rhythm */}
      <Section 
        title="Grid Gap" 
        description="The space between elements in a flex or grid layout."
      >
        <div className="space-group w-full max-w-xl">
          {["2", "4", "8"].map((g) => (
            <div key={g} className="space-y-2">
              <div className="flex items-center justify-between opacity-50">
                <Typography variant="label" className="text-[10px]">Gap Scale {g}</Typography>
              </div>
              <div className={`flex flex-wrap bg-muted/30 pad-2 radius-lg border border-primary/5 ${`gap-${g}`}`}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 bg-background border border-primary/20 radius-md flex items-center justify-center text-xs font-bold text-primary">
                    {i}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 🔹 Space-Y Stack */}
      <Section 
        title="Vertical Stacking" 
        description="Automatically spacing children without individual margins using space-y."
      >
        <div className="grid md:grid-cols-2 gap-wide w-full">
           <div className="space-y-4 bg-muted/20 pad-6 radius-xl border border-primary/5">
              <div className="h-3 w-1/3 bg-primary/20 radius-full" />
              <div className="h-3 w-full bg-primary/10 radius-full" />
              <div className="h-3 w-2/3 bg-primary/10 radius-full" />
              <Typography variant="caption" className="text-primary font-bold">space-y-4</Typography>
           </div>
           <div className="space-y-8 bg-muted/20 pad-6 radius-xl border border-primary/5">
              <div className="h-3 w-1/3 bg-accent/20 radius-full" />
              <div className="h-3 w-full bg-accent/10 radius-full" />
              <div className="h-3 w-2/3 bg-accent/10 radius-full" />
              <Typography variant="caption" className="text-accent font-bold">space-y-8</Typography>
           </div>
        </div>
      </Section>

      {/* 🔹 Implementation Guidelines */}
      <footer className="system-footer">
  {/* Semantic Title for the Spacing Guidelines */}
  <h4 className="system-footer-title">Layout Principles</h4>
  
  <div className="system-footer-grid">
    
    {/* Item 01: The 4px Base */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        01 Geometry
      </div>
      <span className="system-footer-item-heading text-lg">The 4px Base</span>
      <p className="system-footer-item-text">
        All spacing units follow a 4px base grid (4, 8, 12, 16...). This mathematical foundation ensures harmony across all components.
      </p>
    </div>

    {/* Item 02: Negative Space */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        02 Composition
      </div>
      <span className="system-footer-item-heading text-lg">Negative Space</span>
      <p className="system-footer-item-text">
        Use <code>gap-wide</code> for section-level components and <code>gap-default</code> for internal grouping to maintain clear information hierarchy.
      </p>
    </div>

    {/* Item 03: Stacking */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        03 Logic
      </div>
      <span className="system-footer-item-heading text-lg">Stacking Protocol</span>
      <p className="system-footer-item-text">
        Prefer <code>space-y</code> or <code>flex gap</code> over individual margins. This centralizes spacing logic and improves maintainability.
      </p>
    </div>

  </div>
</footer>

    </div>
  )
}