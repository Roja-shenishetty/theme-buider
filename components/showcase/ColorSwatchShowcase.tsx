"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { ColorSwatch } from "@/components/ui/color-swatch"
import { Pipette, Tag, Layers, Droplet } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `const [active, setActive] = useState("#3b82f6")

<div className="flex gap-2">
  <ColorSwatch 
    value="#3b82f6" 
    label="Blue"
    isSelected={active === "#3b82f6"}
    onClick={() => setActive("#3b82f6")}
  />
  <ColorSwatch 
    value="#10b981" 
    label="Green"
    isSelected={active === "#10b981"}
    onClick={() => setActive("#10b981")}
  />
</div>`;

const codeContrast = `<div className="flex gap-4">
  {/* The component automatically detects luminance */}
  {/* Dark backgrounds get a white checkmark */}
  <ColorSwatch value="#000000" isSelected />
  
  {/* Light backgrounds get a black checkmark */}
  <ColorSwatch value="#ffffff" isSelected />
  <ColorSwatch value="#fde047" isSelected />
</div>`;

const codeVariants = `{/* Small Circular Swatch */}
<ColorSwatch 
  value="#ec4899" 
  className="w-5 h-5 rounded-full" 
  showCheckmark={false} 
/>

{/* Large Rectangular Swatch */}
<ColorSwatch 
  value="#8b5cf6" 
  className="w-16 h-10 rounded-md" 
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

export function ColorSwatchShowcase() {
  const [selectedColor, setSelectedColor] = useState("#3b82f6");
  
  const INLINE_COLORS = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"];

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Droplet className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Base Primitive</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Color Swatch
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             An accessible, interactive button that represents a single color. It automatically calculates internal contrast to ensure selection indicators are always visible.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Interaction */}
        <Section title="Standard State" description="Selection and hover behaviors">
          <ComponentWrapper title="ColorSwatch // Inline_Group" code={codeBasic}>
            <div className="w-full flex flex-col items-center justify-center py-16 gap-6">
              
              <div className="p-4 border border-primary/10 radius-md bg-background shadow-sm flex gap-3 items-center">
                <span className="text-sm font-semibold text-muted-foreground mr-2">Theme:</span>
                {INLINE_COLORS.map((hex) => (
                  <ColorSwatch
                    key={hex}
                    value={hex}
                    isSelected={selectedColor === hex}
                    onClick={() => setSelectedColor(hex)}
                  />
                ))}
              </div>

              <div className="text-xs font-mono text-muted-foreground">
                Active Value: <span className="text-primary font-bold">{selectedColor}</span>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Dynamic Contrast */}
        <Section title="Luminance Checking" description="Automatic checkmark coloring">
          <ComponentWrapper title="ColorSwatch // Contrast" code={codeContrast}>
            <div className="w-full flex justify-center py-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background radius-md">
              
              <div className="p-6 border border-primary/10 radius-md bg-background shadow-sm space-y-4 w-full max-w-sm">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The component automatically calculates the YIQ luminance of the hex code to determine the checkmark color.
                </p>
                <div className="flex justify-between items-center bg-muted/30 p-4 radius-sm">
                  {/* Dark Swatches (White Check) */}
                  <ColorSwatch value="#000000" isSelected />
                  <ColorSwatch value="#4338ca" isSelected />
                  
                  {/* Light Swatches (Black Check) */}
                  <ColorSwatch value="#fde047" isSelected />
                  <ColorSwatch value="#ffffff" isSelected />
                </div>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Shape & Size Overrides */}
        <Section title="Shape Polymorphism" description="Overriding defaults via className" className="lg:col-span-2">
          <ComponentWrapper title="ColorSwatch // Variants" code={codeVariants}>
            <div className="w-full flex flex-col md:flex-row items-center justify-center py-12 gap-12 px-6 bg-black/5 dark:bg-white/5 radius-md">
              
              <div className="flex flex-col items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Small Circular</span>
                <div className="flex gap-2">
                  <ColorSwatch value="#f43f5e" className="w-5 h-5 rounded-full" showCheckmark={false} isSelected />
                  <ColorSwatch value="#14b8a6" className="w-5 h-5 rounded-full" showCheckmark={false} />
                  <ColorSwatch value="#8b5cf6" className="w-5 h-5 rounded-full" showCheckmark={false} />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Large Rectangular</span>
                <div className="flex gap-3">
                  <ColorSwatch value="#0ea5e9" className="w-20 h-10 radius-md" isSelected />
                  <ColorSwatch value="#f97316" className="w-20 h-10 radius-md" />
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
             <Pipette className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">ColorSwatch Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Accessibility", heading: "Screen Reader Labels", desc: "Because the div relies entirely on visual CSS for meaning, you MUST pass a 'label' prop (e.g., label='Indigo 500'). This maps directly to an aria-label so screen readers know what button they are focused on." },
            { title: "Interaction", heading: "Focus Overlaps", desc: "Notice the z-10 class added when isSelected is true. Because swatches are often grouped tightly together, this ensures the active focus ring sits clearly on top of neighboring swatches without clipping." },
            { title: "Composition", heading: "Building Grids", desc: "This is a base primitive. Do not manually map 50 of these in a generic div. If you are building a full palette grid (like a 100-900 scale), use the parent <ColorSwatchPicker> component." }
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