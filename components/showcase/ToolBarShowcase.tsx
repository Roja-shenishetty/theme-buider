"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Toolbar, ToolbarGroup } from "@/components/ui/toolbar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Wrench, MousePointer2, Hand, Square, Circle, Type, 
  Filter, Download, RefreshCw, Play, Pause, Settings, MoreHorizontal 
} from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeFloating = `<Toolbar variant="glass" radius="full" className="mx-auto">
  <ToolbarGroup radius="full" className="p-1">
    <Button variant="ghost" size="icon" className="radius-full h-8 w-8 bg-primary/10 text-primary">
      <MousePointer2 className="w-4 h-4" />
    </Button>
    <Button variant="ghost" size="icon" className="radius-full h-8 w-8 opacity-70 hover:opacity-100">
      <Hand className="w-4 h-4" />
    </Button>
  </ToolbarGroup>

  <Separator orientation="vertical" className="h-6 mx-1 bg-primary/20" />

  <Button variant="ghost" size="icon" className="radius-full h-8 w-8 opacity-70 hover:opacity-100">
    <Square className="w-4 h-4" />
  </Button>
  <Button variant="ghost" size="icon" className="radius-full h-8 w-8 opacity-70 hover:opacity-100">
    <Circle className="w-4 h-4" />
  </Button>
  <Button variant="ghost" size="icon" className="radius-full h-8 w-8 opacity-70 hover:opacity-100">
    <Type className="w-4 h-4" />
  </Button>
</Toolbar>`;

const codeInline = `<Toolbar variant="sunken" radius="md" className="w-full justify-between p-2">
  <div className="flex items-center gap-2">
    <Button variant="outline" size="sm" className="h-7 text-xs radius-sm border-primary/20">
      <Filter className="w-3 h-3 mr-2" /> All Nodes
    </Button>
    <Button variant="ghost" size="sm" className="h-7 text-xs radius-sm opacity-70">
      Errors Only
    </Button>
  </div>

  <div className="flex items-center gap-1">
    <Button variant="ghost" size="icon" className="h-7 w-7 radius-sm">
      <RefreshCw className="w-3 h-3" />
    </Button>
    <Separator orientation="vertical" className="h-4 mx-1 bg-primary/10" />
    <Button variant="ghost" size="icon" className="h-7 w-7 radius-sm">
      <Download className="w-3 h-3" />
    </Button>
  </div>
</Toolbar>`;

const codeCommand = `<Toolbar variant="default" radius="md" className="p-1.5 shadow-sm">
  <Button variant="success" size="sm" className="h-8 radius-sm px-4">
    <Play className="w-3 h-3 mr-2" /> Start Stream
  </Button>
  <Button variant="ghost" size="sm" className="h-8 radius-sm px-4 text-warning hover:bg-warning/10 hover:text-warning">
    <Pause className="w-3 h-3 mr-2" /> Halt
  </Button>

  <Separator orientation="vertical" className="h-5 mx-2 bg-primary/10" />

  <Button variant="ghost" size="icon" className="h-8 w-8 radius-sm opacity-70">
    <Settings className="w-4 h-4" />
  </Button>
  <Button variant="ghost" size="icon" className="h-8 w-8 radius-sm opacity-70">
    <MoreHorizontal className="w-4 h-4" />
  </Button>
</Toolbar>`;

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

export function ToolbarShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Wrench className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Command Clusters</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Toolbars
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             Compact, horizontally grouped interactive elements designed for rapid tool switching, data filtering, and system state controls.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Floating Glass Toolbar */}
        <Section title="Floating Canvas" description="High-elevation tool switching">
          <ComponentWrapper title="Toolbar // Glass_Variant" code={codeFloating}>
            <div className="w-full py-12 flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background radius-md">
              <Toolbar variant="glass" radius="full">
                {/* Visual Grouping */}
                <ToolbarGroup className="radius-full p-1 bg-black/10 dark:bg-white/10">
                  <Button variant="ghost" size="icon" className="radius-full h-8 w-8 bg-background shadow-sm text-primary">
                    <MousePointer2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="radius-full h-8 w-8 opacity-70 hover:opacity-100">
                    <Hand className="w-4 h-4" />
                  </Button>
                </ToolbarGroup>

                <Separator orientation="vertical" className="h-6 mx-1 bg-primary/20" />

                <Button variant="ghost" size="icon" className="radius-full h-8 w-8 opacity-70 hover:opacity-100">
                  <Square className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="radius-full h-8 w-8 opacity-70 hover:opacity-100">
                  <Circle className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="radius-full h-8 w-8 opacity-70 hover:opacity-100">
                  <Type className="w-4 h-4" />
                </Button>
              </Toolbar>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Inline Filtering */}
        <Section title="Data Filtering" description="Sunken integration for logs/tables">
          <ComponentWrapper title="Toolbar // Inline_Sunken" code={codeInline}>
            <div className="w-full flex justify-center p-4">
              <Toolbar variant="sunken" radius="md" className="w-full max-w-md justify-between p-2 shadow-inner">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-7 text-xs radius-sm border-primary/20 bg-background">
                    <Filter className="w-3 h-3 mr-2 text-primary" /> All Nodes
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 text-xs radius-sm opacity-60 hover:opacity-100">
                    Errors Only
                  </Button>
                </div>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-7 w-7 radius-sm opacity-60 hover:opacity-100">
                    <RefreshCw className="w-3 h-3" />
                  </Button>
                  <Separator orientation="vertical" className="h-4 mx-1 bg-primary/10" />
                  <Button variant="ghost" size="icon" className="h-7 w-7 radius-sm opacity-60 hover:opacity-100">
                    <Download className="w-3 h-3" />
                  </Button>
                </div>
              </Toolbar>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Command Execution */}
        <Section title="Command Execution" description="Primary action grouping">
          <ComponentWrapper title="Toolbar // Action_Group" code={codeCommand}>
            <div className="w-full flex justify-center p-8">
              <Toolbar variant="default" radius="md" className="p-1.5 shadow-sm">
                <Button variant="secondary" size="sm" className="h-8 radius-sm px-4">
                  <Play className="w-3 h-3 mr-2" /> Start Stream
                </Button>
                <Button variant="ghost" size="sm" className="h-8 radius-sm px-4 text-warning hover:bg-warning/10 hover:text-warning">
                  <Pause className="w-3 h-3 mr-2" /> Halt
                </Button>

                <Separator orientation="vertical" className="h-5 mx-2 bg-primary/10" />

                <Button variant="ghost" size="icon" className="h-8 w-8 radius-sm opacity-60 hover:opacity-100">
                  <Settings className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 radius-sm opacity-60 hover:opacity-100">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </Toolbar>
            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <Wrench className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Toolbar Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Density", heading: "Compact Tokens", desc: "Toolbars are high-density. Always use size='sm' or size='icon' for Buttons inside a Toolbar to maintain a strict vertical height constraint." },
            { title: "Shape Logic", heading: "Radius Matching", desc: "If the Toolbar is radius-full (pill shape), ensure the internal icon buttons also use radius-full. If the Toolbar is radius-md, use radius-sm for internal items." },
            { title: "Demarcation", heading: "Vertical Separators", desc: "Use a vertical Separator (with a fixed height, e.g., h-5 or h-6) to visually distinguish disparate command groups (e.g., Tools vs. System Actions)." }
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