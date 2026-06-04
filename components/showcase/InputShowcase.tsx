"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label" // Assuming you have a standard label, or use a span
import { Search, Mail, Lock, AlertCircle, CheckCircle2, Type } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeStandard = `<div className="space-y-4 max-w-sm">
  <div className="space-y-1.5">
    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
    <Input type="email" id="email" placeholder="hello@example.com" />
  </div>
  <div className="space-y-1.5">
    <label htmlFor="disabled" className="text-sm font-medium opacity-70">Workspace URL</label>
    <Input disabled id="disabled" value="acme-corp.app.com" />
  </div>
</div>`;

const codeIcons = `<div className="relative max-w-sm">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input type="search" placeholder="Search products..." className="pl-9 bg-muted/20" />
</div>

<div className="relative max-w-sm mt-4">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input type="email" placeholder="Enter your email" className="pl-9 pr-24" />
  <button className="absolute right-1 top-1 h-8 px-3 text-xs font-medium bg-primary text-primary-foreground radius-sm">
    Subscribe
  </button>
</div>`;

const codeValidation = `<div className="space-y-1.5 max-w-sm">
  <label className="text-sm font-medium text-danger flex items-center gap-1.5">
    <AlertCircle className="w-3.5 h-3.5" /> Invalid Password
  </label>
  <Input 
    type="password" 
    defaultValue="12345"
    className="border-danger/50 focus:border-danger focus:ring-danger/20 text-danger bg-danger/5" 
  />
  <p className="text-xs text-danger opacity-80">Password must be at least 8 characters.</p>
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

export function InputShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Type className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Form Elements</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Text Input
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             Standard text fields for user data collection. Designed with accessible focus rings, clear hover states, and seamless integration with icons and validation feedback.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Standard & Disabled */}
        <Section title="Standard Use" description="Basic forms and disabled states">
          <ComponentWrapper title="Input // Default" code={codeStandard}>
            <div className="w-full flex flex-col justify-center items-center py-8 gap-6">
              
              <div className="w-full max-w-sm space-y-1.5">
                <label htmlFor="email" className="text-sm font-semibold">Email Address</label>
                <Input type="email" id="email" placeholder="hello@example.com" />
              </div>

              <div className="w-full max-w-sm space-y-1.5">
                <label htmlFor="disabled" className="text-sm font-semibold opacity-70">Workspace URL</label>
                <Input disabled id="disabled" value="acme-corp.app.com" />
                <p className="text-[11px] text-muted-foreground">Workspace URLs cannot be changed after creation.</p>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. With Icons & Decorators */}
        <Section title="Decorated Inputs" description="Icons and integrated buttons">
          <ComponentWrapper title="Input // With_Icons" code={codeIcons}>
            <div className="w-full flex flex-col justify-center items-center py-8 gap-6">
              
              <div className="w-full max-w-sm relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="pl-9 bg-muted/20" />
              </div>

              <div className="w-full max-w-sm relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="email" placeholder="Enter your email" className="pl-9 pr-24 shadow-sm" />
                <button className="absolute right-1 top-1 h-8 px-3 text-xs font-semibold bg-primary text-primary-foreground radius-sm transition-transform hover:scale-95">
                  Subscribe
                </button>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Validation States */}
        <Section title="Validation" description="Success and Error feedback">
          <ComponentWrapper title="Input // Validation" code={codeValidation}>
            <div className="w-full flex flex-col justify-center items-center py-8 gap-6">
              
              {/* Error State */}
              <div className="w-full max-w-sm space-y-1.5">
                <label className="text-sm font-semibold text-danger flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" /> Invalid Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-danger/70" />
                  <Input 
                    type="password" 
                    defaultValue="12345"
                    className="pl-9 border-danger/50 focus:border-danger focus:ring-danger/20 text-danger bg-danger/5" 
                  />
                </div>
                <p className="text-xs text-danger opacity-80 font-medium">Password must be at least 8 characters.</p>
              </div>

              {/* Success State */}
              <div className="w-full max-w-sm space-y-1.5">
                <label className="text-sm font-semibold text-success flex items-center gap-1.5">
                  Username available
                </label>
                <div className="relative">
                  <Input 
                    type="text" 
                    defaultValue="alex_dev"
                    className="pr-9 border-success/50 focus:border-success focus:ring-success/20 bg-success/5" 
                  />
                  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-success" />
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
             <Type className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Input Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Accessibility", heading: "Always Use Labels", desc: "Never rely solely on placeholders for form context. Placeholders disappear when the user starts typing, which can cause cognitive strain. Always pair an Input with a descriptive Label." },
            { title: "Feedback", heading: "Clear Validation", desc: "When displaying an error state, use color (danger), an icon (alert), and descriptive helper text. Do not rely on color alone, as this is hostile to colorblind users." },
            { title: "Sizing", heading: "Touch Targets", desc: "The default Input is fixed at h-10 (40px) to ensure a comfortable touch target on mobile devices while remaining sleek on desktop viewports." }
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