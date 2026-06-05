"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { TimeField } from "@/components/ui/time-field"
import { 
  Clock, CalendarClock, ShieldAlert, Terminal, 
  Globe, ChevronDown 
} from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeStandard = `const [time, setTime] = useState("14:30")

<div className="p-5 border radius-md bg-background shadow-sm">
  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
    <CalendarClock className="w-4 h-4 text-primary" />
    <span className="text-xs font-bold uppercase tracking-widest">Client Sync</span>
  </div>
  
  <TimeField 
    label="Start Time" 
    value={time}
    onChange={setTime}
    minuteStep={15}
    description="Meetings are scheduled in your local timezone."
  />
</div>`;

const codeTimezone = `const [time, setTime] = useState("09:00")
const [tz, setTz] = useState("IST")

<div className="p-5 border radius-md bg-background shadow-sm">
  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
    <Globe className="w-4 h-4 text-primary" />
    <span className="text-xs font-bold uppercase tracking-widest">Global Sync</span>
  </div>
  
  <div className="flex gap-3">
    <div className="flex-1">
      <TimeField label="Local Time" value={time} onChange={setTime} />
    </div>
    <div className="space-y-1.5 w-[100px]">
      <label className="text-sm font-semibold">Zone</label>
      <select value={tz} onChange={(e) => setTz(e.target.value)} className="w-full h-10 border...">
        <option value="UTC">UTC</option>
        <option value="GST">GST</option>
        <option value="IST">IST</option>
      </select>
    </div>
  </div>
</div>`;

const code24Hour = `const [time, setTime] = useState("23:00")

<div className="p-5 border radius-md bg-background shadow-sm">
  <TimeField 
    label="Cron Execution Time" 
    value={time}
    onChange={setTime}
    use24Hour={true}
    minuteStep={5}
  />
</div>`;

const codeValidation = `const [time, setTime] = useState("")

<div className="p-5 border border-danger/20 radius-md bg-danger/5 shadow-sm">
  <TimeField 
    label="Maintenance Window" 
    value={time}
    onChange={setTime}
    error={!time ? "A start time is required." : undefined}
  />
</div>`;

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

export function TimeFieldShowcase() {
  const [meetingTime, setMeetingTime] = useState<string>("14:00");
  
  const [globalTime, setGlobalTime] = useState<string>("09:30");
  const [globalTz, setGlobalTz] = useState<string>("IST");

  const [cronTime, setCronTime] = useState<string>("00:00");
  const [errorTime, setErrorTime] = useState<string>("");

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Clock className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Temporal Data</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Time Field
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A highly composed time picker avoiding native browser input flaws. It utilizes scrollable Radix Popover columns to guarantee perfect cross-platform rendering, supporting both 12-hour and military time out of the box.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Standard Context (12-hour) */}
        <Section title="Standard Context" description="12-Hour format with custom minute intervals">
          <ComponentWrapper title="TimeField // Scheduling" code={codeStandard}>
            <div className="w-full flex justify-center py-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
              
              <div className="w-full max-w-sm p-5 border border-primary/10 radius-md bg-background/80 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-primary/10">
                  <div className="flex items-center gap-2 text-primary">
                    <CalendarClock className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Client Sync</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary px-2 py-0.5 radius-sm">
                    {meetingTime || "--:--"} Local
                  </span>
                </div>
                
                <TimeField 
                  label="Proposed Time" 
                  value={meetingTime}
                  onChange={setMeetingTime}
                  minuteStep={15}
                  placeholder="Select time..." 
                  description="Meeting links will be generated automatically upon selection."
                />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Global / Timezone Context */}
        <Section title="Timezone Aware" description="Pairing time fields with global zone selectors">
          <ComponentWrapper title="TimeField // Global_Sync" code={codeTimezone}>
            <div className="w-full flex justify-center py-12 bg-black/5 dark:bg-white/5 radius-md">
              
              <div className="w-full max-w-sm p-5 border border-primary/10 radius-md bg-background shadow-sm group">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-primary/10">
                  <div className="flex items-center gap-2 text-primary">
                    <Globe className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Global Broadcast</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-1">
                    <TimeField 
                      label="Event Time" 
                      value={globalTime}
                      onChange={setGlobalTime}
                      minuteStep={5}
                    />
                  </div>
                  <div className="space-y-1.5 w-[110px]">
                    <label className="text-sm font-semibold">Zone</label>
                    <div className="relative">
                      {/* Stylized Native Select for Timezones */}
                      <select 
                        value={globalTz}
                        onChange={(e) => setGlobalTz(e.target.value)}
                        className="flex h-10 w-full appearance-none radius-md border border-primary/20 bg-background px-3 py-2 text-sm text-foreground hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors cursor-pointer"
                      >
                        <option value="UTC">UTC</option>
                        <option value="EST">EST (US)</option>
                        <option value="CET">CET (EU)</option>
                        <option value="GST">GST (Gulf)</option>
                        <option value="IST">IST (India)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <p className="text-[11px] text-muted-foreground mt-3 flex justify-between">
                  <span>Broadcast scheduled for:</span>
                  <span className="font-mono text-primary font-bold">{globalTime || "--:--"} {globalTz}</span>
                </p>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. 24 Hour Logic */}
        <Section title="Military / Server Time" description="24-Hour format configuration">
          <ComponentWrapper title="TimeField // 24_Hour_Engine" code={code24Hour}>
            <div className="w-full flex justify-center py-12">
              
              <div className="w-full max-w-sm p-5 border border-primary/10 radius-md bg-background shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
                  <Terminal className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">Automated Tasks</span>
                </div>
                
                <TimeField 
                  label="Cron Execution (UTC)" 
                  value={cronTime}
                  onChange={setCronTime}
                  use24Hour={true}
                  minuteStep={5}
                  description="Server tasks execute strictly via UTC coordinates."
                />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 4. Form Validation */}
        <Section title="Strict Validation" description="Security and error boundaries">
          <ComponentWrapper title="TimeField // Policy_Lock" code={codeValidation}>
            <div className="w-full flex justify-center py-12">
              
              <div className="w-full max-w-sm p-5 border border-danger/20 radius-md bg-danger/5 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-danger/10 blur-[40px] rounded-full pointer-events-none" />

                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-danger/10 relative z-10">
                  <ShieldAlert className="w-4 h-4 text-danger group-hover:rotate-12 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest text-danger">Server Lockout</span>
                </div>
                
                <div className="relative z-10">
                  <TimeField 
                    label="Maintenance Window" 
                    value={errorTime}
                    onChange={setErrorTime}
                    error={!errorTime ? "A specific start time is required to lock down the instance." : undefined}
                  />
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
             <Clock className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">TimeField Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Data Normalization", heading: "Internal Formatting", desc: "Regardless of whether the component is in 12-hour or 24-hour mode, the 'value' passed via the onChange callback is strictly formatted as 'HH:mm' in 24-hour time. This ensures backend database consistency." },
            { title: "Global Context", heading: "Timezone Separation", desc: "Do not attempt to bake Timezone logic into the TimeField itself. As shown in the 'Global Sync' example, pairing the TimeField with a native <select> or <Combobox> creates a much cleaner, more composable UI." },
            { title: "UX Dynamics", heading: "Minute Stepping", desc: "Native time inputs force users to scroll through 60 separate minutes. Use the 'minuteStep' prop to lock the selection to logical increments (e.g., 5 or 15) to drastically reduce interaction fatigue." }
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