"use client"

import React from "react"
import { Typography } from "@/components/ui/typography"
import { BookOpen, Layout, Zap } from "lucide-react"

import { BasicAccordion } from "./BasicAccordion"
import { ControlledAccordion } from "./ControlledAccordion"
import { CustomIndicatorAccordion } from "./CustomindicatorAccordion"
import { CustomStyledAccordion } from "./CustomStyledAccordion"
import { DisabledAccordion } from "./DisabledAccordion"
import { FAQAccordion } from "./FAQAccordion"
import { MultipleAccordion } from "./MultipleAccordion"
import { SurfaceAccordion } from "./SurfaceAccordion"

// High-Density Section Wrapper
function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="space-section animate-fade-up relative">
      {/* Blueprint Index Marker */}
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

export function AccordionShowcase() {
  return (
    <div className="page-container space-page">

      {/* 🔹 HEADER: Terminal Style */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Zap className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Accordion Protocol v2.4</span>
</div>        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Hierarchical Telemetry
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             A high-density component for managing deep-state data. Optimized for 
             technical documentation, hardware telemetry, and nested property configurations.
           </Typography>
        </div>
      </header>

      {/* 🔹 SHOWCASE GRID */}
      <div>
        <Section title="Basic" description="No separator logic">
          <BasicAccordion />
        </Section>

        <Section title="Surface" description="Encapsulated variant">
          <SurfaceAccordion />
        </Section>

        <Section title="Multiple" description="Parallel processing">
          <MultipleAccordion />
        </Section>

        <Section title="Controlled" description="State orchestration">
          <ControlledAccordion />
        </Section>

        <Section title="Custom Indicator" description="Visual signal types">
          <CustomIndicatorAccordion />
        </Section>

        <Section title="Custom Styled" description="Blueprint aesthetics">
          <CustomStyledAccordion />
        </Section>
      </div>

      <div>
        <Section title="Disabled State" description="System access lock">
          <DisabledAccordion />
        </Section>

        <Section title="FAQ Engine" description="Real-world doc usage">
          <FAQAccordion />
        </Section>
      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <Layout className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Encapsulation Rules</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Flow", heading: "Height Stability", desc: "Maintain overflow-hidden to prevent layout shifts during async expansion." },
            { title: "Style", heading: "Radius Tokens", desc: "Apply radius-md for items and radius-xl for the master showcase container." },
            { title: "Telemetry", heading: "Hardware Sync", desc: "For ESP32 readouts, force tabular-nums to keep sensor data vertically aligned." }
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