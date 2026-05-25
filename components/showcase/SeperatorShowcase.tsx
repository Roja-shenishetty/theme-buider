"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Separator } from "@/components/ui/separator"
import { AlignVerticalSpaceAround, Hash, LayoutGrid, Activity } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeHorizontal = `<div className="space-y-4">
  <div className="space-y-1">
    <h4 className="text-sm font-bold uppercase">System Kernel</h4>
    <p className="text-xs text-muted-foreground">Core architecture initialization</p>
  </div>
  
  <Separator className="bg-primary/10" />
  
  <div className="flex justify-between text-xs font-mono opacity-70">
    <span>Status: Active</span>
    <span>Uptime: 99.9%</span>
  </div>
</div>`;

const codeVertical = `<div className="flex h-5 items-center space-x-4 text-xs font-mono">
  <span className="text-success">Net: Stable</span>
  <Separator orientation="vertical" className="bg-primary/20" />
  <span className="text-warning">CPU: 68°C</span>
  <Separator orientation="vertical" className="bg-primary/20" />
  <span className="text-primary">Mem: 42%</span>
</div>`;

const codeDataNode = `<div className="radius-md border border-primary/10 bg-background/50 p-4">
  <div className="flex items-center justify-between mb-3">
    <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Sensor Node_01</span>
    <Activity className="w-3 h-3 text-primary" />
  </div>
  
  <Separator className="bg-primary/10 mb-3" />
  
  <div className="flex h-8 items-center justify-between text-xs font-mono">
    <div className="flex flex-col">
      <span className="opacity-50 text-[10px]">PING</span>
      <span>12ms</span>
    </div>
    <Separator orientation="vertical" className="bg-primary/10" />
    <div className="flex flex-col">
      <span className="opacity-50 text-[10px]">PACKET</span>
      <span>0.01%</span>
    </div>
    <Separator orientation="vertical" className="bg-primary/10" />
    <div className="flex flex-col">
      <span className="opacity-50 text-[10px]">JITTER</span>
      <span>2ms</span>
    </div>
  </div>
</div>`;

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

export function SeparatorShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Hash className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Structural Demarcation</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Separators
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             Visual dividers that establish boundaries between dense data clusters, toolbars, and layout sections without adding structural bulk.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Horizontal Isolation */}
        <Section title="Horizontal Stack" description="Standard block demarcation">
          <ComponentWrapper title="Layout // X_Axis" code={codeHorizontal}>
            <div className="w-full max-w-sm mx-auto space-y-4 p-4 radius-md bg-black/5 dark:bg-white/5 border border-primary/5">
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-widest">System Kernel</h4>
                <p className="text-xs text-muted-foreground">Core architecture initialization</p>
              </div>
              
              <Separator className="bg-primary/10" />
              
              <div className="flex justify-between text-xs font-mono opacity-70">
                <span>Status: Active</span>
                <span>Uptime: 99.9%</span>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Vertical Inline */}
        <Section title="Vertical Inline" description="Toolbar and metric splitting">
          <ComponentWrapper title="Layout // Y_Axis" code={codeVertical}>
            <div className="w-full flex justify-center p-8">
              <div className="flex h-5 items-center space-x-4 text-xs font-mono bg-black/5 dark:bg-white/5 p-4 py-6 radius-full border border-primary/10 shadow-inner">
                <span className="text-success tracking-tight">Net: Stable</span>
                <Separator orientation="vertical" className="bg-primary/20" />
                <span className="text-warning tracking-tight">CPU: 68°C</span>
                <Separator orientation="vertical" className="bg-primary/20" />
                <span className="text-primary tracking-tight">Mem: 42%</span>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Complex Data Node */}
        <Section title="Data Node Pattern" description="Cross-axis integration">
          <ComponentWrapper title="Layout // Composite_Grid" code={codeDataNode}>
            <div className="w-full max-w-sm mx-auto radius-md border border-primary/10 bg-background/80 p-4 shadow-lg shadow-primary/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Sensor Node_01</span>
                <Activity className="w-3 h-3 text-primary animate-pulse" />
              </div>
              
              <Separator className="bg-primary/10 mb-3" />
              
              <div className="flex h-8 items-center justify-between text-xs font-mono">
                <div className="flex flex-col">
                  <span className="opacity-50 text-[10px]">PING</span>
                  <span>12ms</span>
                </div>
                <Separator orientation="vertical" className="bg-primary/10" />
                <div className="flex flex-col">
                  <span className="opacity-50 text-[10px]">PACKET</span>
                  <span>0.01%</span>
                </div>
                <Separator orientation="vertical" className="bg-primary/10" />
                <div className="flex flex-col">
                  <span className="opacity-50 text-[10px]">JITTER</span>
                  <span>2ms</span>
                </div>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <LayoutGrid className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Spatial Rules</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Contrast", heading: "Subtle Tints", desc: "Keep separators subtle. Use bg-primary/10 or bg-primary/5. They should organize content, not distract from the data." },
            { title: "Flexibility", heading: "Container Bounds", desc: "Separators automatically expand to fill their parent container. Ensure your parent flex or block element has defined limits." },
            { title: "Accessibility", heading: "Decorative Prop", desc: "If the separator is purely visual and doesn't split distinct semantic sections, use the decorative={true} prop for screen readers." }
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