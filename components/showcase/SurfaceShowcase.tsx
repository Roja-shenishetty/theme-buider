"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Surface } from "@/components/ui/surface"
import { Layers, Box, Cpu, HardDrive, LayoutTemplate, BoxSelect, ArrowUpToLine, Sparkles, Activity } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeElevations = `<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <Surface variant="sunken" radius="md" className="p-5 group cursor-default">
    <BoxSelect className="w-4 h-4 mb-3 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
    <span className="text-xs font-mono font-semibold text-foreground">Sunken Container</span>
    <p className="text-[10px] mt-1.5 opacity-60 leading-relaxed">Best for raw data, logs, or wrapping other surfaces.</p>
  </Surface>

  <Surface variant="default" radius="md" className="p-5 group cursor-default hover:border-primary/30 transition-colors">
    <Layers className="w-4 h-4 mb-3 text-primary/70 group-hover:text-primary transition-colors" />
    <span className="text-xs font-bold uppercase tracking-widest text-foreground">Default Card</span>
    <p className="text-[10px] mt-1.5 opacity-60 leading-relaxed">Standard UI containers and layout boundaries.</p>
  </Surface>

  <Surface variant="elevated" radius="md" className="p-5 group cursor-default hover:shadow-primary/10 transition-shadow">
    <ArrowUpToLine className="w-4 h-4 mb-3 text-foreground opacity-70 group-hover:-translate-y-1 transition-transform" />
    <span className="text-xs font-bold uppercase tracking-widest text-foreground">Elevated Widget</span>
    <p className="text-[10px] mt-1.5 opacity-60 leading-relaxed">High-priority floating elements and popovers.</p>
  </Surface>

  <Surface variant="accent" radius="md" className="p-5 group cursor-default">
    <Sparkles className="w-4 h-4 mb-3 text-primary animate-pulse" />
    <span className="text-xs font-bold uppercase tracking-widest text-primary">Accent Panel</span>
    <p className="text-[10px] mt-1.5 opacity-80 leading-relaxed text-primary/80">Active selections, highlights, or alerts.</p>
  </Surface>
</div>`;

const codeNesting = `<Surface variant="sunken" radius="lg" className="p-6 space-y-5 border border-primary/5">
  {/* Canvas Header */}
  <div className="flex items-center justify-between border-b border-primary/10 pb-3">
    <div className="flex items-center gap-2">
      <LayoutTemplate className="w-4 h-4 text-primary" />
      <span className="text-xs font-bold uppercase tracking-widest text-primary">System Canvas</span>
    </div>
    <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 radius-sm">LIVE</span>
  </div>
  
  {/* Widget Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Surface variant="default" radius="md" className="p-4 flex items-center gap-3 hover:border-primary/30 cursor-pointer group transition-all hover:shadow-sm">
      <div className="p-2 radius-sm bg-primary/10 group-hover:bg-primary/20 transition-colors"><Cpu className="w-4 h-4 text-primary" /></div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Core Temp</span>
        <span className="text-sm font-mono font-semibold">42°C</span>
      </div>
    </Surface>

    <Surface variant="default" radius="md" className="p-4 flex items-center gap-3 hover:border-primary/30 cursor-pointer group transition-all hover:shadow-sm">
      <div className="p-2 radius-sm bg-primary/10 group-hover:bg-primary/20 transition-colors"><HardDrive className="w-4 h-4 text-primary" /></div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Storage</span>
        <span className="text-sm font-mono font-semibold">84% Full</span>
      </div>
    </Surface>
  </div>

  {/* Elevated Floating Panel */}
  <Surface variant="elevated" radius="md" className="p-4 flex justify-between items-center bg-background/80 backdrop-blur-sm">
    <div className="flex items-center gap-2">
      <Activity className="w-3.5 h-3.5 text-success animate-pulse" />
      <span className="text-xs font-semibold">All systems nominal</span>
    </div>
    <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">View Logs</button>
  </Surface>
</Surface>`;


/* 🔹 High-Density Section Wrapper */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up relative">
      <div className="absolute -top-3 right-0 text-[60px] font-black opacity-[0.02] pointer-events-none select-none">
        {title[0]}
      </div>
      
      <div className="flex items-center gap-3 mb-4 border-l-2 border-primary pl-4">
        <div className="space-y-0.5">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary/80">{title}</h3>
          {description && (
            <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-tighter opacity-70">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="relative radius-lg border border-primary/5 bg-background/50 backdrop-blur-sm p-4 hover:border-primary/20 transition-all duration-300">
        {children}
      </div>
    </section>
  )
}

export function SurfaceShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Box className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Base Layout Primitive</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Surfaces & Depth
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             Semantic background containers that establish visual hierarchy through calculated elevation, inner shadows, and dynamic contrast.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Elevation Matrix */}
        <Section title="Depth Variants" description="Material elevation and shadows">
          <ComponentWrapper title="Layout // Topography" code={codeElevations}>
            <div className="p-6 w-full flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
                <Surface variant="sunken" radius="md" className="p-5 group cursor-default">
                  <BoxSelect className="w-4 h-4 mb-3 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xs font-mono font-semibold text-foreground">Sunken Container</span>
                  <p className="text-[10px] mt-1.5 opacity-60 leading-relaxed">Best for raw data, logs, or wrapping other surfaces.</p>
                </Surface>

                <Surface variant="default" radius="md" className="p-5 group cursor-default hover:border-primary/30 transition-colors shadow-sm">
                  <Layers className="w-4 h-4 mb-3 text-primary/70 group-hover:text-primary transition-colors" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">Default Card</span>
                  <p className="text-[10px] mt-1.5 opacity-60 leading-relaxed">Standard UI containers and layout boundaries.</p>
                </Surface>

                <Surface variant="elevated" radius="md" className="p-5 group cursor-default hover:shadow-primary/10 transition-shadow">
                  <ArrowUpToLine className="w-4 h-4 mb-3 text-foreground opacity-70 group-hover:-translate-y-1 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">Elevated Widget</span>
                  <p className="text-[10px] mt-1.5 opacity-60 leading-relaxed">High-priority floating elements and popovers.</p>
                </Surface>

                <Surface variant="accent" radius="md" className="p-5 group cursor-default shadow-sm">
                  <Sparkles className="w-4 h-4 mb-3 text-primary animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Accent Panel</span>
                  <p className="text-[10px] mt-1.5 opacity-80 leading-relaxed text-primary/80">Active selections, highlights, or alerts.</p>
                </Surface>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Nesting Logic */}
        <Section title="Surface Nesting" description="Creating dashboard canvas hierarchy">
          <ComponentWrapper title="Layout // Container_Nesting" code={codeNesting}>
            <div className="p-6 w-full flex justify-center items-center">
              
              <Surface variant="sunken" radius="lg" className="p-6 space-y-5 border border-primary/5 w-full max-w-lg">
                
                {/* Canvas Header */}
                <div className="flex items-center justify-between border-b border-primary/10 pb-3">
                  <div className="flex items-center gap-2">
                    <LayoutTemplate className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">System Canvas</span>
                  </div>
                  <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 radius-sm">LIVE</span>
                </div>
                
                {/* Widget Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Surface variant="default" radius="md" className="p-4 flex items-center gap-3 hover:border-primary/30 cursor-pointer group transition-all hover:shadow-sm">
                    <div className="p-2 radius-sm bg-primary/10 group-hover:bg-primary/20 transition-colors"><Cpu className="w-4 h-4 text-primary" /></div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Core Temp</span>
                      <span className="text-sm font-mono font-semibold">42°C</span>
                    </div>
                  </Surface>

                  <Surface variant="default" radius="md" className="p-4 flex items-center gap-3 hover:border-primary/30 cursor-pointer group transition-all hover:shadow-sm">
                    <div className="p-2 radius-sm bg-primary/10 group-hover:bg-primary/20 transition-colors"><HardDrive className="w-4 h-4 text-primary" /></div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Storage</span>
                      <span className="text-sm font-mono font-semibold">84% Full</span>
                    </div>
                  </Surface>
                </div>

                {/* Elevated Floating Panel */}
                <Surface variant="elevated" radius="md" className="p-4 flex justify-between items-center bg-background/80 backdrop-blur-sm shadow-md">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-success animate-pulse" />
                    <span className="text-xs font-semibold">All systems nominal</span>
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline underline-offset-4">View Logs</button>
                </Surface>

              </Surface>

            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <Layers className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Surface Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Hierarchy", heading: "Max Nesting", desc: "Do not exceed three layers of surface nesting (e.g., Canvas -> Widget -> Control). Beyond this, contrast diminishes and the UI becomes cluttered." },
            { title: "Z-Axis", heading: "Sunken vs Elevated", desc: "Never place a Sunken surface inside an Elevated surface. Sunken areas represent the base layer (canvas), while Elevated surfaces logically float above it." },
            { title: "Polymorphism", heading: "The 'as' Prop", desc: "Use an 'as' prop internally to maintain semantic HTML. Render a Surface as a <section>, <article>, or <form> rather than defaulting to generic <div> elements where applicable." }
          ].map((item, i) => (
            <div key={i} className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
              <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-primary">{item.title}</div>
              <span className="font-bold text-lg block">{item.heading}</span>
              <p className="text-xs opacity-70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}