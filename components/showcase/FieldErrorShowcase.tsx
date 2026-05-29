"use client"

import { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { FieldError } from "@/components/ui/fieldError"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AlertOctagon, Terminal, ShieldAlert } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeStandard = `<div className="space-y-1.5">
  <Label className="text-[10px] font-bold uppercase tracking-widest text-danger">
    Network Port
  </Label>
  <Input 
    defaultValue="8080A" 
    className="h-9 radius-md border-danger/50 focus-visible:ring-danger/30 text-danger" 
  />
  {/* The FieldError component handles the gap, icon, and animation */}
  <FieldError error="Must be a valid integer between 1 and 65535" />
</div>`;

const codeTechnical = `<div className="space-y-1.5 p-4 radius-md border border-danger/20 bg-danger/5">
  <Label className="text-[10px] font-bold uppercase tracking-widest text-danger">
    Execution Script
  </Label>
  <Input 
    defaultValue="sudo rm -rf /" 
    className="h-9 font-mono radius-md border-danger/50 bg-background text-danger" 
  />
  <FieldError showIcon={false} className="font-mono lowercase normal-case tracking-normal pt-1">
    <Terminal className="w-3 h-3 mr-1 inline-block" />
    <span className="opacity-70">ERR_ILLEGAL_CMD: Root directory mutation locked.</span>
  </FieldError>
</div>`;

const codeInteractive = `const [hasError, setHasError] = useState(false)

<div className="space-y-4">
  <div className="space-y-1.5">
    <Label className="text-[10px] font-bold uppercase tracking-widest opacity-70">
      Node Authorization
    </Label>
    <Input 
      placeholder="Enter sync key..." 
      className={cn("h-9 radius-md", hasError && "border-danger/50 focus-visible:ring-danger/30 text-danger")}
    />
    <FieldError error={hasError ? "Sync key rejected by host. Invalid handshake." : null} />
  </div>
  
  <Button variant="outline" size="sm" onClick={() => setHasError(!hasError)}>
    Toggle Error State
  </Button>
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

export function FieldErrorShowcase() {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <AlertOctagon className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Input Telemetry</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Field Errors
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             Micro-typography components designed to provide immediate, contextual validation feedback directly adjacent to the point of mutation.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Standard Validation */}
        <Section title="Standard Validation" description="Default alert configuration">
          <ComponentWrapper title="Feedback // Form_Validation" code={codeStandard}>
            <div className="p-4 w-full max-w-sm mx-auto">
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-danger">
                  Network Port
                </Label>
                <Input 
                  defaultValue="8080A" 
                  className="h-9 radius-md border-danger/50 focus-visible:ring-danger/30 text-danger bg-danger/5" 
                />
                <FieldError error="Must be a valid integer between 1 and 65535" />
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Technical Feedback */}
        <Section title="Technical Traces" description="Mono-spaced system readouts">
          <ComponentWrapper title="Feedback // System_Trace" code={codeTechnical}>
            <div className="p-4 w-full max-w-sm mx-auto">
              <div className="space-y-1.5 p-4 radius-md border border-danger/20 bg-danger/5">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-danger">
                  Execution Script
                </Label>
                <Input 
                  defaultValue="sudo rm -rf /" 
                  className="h-9 font-mono radius-md border-danger/50 bg-background text-danger" 
                />
                <FieldError showIcon={false} className="font-mono normal-case tracking-normal pt-1">
                  <Terminal className="w-3 h-3 mr-1 inline-block" />
                  <span className="opacity-70">ERR_ILLEGAL_CMD: Root directory mutation locked.</span>
                </FieldError>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Interactive State */}
        <Section title="DOM Injection" description="Animation and layout stability">
          <ComponentWrapper title="Feedback // Async_Validation" code={codeInteractive}>
            <div className="p-4 w-full max-w-sm mx-auto">
              <div className="space-y-4">
                <div className="space-y-1.5 min-h-[70px]">
                  <Label className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                    Node Authorization
                  </Label>
                  <Input 
                    placeholder="Enter sync key..." 
                    className={hasError ? "h-9 radius-md border-danger/50 focus-visible:ring-danger/30 text-danger" : "h-9 radius-md bg-background border-primary/10"}
                  />
                  {/* The error smoothly injects into the DOM using the animate-fade-up class */}
                  <FieldError error={hasError ? "Sync key rejected by host. Invalid handshake." : null} />
                </div>
                
                <Button variant="outline" size="sm" onClick={() => setHasError(!hasError)} className="radius-md w-full">
                  Toggle Error State
                </Button>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <ShieldAlert className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Validation Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Accessibility", heading: "ARIA Live Regions", desc: "The component uses role='alert' and aria-live='polite' by default. This ensures screen readers announce the error the moment it is injected into the DOM without interrupting current tasks." },
            { title: "Layout Stability", heading: "Conditional Rendering", desc: "If error text is null, the component returns null. If your form layout jumps when an error appears, wrap your Input and Error in a div with a fixed min-height (e.g., min-h-[70px])." },
            { title: "Placement", heading: "Strict Adjacency", desc: "Never place a FieldError above an Input. It must always reside directly below the field it validates to maintain the standard flow of user data entry." }
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