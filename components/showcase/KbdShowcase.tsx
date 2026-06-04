"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Kbd } from "@/components/ui/kbd"
import { Keyboard, Command, Terminal, CommandIcon, Search } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeSingle = `<div className="flex gap-2 items-center">
  <Kbd>↵</Kbd>
  <Kbd>Space</Kbd>
  <Kbd>Esc</Kbd>
</div>`;

const codeCombo = `<div className="flex gap-1 items-center">
  <Kbd><CommandIcon className="w-3 h-3" /></Kbd>
  <span className="text-muted-foreground text-xs">+</span>
  <Kbd>K</Kbd>
</div>`;

const codeInline = `<div className="flex justify-between items-center w-full max-w-sm p-2 border radius-md bg-background shadow-sm">
  <span className="text-sm text-muted-foreground flex items-center gap-2">
    <Search className="w-4 h-4" /> Quick Search...
  </span>
  <Kbd>Ctrl + K</Kbd>
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

export function KbdShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Keyboard className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Typography Micro-Tokens</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Keyboard Shortcuts (Kbd)
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             Micro-components designed to mimic physical keyboard keys. Used to communicate system shortcuts, commands, and accessibility triggers without cluttering the primary UI.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Single Keys */}
        <Section title="Single Stroke" description="Base physical key representation">
          <ComponentWrapper title="Kbd // Base_Keys" code={codeSingle}>
            <div className="w-full py-12 flex justify-center items-center gap-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background radius-md">
              <Kbd>↵</Kbd>
              <Kbd>Tab</Kbd>
              <Kbd>Space</Kbd>
              <Kbd>Esc</Kbd>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Key Combinations */}
        <Section title="Combinations" description="Chained command sequences">
          <ComponentWrapper title="Kbd // Modifier_Chains" code={codeCombo}>
            <div className="w-full flex flex-col items-center justify-center gap-4 py-10">
              
              <div className="flex gap-1.5 items-center">
                <Kbd><Command className="w-3 h-3" /></Kbd>
                <span className="text-muted-foreground text-xs">+</span>
                <Kbd>Shift</Kbd>
                <span className="text-muted-foreground text-xs">+</span>
                <Kbd>P</Kbd>
              </div>

              <div className="flex gap-1.5 items-center">
                <Kbd>Ctrl</Kbd>
                <span className="text-muted-foreground text-xs">+</span>
                <Kbd>Alt</Kbd>
                <span className="text-muted-foreground text-xs">+</span>
                <Kbd>Del</Kbd>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Inline Menu Integration */}
        <Section title="Interface Integration" description="Search bars and command menus">
          <ComponentWrapper title="Kbd // Search_Input" code={codeInline}>
            <div className="w-full flex justify-center p-8 bg-black/5 dark:bg-white/5 radius-md">
              <div className="flex justify-between items-center w-full max-w-sm px-3 py-2 border radius-md bg-background shadow-sm hover:border-primary/30 transition-colors cursor-text">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Search className="w-4 h-4 opacity-50" /> 
                  Search documentation...
                </span>
                <Kbd className="bg-muted shadow-none">Ctrl + K</Kbd>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 4. Dropdown Integration */}
        <Section title="Menu Alignments" description="Dropdown item hints">
          <ComponentWrapper title="Kbd // Menu_Item" code={`<div className="flex justify-between w-64 p-2 radius-sm hover:bg-primary/5">\n  <span>New Project</span>\n  <Kbd>⌘N</Kbd>\n</div>`}>
            <div className="w-full flex flex-col justify-center items-center py-6">
              <div className="w-64 border radius-md shadow-sm bg-background p-1 space-y-1">
                <div className="flex justify-between items-center px-2 py-1.5 radius-sm bg-primary/10 text-primary cursor-pointer">
                  <span className="text-sm font-medium">New Project</span>
                  <Kbd className="border-primary/20 text-primary bg-background">⌘N</Kbd>
                </div>
                <div className="flex justify-between items-center px-2 py-1.5 radius-sm hover:bg-muted cursor-pointer transition-colors">
                  <span className="text-sm font-medium text-foreground">Save Changes</span>
                  <Kbd className="shadow-none border-transparent bg-transparent">⌘S</Kbd>
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
             <Terminal className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Kbd Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Semantics", heading: "Not For Interaction", desc: "The <kbd> tag is semantic HTML for input indication, but it is visually passive (pointer-events-none). Never attach onClick handlers to a Kbd component." },
            { title: "Typography", heading: "Inline Rhythm", desc: "The component is engineered with a strict h-5 height to prevent breaking the line-height (leading-normal) when embedded directly inside paragraph body text." },
            { title: "Convention", heading: "Platform Norms", desc: "Respect OS conventions. Use the ⌘ (Command) icon for macOS context, and 'Ctrl' text for Windows/Linux. Avoid mixing paradigms in the same view." }
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