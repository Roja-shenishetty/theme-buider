"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { ColorSwatchPicker } from "@/components/ui/color-swatch-picker"
import { ColorSwatch } from "@/components/ui/color-swatch"
import { LayoutGrid, Palette, Layers, Brush } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `const [color, setColor] = useState("#8b5cf6")
const BASE_COLORS = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"]

<ColorSwatchPicker value={color} onChange={setColor}>
  {BASE_COLORS.map((hex) => (
    <ColorSwatch key={hex} value={hex} label={\`Color \${hex}\`} />
  ))}
</ColorSwatchPicker>`;

const codeTonal = `const [tone, setTone] = useState("#8b5cf6")

const PRIMARY_SCALE = [
  { tone: "50", hex: "#f5f3ff" },
  { tone: "100", hex: "#ede9fe" },
  { tone: "200", hex: "#ddd6fe" },
  { tone: "300", hex: "#c4b5fd" },
  { tone: "400", hex: "#a78bfa" },
  { tone: "500", hex: "#8b5cf6" }, // Base Primary
  { tone: "600", hex: "#7c3aed" },
  { tone: "700", hex: "#6d28d9" },
  { tone: "800", hex: "#5b21b6" },
  { tone: "900", hex: "#4c1d95" },
  { tone: "950", hex: "#2e1065" },
]

{/* Using grid-cols-11 to force the 100-900 scale onto a single row */}
<ColorSwatchPicker 
  value={tone} 
  onChange={setTone} 
  className="grid grid-cols-11 gap-1"
>
  {PRIMARY_SCALE.map((c) => (
    <ColorSwatch 
      key={c.hex} 
      value={c.hex} 
      label={\`Primary \${c.tone}\`} 
      className="w-full h-8 radius-sm" // Stretch to fill the grid cell
      showCheckmark={tone === c.hex} // Only show checkmark on the active tone
    />
  ))}
</ColorSwatchPicker>`;

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

export function ColorSwatchPickerShowcase() {
  const [baseColor, setBaseColor] = useState("#8b5cf6");
  const [tonalColor, setTonalColor] = useState("#8b5cf6");

  const BASE_COLORS = [
    "#ef4444", "#f97316", "#f59e0b", "#84cc16", "#22c55e",
    "#14b8a6", "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6",
    "#d946ef", "#f43f5e", "#000000", "#52525b", "#ffffff"
  ];

  // A standard, vibrant "Primary" scale (Violet/Indigo based)
  const PRIMARY_SCALE = [
    { tone: "50", hex: "#f5f3ff" },
    { tone: "100", hex: "#ede9fe" },
    { tone: "200", hex: "#ddd6fe" },
    { tone: "300", hex: "#c4b5fd" },
    { tone: "400", hex: "#a78bfa" },
    { tone: "500", hex: "#8b5cf6" }, // Base Primary
    { tone: "600", hex: "#7c3aed" },
    { tone: "700", hex: "#6d28d9" },
    { tone: "800", hex: "#5b21b6" },
    { tone: "900", hex: "#4c1d95" },
    { tone: "950", hex: "#2e1065" },
  ];

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <LayoutGrid className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Grouping Primitive</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Color Swatch Picker
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A smart container that manages the state and layout of multiple Color Swatches. It automatically injects selection props into its children, allowing you to easily map massive tonal grids without managing individual states.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Swatch Matrix */}
        <Section title="Base Palettes" description="Standard wrapping flex matrix">
          <ComponentWrapper title="SwatchPicker // Base_Matrix" code={codeBasic}>
            <div className="w-full flex justify-center py-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
              
              <div className="w-full max-w-sm p-5 border border-primary/10 radius-md bg-background shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Palette className="w-4 h-4 text-primary" /> Core Selection
                  </div>
                  <div className="w-4 h-4 radius-sm border shadow-inner" style={{ backgroundColor: baseColor }} />
                </div>
                
                <ColorSwatchPicker value={baseColor} onChange={setBaseColor}>
                  {BASE_COLORS.map((hex) => (
                    <ColorSwatch key={hex} value={hex} label={`Color ${hex}`} />
                  ))}
                </ColorSwatchPicker>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Primary Tonal Scale */}
        <Section title="Primary Tonal Matrix" description="Handling 50-950 shading scales" className="lg:col-span-2">
          <ComponentWrapper title="SwatchPicker // Primary_Scale" code={codeTonal}>
            <div className="w-full flex flex-col md:flex-row items-center justify-center py-16 gap-12 px-6 bg-black/5 dark:bg-white/5 radius-md">
              
              {/* Context Panel */}
              <div className="flex-1 w-full max-w-sm space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 radius-md bg-primary/10 text-primary">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold">The Tonal Matrix</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By overriding the default <code>flex-wrap</code> with a strict CSS Grid (e.g., <code>grid-cols-11</code>), you can perfectly align a primary 50-to-950 color scale into a single responsive block.
                </p>
                <div className="mt-4 p-3 border border-primary/10 bg-background radius-md flex justify-between items-center text-xs font-mono">
                  <span>Selected Tone:</span>
                  <span className="font-bold text-primary">
                    Primary {PRIMARY_SCALE.find(c => c.hex === tonalColor)?.tone || "500"}
                  </span>
                </div>
              </div>

              {/* Interactive Component */}
              <div className="flex-1 w-full max-w-md p-6 border border-primary/10 radius-lg bg-background shadow-lg">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
                  <Brush className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">Primary Hue Scale</span>
                </div>
                
                <ColorSwatchPicker 
                  value={tonalColor} 
                  onChange={setTonalColor}
                  className="grid grid-cols-11 gap-1" 
                >
                  {PRIMARY_SCALE.map((c) => (
                    <ColorSwatch 
                      key={c.hex} 
                      value={c.hex} 
                      label={`Primary ${c.tone}`}
                      showCheckmark={tonalColor === c.hex}
                      className={c.tone === "500" ? "ring-2 ring-primary/30 ring-offset-2" : ""}
                    />
                  ))}
                </ColorSwatchPicker>

                <div className="flex justify-between mt-3 text-[10px] font-bold text-muted-foreground opacity-50 px-1">
                  <span>50</span>
                  <span>500</span>
                  <span>950</span>
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
             <LayoutGrid className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">SwatchPicker Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Data Architecture", heading: "Prop Cloning", desc: "The component uses React.Children.map to clone the child swatches. This means you do not have to write isSelected={color === hex} on every single mapping—the wrapper handles the selection logic automatically." },
            { title: "Layout Control", heading: "ClassName Overrides", desc: "By default, the picker uses 'flex flex-wrap gap-1.5'. However, you can pass className='grid grid-cols-11' directly to the SwatchPicker to force a rigid spreadsheet layout for tonal ramps." },
            { title: "Accessibility", heading: "RadioGroup Role", desc: "The wrapper forces a role='radiogroup' onto the div. This is critical for screen readers, as it signals that the individual buttons inside are part of a mutually exclusive selection set." }
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