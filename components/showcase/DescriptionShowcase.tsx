"use client"

import React from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Info } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeForm = `<div className="space-y-1.5">
  <Label>Node Refresh Rate</Label>
  <Input defaultValue="500ms" className="h-9 radius-md" />
  <Description>Adjusts the interval for hardware state polling. Lower values increase CPU overhead.</Description>
</div>`;

const codeHardwareMeta = `<div className="space-y-1 p-3 radius-md border border-primary/5 bg-black/5 dark:bg-white/5">
  <div className="flex justify-between items-center">
    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Memory Pointer</span>
    <Description variant="technical" className="text-primary">0x44F9_PTR</Description>
  </div>
</div>`;

const codeSensorThreshold = `<div className="space-y-1">
  <div className="flex justify-between items-baseline">
    <span className="text-sm font-bold">Internal Temp</span>
    <Description variant="technical" className="text-danger font-bold">78°C (Max: 80°C)</Description>
  </div>
  <Description className="text-danger/80">CRITICAL: Exceeding thermal safe-operating area.</Description>
</div>`;

const codeStatusFeed = `<div className="flex items-center gap-3 p-3 radius-md border border-primary/10">
  <div className="w-2 h-2 radius-full bg-success animate-pulse" />
  <div className="flex flex-col">
    <span className="text-xs font-bold uppercase tracking-widest">Node_ESP32_04</span>
    <Description variant="technical">Signal: -42dBm | Uptime: 48h</Description>
  </div>
</div>`;

// 🔹 FIXED: Added missing Section wrapper definition
function Section({ title, description, children }: { title: string, description?: string, children: React.ReactNode }) {
  return (
    <section className="space-section relative animate-fade-up">
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

export function DescriptionShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Info className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">UI Metadata</span>
        </div>
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Descriptions & Captions
        </Typography>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Contextual Description */}
        <Section title="Contextual" description="Standard input field guidance">
           <ComponentWrapper title="Description // Contextual" code={codeForm}>
            <div className="p-4 max-w-sm mx-auto space-y-4">
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                  Node Refresh Rate
                </Label>
                <Input defaultValue="500ms" className="h-9 radius-md border-primary/10" />
                <Description>Adjusts the interval for hardware state polling. Lower values increase CPU overhead.</Description>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Register Metadata */}
        <Section title="Register Metadata" description="Hexadecimal pointer tracking">
          <ComponentWrapper title="Description // Register_PTR" code={codeHardwareMeta}>
             <div className="p-4 max-w-sm mx-auto">
               <div className="space-y-1 p-3 radius-md border border-primary/5 bg-black/5 dark:bg-white/5">
                 <div className="flex justify-between items-center">
                   <span className="text-xs font-bold uppercase tracking-widest opacity-80">Memory Pointer</span>
                   <Description variant="technical" className="text-primary">0x44F9_PTR</Description>
                 </div>
               </div>
             </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Thermal Thresholds */}
        <Section title="Thermal Constraints" description="Hardware safety thresholds">
          <ComponentWrapper title="Description // Threshold_Warn" code={codeSensorThreshold}>
             <div className="p-4 max-w-sm mx-auto">
               <div className="space-y-1">
                 <div className="flex justify-between items-baseline">
                   <span className="text-sm font-bold">Internal Temp</span>
                   <Description variant="technical" className="text-danger font-bold">78°C (Max: 80°C)</Description>
                 </div>
                 <Description className="text-danger/80">CRITICAL: Exceeding thermal safe-operating area.</Description>
               </div>
             </div>
          </ComponentWrapper>
        </Section>

        {/* 4. Live Status Feed */}
        <Section title="System Status Feed" description="Real-time telemetry heartbeat">
          <ComponentWrapper title="Description // Heartbeat_Status" code={codeStatusFeed}>
             <div className="p-4 max-w-sm mx-auto">
               <div className="flex items-center gap-3 p-3 radius-md border border-primary/10">
                 <div className="w-2 h-2 radius-full bg-success animate-pulse" />
                 <div className="flex flex-col">
                   <span className="text-xs font-bold uppercase tracking-widest">Node_ESP32_04</span>
                   <Description variant="technical">Signal: -42dBm | Uptime: 48h</Description>
                 </div>
               </div>
             </div>
          </ComponentWrapper>
        </Section>
      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Description Guardrails</h4>
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Placement", heading: "Adjacency", desc: "Descriptions should always follow the label/input, never precede it." },
            { title: "Brevity", heading: "Single Sentence", desc: "Keep descriptions under 120 characters." },
            { title: "Contrast", heading: "Visual Hierarchy", desc: "Use muted colors to ensure the user scans the input first, and guidance second." }
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