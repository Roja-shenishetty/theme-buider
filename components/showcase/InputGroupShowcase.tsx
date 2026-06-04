"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Input } from "@/components/ui/input"
import { InputGroup, InputPrefix, InputSuffix, inputGroupItemClasses } from "@/components/ui/inputGroup"
import { cn } from "@/lib/utils"
import { Link2, DollarSign, Copy, ArrowRight, LayoutTemplate } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeAffixes = `<div className="space-y-4 max-w-sm">
  <div className="space-y-1.5">
    <label className="text-sm font-semibold">Profile URL</label>
    <InputGroup>
      <InputPrefix>acme.com/</InputPrefix>
      <Input className={inputGroupItemClasses} placeholder="username" />
    </InputGroup>
  </div>

  <div className="space-y-1.5">
    <label className="text-sm font-semibold">Budget</label>
    <InputGroup>
      <InputPrefix className="px-3 bg-transparent border-none text-foreground">
        <DollarSign className="w-4 h-4" />
      </InputPrefix>
      <Input type="number" className={cn(inputGroupItemClasses, "pl-0")} placeholder="0.00" />
      <InputSuffix>USD</InputSuffix>
    </InputGroup>
  </div>
</div>`;

const codeAttachedButtons = `<div className="space-y-1.5 max-w-sm">
  <label className="text-sm font-semibold">Newsletter</label>
  <InputGroup className="p-1 pl-0">
    <Input className={inputGroupItemClasses} type="email" placeholder="Enter your email" />
    <button className="h-8 px-4 text-xs font-semibold bg-primary text-primary-foreground radius-sm hover:brightness-110 transition-all flex items-center gap-2">
      Subscribe <ArrowRight className="w-3 h-3" />
    </button>
  </InputGroup>
</div>`;

const codeComposite = `<div className="space-y-1.5 max-w-sm">
  <label className="text-sm font-semibold">API Endpoint</label>
  <InputGroup>
    <InputPrefix>
      <Link2 className="w-4 h-4 mr-2" />
      POST
    </InputPrefix>
    <Input 
      className={inputGroupItemClasses} 
      defaultValue="api/v1/users.create" 
      readOnly
    />
    <button className="flex items-center justify-center px-4 hover:bg-muted transition-colors border-l border-primary/10 text-muted-foreground hover:text-foreground">
      <Copy className="w-4 h-4" />
    </button>
  </InputGroup>
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

export function InputGroupShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <LayoutTemplate className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Composite Elements</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Input Group
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             Extend standard text inputs by attaching text prefixes, suffixes, icons, or actions directly to the input field, creating a cohesive, single-focus target.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Affixes (Text / Currency / Units) */}
        <Section title="Prefix & Suffix" description="URLs, measurements, and currency">
          <ComponentWrapper title="InputGroup // Affixes" code={codeAffixes}>
            <div className="w-full flex flex-col justify-center items-center py-8 gap-6">
              
              <div className="w-full max-w-sm space-y-1.5">
                <label className="text-sm font-semibold">Profile URL</label>
                <InputGroup>
                  <InputPrefix>acme.com/</InputPrefix>
                  <Input className={inputGroupItemClasses} placeholder="username" />
                </InputGroup>
              </div>

              <div className="w-full max-w-sm space-y-1.5">
                <label className="text-sm font-semibold">Monthly Budget</label>
                <InputGroup>
                  <InputPrefix className="px-3 bg-transparent border-none text-foreground">
                    <DollarSign className="w-4 h-4" />
                  </InputPrefix>
                  <Input type="number" className={cn(inputGroupItemClasses, "pl-0")} placeholder="0.00" />
                  <InputSuffix>USD</InputSuffix>
                </InputGroup>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Attached Buttons */}
        <Section title="Attached Actions" description="Seamless button integration">
          <ComponentWrapper title="InputGroup // Buttons" code={codeAttachedButtons}>
            <div className="w-full flex justify-center py-14">
              <div className="w-full max-w-sm space-y-1.5">
                <label className="text-sm font-semibold">Newsletter</label>
                {/* Notice the p-1 padding creating an inner-shadow aesthetic */}
                <InputGroup className="p-1 pl-0 focus-within:ring-primary/40">
                  <Input className={inputGroupItemClasses} type="email" placeholder="Enter your email" />
                  <button className="h-8 px-4 text-xs font-semibold bg-primary text-primary-foreground radius-sm hover:brightness-110 transition-all flex items-center gap-2">
                    Subscribe <ArrowRight className="w-3 h-3" />
                  </button>
                </InputGroup>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Composite & ReadOnly */}
        <Section title="Composite" description="Combining elements & ReadOnly states">
          <ComponentWrapper title="InputGroup // Complex" code={codeComposite}>
            <div className="w-full flex justify-center py-14 bg-black/5 dark:bg-white/5 radius-md">
              <div className="w-full max-w-sm space-y-1.5">
                <label className="text-sm font-semibold">Webhook Endpoint</label>
                <InputGroup>
                  <InputPrefix>
                    <Link2 className="w-4 h-4 mr-2" />
                    POST
                  </InputPrefix>
                  <Input 
                    className={cn(inputGroupItemClasses, "font-mono text-xs")} 
                    defaultValue="api/v1/users.create" 
                    readOnly
                  />
                  <button 
                    className="flex items-center justify-center px-4 hover:bg-muted transition-colors border-l border-primary/10 text-muted-foreground hover:text-foreground active:bg-muted/80"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </InputGroup>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <LayoutTemplate className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Group Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Visual Cohesion", heading: "Focus Within", desc: "The wrapper <InputGroup> utilizes the focus-within pseudo-class. This ensures the entire component acts as a single target, moving the focus ring to the outer boundary instead of the internal input." },
            { title: "Integration", heading: "Stripping Borders", desc: "When placing a standard <Input> inside an <InputGroup>, pass the exported inputGroupItemClasses to strip its default borders and radius, preventing visual stacking." },
            { title: "Usability", heading: "Clear Boundaries", desc: "Use a subtle border-r or border-l on prefixes and suffixes. This slight visual demarcation helps users distinguish between editable text and static context." }
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