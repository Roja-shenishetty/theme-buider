"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { 
  Select, SelectContent, SelectGroup, SelectItem, 
  SelectLabel, SelectSeparator, SelectTrigger, SelectValue 
} from "@/components/ui/select"
import { ListFilter, Globe, AlertCircle, Layers } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `<div className="space-y-1.5 w-full max-w-xs">
  <label className="text-sm font-semibold">Deployment Environment</label>
  <Select defaultValue="production">
    <SelectTrigger>
      <SelectValue placeholder="Select an environment" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="development">Development</SelectItem>
      <SelectItem value="staging">Staging</SelectItem>
      <SelectItem value="production">Production</SelectItem>
    </SelectContent>
  </Select>
</div>`;

const codeGrouped = `<Select>
  <SelectTrigger className="w-full max-w-xs">
    <SelectValue placeholder="Select a framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Frontend</SelectLabel>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="vue">Vue</SelectItem>
      <SelectItem value="svelte">Svelte</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Backend</SelectLabel>
      <SelectItem value="node">Node.js</SelectItem>
      <SelectItem value="python">Python / Django</SelectItem>
      <SelectItem value="go">Go</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`;

const codeValidation = `<div className="space-y-1.5 w-full max-w-xs">
  <label className="text-sm font-semibold text-danger flex items-center gap-1.5">
    <AlertCircle className="w-3.5 h-3.5" /> Invalid Region
  </label>
  <Select>
    <SelectTrigger className="border-danger/50 focus:border-danger focus:ring-danger/20 text-danger bg-danger/5">
      <SelectValue placeholder="Select region" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="us-east">US East (N. Virginia)</SelectItem>
      <SelectItem value="eu-west">EU West (Ireland)</SelectItem>
    </SelectContent>
  </Select>
  <p className="text-xs text-danger opacity-80 font-medium">Please select a valid server region.</p>
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

export function SelectShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <ListFilter className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Data Selection</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Select Dropdown
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A highly accessible dropdown portal that escapes container overflows. Engineered using Radix UI to provide full keyboard navigation, screen reader support, and robust state management while completely avoiding native browser styling.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Selection */}
        <Section title="Standard Use" description="Basic key-value selection">
          <ComponentWrapper title="Select // Default" code={codeBasic}>
            <div className="w-full flex justify-center py-16">
              <div className="space-y-1.5 w-full max-w-xs">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  Deployment Environment
                </label>
                <Select defaultValue="production">
                  <SelectTrigger>
                    <SelectValue placeholder="Select an environment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Development (Local)</SelectItem>
                    <SelectItem value="staging">Staging (Preview)</SelectItem>
                    <SelectItem value="production">Production (Live)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Grouped Selection */}
        <Section title="Data Grouping" description="Categorized options with labels">
          <ComponentWrapper title="Select // Grouped" code={codeGrouped}>
            <div className="w-full flex justify-center py-16">
              <div className="space-y-1.5 w-full max-w-xs">
                <label className="text-sm font-semibold">Tech Stack</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Frontend</SelectLabel>
                      <SelectItem value="react">React / Next.js</SelectItem>
                      <SelectItem value="vue">Vue / Nuxt</SelectItem>
                      <SelectItem value="svelte">SvelteKit</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                      <SelectLabel>Backend</SelectLabel>
                      <SelectItem value="node">Node.js (Express)</SelectItem>
                      <SelectItem value="python">Python (Django)</SelectItem>
                      <SelectItem value="go">Go (Fiber)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Validation States */}
        <Section title="Validation" description="Error rendering and feedback">
          <ComponentWrapper title="Select // Error_State" code={codeValidation}>
            <div className="w-full flex justify-center py-16 bg-black/5 dark:bg-white/5 radius-md">
              <div className="space-y-1.5 w-full max-w-xs">
                <label className="text-sm font-semibold text-danger flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" /> Invalid Region
                </label>
                <Select>
                  <SelectTrigger className="border-danger/50 focus:border-danger focus:ring-danger/20 text-danger bg-danger/5">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us-east">US East (N. Virginia)</SelectItem>
                    <SelectItem value="eu-west">EU West (Ireland)</SelectItem>
                    <SelectItem value="ap-south">AP South (Mumbai)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-danger opacity-80 font-medium">Please select a valid server region to continue.</p>
              </div>
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
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Select Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Architecture", heading: "DOM Portals", desc: "The <SelectContent> uses a Radix UI Portal. When opened, the dropdown DOM node is appended to the <body>, not the parent div. This guarantees it will never be cut off by a parent container's overflow-hidden property." },
            { title: "Accessibility", heading: "Type-ahead", desc: "Because this uses Radix, users can open the dropdown and press 'S' on their keyboard to instantly jump to 'Staging' or 'Svelte'. This behavior is critical for accessibility and power users." },
            { title: "Interaction", heading: "Focus Trapping", desc: "When the dropdown is open, focus is entirely trapped inside the menu. Pressing 'Tab' will not move to the next form element until an option is selected or the menu is closed via 'Escape'." }
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