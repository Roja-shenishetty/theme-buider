"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { ColorSlider } from "@/components/ui/color-slider"
import { ColorArea } from "@/components/ui/color-area"
import { SlidersHorizontal, Sun, Blend, Paintbrush } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeHue = `const [hue, setHue] = useState(180) // 0 to 360

<div className="w-full max-w-sm">
  <ColorSlider 
    type="hue"
    value={hue} 
    onChange={setHue} 
  />
</div>`;

const codeAlpha = `const [opacity, setOpacity] = useState(100) // 0 to 100

<div className="w-full max-w-sm">
  <ColorSlider 
    type="alpha"
    baseColor="#3b82f6" // The color to fade to transparent
    value={opacity} 
    onChange={setOpacity} 
  />
</div>`;

const codeComposite = `const [hue, setHue] = useState(0)
const [hexOutput, setHexOutput] = useState("#ff0000")

{/* Convert the 0-360 Hue value to a pure Hex string for the Area base */}
const baseHueHex = \`hsl(\${hue}, 100%, 50%)\` 

<div className="w-full max-w-sm space-y-4">
  <ColorArea 
    value={hexOutput} 
    onChange={setHexOutput} 
    hue={baseHueHex} 
  />
  <ColorSlider 
    type="hue"
    value={hue} 
    onChange={setHue} 
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

export function ColorSliderShowcase() {
  // --- 1. Basic States ---
  const [hue, setHue] = useState(220);
  const [alpha, setAlpha] = useState(80);
  
  // --- 2. Composite Logic States ---
  const [compositeHue, setCompositeHue] = useState(250);
  const [compositeAlpha, setCompositeAlpha] = useState(100);
  const [hexOutput, setHexOutput] = useState("#6366f1");

  // Helper to generate a pure hex from the hue for the ColorArea base
  const hueToHex = (h: number) => {
    const l = 0.5, a = 1;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const dynamicHueHex = hueToHex(compositeHue);

  // Helper to combine Hex and Alpha into a usable CSS RGBA string for the live preview
  const getRgba = (hex: string, a: number) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${a / 100})`;
  };

  const livePreviewColor = getRgba(hexOutput, compositeAlpha);

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <SlidersHorizontal className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">1D Color Selection</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Color Slider
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A high-performance linear slider specifically engineered for colors. It supports full 360-degree Hue spectrums and Alpha opacity tracks over dynamic checkerboards.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Hue */}
        <Section title="Hue Track" description="0 to 360 degree selection">
          <ComponentWrapper title="ColorSlider // Hue" code={codeHue}>
            <div className="w-full flex justify-center py-16">
              
              <div className="w-full max-w-sm p-5 border border-primary/10 radius-md bg-background shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Sun className="w-4 h-4 text-primary" /> Hue Selection
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">{hue}°</span>
                </div>
                
                <ColorSlider 
                  type="hue"
                  value={hue} 
                  onChange={setHue} 
                />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Alpha Track */}
        <Section title="Alpha Track" description="0 to 100% opacity handling">
          <ComponentWrapper title="ColorSlider // Alpha" code={codeAlpha}>
            <div className="w-full flex justify-center py-16 bg-black/5 dark:bg-white/5 radius-md">
              
              <div className="w-full max-w-sm p-5 border border-primary/10 radius-md bg-background shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Blend className="w-4 h-4 text-primary" /> Opacity
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">{alpha}%</span>
                </div>
                
                <ColorSlider 
                  type="alpha"
                  baseColor="#6366f1" // The color it renders over the checkerboard
                  value={alpha} 
                  onChange={setAlpha} 
                />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

       {/* 3. Composite (Connecting Area and Sliders) */}
        <Section title="Composite Integration" description="Driving the ColorArea matrix" className="lg:col-span-2">
          <ComponentWrapper title="ColorEcosystem // Composition" code={codeComposite}>
            <div className="w-full flex flex-col md:flex-row items-center justify-center py-12 gap-8 px-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background radius-md">
              
              {/* Context Panel */}
              <div className="flex-1 w-full max-w-sm space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 radius-md bg-primary/10 text-primary">
                  <Paintbrush className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold">The Premium Setup</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This demonstrates how shadcn/ui components map together to create a production-grade theme builder. The <strong>Sliders</strong> control the Hue and Alpha states independently, while the <strong>ColorArea</strong> handles saturation and brightness.
                </p>
                
                {/* Live UI Preview Card */}
                <div className="mt-6 p-4 radius-md border border-primary/10 bg-background shadow-sm space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Live Component Preview</span>
                  <div className="flex items-center gap-3">
                    <button 
                      className="px-4 py-2 radius-sm text-sm font-semibold text-white shadow-sm transition-all"
                      style={{ backgroundColor: livePreviewColor }}
                    >
                      Primary Action
                    </button>
                    <span 
                      className="px-2 py-1 radius-full text-[10px] font-bold tracking-widest"
                      style={{ backgroundColor: getRgba(hexOutput, 15), color: livePreviewColor }}
                    >
                      ACTIVE
                    </span>
                  </div>
                </div>

              </div>

              {/* Interactive Component */}
              <div className="flex-1 w-full max-w-sm p-6 border border-primary/10 radius-lg bg-background/80 backdrop-blur-xl shadow-lg">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-bold tracking-wide">Custom Theme Palette</span>
                  <div className="flex items-center gap-2 bg-muted/50 px-2 py-1 radius-sm border border-primary/5">
                    <div className="w-3 h-3 radius-full border shadow-inner" style={{ backgroundColor: livePreviewColor }} />
                    <span className="text-[10px] font-mono font-bold uppercase opacity-70">
                      {compositeAlpha < 100 ? `RGBA` : `HEX`}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* The 2D Area */}
                  <ColorArea 
                    value={hexOutput} 
                    onChange={setHexOutput} 
                    hue={dynamicHueHex} 
                  />
                  
                  {/* The Sliders */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">
                        <span>Hue</span>
                        <span>{compositeHue}°</span>
                      </div>
                      <ColorSlider 
                        type="hue"
                        value={compositeHue} 
                        onChange={setCompositeHue} 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">
                        <span>Opacity</span>
                        <span>{compositeAlpha}%</span>
                      </div>
                      <ColorSlider 
                        type="alpha"
                        baseColor={hexOutput}
                        value={compositeAlpha} 
                        onChange={setCompositeAlpha} 
                      />
                    </div>
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
             <SlidersHorizontal className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">ColorSlider Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Visual Physics", heading: "Checkerboard Alpha", desc: "When type='alpha' is passed, the track automatically generates a CSS repeating-conic-gradient. This creates the classic gray/white checkerboard pattern required to visually demonstrate transparency without importing images." },
            { title: "Interaction", heading: "Drag Escaping", desc: "By using setPointerCapture on the initial click event, the user can click the thumb and drag their mouse completely outside of the browser window. The slider will continue to track perfectly." },
            { title: "State Separation", heading: "Decoupled Data", desc: "The slider strictly manages its own 1-dimensional math (0-360 or 0-100). It expects the parent component to handle the complex conversions (like HSL to HEX) to pass into siblings like the ColorArea." }
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