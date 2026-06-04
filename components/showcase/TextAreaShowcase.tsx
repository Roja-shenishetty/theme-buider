"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Textarea } from "@/components/ui/textarea"
import { AlignLeft, MessageSquare, ShieldAlert, AlignJustify } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeStandard = `<div className="space-y-1.5 w-full max-w-sm">
  <label htmlFor="message" className="text-sm font-semibold">Your Message</label>
  <Textarea 
    id="message" 
    placeholder="Type your message here..." 
    className="min-h-[120px]"
  />
  <p className="text-[11px] text-muted-foreground">
    Your message will be sent to the support team.
  </p>
</div>`;

const codeValidation = `const [text, setText] = useState("")
const maxChars = 200
const isOverLimit = text.length > maxChars

<div className="space-y-1.5 w-full max-w-sm">
  <div className="flex justify-between items-end">
    <label className="text-sm font-semibold">Bio</label>
    <span className={cn("text-xs", isOverLimit ? "text-danger font-semibold" : "text-muted-foreground")}>
      {text.length} / {maxChars}
    </span>
  </div>
  
  <Textarea 
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Tell us a little bit about yourself" 
    className={cn(
      "min-h-[100px]",
      isOverLimit && "border-danger focus:border-danger focus:ring-danger/20"
    )}
  />
</div>`;

const codeDisabled = `<div className="space-y-1.5 w-full max-w-sm">
  <label className="text-sm font-semibold opacity-70 flex items-center gap-2">
    <ShieldAlert className="w-3.5 h-3.5" /> Read-only Notes
  </label>
  <Textarea 
    disabled 
    value="System updated at 14:02 UTC. No anomalies detected during the primary scan phase." 
    className="min-h-[80px] resize-none"
  />
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

export function TextareaShowcase() {
  const [bio, setBio] = useState("");
  const maxChars = 200;
  const isOverLimit = bio.length > maxChars;

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <AlignJustify className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Form Elements</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Text Area
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             Multi-line text fields designed for collecting longer-form data such as messages, bios, and descriptions. They share the same robust interaction states as standard inputs.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Standard Input */}
        <Section title="Standard Use" description="Basic messaging format">
          <ComponentWrapper title="Textarea // Default" code={codeStandard}>
            <div className="w-full flex justify-center items-center py-8">
              <div className="space-y-1.5 w-full max-w-sm">
                <label htmlFor="message" className="text-sm font-semibold flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" /> Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Type your message here..." 
                  className="min-h-[120px]"
                />
                <p className="text-[11px] text-muted-foreground">
                  Your message will be sent directly to the support team.
                </p>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Character Limit / Validation */}
        <Section title="Character Limit" maxChars="Dynamic validation feedback">
          <ComponentWrapper title="Textarea // Limit_Tracking" code={codeValidation}>
            <div className="w-full flex justify-center py-8">
               <div className="space-y-1.5 w-full max-w-sm">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-semibold">Profile Bio</label>
                  <span className={isOverLimit ? "text-xs text-danger font-semibold" : "text-xs text-muted-foreground"}>
                    {bio.length} / {maxChars}
                  </span>
                </div>
                
                <Textarea 
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us a little bit about yourself" 
                  className={`min-h-[100px] ${isOverLimit ? "border-danger/50 focus:border-danger focus:ring-danger/20" : ""}`}
                />
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Disabled / Read Only */}
        <Section title="Disabled State" description="Static multi-line data">
          <ComponentWrapper title="Textarea // Disabled" code={codeDisabled}>
            <div className="w-full flex justify-center py-8 bg-black/5 dark:bg-white/5 radius-md">
              <div className="space-y-1.5 w-full max-w-sm">
                <label className="text-sm font-semibold opacity-70 flex items-center gap-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-muted-foreground" /> Read-only Notes
                </label>
                <Textarea 
                  disabled 
                  value="System updated at 14:02 UTC. No anomalies detected during the primary scan phase. Automated chron-jobs executed successfully." 
                  className="min-h-[90px] resize-none"
                />
              </div>
            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <AlignLeft className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Textarea Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Sizing Logic", heading: "Minimum Heights", desc: "Always set a min-h-* utility class on Textareas. Without it, they collapse to the height of a single-line input, which defeats their visual purpose and confuses users." },
            { title: "Control", heading: "Resize Behavior", desc: "By default, the component uses resize-y to allow users to pull the box taller. Never use resize-x or resize (both directions) as it easily breaks responsive layouts and grid boundaries." },
            { title: "Feedback", heading: "Character Limits", desc: "If you have a backend limit for a text field, always show a dynamic character counter above the Textarea. Never let a user type a long message only to find out it's too long on submit." }
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