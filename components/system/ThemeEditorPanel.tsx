"use client"

import { useState } from "react"
import { useThemeEngine } from "@/hooks/useThemeEngine"
import { ChevronDown, Save, Download,Check } from "lucide-react"

export function ThemeEditorPanel() {
  const { theme, setTheme } = useThemeEngine()
  const [openSection, setOpenSection] = useState<string | null>("brand")
  const [isSaving, setIsSaving] = useState(false)

  const updateTheme = (key: string, val: string | number) => {
    setTheme({ ...theme, [key]: val })
  }

  // 🔹 SAVE PALETTE LOGIC
  const handleSavePalette = () => {
    try {
      localStorage.setItem("saved-theme-palette", JSON.stringify(theme))
      setIsSaving(true)
      setTimeout(() => setIsSaving(false), 2000)
    } catch (error) {
      console.error("Failed to save theme to localStorage", error)
    }
  }

  // 🔹 EXPORT CSS LOGIC
  const handleExportCSS = () => {
    // Helper to convert camelCase keys (e.g., brandDark) to kebab-case (e.g., brand-dark)
    const toKebabCase = (str: string) => 
      str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()

    // Generate CSS string
    let cssString = ":root {\n"
    for (const [key, value] of Object.entries(theme)) {
      // Append % to neutralSat if it's the saturation token, otherwise keep string value
      const cssValue = key === "neutralSat" ? `${value}%` : value
      cssString += `  --${toKebabCase(key)}: ${cssValue};\n`
    }
    cssString += "}\n"

    // Create a Blob and trigger download
    const blob = new Blob([cssString], { type: "text/css" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "theme.css"
    document.body.appendChild(link)
    link.click()
    
    // Cleanup
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const TokenRow = ({ label, themeKey }: { label: string; themeKey: string }) => (
    <label className="flex items-center gap-2 py-2 px-1 hover:bg-foreground/[0.04] transition-colors cursor-pointer group">
      <div 
        className="relative w-5 h-5 rounded-md shrink-0 transition-all duration-300 group-hover:scale-110 shadow-sm border border-black/5"
        style={{ backgroundColor: theme[themeKey] as string }}
      >
        <input 
          type="color" 
          value={theme[themeKey] as string} 
          onChange={(e) => updateTheme(themeKey, e.target.value)}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" 
        />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] font-bold text-muted-foreground group-hover:text-foreground tracking-wide uppercase transition-colors truncate">
          {label}
        </span>
        <span className="text-[8px] font-mono opacity-0 group-hover:opacity-40 transition-opacity uppercase">
          {theme[themeKey] as string}
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
      
      {/* 🔹 BRAND SYSTEM */}
      <Section id="brand" title="Brand System">
        <TokenRow label="Default" themeKey="brand" />
        <TokenRow label="Dark" themeKey="brandDark" />
        <TokenRow label="Light" themeKey="brandLight" />
      </Section>

      {/* 🔹 STATUS SYSTEM (Health Colors) */}
      <Section id="status" title="System Health">
        <TokenRow label="Success" themeKey="statusSuccess" />
        <TokenRow label="Warning" themeKey="statusWarning" />
        <TokenRow label="Danger" themeKey="statusDanger" />
      </Section>

      {/* 🔹 ACCENT SYSTEM */}
      <Section id="accent" title="Accent System">
        <TokenRow label="Default" themeKey="accent" />
        <TokenRow label="Dark" themeKey="accentDark" />
        <TokenRow label="Light" themeKey="accentLight" />
      </Section>

      {/* 🔹 SURFACES */}
      <Section id="surfaces" title="Surfaces">
        <TokenRow label="Page" themeKey="bgPage" />
        <TokenRow label="Elevated" themeKey="bgElevated" />
        <TokenRow label="Sunken" themeKey="bgSunken" />
        
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
              value={theme.neutralSat as number} 
              onChange={(e) => updateTheme("neutralSat", parseInt(e.target.value))} 
              className="w-full h-1 bg-foreground/10 appearance-none cursor-pointer accent-primary block transition-all" 
            />
          </div>
        </div>
      </Section>

      {/* 🔹 TYPOGRAPHY */}
      <Section id="text" title="Typography">
        <TokenRow label="Heading" themeKey="textHeading" />
        <TokenRow label="Body" themeKey="textBody" />
        <TokenRow label="Muted" themeKey="textMuted" />
      </Section>

      {/* 🔹 ACTION STACK */}
      <div className="mt-8 flex flex-col gap-2 px-1">
        <button 
          onClick={handleSavePalette}
          disabled={isSaving}
          className={`flex items-center justify-center gap-2 w-full py-3.5 text-[10px] font-bold uppercase tracking-[0.25em] rounded-md transition-all shadow-md
            ${isSaving 
              ? "bg-statusSuccess text-white shadow-none scale-[0.98]" 
              : "bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.98]"
            }`}
        >
          {isSaving ? (
            <><Check size={14} className="animate-in zoom-in duration-300" /> Saved</>
          ) : (
            <><Save size={14} /> Save Palette</>
          )}
        </button>
        
        <button 
          onClick={handleExportCSS}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-foreground/[0.05] text-foreground/60 text-[10px] font-bold uppercase tracking-[0.25em] rounded-md hover:bg-foreground/[0.1] active:scale-[0.98] transition-all"
        >
          <Download size={14} /> Export CSS
        </button>
      </div>
    </div>
  )
}