"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Type, CheckSquare, ToggleRight, AlertCircle } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeTypography = `<div className="space-y-6">
  {/* Standard Body Label */}
  <div className="space-y-2">
    <Label htmlFor="node-name" className="text-sm font-medium">Standard Identifier</Label>
    <Input id="node-name" defaultValue="core-01" className="h-9 radius-md bg-background border-primary/10" />
  </div>

  {/* System Micro-Label */}
  <div className="space-y-2">
    <Label htmlFor="mac-address" className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
      Hardware MAC Address
    </Label>
    <Input id="mac-address" defaultValue="00:1B:44:11:3A:B7" disabled className="h-9 radius-md font-mono text-xs bg-black/5" />
  </div>
</div>`;

const codePeer = `<div className="space-y-6">
  {/* Switch Integration */}
  <div className="flex items-center space-x-3 p-3 radius-md border border-primary/10 bg-background/50 hover:border-primary/30 transition-colors">
    <Switch id="telemetry-stream" />
    <Label htmlFor="telemetry-stream" className="flex flex-col cursor-pointer">
      <span className="text-sm font-bold">Enable Telemetry</span>
      <span className="text-[10px] font-mono text-muted-foreground uppercase">Stream data to cloud</span>
    </Label>
  </div>

  {/* Disabled Peer State */}
  <div className="flex items-center space-x-3 p-3 radius-md border border-primary/5 bg-black/5 opacity-70">
    <Checkbox id="debug-mode" disabled />
    <Label htmlFor="debug-mode" className="flex flex-col peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      <span className="text-sm font-bold text-danger">Debug Mode (Locked)</span>
      <span className="text-[10px] font-mono text-muted-foreground uppercase">Requires elevated clearance</span>
    </Label>
  </div>
</div>`;

const codeValidation = `<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="auth-key" className="text-[10px] font-bold uppercase tracking-widest flex justify-between">
      <span>Encryption Key <span className="text-danger">*</span></span>
      <span className="text-danger">Required</span>
    </Label>
    <Input id="auth-key" type="password" className="h-9 radius-md border-danger/50 focus-visible:ring-danger/30" />
  </div>
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

export function LabelShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Type className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Input Semantics</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Labels & Associations
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             Accessible typography primitives that bind textual descriptors to interactive form controls and hardware toggles.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Typography Scales */}
        <Section title="Typography Scales" description="Standard vs Micro-Label variants">
          <ComponentWrapper title="Label // Type_Scale" code={codeTypography}>
            <div className="w-full max-w-sm mx-auto p-4 space-y-8">
              
              <div className="space-y-2">
                <Label htmlFor="node-name" className="text-sm font-medium">Standard Identifier</Label>
                <Input id="node-name" defaultValue="core-01" className="h-9 radius-md bg-background border-primary/10" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mac-address" className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                  Hardware MAC Address
                </Label>
                <Input id="mac-address" defaultValue="00:1B:44:11:3A:B7" disabled className="h-9 radius-md font-mono text-xs bg-black/5 dark:bg-white/5 opacity-50 cursor-not-allowed" />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Peer Associations */}
        <Section title="Peer Associations" description="Linking labels to toggles & checkboxes">
          <ComponentWrapper title="Label // Peer_State" code={codePeer}>
            <div className="w-full max-w-sm mx-auto p-4 space-y-4">
              
              {/* Switch Integration */}
              <div className="flex items-center space-x-3 p-3 radius-md border border-primary/10 bg-background/50 hover:border-primary/30 transition-colors">
                <Switch id="telemetry-stream" />
                <Label htmlFor="telemetry-stream" className="flex flex-col cursor-pointer">
                  <span className="text-sm font-bold">Enable Telemetry</span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Stream data to cloud</span>
                </Label>
              </div>

              {/* Disabled Checkbox Integration */}
              <div className="flex items-center space-x-3 p-3 radius-md border border-primary/5 bg-black/5 dark:bg-white/5 opacity-70">
                <Checkbox id="debug-mode" disabled />
                <Label htmlFor="debug-mode" className="flex flex-col peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <span className="text-sm font-bold text-danger flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Debug Mode (Locked)
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Requires elevated clearance</span>
                </Label>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Validation Modifiers */}
        <Section title="Validation Modifiers" description="Required fields and error binding">
          <ComponentWrapper title="Label // Validation" code={codeValidation}>
            <div className="w-full max-w-sm mx-auto p-4 space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="auth-key" className="text-[10px] font-bold uppercase tracking-widest flex justify-between">
                  <span>Encryption Key <span className="text-danger">*</span></span>
                  <span className="text-danger">Required</span>
                </Label>
                <Input id="auth-key" type="password" className="h-9 radius-md border-danger/50 focus-visible:ring-danger/30" />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <CheckSquare className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Label Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Accessibility", heading: "The htmlFor Prop", desc: "Never deploy a standalone text node as a label. Always use the standard <Label> component and strictly bind the 'htmlFor' prop to the Input's 'id'." },
            { title: "Click Targets", heading: "Expanding Activation", desc: "For Switches and Checkboxes, placing explanatory text inside the <Label> increases the clickable surface area, drastically improving UX on touch displays." },
            { title: "Disabled States", heading: "Peer Opacity", desc: "Use the Tailwind 'peer-disabled:' modifier on your labels so they automatically gray out when the associated input or checkbox is deactivated." }
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