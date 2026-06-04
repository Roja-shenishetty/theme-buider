"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { CloseButton } from "@/components/ui/closeButton"
import { XSquare, AlertCircle, ShieldAlert, Tag } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeAbsolute = `<div className="relative p-5 border radius-lg bg-background w-full max-w-sm shadow-sm">
  <div className="pr-6">
    <h4 className="text-sm font-bold mb-1">System Update</h4>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Version 4.2.1 is ready to install. This requires a brief restart.
    </p>
  </div>
  <CloseButton className="absolute right-3 top-3" />
</div>`;

const codeBanner = `<div className="flex items-center justify-between p-3 border border-warning/20 bg-warning/5 radius-md w-full">
  <div className="flex items-center gap-3">
    <ShieldAlert className="w-4 h-4 text-warning" />
    <span className="text-xs font-medium text-warning-foreground">
      Unsaved changes in environment variables.
    </span>
  </div>
  <CloseButton className="hover:bg-warning/20 hover:text-warning" />
</div>`;

const codeChip = `<div className="flex gap-2">
  <div className="inline-flex items-center gap-1.5 pl-2.5 pr-1 py-1 bg-primary/10 border border-primary/20 radius-full">
    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
      Production
    </span>
    <CloseButton className="w-4 h-4 radius-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground" />
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

export function CloseButtonShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <XSquare className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Action Tokens</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Close Button
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             A hyper-specific micro-component designed exclusively for dismissal actions. Engineered with strict spatial boundaries to integrate into dense headers, alerts, and floating panels.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Modal / Absolute Positioning */}
        <Section title="Absolute Dismiss" description="Top-right modal placement">
          <ComponentWrapper title="CloseButton // Absolute_Card" code={codeAbsolute}>
            <div className="w-full py-12 flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background radius-md">
              <div className="relative p-5 border radius-lg bg-background w-full max-w-sm shadow-md">
                <div className="pr-6">
                  <h4 className="text-sm font-bold mb-1">System Update</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Version 4.2.1 is ready to install. This requires a brief restart of your local environment.
                  </p>
                </div>
                {/* Simulated Absolute Close Button */}
                <CloseButton className="absolute right-3 top-3" />
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Banner / Inline */}
        <Section title="Inline Banner" description="Flexbox header integration">
          <ComponentWrapper title="CloseButton // Alert_Banner" code={codeBanner}>
            <div className="w-full flex justify-center p-8">
              <div className="flex items-center justify-between p-3 border border-warning/20 bg-warning/5 radius-md w-full max-w-md shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-4 h-4 text-warning" />
                  <span className="text-xs font-medium text-warning-foreground">
                    Unsaved changes in environment variables.
                  </span>
                </div>
                {/* Themed Close Button */}
                <CloseButton className="hover:bg-warning/20 hover:text-warning" />
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Micro Tags / Chips */}
        <Section title="Micro Integration" description="Pill & Filter Chip Overrides">
          <ComponentWrapper title="CloseButton // Filter_Chip" code={codeChip}>
            <div className="w-full flex justify-center py-14 bg-black/5 dark:bg-white/5 radius-md">
              <div className="flex gap-3">
                <div className="inline-flex items-center gap-1.5 pl-2.5 pr-1 py-1 bg-primary/10 border border-primary/20 radius-full hover:bg-primary/15 transition-colors cursor-default">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Production
                  </span>
                  {/* Minified Close Button for pill */}
                  <CloseButton className="w-4 h-4 radius-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground" />
                </div>

                <div className="inline-flex items-center gap-1.5 pl-2.5 pr-1 py-1 bg-muted border radius-full hover:bg-muted/80 transition-colors cursor-default">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                    Node JS
                  </span>
                  <CloseButton className="w-4 h-4 radius-full" />
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
             <AlertCircle className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">CloseButton Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Footprint", heading: "Strict Dimensions", desc: "The component is locked to w-6 h-6 to prevent layout shifting. If it needs to be smaller (like in a chip), explicitly override it with className='w-4 h-4'." },
            { title: "Visibility", heading: "Alpha Transparency", desc: "By default, the button is at opacity-70 and reaches opacity-100 on hover. This ensures it doesn't fight with the primary typography of the card for attention." },
            { title: "Accessibility", heading: "Focus Strategy", desc: "The Close Button includes an sr-only 'Close' label and inherits your global focus-ring system. Never remove the focus ring styling from this interactive element." }
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