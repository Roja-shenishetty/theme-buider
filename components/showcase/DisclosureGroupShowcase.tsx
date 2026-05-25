"use client"

import { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { ChevronDown, Database, Terminal, Cpu, Network, HardDrive, UnfoldVertical, FoldVertical } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeIndependent = `<div className="w-full radius-md border border-primary/10 bg-background/50 overflow-hidden divide-y divide-primary/5">
  <Collapsible className="w-full">
    <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-primary/5 transition-colors">
      <span className="text-sm font-bold uppercase flex items-center gap-2">
        <Cpu className="w-4 h-4 text-primary" /> Core Processing
      </span>
      <ChevronDown className="w-4 h-4 opacity-50 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
    </CollapsibleTrigger>
    <CollapsibleContent className="p-4 pt-0 text-xs font-mono text-muted-foreground bg-black/5 dark:bg-white/5">
      <p>Thread 01: 45°C - 3.2GHz</p>
      <p>Thread 02: 47°C - 3.2GHz</p>
    </CollapsibleContent>
  </Collapsible>
  
  {/* Additional Collapsibles stacked here... */}
</div>`;

const codeBulkAction = `const [openStates, setOpenStates] = useState({ cpu: false, net: false, mem: false })

const toggleAll = (state: boolean) => {
  setOpenStates({ cpu: state, net: state, mem: state })
}

<div className="space-group">
  {/* Global Controls */}
  <div className="flex justify-between items-center px-2">
    <span className="text-xs font-bold uppercase tracking-widest opacity-50">Bulk Actions</span>
    <div className="flex gap-2">
      <Button variant="ghost" size="sm" onClick={() => toggleAll(true)}>Expand All</Button>
      <Button variant="ghost" size="sm" onClick={() => toggleAll(false)}>Collapse All</Button>
    </div>
  </div>

  {/* Controlled Disclosures */}
  <Collapsible open={openStates.cpu} onOpenChange={(v) => setOpenStates(p => ({...p, cpu: v}))}>
    {/* Trigger and Content */}
  </Collapsible>
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

export function DisclosureGroupShowcase() {
  // Bulk action state orchestration
  const [bulkState, setBulkState] = useState({ cpu: false, net: false, disk: false })

  const setAll = (state: boolean) => {
    setBulkState({ cpu: state, net: state, disk: state })
  }

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Database className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Data Clusters v1.2</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Disclosure Groups
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             Stacked, independent collapsible regions designed for deep-dive technical logs, global toggle orchestration, and diagnostic reading.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Independent Stack */}
        <Section title="Independent Stack" description="Uncontrolled sequential blocks">
          <ComponentWrapper title="Disclosure // Sequential" code={codeIndependent}>
            <div className="w-full radius-md border border-primary/10 bg-background/50 overflow-hidden divide-y divide-primary/5">
              
              <Collapsible className="w-full group">
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-primary/5 transition-colors">
                  <span className="text-sm font-bold uppercase flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary" /> Core Processing
                  </span>
                  <ChevronDown className="w-4 h-4 opacity-50 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0 text-xs font-mono text-muted-foreground bg-black/5 dark:bg-white/5 shadow-inner">
                  <div className="space-y-1">
                    <div className="flex justify-between"><span>Thread_01</span><span className="text-success">45°C</span></div>
                    <div className="flex justify-between"><span>Thread_02</span><span className="text-warning">68°C</span></div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible className="w-full group">
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-primary/5 transition-colors">
                  <span className="text-sm font-bold uppercase flex items-center gap-2">
                    <Network className="w-4 h-4 text-primary" /> Subnet Routing
                  </span>
                  <ChevronDown className="w-4 h-4 opacity-50 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0 text-xs font-mono text-muted-foreground bg-black/5 dark:bg-white/5 shadow-inner">
                  <p className="opacity-50">No anomalous packets detected on port 8080.</p>
                </CollapsibleContent>
              </Collapsible>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Global Orchestration */}
        <Section title="Global Orchestration" description="Bulk expand/collapse actions">
          <ComponentWrapper title="Disclosure // Bulk_Actions" code={codeBulkAction}>
            <div className="w-full space-group">
              
              {/* Toolbar */}
              <div className="flex justify-between items-center px-1 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Batch Operations</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-7 text-xs radius-md" onClick={() => setAll(true)}>
                    <UnfoldVertical className="w-3 h-3 mr-2" /> Expand All
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 text-xs radius-md" onClick={() => setAll(false)}>
                    <FoldVertical className="w-3 h-3 mr-2" /> Collapse
                  </Button>
                </div>
              </div>

              {/* Items Container */}
              <div className="radius-md border border-primary/10 bg-background/50 overflow-hidden divide-y divide-primary/5">
                <Collapsible open={bulkState.cpu} onOpenChange={(v) => setBulkState(p => ({...p, cpu: v}))} className="group">
                  <CollapsibleTrigger className="w-full p-3 flex items-center justify-between hover:bg-primary/5">
                    <span className="text-sm font-bold uppercase flex items-center gap-2"><Cpu className="w-4 h-4 text-primary" /> CPU Log</span>
                    <ChevronDown className="w-4 h-4 opacity-50 transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-3 pt-0 text-xs font-mono text-muted-foreground bg-black/5 dark:bg-white/5 shadow-inner">Running standard cycles...</CollapsibleContent>
                </Collapsible>

                <Collapsible open={bulkState.net} onOpenChange={(v) => setBulkState(p => ({...p, net: v}))} className="group">
                  <CollapsibleTrigger className="w-full p-3 flex items-center justify-between hover:bg-primary/5">
                    <span className="text-sm font-bold uppercase flex items-center gap-2"><Network className="w-4 h-4 text-primary" /> Net Log</span>
                    <ChevronDown className="w-4 h-4 opacity-50 transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-3 pt-0 text-xs font-mono text-muted-foreground bg-black/5 dark:bg-white/5 shadow-inner">Ping: 14ms | Packet Loss: 0%</CollapsibleContent>
                </Collapsible>

                <Collapsible open={bulkState.disk} onOpenChange={(v) => setBulkState(p => ({...p, disk: v}))} className="group">
                  <CollapsibleTrigger className="w-full p-3 flex items-center justify-between hover:bg-primary/5">
                    <span className="text-sm font-bold uppercase flex items-center gap-2"><HardDrive className="w-4 h-4 text-primary" /> Disk Log</span>
                    <ChevronDown className="w-4 h-4 opacity-50 transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-3 pt-0 text-xs font-mono text-muted-foreground bg-black/5 dark:bg-white/5 shadow-inner">Partition /dev/sda1 healthy.</CollapsibleContent>
                </Collapsible>
              </div>

            </div>
          </ComponentWrapper>
        </Section>
      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <Database className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Group Architecture</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Visual Flow", heading: "Seamless Borders", desc: "Use divide-y and divide-primary/5 on the parent container to create clean, single-pixel separation between disclosures." },
            { title: "State Management", heading: "Global Orchestration", desc: "When implementing Expand All, you must switch from Radix's uncontrolled behavior to fully controlled React state." },
            { title: "UX Feedback", heading: "Inner Shadows", desc: "Apply shadow-inner to expanded content areas to visually separate child telemetry logs from the parent trigger surface." }
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