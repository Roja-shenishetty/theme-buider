"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Fieldset, Legend } from "@/components/ui/fieldset"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Component, Network, Shield, AlertTriangle } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeStandard = `<Fieldset className="bg-background/50">
  <Legend className="flex items-center gap-2 text-primary">
    <Network className="w-3 h-3" /> Network Configuration
  </Legend>
  
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-1.5">
      <Label className="text-[10px] font-bold uppercase tracking-widest opacity-70">IPv4 Address</Label>
      <Input defaultValue="192.168.1.100" className="h-9 radius-md font-mono text-xs border-primary/10" />
    </div>
    <div className="space-y-1.5">
      <Label className="text-[10px] font-bold uppercase tracking-widest opacity-70">Subnet Mask</Label>
      <Input defaultValue="255.255.255.0" className="h-9 radius-md font-mono text-xs border-primary/10" />
    </div>
  </div>
</Fieldset>`;

const codeDisabled = `<Fieldset disabled className="bg-black/5 dark:bg-white/5 border-primary/10 opacity-70">
  <Legend className="flex items-center gap-2 text-danger">
    <Shield className="w-3 h-3" /> Security Overrides (Locked)
  </Legend>
  
  <div className="space-y-3">
    <div className="flex items-center space-x-3 p-2 radius-sm border border-primary/5">
      <Checkbox id="force-ssl" defaultChecked />
      <Label htmlFor="force-ssl" className="flex flex-col cursor-not-allowed">
        <span className="text-sm font-bold">Force SSL/TLS</span>
        <span className="text-[10px] font-mono text-muted-foreground uppercase">Enforce encrypted handshake</span>
      </Label>
    </div>
  </div>
</Fieldset>`;

const codeNested = `<Fieldset className="bg-background/50 border-primary/30">
  <Legend className="text-primary font-black">System Parameters</Legend>
  
  <div className="space-y-6">
    <div className="space-y-1.5">
      <Label className="text-[10px] font-bold uppercase tracking-widest opacity-70">Hostname</Label>
      <Input defaultValue="core-router-alpha" className="h-9 radius-md border-primary/10" />
    </div>

    {/* Nested Fieldset for Sub-Grouping */}
    <Fieldset className="bg-black/5 dark:bg-white/5 border-primary/10 p-3">
      <Legend className="opacity-70">Hardware Tuning</Legend>
      <div className="flex gap-4">
        <div className="space-y-1.5 flex-1">
          <Label className="text-[10px] font-bold uppercase opacity-70">Fan Curve</Label>
          <select className="w-full h-9 radius-md border border-primary/10 bg-background px-3 text-sm">
            <option>Aggressive</option>
            <option>Silent</option>
          </select>
        </div>
      </div>
    </Fieldset>
  </div>
</Fieldset>`;


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

export function FieldsetShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Component className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Input Grouping</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Fieldsets & Legends
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             Semantic HTML containers that visually and programmatically group related configuration inputs, providing essential context for complex forms.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Standard Configuration Group */}
        <Section title="Standard Group" description="Grouping related parameters">
          <ComponentWrapper title="Fieldset // Network_Config" code={codeStandard}>
            <div className="p-4 w-full max-w-sm mx-auto">
              <Fieldset className="bg-background/50">
                <Legend className="flex items-center gap-2 text-primary">
                  <Network className="w-3 h-3" /> Network Config
                </Legend>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-widest opacity-70">IPv4 Address</Label>
                    <Input defaultValue="192.168.1.100" className="h-9 radius-md font-mono text-xs border-primary/10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-widest opacity-70">Subnet Mask</Label>
                    <Input defaultValue="255.255.255.0" className="h-9 radius-md font-mono text-xs border-primary/10" />
                  </div>
                </div>
              </Fieldset>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Disabled State Propagation */}
        <Section title="State Propagation" description="Disabling a group via the parent">
          <ComponentWrapper title="Fieldset // Locked_State" code={codeDisabled}>
            <div className="p-4 w-full max-w-sm mx-auto">
              {/* Native HTML disabled prop propagates to all children */}
              <Fieldset disabled className="bg-black/5 dark:bg-white/5 border-primary/10 opacity-70">
                <Legend className="flex items-center gap-2 text-danger">
                  <Shield className="w-3 h-3" /> Security Overrides (Locked)
                </Legend>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 radius-sm border border-primary/5">
                    <Checkbox id="force-ssl" defaultChecked />
                    <Label htmlFor="force-ssl" className="flex flex-col cursor-not-allowed">
                      <span className="text-sm font-bold">Force SSL/TLS</span>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase">Enforce encrypted handshake</span>
                    </Label>
                  </div>
                </div>
              </Fieldset>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Nested Fieldsets */}
        <Section title="Nested Grouping" description="Hierarchical data boundaries">
          <ComponentWrapper title="Fieldset // Hierarchy" code={codeNested}>
            <div className="p-4 w-full max-w-sm mx-auto">
              <Fieldset className="bg-background/50 border-primary/30">
                <Legend className="text-primary font-black">System Parameters</Legend>
                
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-widest opacity-70">Hostname</Label>
                    <Input defaultValue="core-router-alpha" className="h-9 radius-md border-primary/10" />
                  </div>

                  {/* Nested Fieldset */}
                  <Fieldset className="bg-black/5 dark:bg-white/5 border-primary/10 p-3">
                    <Legend className="opacity-70">Hardware Tuning</Legend>
                    <div className="flex gap-4">
                      <div className="space-y-1.5 flex-1">
                        <Label className="text-[10px] font-bold uppercase tracking-widest opacity-70">Fan Curve</Label>
                        <select className="w-full h-9 radius-md border border-primary/10 bg-background px-3 text-sm focus-visible:outline-none">
                          <option>Aggressive</option>
                          <option>Silent</option>
                        </select>
                      </div>
                    </div>
                  </Fieldset>
                </div>
              </Fieldset>
            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <AlertTriangle className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Fieldset Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "HTML Semantics", heading: "Accessibility First", desc: "Always use <Legend> as the first direct child of a <Fieldset>. This is required for screen readers to properly announce the group's context when a user enters the inputs." },
            { title: "State Management", heading: "Native Disabling", desc: "Adding the 'disabled' attribute to a <Fieldset> natively disables all interactive inputs inside it. Use this for permission-locked configuration blocks." },
            { title: "Visuals", heading: "Border Focus", desc: "The custom component utilizes 'focus-within:border-primary/40'. This subtly highlights the entire group border when a user is actively editing any input inside." }
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