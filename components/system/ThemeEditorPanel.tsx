"use client"

import { useState } from "react"
import { useThemeEngine } from "@/hooks/useThemeEngine"
import { ChevronDown, Save, Download } from "lucide-react"

export function ThemeEditorPanel() {
  const { theme, setTheme } = useThemeEngine()
  const [openSection, setOpenSection] = useState<string | null>("brand")

  // 🔹 FIX: Allow both string and number to prevent TypeScript errors
  const updateTheme = (key: string, val: string | number) => {
    setTheme({ ...theme, [key]: val })
  }

  const TokenRow = ({ label, themeKey }: { label: string; themeKey: string }) => (
    <label className="flex items-center gap-2 py-2 px-1 hover:bg-foreground/[0.04] transition-colors cursor-pointer group">
      {/* 🔧 LARGE ROUNDED COLOR BOX */}
      <div 
        className="relative w-5 h-5 rounded-md shrink-0 transition-all duration-300 group-hover:scale-110 shadow-sm border border-black/5"
        style={{ backgroundColor: theme[themeKey] }}
      >
        <input 
          type="color" 
          value={theme[themeKey]} 
          onChange={(e) => updateTheme(themeKey, e.target.value)}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" 
        />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] font-bold text-muted-foreground group-hover:text-foreground tracking-wide uppercase transition-colors truncate">
          {label}
        </span>
        <span className="text-[8px] font-mono opacity-0 group-hover:opacity-40 transition-opacity uppercase">
          {theme[themeKey]}
        </span>
      </div>
    </label>
  )

  const Section = ({ id, title, children }: any) => (
    <div className="mb-2">
      <button 
        onClick={() => setOpenSection(openSection === id ? null : id)}
        className="flex w-full justify-between items-center py-3 px-1 text-[9px] font-black uppercase tracking-[0.25em] text-foreground/30 hover:text-primary transition-all"
      >
        {title}
        <ChevronDown size={12} className={`transition-transform duration-300 ${openSection === id ? "rotate-180 text-primary" : "opacity-20"}`} />
      </button>
      {openSection === id && (
        <div className="pb-4 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  )

  return (
    <div className="w-full max-w-[140px] flex flex-col box-border pt-2 pb-10">
      
      <Section id="brand" title="Brand System">
        <TokenRow label="Default" themeKey="brand" />
        <TokenRow label="Dark" themeKey="brandDark" />
        <TokenRow label="Light" themeKey="brandLight" />
        <TokenRow label="Front" themeKey="brandFront" />
      </Section>

      <Section id="accent" title="Accent System">
        <TokenRow label="Default" themeKey="accent" />
        <TokenRow label="Dark" themeKey="accentDark" />
        <TokenRow label="Light" themeKey="accentLight" />
      </Section>

      <Section id="surfaces" title="Surfaces">
        <TokenRow label="Page" themeKey="bgPage" />
        <TokenRow label="Elevated" themeKey="bgElevated" />
        <TokenRow label="Sunken" themeKey="bgSunken" />
        
        {/* TALLER SLIDER AREA */}
        <div className="mt-6 py-4 bg-foreground/[0.02] rounded-lg">
          <div className="flex justify-between items-center px-2 mb-4">
            <span className="text-[7px] font-black uppercase tracking-[0.2em] opacity-40">Tint</span>
            <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-md min-w-[28px] text-center">
              {theme.neutralSat}%
            </span>
          </div>
          <div className="px-2">
            <input 
              type="range" min="0" max="25" 
              value={theme.neutralSat} 
              // 🔹 Passes a NUMBER to updateTheme
              onChange={(e) => updateTheme("neutralSat", parseInt(e.target.value))} 
              className="w-full h-1 bg-foreground/10 appearance-none cursor-pointer accent-primary block transition-all" 
            />
          </div>
        </div>
      </Section>

      <Section id="text" title="Typography">
        <TokenRow label="Heading" themeKey="textHeading" />
        <TokenRow label="Body" themeKey="textBody" />
        <TokenRow label="Muted" themeKey="textMuted" />
      </Section>

      {/* 🔹 TALL ACTION STACK */}
      <div className="mt-8 flex flex-col gap-2 px-1">
        <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.25em] rounded-md hover:brightness-110 active:scale-[0.98] transition-all shadow-md">
          <Save size={14} /> Save Palette
        </button>
        <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-foreground/[0.05] text-foreground/60 text-[10px] font-bold uppercase tracking-[0.25em] rounded-md hover:bg-foreground/[0.1] transition-all">
          <Download size={14} /> Export CSS
        </button>
      </div>
    </div>
  )
}