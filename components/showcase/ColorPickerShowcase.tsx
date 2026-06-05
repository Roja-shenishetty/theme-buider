"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { ColorPicker } from "@/components/ui/color-picker"
import { Palette, Droplet, LayoutTemplate, ShieldAlert } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `const [color, setColor] = useState("#6366f1")

<div className="w-full max-w-sm p-5 border radius-md bg-background shadow-sm">
  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
    <Droplet className="w-4 h-4 text-primary" />
    <span className="text-xs font-bold uppercase tracking-widest">Brand Theme</span>
  </div>
  
  <ColorPicker 
    label="Primary Accent Color" 
    value={color}
    onChange={setColor}
    description="This color will be applied to buttons and links."
  />
</div>`;

const codePresets = `const [brand, setBrand] = useState("#06b6d4")

const BRAND_COLORS = [
  "#000000", "#111111", "#444444", "#ffffff",
  "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6"
]

<ColorPicker 
  label="Workspace Logo Tint" 
  value={brand}
  onChange={setBrand}
  presets={BRAND_COLORS}
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

export function ColorPickerShowcase() {
  const [themeColor, setThemeColor] = useState<string>("#8b5cf6");
  const [workspaceColor, setWorkspaceColor] = useState<string>("#06b6d4");
  const [errorColor, setErrorColor] = useState<string>("#ff0000");

  const CUSTOM_PRESETS = [
    "#000000", "#171717", "#404040", "#ffffff",
    "#06b6d4", "#0ea5e9", "#3b82f6", "#6366f1",
    "#8b5cf6", "#d946ef", "#f43f5e", "#e11d48"
  ];

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Palette className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Aesthetic Control</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Color Picker
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A highly composed input for selecting hexadecimal color codes. It provides a visual popover with brand-approved swatches, a manual hex input, and a seamless bridge to the native OS color wheel.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Integration */}
        <Section title="Settings Context" description="Standard theme configuration panel">
          <ComponentWrapper title="ColorPicker // Standard" code={codeBasic}>
            <div className="w-full flex justify-center py-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
              
              <div className="w-full max-w-sm p-5 border border-primary/10 radius-md bg-background/80 backdrop-blur-md shadow-sm group hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-primary/10">
                  <div className="flex items-center gap-2 text-primary">
                    <Droplet className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground">App Appearance</span>
                  </div>
                </div>
                
                {/* Demonstration Box */}
                <div 
                  className="w-full h-16 radius-sm mb-4 flex items-center justify-center border shadow-inner transition-colors duration-500"
                  style={{ backgroundColor: themeColor, borderColor: 'rgba(0,0,0,0.1)' }}
                >
                  <span className="text-xs font-mono font-bold text-white drop-shadow-md">
                    PREVIEW
                  </span>
                </div>

                <ColorPicker 
                  label="Primary Accent" 
                  value={themeColor}
                  onChange={setThemeColor}
                  description="Changes applied here will update button and link colors instantly."
                />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Custom Presets */}
        <Section title="Brand Presets" description="Overriding the default swatch grid">
          <ComponentWrapper title="ColorPicker // Custom_Presets" code={codePresets}>
            <div className="w-full flex justify-center py-12 bg-black/5 dark:bg-white/5 radius-md">
              
              <div className="w-full max-w-sm p-5 border radius-md bg-background shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
                  <LayoutTemplate className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">Workspace Setup</span>
                </div>
                
                <ColorPicker 
                  label="Organization Tint" 
                  value={workspaceColor}
                  onChange={setWorkspaceColor}
                  presets={CUSTOM_PRESETS}
                  description="Select a color from your organization's brand guidelines."
                />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Validation */}
        <Section title="Validation & Errors" description="Handling invalid hex codes" className="lg:col-span-2">
          <ComponentWrapper title="ColorPicker // Error_State" code={`// Validation bounds`}>
            <div className="w-full flex justify-center py-12">
              
              <div className="w-full max-w-sm p-5 border border-danger/20 radius-md bg-danger/5 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-danger/10">
                  <ShieldAlert className="w-4 h-4 text-danger" />
                  <span className="text-xs font-bold uppercase tracking-widest text-danger">Contrast Compliance</span>
                </div>
                
                <ColorPicker 
                  label="Text Foreground Color" 
                  value={errorColor}
                  onChange={setErrorColor}
                  error={errorColor === "#ff0000" ? "This color fails WCAG AAA contrast ratios." : undefined}
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
             <Palette className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">ColorPicker Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Data Architecture", heading: "Strict Hex Binding", desc: "The component exclusively outputs valid HEX strings (e.g., #FFFFFF). If the user types an incomplete hex code manually in the input box, the onChange callback is suspended until the string is valid." },
            { title: "UX Override", heading: "The Native Overlay", desc: "Native HTML color inputs are incredibly ugly, but they provide access to the operating system's powerful color wheel. We hide the native input using opacity-0 and stretch it over a custom button to get the best of both worlds." },
            { title: "Accessibility", heading: "Dynamic Contrast", desc: "The checkmark icon inside the active preset swatch calculates basic luminance. It automatically switches between black or white depending on the background color to ensure the selection is always visible." }
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