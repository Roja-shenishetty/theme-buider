"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Autocomplete } from "@/components/ui/autocomplete"
import { TextCursorInput, MapPin, Search, Database } from "lucide-react"

/* 🔹 DUMMY DATA */
const CITIES = [
  { label: "Amsterdam, Netherlands", value: "ams" },
  { label: "Berlin, Germany", value: "ber" },
  { label: "Copenhagen, Denmark", value: "cph" },
  { label: "Dublin, Ireland", value: "dub" },
  { label: "Edinburgh, Scotland", value: "edi" },
  { label: "Frankfurt, Germany", value: "fra" },
  { label: "Geneva, Switzerland", value: "gva" },
  { label: "Helsinki, Finland", value: "hel" },
]

const FRAMEWORKS = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Qwik", value: "qwik" },
]

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

export function AutocompleteShowcase() {
  const [city, setCity] = useState("");
  const [tech, setTech] = useState("");
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Simulated Async Search
  const handleQueryChange = (val: string) => {
    setQuery(val);
    if (val.length > 0) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 800);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  };

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <TextCursorInput className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Smart Inputs</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Autocomplete
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A free-text input field that provides a dropdown menu of suggestions. Unlike a Combobox, users are not forced to select an item from the list and can submit entirely custom text.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Typeahead */}
        <Section title="Free Text Suggestion" description="Suggestions without strict enforcement">
          <ComponentWrapper title="Autocomplete // Location" code={`<Autocomplete options={CITIES} />`}>
            <div className="w-full flex justify-center py-16">
              <div className="space-y-1.5 w-full max-w-sm">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" /> Birth City
                </label>
                <Autocomplete
                  options={CITIES}
                  value={city}
                  onChange={setCity}
                  placeholder="e.g. Amsterdam or Tokyo"
                  emptyText="No suggestions. Keep typing!"
                />
                <p className="text-[11px] text-muted-foreground mt-1">
                  You can type cities that aren't in the suggestion list.
                </p>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Loading / Async State */}
        <Section title="Async Searching" description="Triggering loaders on keystrokes">
          <ComponentWrapper title="Autocomplete // Async_Loader" code={`<Autocomplete isLoading={isSearching} />`}>
            <div className="w-full flex justify-center py-16 bg-black/5 dark:bg-white/5 radius-md">
              <div className="space-y-1.5 w-full max-w-sm">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Database className="w-4 h-4 text-muted-foreground" /> Query Packages
                </label>
                <Autocomplete
                  options={isSearching ? [] : FRAMEWORKS} // Clear options while loading
                  value={query}
                  onChange={handleQueryChange}
                  isLoading={isSearching}
                  placeholder="Search NPM registry..."
                  icon={<Search className="w-4 h-4" />}
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
             <TextCursorInput className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Autocomplete Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Interaction", heading: "Focus vs Click", desc: "Notice how clicking a suggestion uses the onMouseDown event with e.preventDefault(). If we used onClick, the input's onBlur event would fire first, instantly closing the dropdown before the click could register." },
            { title: "Keyboard Nav", heading: "A11y State Binding", desc: "When the user presses ArrowDown or ArrowUp, we track an activeIndex. We use scrollIntoView so that if the user arrows past the 5th item, the custom-scrollbar automatically scrolls down to reveal the rest." },
            { title: "Combobox vs Auto", heading: "The Golden Rule", desc: "Use a Combobox when the data must exactly match a backend ID (e.g., Selecting a Country Code). Use Autocomplete when the data is ultimately a string, but you want to save the user time (e.g., Job Titles, Tags, Search Queries)." }
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