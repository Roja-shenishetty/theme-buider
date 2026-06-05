"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { DateField } from "@/components/ui/date-field"
import { 
  CalendarDays, AlertCircle, Clock, CalendarClock, 
  ShieldAlert, Truck, Info, Settings2
} from "lucide-react"
import { addDays } from "date-fns"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeStandard = `const [date, setDate] = useState<Date>()

<div className="p-5 border radius-md bg-background shadow-sm">
  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
    <CalendarClock className="w-4 h-4 text-primary" />
    <span className="text-xs font-bold uppercase tracking-widest">Schedule Meeting</span>
  </div>
  
  <DateField 
    label="Quarterly Review" 
    value={date}
    onChange={setDate}
    placeholder="Select a date..." 
    description="Choose a date for your upcoming performance review."
  />
</div>`;

const codeValidation = `const [date, setDate] = useState<Date>()

<div className="p-5 border border-danger/20 radius-md bg-danger/5 shadow-sm">
  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-danger/10">
    <ShieldAlert className="w-4 h-4 text-danger" />
    <span className="text-xs font-bold uppercase tracking-widest text-danger">Security Policy</span>
  </div>
  
  <DateField 
    label="API Token Expiration" 
    value={date}
    onChange={setDate}
    error={!date ? "An expiration date is strictly required." : undefined}
  />
</div>`;

const codeBounds = `const [date, setDate] = useState<Date>()
const today = new Date()

<div className="p-5 border radius-md bg-background shadow-sm">
  <DateField 
    label="Freight Dispatch" 
    value={date}
    onChange={setDate}
    placeholder="Earliest available: +2 Days"
    calendarProps={{
      disabled: [
        { before: addDays(today, 2) }, // Disables past, today, tomorrow
        { dayOfWeek: [0, 6] } // Disables Sunday (0) and Saturday (6)
      ]
    }}
  />
</div>`;

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

export function DateFieldShowcase() {
  const [meetingDate, setMeetingDate] = useState<Date | undefined>();
  const [errorDate, setErrorDate] = useState<Date | undefined>();
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>();
  
  const today = new Date();

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <CalendarDays className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Temporal Data</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Date Field
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A highly composed date picker input. It combines Radix Popover and React DayPicker to provide cross-browser consistency, robust keyboard navigation, and seamless constraint management.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Selection */}
        <Section title="Standard Context" description="Booking & scheduling interfaces">
          <ComponentWrapper title="DateField // Scheduling" code={codeStandard}>
            <div className="w-full flex justify-center py-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
              
              <div className="w-full max-w-sm p-5 border border-primary/10 radius-md bg-background/80 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-primary/10">
                  <div className="flex items-center gap-2 text-primary">
                    <CalendarClock className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Client Sync</span>
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                </div>
                
                <DateField 
                  label="Proposed Date" 
                  value={meetingDate}
                  onChange={setMeetingDate}
                  placeholder="Select a day..." 
                  description="Invitations will be dispatched automatically once confirmed."
                />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Form Validation */}
        <Section title="Strict Validation" description="Security and error boundaries">
          <ComponentWrapper title="DateField // Security_Policy" code={codeValidation}>
            <div className="w-full flex justify-center py-12">
              
              <div className="w-full max-w-sm p-5 border border-danger/20 radius-md bg-danger/5 shadow-sm relative overflow-hidden group">
                {/* Decorative Danger Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-danger/10 blur-[40px] rounded-full pointer-events-none" />

                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-danger/10 relative z-10">
                  <ShieldAlert className="w-4 h-4 text-danger group-hover:rotate-12 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest text-danger">System Access</span>
                </div>
                
                <div className="relative z-10">
                  <DateField 
                    label="Token Expiration" 
                    value={errorDate}
                    onChange={setErrorDate}
                    error={!errorDate ? "An expiration date is strictly required for this token tier." : undefined}
                  />
                </div>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Logic & Bounding (Spans Full Width on Desktop for emphasis) */}
        <Section title="Constraint Logic" description="Disabling specific days, weekends, and past dates" className="lg:col-span-2">
          <ComponentWrapper title="DateField // Logistics_Bounds" code={codeBounds}>
            <div className="w-full flex flex-col md:flex-row items-center justify-center py-12 gap-8 px-6 bg-black/5 dark:bg-white/5 radius-md">
              
              {/* Context Panel */}
              <div className="flex-1 w-full max-w-sm space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 radius-md bg-primary/10 text-primary">
                  <Settings2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold">Rule Engine Injection</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pass configuration objects directly into the underlying calendar engine via <code>calendarProps</code>. In this example, the engine disables weekends and enforces a strict 48-hour minimum lead time.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono bg-muted/50 p-2 radius-sm border-l-2 border-primary">
                  <Info className="w-3 h-3 text-primary" />
                  Try selecting a past date or weekend.
                </div>
              </div>

              {/* Interactive Component */}
              <div className="flex-1 w-full max-w-sm p-6 border border-primary/10 radius-lg bg-background shadow-md">
                <div className="flex items-center gap-2 mb-5">
                  <Truck className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-semibold">Logistics Dispatch</span>
                </div>
                
                <DateField 
                  label="Requested Ship Date" 
                  value={deliveryDate}
                  onChange={setDeliveryDate}
                  placeholder="Earliest: +2 Days"
                  description="Warehouse fulfillment requires 48hrs processing."
                  calendarProps={{
                    disabled: [
                      { before: addDays(today, 2) }, // Disables past, today, and tomorrow
                      { dayOfWeek: [0, 6] } // 0 = Sunday, 6 = Saturday
                    ]
                  }}
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
             <Clock className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">DateField Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Formatting", heading: "Date-Fns Dependency", desc: "The component relies heavily on date-fns for formatting (e.g., format(date, 'PPP')). This guarantees that 'January 1st, 2024' renders identically in every timezone and browser, preventing offset bugs." },
            { title: "Prop Drilling", heading: "calendarProps API", desc: "Instead of rebuilding every single DayPicker prop into the DateField wrapper, we expose a single calendarProps object. You can pass 'disabled', 'modifiers', or 'showOutsideDays' directly through to the engine." },
            { title: "Accessibility", heading: "Keyboard Focus", desc: "The initialFocus prop is passed to the calendar. When a user tabs to the input and hits Enter to open the popover, their keyboard focus immediately drops into the grid of days, allowing arrow-key navigation." }
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