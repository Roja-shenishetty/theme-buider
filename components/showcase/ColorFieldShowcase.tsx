"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { ColorField } from "@/components/ui/color-field"
import { Hash, PaintBucket, AlertCircle, Type } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `<div className="w-full max-w-sm">
  <ColorField 
    label="Brand Primary" 
    defaultValue="#3b82f6"
    description="Accepts HEX, RGB, or HSL string formats."
  />
</div>`;

const codeValidation = `const [color, setColor] = useState("blue") // Invalid hex

const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(color);

<div className="w-full max-w-sm">
  <ColorField 
    label="Background Color" 
    value={color}
    onChange={(e) => setColor(e.target.value)}
    error={!isValidHex ? "Must be a valid hex code starting with #" : undefined}
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

export function ColorFieldShowcase() {
  const [hexColor, setHexColor] = useState("bad-input");
  
  // Basic Regex for a 3 or 6 character hex string
  const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(hexColor);

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Type className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Text Inputs</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Color Field
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A specialized text input for explicit color string entry. It natively extracts the string to render a real-time visual swatch directly inside the input boundary.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Hex Entry */}
        <Section title="Standard Entry" description="Hex, RGB, or CSS named colors">
          <ComponentWrapper title="ColorField // Standard" code={codeBasic}>
            <div className="w-full flex justify-center py-12">
              <div className="w-full max-w-sm space-y-6">
                
                <ColorField 
                  label="Surface Accent" 
                  defaultValue="#8b5cf6"
                />

                <ColorField 
                  label="Foreground Text" 
                  defaultValue="rgba(0, 0, 0, 0.8)"
                  description="You can paste standard RGBA or HSL strings as well."
                />

              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Validation & Formatting */}
        <Section title="Strict Validation" description="Enforcing specific formatting rules">
          <ComponentWrapper title="ColorField // Validation" code={codeValidation}>
            <div className="w-full flex justify-center py-12 bg-black/5 dark:bg-white/5 radius-md">
              <div className="w-full max-w-sm">
                
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-danger/10 text-danger">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">CSS Compliance</span>
                </div>

                <ColorField 
                  label="Hexadecimal Code" 
                  value={hexColor}
                  onChange={(e) => setHexColor(e.target.value)}
                  error={!isValidHex && hexColor.length > 0 ? "Format must be a valid 3 or 6 digit hex starting with '#'." : undefined}
                  placeholder="#FFFFFF"
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
             <Hash className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">ColorField Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {/* Using custom mapped list to avoid Markdown list rendering within React elements */}
          <div className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
            <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-primary">Architecture</div>
            <span className="font-bold text-lg block">Field vs Picker</span>
            <p className="text-xs opacity-70 leading-relaxed">Use the ColorField when users know exactly what color they want (e.g., developers pasting a brand color). Use the ColorPicker popover when users need to visually explore and experiment with palettes.</p>
          </div>
          <div className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
            <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-primary">Typography</div>
            <span className="font-bold text-lg block">Mono Enforcement</span>
            <p className="text-xs opacity-70 leading-relaxed">The input text is forced into uppercase and uses the font-mono class. Because '1', 'l', and 'I' can look identical in sans-serif fonts, monospacing prevents catastrophic CSS typos.</p>
          </div>
          <div className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
            <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-primary">Resilience</div>
            <span className="font-bold text-lg block">Silent Fails</span>
            <p className="text-xs opacity-70 leading-relaxed">The visual swatch uses inline styles (backgroundColor: value). If the user types garbage text like 'hello', the browser safely ignores the inline style, rendering the swatch transparent without throwing a React error.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}