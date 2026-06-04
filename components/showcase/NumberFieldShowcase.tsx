"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { NumberField } from "@/components/ui/numberField"
import { Hash, Calculator, ShoppingCart, Activity } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `<div className="space-y-1.5 w-full max-w-xs">
  <label className="text-sm font-semibold flex items-center gap-2">
    <ShoppingCart className="w-4 h-4 text-muted-foreground" />
    Quantity
  </label>
  <NumberField defaultValue={1} min={1} max={10} />
  <p className="text-[11px] text-muted-foreground">
    Maximum of 10 items per order.
  </p>
</div>`;

const codePrecision = `<div className="space-y-1.5 w-full max-w-xs">
  <label className="text-sm font-semibold">Weight (kg)</label>
  <NumberField 
    defaultValue={2.5} 
    min={0.5} 
    max={50} 
    step={0.5} 
  />
</div>

<div className="space-y-1.5 w-full max-w-xs">
  <label className="text-sm font-semibold">Allocated Memory (GB)</label>
  <NumberField 
    defaultValue={8} 
    min={4} 
    max={64} 
    step={4} 
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

export function NumberFieldShowcase() {
  const [val, setVal] = useState<number | "">(10);

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Hash className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Data Entry</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Number Field
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A highly tactile numeric input that replaces browser-default spin buttons with large, touch-friendly stepper actions. It automatically calculates floating-point precision and clamps values to defined limits.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Quantity */}
        <Section title="Standard Use" description="Basic quantity selectors with limits">
          <ComponentWrapper title="NumberField // Quantity" code={codeBasic}>
            <div className="w-full flex justify-center items-center py-10">
              <div className="space-y-1.5 w-full max-w-xs">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-muted-foreground" />
                  Order Quantity
                </label>
                <NumberField defaultValue={1} min={1} max={10} />
                <p className="text-[11px] text-muted-foreground">
                  Maximum of 10 items per transaction.
                </p>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Precision & Steps */}
        <Section title="Custom Stepping" description="Decimal limits and chunk intervals">
          <ComponentWrapper title="NumberField // Stepping" code={codePrecision}>
            <div className="w-full flex flex-col justify-center items-center py-8 gap-8">
              
              <div className="space-y-1.5 w-full max-w-[200px]">
                <label className="text-sm font-semibold text-muted-foreground">Weight (kg)</label>
                {/* Notice step={0.5} */}
                <NumberField defaultValue={2.5} min={0.5} max={50} step={0.5} />
              </div>

              <div className="space-y-1.5 w-full max-w-[200px]">
                <label className="text-sm font-semibold flex items-center gap-2 text-muted-foreground">
                  <Activity className="w-4 h-4" /> Server RAM (GB)
                </label>
                {/* Notice step={4} */}
                <NumberField defaultValue={8} min={4} max={64} step={4} />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. State Binding */}
        <Section title="State Visualization" description="Controlled React State">
          <ComponentWrapper title="NumberField // State" code={`<NumberField value={val} onChange={setVal} />`}>
            <div className="w-full flex flex-col justify-center items-center py-10 bg-black/5 dark:bg-white/5 radius-md">
               
               {/* Display the current state visually */}
               <div className="text-[40px] font-black font-mono text-primary/20 mb-6 tabular-nums tracking-tighter">
                 {val === "" ? "00" : val}
               </div>

               <div className="w-full max-w-[200px] relative z-10">
                 <NumberField value={val} onChange={setVal} min={-100} max={100} />
               </div>

            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <Calculator className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Number Field Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Typography", heading: "Tabular Nums", desc: "The input field forces the CSS property font-variant-numeric: tabular-nums. This ensures that the numbers are monospaced, preventing the text cursor and buttons from 'jumping' left and right as numbers change width." },
            { title: "Browser Resets", heading: "Stripping Spinners", desc: "Browsers aggressively style number inputs. The CSS classes [&::-webkit-inner-spin-button]:appearance-none and [-moz-appearance:textfield] are strictly required to remove the default, ugly arrows." },
            { title: "Math Saftey", heading: "Floating Point", desc: "JavaScript struggles with math like 0.1 + 0.2 = 0.3000000004. This component internally calculates precision length and uses .toFixed() on step changes to prevent the UI from displaying broken floating-point strings." }
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