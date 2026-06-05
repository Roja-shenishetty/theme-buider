"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Combobox } from "@/components/ui/combobox"
import { SearchX, Users, AlertCircle, Fingerprint } from "lucide-react"

/* 🔹 DUMMY DATA */
const TEAM_MEMBERS = [
  { label: "Alex Rivera", value: "arivera" },
  { label: "Chen Wei", value: "cwei" },
  { label: "Eleanor Rigby", value: "erigby" },
  { label: "Marcus Johnson", value: "mjohnson" },
  { label: "Sarah Connor", value: "sconnor" },
  { label: "Thomas Anderson", value: "tanderson" },
]

const TIMEZONES = [
  { label: "Pacific Time (US & Canada)", value: "pst" },
  { label: "Mountain Time (US & Canada)", value: "mst" },
  { label: "Central Time (US & Canada)", value: "cst" },
  { label: "Eastern Time (US & Canada)", value: "est" },
  { label: "Greenwich Mean Time (London)", value: "gmt" },
  { label: "Central European Time (Paris)", value: "cet" },
]

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `const [assignee, setAssignee] = useState("")

<div className="space-y-1.5 w-full max-w-sm">
  <label className="text-sm font-semibold">Assign Task</label>
  <Combobox
    options={TEAM_MEMBERS}
    value={assignee}
    onChange={setAssignee}
    placeholder="Select team member..."
    searchPlaceholder="Search team..."
    emptyText="No member found."
  />
</div>`;

const codeValidation = `const [tz, setTz] = useState("")

<div className="space-y-1.5 w-full max-w-sm">
  <label className="text-sm font-semibold text-danger flex items-center gap-1.5">
    <AlertCircle className="w-3.5 h-3.5" /> Timezone Required
  </label>
  <Combobox
    options={TIMEZONES}
    value={tz}
    onChange={setTz}
    error={true}
    placeholder="Select your timezone"
  />
  <p className="text-xs text-danger opacity-80 font-medium">
    Your timezone is required for meeting schedules.
  </p>
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

export function ComboboxShowcase() {
  const [assignee, setAssignee] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <SearchX className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Query & Select</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Combobox
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A smart, searchable dropdown built on Radix Popover and cmdk. Perfect for lists that are too long for a standard Select dropdown, allowing users to quickly filter options via keyboard.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Searchable List */}
        <Section title="Search & Assign" description="Filtering through team members">
          <ComponentWrapper title="Combobox // Default" code={codeBasic}>
            <div className="w-full flex justify-center py-16">
              <div className="space-y-1.5 w-full max-w-sm">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" /> Assign Task To
                </label>
                <Combobox
                  options={TEAM_MEMBERS}
                  value={assignee}
                  onChange={setAssignee}
                  placeholder="Select team member..."
                  searchPlaceholder="Search by name..."
                />
                <p className="text-[11px] text-muted-foreground mt-1">
                  Selected Value: <span className="font-mono text-primary">{assignee || "null"}</span>
                </p>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Validation State */}
        <Section title="Validation & State" description="Handling missing data">
          <ComponentWrapper title="Combobox // Error_State" code={codeValidation}>
            <div className="w-full flex justify-center py-16 bg-black/5 dark:bg-white/5 radius-md">
              <div className="space-y-1.5 w-full max-w-sm">
                <label className="text-sm font-semibold text-danger flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" /> Timezone Required
                </label>
                <Combobox
                  options={TIMEZONES}
                  value={timezone}
                  onChange={setTimezone}
                  error={!timezone}
                  placeholder="Select your timezone"
                  searchPlaceholder="Search timezones..."
                />
                {!timezone && (
                  <p className="text-xs text-danger opacity-80 font-medium mt-1">
                    Your timezone is required to schedule automated reports.
                  </p>
                )}
              </div>
            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <Fingerprint className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Combobox Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Smart Widths", heading: "Dynamic Scaling", desc: "The popover menu utilizes CSS variable var(--radix-popover-trigger-width). This ensures the dropdown menu is always the exact same pixel width as the trigger button, preventing layout jank." },
            { title: "Engine", heading: "CMDK Integration", desc: "By using the command menu primitive (cmdk), filtering logic is handled automatically. The engine uses fuzzy search natively, meaning typing 'mt' will successfully find 'Mountain Time'." },
            { title: "UX Rules", heading: "When to use", desc: "Do not use a Combobox for lists under 5 items (use a Select instead). Comboboxes are specifically engineered for dense data like Countries, Timezones, Currencies, or robust user lists." }
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