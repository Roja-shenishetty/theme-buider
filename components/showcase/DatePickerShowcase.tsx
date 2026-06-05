"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { DatePicker } from "@/components/ui/date-picker"
import { Calendar as CalendarIcon, Filter, Zap, LayoutTemplate } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeInline = `const [date, setDate] = useState<Date>()

<div className="flex items-center gap-2 p-2 border radius-md bg-background w-full max-w-sm">
  <Filter className="w-4 h-4 text-muted-foreground ml-2" />
  <span className="text-sm font-medium mr-2">Filter By:</span>
  <DatePicker 
    value={date}
    onChange={setDate}
    className="w-[180px] h-8 border-transparent hover:border-primary/20 bg-muted/30" 
  />
</div>`;

const codePresets = `const [dueDate, setDueDate] = useState<Date>()

<DatePicker 
  value={dueDate}
  onChange={setDueDate}
  showPresets={true}
  placeholder="Set due date..."
/>`;

/* 🔹 Section Wrapper */
function Section({ title, description, children, className }: any) {
  return (
    <section className={`space-section animate-fade-up relative ${className}`}>
      <div className="absolute -top-3 right-0 text-[60px] font-black opacity-[0.02] pointer-events-none select-none">
        {title[0]}
      </div>
      <div className="flex items-center gap-3 mb-4 border-l-2 border-primary pl-4 relative z-10">
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

export function DatePickerShowcase() {
  const [inlineDate, setInlineDate] = useState<Date | undefined>();
  const [presetDate, setPresetDate] = useState<Date | undefined>();

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <CalendarIcon className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Base Control</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Date Picker
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             The standalone control unit for date selection. Stripped of form wrappers, it is designed to be embedded directly into toolbars, table filters, and inline settings.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Inline / Filter Usage */}
        <Section title="Inline Filters" description="Embedded in tight toolbars">
          <ComponentWrapper title="DatePicker // Toolbar_Filter" code={codeInline}>
            <div className="w-full flex justify-center py-16 bg-black/5 dark:bg-white/5 radius-md">
              
              {/* Simulated Toolbar */}
              <div className="flex items-center gap-2 p-1.5 border border-primary/10 radius-md bg-background shadow-sm w-full max-w-sm">
                <div className="flex items-center gap-2 px-2 text-muted-foreground border-r border-primary/10">
                  <Filter className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Logs</span>
                </div>
                
                <div className="flex-1">
                  <DatePicker 
                    value={inlineDate}
                    onChange={setInlineDate}
                    placeholder="Filter by date..."
                    className="h-8 border-transparent hover:border-primary/20 bg-muted/20 shadow-none text-xs" 
                  />
                </div>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. With Presets */}
        <Section title="Quick Presets" description="Accelerated data entry">
          <ComponentWrapper title="DatePicker // With_Presets" code={codePresets}>
            <div className="w-full flex justify-center py-16">
              
              <div className="w-full max-w-xs space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-semibold">Task Due Date</span>
                </div>
                
                <DatePicker 
                  value={presetDate}
                  onChange={setPresetDate}
                  showPresets={true}
                  placeholder="Set due date..."
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
             <LayoutTemplate className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">DatePicker Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Composition", heading: "Picker vs Field", desc: "Use DatePicker when building toolbars, table headers, or tight inline UI. Use the DateField component when building standard vertical forms that require labels and error text." },
            { title: "Styling", heading: "className Forwarding", desc: "The component passes className directly to the trigger button. You can easily override the height (e.g., h-8 for compact UI) or strip the borders for a ghost-button aesthetic." },
            { title: "UX Rules", heading: "Preset Curation", desc: "The presets feature drastically reduces friction for common actions (like setting a reminder for 'Tomorrow'). Ensure the presets make logical sense for your specific app context." }
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