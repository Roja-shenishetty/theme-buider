"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Surface } from "@/components/ui/surface"
import { Layers, Box, Cpu, HardDrive, LayoutTemplate } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeElevations = `<div className="grid grid-cols-2 gap-wide">
  <Surface variant="sunken" radius="md">
    <span className="text-xs font-mono">Sunken Container</span>
    <p className="text-[10px] mt-2 opacity-50">Best for raw data or logs</p>
  </Surface>

  <Surface variant="default" radius="md">
    <span className="text-xs font-bold uppercase">Default Card</span>
    <p className="text-[10px] mt-2 opacity-50">Standard UI containers</p>
  </Surface>

  <Surface variant="elevated" radius="md">
    <span className="text-xs font-bold uppercase">Elevated Widget</span>
    <p className="text-[10px] mt-2 opacity-50">High-priority interactive layers</p>
  </Surface>

  <Surface variant="accent" radius="md">
    <span className="text-xs font-bold uppercase text-primary">Accent Panel</span>
    <p className="text-[10px] mt-2 opacity-50">Selected states or alerts</p>
  </Surface>
</div>`;

const codeNesting = `<Surface variant="sunken" padding="lg" radius="lg" className="space-y-4">
  <div className="flex items-center gap-2 mb-2">
    <LayoutTemplate className="w-4 h-4 opacity-50" />
    <span className="text-xs font-bold uppercase tracking-widest opacity-50">Dashboard Canvas</span>
  </div>
  
  <div className="grid grid-cols-2 gap-3">
    {/* Child Surface 1 */}
    <Surface variant="default" radius="md" padding="sm" className="flex items-center gap-3 hover:border-primary/30">
      <div className="p-2 radius-sm bg-primary/10"><Cpu className="w-4 h-4 text-primary" /></div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase opacity-50">Core</span>
        <span className="text-xs font-mono">Stable</span>
      </div>
    </Surface>

    {/* Child Surface 2 */}
    <Surface variant="default" radius="md" padding="sm" className="flex items-center gap-3 hover:border-primary/30">
      <div className="p-2 radius-sm bg-primary/10"><HardDrive className="w-4 h-4 text-primary" /></div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase opacity-50">Storage</span>
        <span className="text-xs font-mono">42%</span>
      </div>
    </Surface>
  </div>
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
            <div className="p-4 w-full">
              <div className="grid grid-cols-2 gap-wide">
                <Surface variant="sunken" radius="md">
                  <span className="text-xs font-mono">Sunken</span>
                  <p className="text-[10px] mt-2 opacity-50 leading-relaxed">Recessed background for raw data logs</p>
                </Surface>

                <Surface variant="default" radius="md">
                  <span className="text-xs font-bold uppercase tracking-widest">Default</span>
                  <p className="text-[10px] mt-2 opacity-50 leading-relaxed">Standard container for components</p>
                </Surface>

                <Surface variant="elevated" radius="md">
                  <span className="text-xs font-bold uppercase tracking-widest">Elevated</span>
                  <p className="text-[10px] mt-2 opacity-50 leading-relaxed">High-priority actionable widgets</p>
                </Surface>

                <Surface variant="accent" radius="md">
                  <span className="text-xs font-bold uppercase tracking-widest">Accent</span>
                  <p className="text-[10px] mt-2 opacity-50 leading-relaxed">Active selections or highlights</p>
                </Surface>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Nesting Logic */}
        <Section title="Surface Nesting" description="Creating dashboard canvas hierarchy">
          <ComponentWrapper title="Layout // Container_Nesting" code={codeNesting}>
            <div className="p-4 w-full">
              
              <Surface variant="sunken" padding="lg" radius="lg" className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <LayoutTemplate className="w-4 h-4 opacity-50" />
                  <span className="text-xs font-bold uppercase tracking-widest opacity-50">System Canvas</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Surface variant="default" radius="md" padding="sm" className="flex items-center gap-3 hover:border-primary/30 cursor-pointer">
                    <div className="p-2 radius-sm bg-primary/10"><Cpu className="w-4 h-4 text-primary" /></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Core</span>
                      <span className="text-xs font-mono">Stable</span>
                    </div>
                  </Surface>

                  <Surface variant="default" radius="md" padding="sm" className="flex items-center gap-3 hover:border-primary/30 cursor-pointer">
                    <div className="p-2 radius-sm bg-primary/10"><HardDrive className="w-4 h-4 text-primary" /></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Storage</span>
                      <span className="text-xs font-mono">42%</span>
                    </div>
                  </Surface>
                </div>
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
            { title: "Z-Axis", heading: "Sunken vs Elevated", desc: "Never place a Sunken surface inside an Elevated surface. Sunken areas represent the base layer (canvas), while Elevated surfaces float above it." },
            { title: "Polymorphism", heading: "The 'as' Prop", desc: "Use the 'as' prop to maintain semantic HTML. Render a Surface as a <section>, <article>, or <form> rather than defaulting to generic <div> elements." }
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