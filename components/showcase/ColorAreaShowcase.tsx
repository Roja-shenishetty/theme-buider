"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { ColorArea } from "@/components/ui/color-area"
import { MousePointer, Pipette, Paintbrush, Palette } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `const [color, setColor] = useState("#ff0000")

<div className="w-full max-w-sm p-4 border radius-md bg-background">
  <ColorArea 
    value={color} 
    onChange={setColor} 
    hue="#ff0000" // Base red hue
  />
  <div className="mt-3 text-sm font-mono flex items-center justify-between">
    <span>Selected Output:</span>
    <span className="font-bold">{color}</span>
  </div>
</div>`;

const codeHueSwap = `const [color, setColor] = useState("#0000ff")
const [baseHue, setBaseHue] = useState("#0000ff")

<div className="w-full max-w-sm p-4 border radius-md bg-background space-y-4">
  <ColorArea 
    value={color} 
    onChange={setColor} 
    hue={baseHue} 
  />
  
  {/* Controls to swap the underlying hue grid */}
  <div className="flex gap-2">
    <button onClick={() => setBaseHue("#ff0000")}>Red</button>
    <button onClick={() => setBaseHue("#00ff00")}>Green</button>
    <button onClick={() => setBaseHue("#0000ff")}>Blue</button>
  </div>
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

export function ColorAreaShowcase() {
  const [basicColor, setBasicColor] = useState("#ff0000");
  
  const [hueColor, setHueColor] = useState("#0000ff");
  const [baseHue, setBaseHue] = useState("#0000ff");

  const HUE_OPTIONS = [
    { label: "Red", hex: "#ff0000" },
    { label: "Green", hex: "#00ff00" },
    { label: "Blue", hex: "#0000ff" },
    { label: "Yellow", hex: "#ffff00" },
    { label: "Magenta", hex: "#ff00ff" },
    { label: "Cyan", hex: "#00ffff" },
  ];

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <MousePointer className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">2D Selection Area</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Color Area
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A highly tactile, dependency-free 2D canvas for selecting color saturation and brightness. Built natively with pointer events to support precise dragging across both desktop and mobile touchscreens.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Interaction */}
        <Section title="Interactive Canvas" description="Real-time hex calculation">
          <ComponentWrapper title="ColorArea // Base" code={codeBasic}>
            <div className="w-full flex justify-center py-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
              
              <div className="w-full max-w-sm p-4 border border-primary/10 radius-md bg-background shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
                  <Pipette className="w-4 h-4 text-primary group-hover:-rotate-12 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">Saturation / Value</span>
                </div>
                
                <ColorArea 
                  value={basicColor} 
                  onChange={setBasicColor} 
                  hue="#ff0000" // Default red hue
                />
                
                <div className="mt-4 flex items-center justify-between px-1">
                  <span className="text-xs font-semibold text-muted-foreground">Output Hex</span>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 radius-full border shadow-sm"
                      style={{ backgroundColor: basicColor }}
                    />
                    <span className="text-sm font-mono font-bold uppercase">{basicColor}</span>
                  </div>
                </div>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Dynamic Hue Control */}
        <Section title="Hue Injection" description="Swapping the underlying color grid" className="lg:col-span-2">
          <ComponentWrapper title="ColorArea // Dynamic_Hue" code={codeHueSwap}>
            <div className="w-full flex flex-col md:flex-row items-center justify-center py-12 gap-8 px-6 bg-black/5 dark:bg-white/5 radius-md">
              
              {/* Context Panel */}
              <div className="flex-1 w-full max-w-sm space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 radius-md bg-primary/10 text-primary">
                  <Paintbrush className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold">Dynamic Layering</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The ColorArea component is specifically designed to be paired with a separate Hue Slider (or buttons). When you change the <code>hue</code> prop, the grid automatically updates its math to calculate the new hex string perfectly.
                </p>
                <div className="p-3 bg-muted/50 radius-md border border-primary/10 text-xs font-mono">
                  Base Hue: <span className="text-primary font-bold">{baseHue}</span>
                </div>
              </div>

              {/* Interactive Component */}
              <div className="flex-1 w-full max-w-sm p-5 border border-primary/10 radius-lg bg-background shadow-md">
                
                <ColorArea 
                  value={hueColor} 
                  onChange={setHueColor} 
                  hue={baseHue} 
                  className="mb-6 h-56"
                />
                
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">
                    Select Base Hue
                  </span>
                  <div className="grid grid-cols-6 gap-2">
                    {HUE_OPTIONS.map((opt) => (
                      <button
                        key={opt.hex}
                        onClick={() => setBaseHue(opt.hex)}
                        title={opt.label}
                        className={`h-8 radius-sm border shadow-sm hover:scale-110 transition-transform ${baseHue === opt.hex ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                        style={{ backgroundColor: opt.hex }}
                      />
                    ))}
                  </div>
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
             <Palette className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">ColorArea Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Performance", heading: "Pointer Events", desc: "This component natively uses onPointerDown and onPointerMove instead of onDrag. This guarantees smooth tracking on mobile touchscreen devices without the browser trying to 'scroll' the page while interacting with the canvas." },
            { title: "Composition", heading: "Standalone Architecture", desc: "The ColorArea is intentionally dumb. It does not contain its own Hue Slider. This allows you to compose your Color Picker however you want—place a slider below it, next to it, or use buttons." },
            { title: "Math Rendering", heading: "CSS Gradients", desc: "Instead of drawing on a heavy <canvas> element, this component uses highly performant, overlapping CSS linear-gradients (white-to-transparent and transparent-to-black) to visually simulate the math taking place behind the scenes." }
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