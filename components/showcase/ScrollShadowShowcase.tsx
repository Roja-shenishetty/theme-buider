"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { ScrollShadow } from "@/components/ui/scroll-shadow"
import { Layers, Terminal, Activity, AlignVerticalSpaceAround, ShieldCheck } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeLogs = `<ScrollShadow className="h-[250px] w-full radius-md border border-primary/10 bg-background/50">
  <div className="p-4 space-y-3 font-mono text-xs">
    {Array.from({ length: 15 }).map((_, i) => (
      <div key={i} className="flex justify-between items-center py-2 border-b border-primary/5 last:border-0">
        <span className="text-muted-foreground">[08:14:{i.toString().padStart(2, '0')}]</span>
        <span className="text-primary/80">SYS_THREAD_AWAIT</span>
        <span className="text-success">OK</span>
      </div>
    ))}
  </div>
</ScrollShadow>`;

const codeCards = `<ScrollShadow size={60} className="h-[300px] w-full bg-black/5 dark:bg-white/5 radius-lg p-2">
  <div className="grid gap-3 p-2">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="p-4 radius-md bg-background border border-primary/10 shadow-sm flex justify-between items-center hover:border-primary/30 transition-colors">
        <div className="flex items-center gap-3">
          <Activity className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold uppercase tracking-widest">Node {i + 1}</span>
        </div>
        <span className="text-xs text-muted-foreground font-mono">3.4GHz</span>
      </div>
    ))}
  </div>
</ScrollShadow>`;


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

export function ScrollShadowShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <AlignVerticalSpaceAround className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Viewport Overflow</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Scroll Shadows
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             Dynamic gradient masks that provide visual cues for hidden overflow content, ideal for dense system logs and constrained widget containers.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Terminal Logs Output */}
        <Section title="Terminal Output" description="Continuous data streaming view">
          <ComponentWrapper title="Viewport // Sys_Logs" code={codeLogs}>
            <div className="p-4 w-full flex justify-center">
              <ScrollShadow className="h-[250px] w-full max-w-sm radius-md border border-primary/10 bg-background shadow-inner">
                <div className="p-4 space-y-1 font-mono text-[10px] tracking-widest uppercase">
                  <div className="flex items-center gap-2 text-primary pb-2 mb-2 border-b border-primary/10">
                    <Terminal className="w-3 h-3" /> <span>Live Telemetry</span>
                  </div>
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="flex justify-between items-center py-1.5 opacity-80 hover:opacity-100 transition-opacity">
                      <span className="text-muted-foreground">[08:14:{String(i * 3).padStart(2, '0')}]</span>
                      <span>MEM_ALLOC</span>
                      <span className={i % 4 === 0 ? "text-warning" : "text-success"}>
                        {i % 4 === 0 ? "WARN" : "OK"}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollShadow>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Component Grid */}
        <Section title="Hardware Nodes" description="Navigating encapsulated grid items">
          <ComponentWrapper title="Viewport // Node_Cluster" code={codeCards}>
            <div className="p-4 w-full flex justify-center">
              <ScrollShadow size={60} className="h-[250px] w-full max-w-sm bg-black/5 dark:bg-white/5 radius-lg p-2 border border-primary/5">
                <div className="grid gap-2 p-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="p-3 radius-md bg-background border border-primary/10 shadow-sm flex justify-between items-center hover:border-primary/40 transition-all cursor-default">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 radius-sm bg-primary/10 flex items-center justify-center">
                          <ShieldCheck className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest">Node_0{i + 1}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-mono bg-muted px-2 py-1 radius-sm">
                        {3.2 + (i * 0.1)}GHz
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollShadow>
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
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Overflow Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Z-Index", heading: "Stacking Context", desc: "The shadow gradients run at z-10 to overlay the content. Ensure interactive child elements (like tooltips) have a higher z-index if they need to overlap the shadow." },
            { title: "Backgrounds", heading: "Color Matching", desc: "The component dynamically fades to the var(--background) token. If you place a ScrollShadow inside a tinted card, adjust the 'from-background' class to match the card's surface color." },
            { title: "Performance", heading: "Event Throttling", desc: "The native onScroll event is lightweight here, but if your scroll container holds hundreds of complex SVG nodes, consider adding a throttle to the handleScroll function." }
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