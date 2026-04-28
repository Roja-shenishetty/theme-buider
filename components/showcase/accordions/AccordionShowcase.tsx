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
    <section className="space-section animate-fade-up">
      <div className="flex items-center gap-3 mb-3 border-l-2 border-primary pl-4">
        <div className="space-y-0.5">
          <Typography variant="h3" className="text-sm font-black uppercase tracking-widest">
            {title}
          </Typography>
          {description && (
            <p className="text-[10px] text-muted-foreground font-mono uppercase">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="card bg-muted/5 border-primary/5 p-4 md:p-6 overflow-hidden">
        {children}
      </div>
    </section>
  )
}

export function AccordionShowcase() {
  return (
    <div className="page-container space-page">

      {/* 🔹 HEADER: Terminal Style */}
      <header className="pb-8 mb-4 border-b border-primary/10 animate-fade-up">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-primary w-5 h-5" />
         
        </div>
        <Typography variant="body" className="max-w-2xl text-xs md:text-sm opacity-60 leading-relaxed font-medium">
          A high-density component for managing hierarchical data. Optimized for 
          technical documentation and hardware telemetry dashboards.
        </Typography>
      </header>

      {/* 🔹 SHOWCASE GRID (Compact Flow) */}
      <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
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
      </div>

      <div className="space-y-4 mt-8">
        <Section title="Custom Indicator" description="Visual signal types">
          <CustomIndicatorAccordion />
        </Section>

        <Section title="Custom Styled" description="Blueprint aesthetics">
          <CustomStyledAccordion />
        </Section>

        <Section title="Disabled State" description="System access lock">
          <DisabledAccordion />
        </Section>

        <Section
          title="FAQ Engine"
          description="Real-world documentation use case"
        >
          <FAQAccordion />
        </Section>
      </div>

      {/* 🔹 SYSTEM FOOTER: Guidelines */}
      <footer className="system-footer mt-16">
        <div className="flex items-center gap-2 mb-6">
          <Layout className="w-4 h-4 text-primary" />
          <h4 className="system-footer-title">Encapsulation Rules</h4>
        </div>
        
        <div className="system-footer-grid">
          <div className="space-y-2">
            <div className="text-[10px] font-bold opacity-50 uppercase tracking-widest text-primary">01 Flow</div>
            <span className="system-footer-item-heading">Height Stability</span>
            <p className="system-footer-item-text">
              Maintain <code>overflow-hidden</code> to prevent layout shifts during async expansion.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-[10px] font-bold opacity-50 uppercase tracking-widest text-primary">02 Style</div>
            <span className="system-footer-item-heading">Radius Tokens</span>
            <p className="system-footer-item-text">
              Apply <code>radius-md</code> for items and <code>radius-xl</code> for the master showcase container.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-[10px] font-bold opacity-50 uppercase tracking-widest text-primary">03 Telemetry</div>
            <span className="system-footer-item-heading">Hardware Sync</span>
            <p className="system-footer-item-text">
              For ESP32 readouts, force <code>tabular-nums</code> to keep sensor data vertically aligned.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}