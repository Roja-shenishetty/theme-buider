"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { SearchField } from "@/components/ui/searchField"
import { SearchIcon, Command, Database, CommandIcon } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `<div className="w-full max-w-sm">
  <label className="text-sm font-semibold mb-1.5 block">Search Documentation</label>
  <SearchField 
    placeholder="Search for components, hooks, or guides..." 
  />
</div>`;

const codeClearable = `const [query, setQuery] = useState("Button Component")

<div className="w-full max-w-sm">
  <SearchField 
    placeholder="Search projects..." 
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onClear={() => console.log("Search cleared!")}
  />
</div>`;

const codeShortcut = `<div className="w-full max-w-sm">
  <SearchField 
    placeholder="Quick search..." 
    shortcut="⌘K" 
    className="bg-muted/20"
  />
</div>`;

/* 🔹 Section Wrapper */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up relative">
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
      <div className="relative radius-lg border border-primary/5 bg-background/50 backdrop-blur-sm p-6 hover:border-primary/20 transition-all duration-300">
        {children}
      </div>
    </section>
  )
}

export function SearchFieldShowcase() {
  const [query, setQuery] = useState("Data Grid");

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <SearchIcon className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Query Inputs</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Search Field
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A highly composed input specifically engineered for query execution. It integrates seamlessly with custom clear actions and dynamic keyboard shortcut indicators.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Search */}
        <Section title="Standard Layout" description="Default icon tracking and states">
          <ComponentWrapper title="SearchField // Default" code={codeBasic}>
            <div className="w-full flex justify-center items-center py-12">
              <div className="w-full max-w-sm">
                <label className="text-sm font-semibold mb-1.5 block flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-muted-foreground" /> Query Database
                </label>
                <SearchField placeholder="Search users by email or ID..." />
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Clearable (Active State) */}
        <Section title="Active & Clearable" description="Integrated CloseButton overrides">
          <ComponentWrapper title="SearchField // Controlled" code={codeClearable}>
            <div className="w-full flex justify-center py-12 bg-black/5 dark:bg-white/5 radius-md">
              <div className="w-full max-w-sm">
                <label className="text-sm font-semibold mb-1.5 block">Filtered Results</label>
                <SearchField 
                  placeholder="Search..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onClear={() => console.log("Cleared")}
                />
                <p className="text-[11px] text-muted-foreground mt-2 font-mono">
                  Current Query: <span className="text-primary">{query || "null"}</span>
                </p>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. With Shortcut Indicator */}
        <Section title="Shortcut Hints" description="Dynamic Kbd swap on empty">
          <ComponentWrapper title="SearchField // Kbd_Integration" code={codeShortcut}>
            <div className="w-full flex flex-col justify-center items-center py-12 gap-8">
              <div className="w-full max-w-sm">
                <SearchField 
                  placeholder="Global search..." 
                  shortcut="⌘K" 
                  className="bg-muted/30 shadow-inner"
                />
                <p className="text-[11px] text-muted-foreground mt-2 opacity-70 text-center">
                  Try typing to see the shortcut swap to a clear button.
                </p>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <CommandIcon className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Search Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Browser Defaults", heading: "Stripping Webkit", desc: "Browsers natively inject an ugly 'X' button inside <input type='search'>. The CSS rule [&::-webkit-search-cancel-button]:appearance-none completely removes it so we can inject our tokenized CloseButton." },
            { title: "Visual State", heading: "Icon Tracking", desc: "The magnifying glass icon uses group-focus-within to change color to var(--primary) when the input is active, providing a subtle micro-interaction that grounds the user." },
            { title: "UX Dynamics", heading: "Dynamic Affixes", desc: "If a shortcut prop is passed, the right-side container dynamically swaps between the <Kbd> hint and the <CloseButton> based on string length to prevent UI crowding." }
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