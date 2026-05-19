"use client"

import React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { 
  TerminalSquare, 
  Cpu, 
  Activity, 
  Info, 
  MousePointerClick
} from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS FOR THE WRAPPER */
const codeStandardTooltip = `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon" className="radius-md w-10 h-10">
      <TerminalSquare className="w-4 h-4 text-primary" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <Typography variant="caption" className="font-bold tracking-widest text-[10px] uppercase">
      Initialize Terminal
    </Typography>
  </TooltipContent>
</Tooltip>`;

const codeInlineTooltip = `<p className="text-body text-sm text-muted-foreground leading-relaxed">
  Ensure the <Tooltip>
    <TooltipTrigger className="text-primary border-b border-primary/30 border-dashed hover:border-primary transition-colors cursor-help">
      ESP32_Node
    </TooltipTrigger>
    <TooltipContent side="bottom" className="max-w-[200px]">
      <span className="text-xs text-muted-foreground">
        A low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth.
      </span>
    </TooltipContent>
  </Tooltip> is securely connected before running the telemetry scripts.
</p>`;

const codeDenseTooltip = `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="secondary" className="radius-md">
      <Activity className="mr-2 w-4 h-4" /> Node Status
    </Button>
  </TooltipTrigger>
  <TooltipContent side="right" align="center" className="p-3 space-group">
    <div className="flex items-center gap-2 border-b border-primary/5 pb-2">
      <div className="w-1.5 h-1.5 radius-full bg-green-500 animate-pulse" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">Active</span>
    </div>
    <div className="space-y-1 pt-1">
      <div className="flex justify-between gap-wide text-xs">
        <span className="opacity-60">Latency</span>
        <span className="font-mono text-primary font-bold">12ms</span>
      </div>
      <div className="flex justify-between gap-wide text-xs">
        <span className="opacity-60">Packets</span>
        <span className="font-mono text-primary font-bold">99.8%</span>
      </div>
    </div>
  </TooltipContent>
</Tooltip>`;

/* 🔹 Layout Blueprint Section Component */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6 relative">
        <div className="absolute -top-6 right-0 p-3 opacity-[0.03] pointer-events-none select-none z-0">
          <Typography variant="h1" className="text-h1 uppercase">{title[0]}</Typography>
        </div>
        <Typography variant="h3" className="tracking-tight font-bold text-primary/90 relative z-10">
          {title}
        </Typography>
        {description && (
          <Typography variant="body" className="text-body-muted text-sm max-w-2xl relative z-10">
            {description}
          </Typography>
        )}
      </div>
      <div className="w-full">
        {children}
      </div>
    </section>
  )
}

export function TooltipShowcase() {
  return (
    /* 🔹 Crucial: Tooltips require a provider context to manage global hover states */
    <TooltipProvider delayDuration={200}>
      <div className="page-container space-page">

        {/* 🔹 Header */}
        <header className="space-group pb-10 border-b border-primary/10 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
            Micro-Interaction Engine
          </div>
        </header>

        {/* 🔹 Action Button Tooltip */}
        <Section title="Action Labels" description="The standard use-case. Providing explicit context to icon-only buttons to save layout space.">
          <ComponentWrapper title="Tooltip // Action_Label" code={codeStandardTooltip}>
            <div className="flex justify-center p-16 h-[200px] items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="radius-md w-12 h-12 hover:bg-primary/5 hover:border-primary/30 transition-all">
                    <TerminalSquare className="w-5 h-5 text-primary" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <Typography variant="caption" className="font-bold tracking-widest text-[10px] uppercase">
                    Initialize Terminal
                  </Typography>
                </TooltipContent>
              </Tooltip>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 🔹 Inline Text Glossary */}
        <Section title="Inline Glossary" description="Utilizing dotted-border triggers within standard typography to define complex technical terms.">
          <ComponentWrapper title="Tooltip // Lexicon_Definition" code={codeInlineTooltip}>
            <div className="flex justify-center p-10 h-[200px] items-center max-w-md mx-auto text-center">
              <p className="text-body text-sm text-muted-foreground leading-relaxed">
                Ensure the <Tooltip>
                  <TooltipTrigger className="text-primary border-b border-primary/30 border-dashed hover:border-primary transition-colors cursor-help focus-ring radius-sm">
                    ESP32_Node
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-[250px] p-3 text-left">
                    <span className="text-xs text-muted-foreground leading-relaxed block">
                      A low-cost, low-power system on a chip microcontroller with integrated Wi-Fi and dual-mode Bluetooth.
                    </span>
                  </TooltipContent>
                </Tooltip> is securely connected before running the telemetry scripts.
              </p>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 🔹 Dense Data Tooltip */}
        <Section title="Dense Data Inspector" description="Multi-line tooltips containing mini-layouts for rapid hardware status checks.">
          <ComponentWrapper title="Tooltip // Node_Telemetry" code={codeDenseTooltip}>
            <div className="flex justify-center p-16 h-[200px] items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" className="radius-md group">
                    <Activity className="mr-2 w-4 h-4 group-hover:text-primary transition-colors" /> Node Status
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" align="center" className="p-3 space-group min-w-[140px]">
                  <div className="flex items-center gap-2 border-b border-primary/5 pb-2">
                    <div className="w-1.5 h-1.5 radius-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">Active</span>
                  </div>
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between gap-wide text-xs">
                      <span className="opacity-60">Latency</span>
                      <span className="font-mono text-primary font-bold">12ms</span>
                    </div>
                    <div className="flex justify-between gap-wide text-xs">
                      <span className="opacity-60">Packets</span>
                      <span className="font-mono text-primary font-bold">99.8%</span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 🔹 Guidelines Footer */}
        <footer className="system-footer mt-16 border-t border-primary/10 pt-8">
          <h4 className="text-h4 font-bold text-primary/90 mb-6 flex items-center gap-2">
            <MousePointerClick className="w-5 h-5 text-primary" /> Tooltip Mechanics
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-wide">
            <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
              <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">01 Intent</div>
              <span className="font-semibold text-body text-sm block">Non-Essential Data</span>
              <p className="text-caption text-xs leading-relaxed">
                Tooltips are inaccessible on touch devices. Never place critical actions or mandatory reading exclusively inside a tooltip.
              </p>
            </div>

            <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
              <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">02 Timing</div>
              <span className="font-semibold text-body text-sm block">Hover Delays</span>
              <p className="text-caption text-xs leading-relaxed">
                Maintain a <code>delayDuration</code> of 200ms-300ms. Instant tooltips cause visual noise when moving the cursor across the dashboard.
              </p>
            </div>

            <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
              <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">03 Structure</div>
              <span className="font-semibold text-body text-sm block">Container Boundaries</span>
              <p className="text-caption text-xs leading-relaxed">
                Use <code>radius-md</code> instead of <code>radius-xl</code> for tooltips to maintain a strict visual hierarchy against Modals and Popovers.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </TooltipProvider>
  )
}