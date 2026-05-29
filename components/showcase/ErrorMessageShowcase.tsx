"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertOctagon, ServerCrash, AlertTriangle, Terminal, RefreshCw, FileWarning } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeStandard = `<Alert variant="destructive" className="radius-md bg-danger/5 border-danger/20">
  <ServerCrash className="h-4 w-4" />
  <AlertTitle className="text-sm font-bold uppercase tracking-widest">
    Connection Refused
  </AlertTitle>
  <AlertDescription className="text-xs opacity-80 mt-1 leading-relaxed">
    Node core-alpha-01 failed to respond to the handshake protocol within the 5000ms timeout window. Ensure the hardware is powered and on the correct subnet.
  </AlertDescription>
</Alert>`;

const codeActionable = `<Alert variant="destructive" className="radius-md bg-danger/5 border-danger/20">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle className="text-sm font-bold uppercase tracking-widest">
    Telemetry Sync Failed
  </AlertTitle>
  <AlertDescription className="text-xs opacity-80 mt-2 space-y-3">
    <p>
      Local state diverges from the remote cluster. Automatic reconciliation aborted to prevent memory partition corruption.
    </p>
    <div className="flex gap-2 pt-1">
      <Button variant="danger" size="sm" className="h-7 text-xs radius-sm">
        <RefreshCw className="w-3 h-3 mr-2" /> Force Sync
      </Button>
      <Button variant="outline" size="sm" className="h-7 text-xs radius-sm border-danger/20 text-danger hover:bg-danger/10">
        View Stack Trace
      </Button>
    </div>
  </AlertDescription>
</Alert>`;

const codeTerminal = `<div className="p-4 radius-md border border-danger/30 bg-[#0a0a0a] shadow-inner relative overflow-hidden">
  {/* Scanline effect */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
  
  <div className="flex items-center gap-2 mb-3 border-b border-danger/20 pb-2 relative z-10">
     <Terminal className="w-4 h-4 text-danger" />
     <span className="text-[10px] font-bold uppercase tracking-widest text-danger">Kernel Panic</span>
  </div>
  
  <div className="font-mono text-[10px] text-danger/80 space-y-1 relative z-10 uppercase tracking-tight">
    <p>FATAL: Exception (28) at pc 0x40001234</p>
    <p>Registers:</p>
    <p>A0: 0x80001234  A1: 0x3ffb0000  A2: 0x00000000</p>
    <p>A3: 0x00000000  A4: 0x00000000  A5: 0x00000000</p>
    <p className="mt-2 text-danger animate-pulse">HALTING SYSTEM INTERRUPTS...</p>
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

export function ErrorMessageShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <FileWarning className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">System Faults</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Error Messages
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             Persistent, section-level alert blocks used to communicate severe system faults, disconnected nodes, and actionable data corruption states.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Standard Fault */}
        <Section title="Standard Fault" description="Informational blocking error">
          <ComponentWrapper title="Alert // Connection_Lost" code={codeStandard}>
            <div className="p-4 w-full max-w-sm mx-auto">
              <Alert variant="destructive" className="radius-md bg-danger/5 border-danger/20">
                <ServerCrash className="h-4 w-4" />
                <AlertTitle className="text-sm font-bold uppercase tracking-widest">
                  Connection Refused
                </AlertTitle>
                <AlertDescription className="text-xs opacity-80 mt-1 leading-relaxed">
                  Node core-alpha-01 failed to respond to the handshake protocol within the 5000ms timeout window. Ensure the hardware is powered and on the correct subnet.
                </AlertDescription>
              </Alert>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Actionable Recovery */}
        <Section title="Actionable Recovery" description="Error with integrated resolution">
          <ComponentWrapper title="Alert // State_Divergence" code={codeActionable}>
            <div className="p-4 w-full max-w-sm mx-auto">
              <Alert variant="destructive" className="radius-md bg-danger/5 border-danger/20">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle className="text-sm font-bold uppercase tracking-widest">
                  Telemetry Sync Failed
                </AlertTitle>
                <AlertDescription className="text-xs opacity-80 mt-2 space-y-3">
                  <p>
                    Local state diverges from the remote cluster. Automatic reconciliation aborted to prevent memory partition corruption.
                  </p>
                  <div className="flex gap-2 pt-1">
                    <Button variant="danger" size="sm" className="h-7 text-xs radius-sm">
                      <RefreshCw className="w-3 h-3 mr-2" /> Force Sync
                    </Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs radius-sm border-danger/20 text-danger hover:bg-danger/10">
                      View Stack Trace
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
          </ComponentWrapper>
        </Section>

       {/* 3. Terminal Panic (Primary Theme) */}
<Section title="Raw Output Panic" description="Hardware level fatal crashes">
  <ComponentWrapper title="Alert // Kernel_Panic" code={codeTerminal}>
    <div className="p-4 w-full max-w-sm mx-auto">
      <div className="p-4 radius-md border border-primary/30 bg-[#0a0a0a] shadow-inner relative overflow-hidden">
        {/* Visual Scanline Effect - Kept subtle */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(var(--primary-rgb),0.06),transparent)] bg-[length:100%_4px,3px_100%] pointer-events-none" />
        
        <div className="flex items-center gap-2 mb-3 border-b border-primary/20 pb-2 relative z-10">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Kernel Panic</span>
        </div>
        
        <div className="font-mono text-[10px] text-primary/80 space-y-1 relative z-10 uppercase tracking-tight">
          <p>FATAL: Exception (28) at pc 0x40001234</p>
          <p>Registers:</p>
          <p>A0: 0x80001234  A1: 0x3ffb0000</p>
          <p>A2: 0x00000000  A3: 0x00000000</p>
          <p className="mt-2 text-primary animate-pulse">HALTING SYSTEM INTERRUPTS...</p>
        </div>
      </div>
    </div>
  </ComponentWrapper>
</Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <AlertOctagon className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Error Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Tone", heading: "Technical Precision", desc: "Avoid vague language like 'Oops, something went wrong'. Provide the exact failing node, the process that failed, and the consequence of the failure." },
            { title: "Resolution", heading: "Actionable Buttons", desc: "If a user can recover from the error (e.g., retrying a fetch, clearing a cache), provide a primary action button directly inside the AlertDescription." },
            { title: "Placement", heading: "Block vs Inline", desc: "Use these Alert blocks for section-wide or page-wide failures. For single input validation failures, strictly use the FieldError micro-component instead." }
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