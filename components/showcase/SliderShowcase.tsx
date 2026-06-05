"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Slider } from "@/components/ui/slider"
import { 
  SlidersHorizontal, Volume2, VolumeX, 
  Banknote, Sparkles, Settings2, Grid3X3
} from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `const [volume, setVolume] = useState([50])

<div className="flex items-center gap-4 w-full max-w-sm p-4 border radius-md bg-background">
  <VolumeX className="w-4 h-4 text-muted-foreground" />
  <Slider 
    value={volume} 
    onValueChange={setVolume} 
    max={100} 
    step={1} 
  />
  <Volume2 className="w-4 h-4 text-primary" />
</div>`;

const codeRange = `const [price, setPrice] = useState([20, 80])

<div className="space-y-4 w-full max-w-sm p-5 border radius-md bg-background">
  <div className="flex items-center justify-between">
    <span className="text-sm font-semibold">Price Range</span>
    <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 radius-sm">
      \${price[0]} - \${price[1]}
    </span>
  </div>
  
  {/* Passing an array with two values automatically renders two thumbs */}
  <Slider 
    value={price} 
    onValueChange={setPrice} 
    max={100} 
    step={1} 
  />
</div>`;

const codeStepped = `const [gridSize, setGridSize] = useState([4])

<div className="space-y-4 w-full max-w-sm p-5 border radius-md bg-background">
  <label className="text-sm font-semibold">Grid Columns</label>
  <Slider 
    value={gridSize} 
    onValueChange={setGridSize} 
    min={2}
    max={12} 
    step={2} 
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

export function SliderShowcase() {
  const [volume, setVolume] = useState([65]);
  const [priceRange, setPriceRange] = useState([25, 75]);
  const [gridSize, setGridSize] = useState([6]);

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <SlidersHorizontal className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Analog Controls</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Slider
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             An input where the user selects a value from within a given range. Built on Radix UI, it natively supports multi-thumb ranges, stepped intervals, and keyboard arrow-key navigation.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Single Value */}
        <Section title="Continuous Analog" description="Single thumb for smooth adjustments">
          <ComponentWrapper title="Slider // Single_Value" code={codeBasic}>
            <div className="w-full flex justify-center py-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
              
              <div className="w-full max-w-sm p-5 border border-primary/10 radius-md bg-background/80 backdrop-blur-md shadow-sm group">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-primary/10">
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground">Effect Intensity</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-muted-foreground">
                    {volume[0]}%
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <VolumeX className="w-4 h-4 text-muted-foreground opacity-50" />
                  <Slider 
                    value={volume}
                    onValueChange={setVolume}
                    max={100}
                    step={1}
                  />
                  <Volume2 className={volume[0] > 50 ? "w-4 h-4 text-primary" : "w-4 h-4 text-muted-foreground"} />
                </div>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Range Value */}
        <Section title="Min/Max Range" description="Dual thumbs for bounding boxes">
          <ComponentWrapper title="Slider // Multi_Thumb" code={codeRange}>
            <div className="w-full flex justify-center py-12 bg-black/5 dark:bg-white/5 radius-md">
              
              <div className="w-full max-w-sm p-5 border border-primary/10 radius-md bg-background shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-primary/10">
                  <div className="flex items-center gap-2 text-primary">
                    <Banknote className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground">Budget Filter</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary px-2 py-0.5 radius-sm">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
                
                <Slider 
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={200}
                  step={1}
                />
                
                <div className="flex justify-between items-center mt-3 px-1 text-[10px] font-mono text-muted-foreground opacity-50">
                  <span>$0</span>
                  <span>$200</span>
                </div>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Stepped / Discrete Values */}
        <Section title="Discrete Steps" description="Locking values to specific intervals" className="lg:col-span-2">
          <ComponentWrapper title="Slider // Stepped_Intervals" code={codeStepped}>
            <div className="w-full flex flex-col md:flex-row items-center justify-center py-12 gap-8 px-6 bg-black/5 dark:bg-white/5 radius-md">
              
              {/* Context Panel */}
              <div className="flex-1 w-full max-w-sm space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 radius-md bg-primary/10 text-primary">
                  <Settings2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold">Stepped Execution</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By increasing the <code>step</code> prop, the slider thumb will magnetically snap to predefined intervals. This is critical for configuration settings that don't allow arbitrary floating-point values.
                </p>
              </div>

              {/* Interactive Component */}
              <div className="flex-1 w-full max-w-sm p-6 border border-primary/10 radius-lg bg-background shadow-md">
                <div className="flex items-center gap-2 mb-6">
                  <Grid3X3 className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-semibold">Grid Columns</span>
                </div>
                
                <Slider 
                  value={gridSize}
                  onValueChange={setGridSize}
                  min={2}
                  max={12}
                  step={2}
                />
                
                <div className="flex justify-between items-center mt-4">
                  {[2, 4, 6, 8, 10, 12].map((step) => (
                    <div key={step} className="flex flex-col items-center gap-1">
                      <div className="w-0.5 h-1.5 bg-primary/20 radius-full" />
                      <span className={`text-[10px] font-mono ${gridSize[0] === step ? "text-primary font-bold" : "text-muted-foreground opacity-50"}`}>
                        {step}
                      </span>
                    </div>
                  ))}
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
             <SlidersHorizontal className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Slider Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Data Architecture", heading: "Array Requirements", desc: "The 'value' and 'defaultValue' props must ALWAYS be passed as arrays, even for a single-thumb slider (e.g., value={[50]}). The component counts the array length to determine how many thumbs to render." },
            { title: "Accessibility", heading: "Keyboard Arrow Nav", desc: "Because this is built on Radix, users can tab to a thumb and use the Left/Right or Up/Down arrow keys to increment the value exactly by the configured 'step' prop." },
            { title: "Interaction", heading: "Cursor States", desc: "The thumb uses cursor-grab and active:cursor-grabbing. This provides critical tactile feedback to the user, mimicking the physical feeling of picking up and dragging a fader." }
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