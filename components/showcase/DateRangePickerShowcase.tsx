"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { CalendarRange, LineChart, Hotel, DownloadCloud } from "lucide-react"
import { subDays } from "date-fns"
import { DateRange } from "react-day-picker"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeAnalytics = `const [range, setRange] = useState<DateRange>()

<div className="p-5 border radius-md bg-background shadow-sm">
  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
    <LineChart className="w-4 h-4 text-primary" />
    <span className="text-xs font-bold uppercase tracking-widest">Revenue Analytics</span>
  </div>
  
  <DateRangePicker 
    label="Reporting Period" 
    date={range}
    onChange={setRange}
    showPresets={true} 
    placeholder="Select date range..."
  />
</div>`;

const codeBooking = `const [range, setRange] = useState<DateRange>()

<DateRangePicker 
  label="Stay Duration" 
  date={range}
  onChange={setRange}
  placeholder="Check-in - Check-out"
  description="Maximum stay is 14 nights."
/>`;

/* 🔹 Section Wrapper */
function Section({ title, description, children, className }: any) {
  return (
    <section className={`space-section animate-fade-up relative ${className}`}>
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

export function DateRangePickerShowcase() {
  const today = new Date();
  
  const [analyticsRange, setAnalyticsRange] = useState<DateRange | undefined>({
    from: subDays(today, 7),
    to: today,
  });
  
  const [bookingRange, setBookingRange] = useState<DateRange | undefined>();
  const [exportRange, setExportRange] = useState<DateRange | undefined>();

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <CalendarRange className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Temporal Spans</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Date Range Picker
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             An advanced composite calendar utilizing two independent month arrays. Designed for querying analytics, booking spans, and generating reports, featuring an optional quick-preset sidebar.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Analytics / Presets */}
        <Section title="Dashboard Context" description="Two-month view with quick presets sidebar" className="lg:col-span-2">
          <ComponentWrapper title="DateRangePicker // Analytics_Presets" code={codeAnalytics}>
            <div className="w-full flex justify-center py-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
              
              <div className="w-full max-w-md p-6 border border-primary/10 radius-lg bg-background/90 backdrop-blur-xl shadow-lg group">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-primary/10">
                  <div className="flex items-center gap-2 text-primary">
                    <LineChart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground">Revenue Analytics</span>
                  </div>
                  <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 radius-sm">Q3_REPORT</span>
                </div>
                
                <DateRangePicker 
                  label="Reporting Period" 
                  date={analyticsRange}
                  onChange={setAnalyticsRange}
                  showPresets={true} 
                  placeholder="Select a timeframe..." 
                  description="Changes applied here will globally filter the dashboard charts."
                />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Hotel Booking / Empty State */}
        <Section title="Booking Spans" description="Standard empty state">
          <ComponentWrapper title="DateRangePicker // Accommodations" code={codeBooking}>
            <div className="w-full flex justify-center py-12 bg-black/5 dark:bg-white/5 radius-md">
              
              <div className="w-full max-w-sm p-5 border radius-md bg-background shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
                  <Hotel className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">Accommodation</span>
                </div>
                
                <DateRangePicker 
                  label="Stay Duration" 
                  date={bookingRange}
                  onChange={setBookingRange}
                  placeholder="Check-in - Check-out"
                  description="Select your arrival and departure dates."
                />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Export / Validation */}
        <Section title="Data Export" description="Handling validation constraints">
          <ComponentWrapper title="DateRangePicker // Export_Validation" code={`// Validation bounds`}>
            <div className="w-full flex justify-center py-12">
              
              <div className="w-full max-w-sm p-5 border border-danger/20 radius-md bg-danger/5 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-danger/10">
                  <DownloadCloud className="w-4 h-4 text-danger" />
                  <span className="text-xs font-bold uppercase tracking-widest text-danger">Compliance Export</span>
                </div>
                
                <DateRangePicker 
                  label="Audit Timeframe" 
                  date={exportRange}
                  onChange={setExportRange}
                  placeholder="Select audit span..."
                  error={!exportRange?.to && exportRange?.from ? "You must select an end date." : undefined}
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
             <CalendarRange className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Range Picker Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Layout Constraints", heading: "Two-Month Overflow", desc: "By default, this component renders two months side-by-side (numberOfMonths={2}). Ensure the parent container has enough horizontal space, or use responsive CSS to drop it to a single month on mobile." },
            { title: "State Management", heading: "Incomplete Ranges", desc: "The 'date' prop is an object { from: Date, to: Date }. Always validate that 'date.to' exists before submitting forms, as users can easily click a start date and forget to click an end date." },
            { title: "UX Rules", heading: "When to use Presets", desc: "The 'showPresets' boolean activates a sidebar. Use this strictly for analytical dashboards (e.g., 'Last 30 Days') to save power users time. Omit it for literal spans like booking flights or hotels." }
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