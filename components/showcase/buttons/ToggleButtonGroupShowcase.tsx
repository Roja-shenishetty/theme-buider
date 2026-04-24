"use client"

import { useState } from "react"
import { Button } from "../../ui/button"
import { Typography } from "@/components/ui/typography"
import { 
  Bold, 
  Italic, 
  Underline, 
  LayoutGrid, 
  List, 
  Sun, 
  Moon, 
  Monitor,
  AlignLeft,
  AlignCenter,
  AlignRight
} from "lucide-react"

/* 🔹 Reusable Layout for the Showcase */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6">
        <Typography variant="h3" className="tracking-tight font-bold text-primary/90">{title}</Typography>
        {description && (
          <Typography variant="body" className="text-body-muted text-sm max-w-2xl">
            {description}
          </Typography>
        )}
      </div>

      <div className="card bg-muted/5 border-dashed border-2 border-primary/10 p-8 flex flex-wrap items-center gap-wide overflow-hidden relative">
        {children}
      </div>
    </section>
  )
}

export function ToggleButtonGroupShowcase() {
  const [active, setActive] = useState("center")
  const [formats, setFormats] = useState<string[]>(["bold"])
  const [theme, setTheme] = useState("system")

  const toggleFormat = (item: string) => {
    setFormats((prev) =>
      prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
    )
  }

  return (
    <div className="page-container space-page">

      {/* 🔹 Header Section */}
      <header className="space-group pb-12 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Toggle Engine
        </div>
        
        <Typography variant="body" className="text-body-muted max-w-xl text-lg">
          Versatile controls for single and multiple selection states with high-fidelity feedback.
        </Typography>
      </header>

      {/* 🔹 Segmented: Mutually Exclusive */}
      <Section 
        title="Glass Segmented Control" 
        description="Ideal for mutually exclusive options. Uses a unified container with internal padding."
      >
        <div className="inline-flex p-1 bg-muted/50 radius-lg border border-primary/5 backdrop-blur-sm">
          {[
            { id: "left", icon: <AlignLeft className="w-4 h-4" /> },
            { id: "center", icon: <AlignCenter className="w-4 h-4" /> },
            { id: "right", icon: <AlignRight className="w-4 h-4" /> }
          ].map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => setActive(item.id)}
              className={`
                radius-md px-6 py-2 transition-all duration-300
                ${active === item.id 
                  ? "bg-background text-primary shadow-sm scale-100" 
                  : "text-muted-foreground hover:text-foreground opacity-60"}
              `}
            >
              {item.icon}
              <span className="ml-2 capitalize">{item.id}</span>
            </Button>
          ))}
        </div>
      </Section>

      {/* 🔹 Multi-Select: Formatting Toolbar */}
      <Section 
        title="Selection Persistence" 
        description="Multiple options can be active simultaneously. Perfect for text editors or filters."
      >
        <div className="flex -space-x-px bg-muted/20 radius-md border overflow-hidden">
          {[
            { id: "bold", icon: <Bold className="w-4 h-4" /> },
            { id: "italic", icon: <Italic className="w-4 h-4" /> },
            { id: "underline", icon: <Underline className="w-4 h-4" /> }
          ].map((item) => {
            const isActive = formats.includes(item.id)
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => toggleFormat(item.id)}
                className={`
                  radius-none border-x border-primary/5 px-6 py-6 transition-colors
                  ${isActive 
                    ? "bg-primary text-primary-foreground z-10 shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]" 
                    : "text-muted-foreground hover:bg-primary/5"}
                `}
              >
                {item.icon}
              </Button>
            )
          })}
        </div>
      </Section>

      {/* 🔹 Soft Toggle: View Switcher */}
      <Section 
        title="Subtle View Toggles" 
        description="Uses your primary/10 token for a non-intrusive 'active' state."
      >
        <div className="flex gap-default">
          {[
            { id: "grid", icon: <LayoutGrid className="w-4 h-4" /> },
            { id: "list", icon: <List className="w-4 h-4" /> }
          ].map((item) => (
            <Button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`
                radius-full px-6 transition-all border
                ${active === item.id 
                  ? "bg-primary/10 text-primary border-primary/20" 
                  : "bg-transparent border-transparent text-muted-foreground hover:bg-muted"}
              `}
            >
              {item.icon}
              <span className="ml-2 capitalize">{item.id}</span>
            </Button>
          ))}
        </div>
      </Section>

      {/* 🔹 Theme Engine Toggle */}
      <Section title="Theme Selector" description="A clean, full-width approach for system-wide settings.">
        <div className="flex bg-muted/30 p-1 radius-full border max-w-md w-full">
          {[
            { id: "light", icon: <Sun className="w-4 h-4" /> },
            { id: "dark", icon: <Moon className="w-4 h-4" /> },
            { id: "system", icon: <Monitor className="w-4 h-4" /> }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setTheme(item.id)}
              className={`
                flex-1 flex items-center justify-center gap-2 py-2.5 radius-full transition-all duration-500
                ${theme === item.id 
                  ? "bg-foreground text-background shadow-lg scale-[1.02]" 
                  : "text-muted-foreground hover:text-foreground"}
              `}
            >
              {item.icon}
              <span className="text-small font-bold capitalize">{item.id}</span>
            </button>
          ))}
        </div>
      </Section>

      {/* 🔹 Code & Guidelines */}
  <footer className="system-footer grid md:grid-cols-2 gap-wide">
  
  {/* Card 1: Usage Tips (High Contrast) */}
  <div className="space-y-4">
    <h4 className="system-footer-title">Usage Protocol</h4>
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="system-footer-item-heading">Selection Logic</span>
        <ul className="system-footer-item-text list-disc ml-4 space-y-2">
          <li><strong>Single:</strong> Mutually exclusive logic (e.g., Align Left vs Right).</li>
          <li><strong>Multiple:</strong> Additive properties (e.g., Bold + Italic).</li>
        </ul>
      </div>
      <div className="space-y-2">
        <span className="system-footer-item-heading">Tactile Response</span>
        <p className="system-footer-item-text">
          Apply <code>active:scale(0.95)</code> to simulate physical hardware feedback.
        </p>
      </div>
    </div>
  </div>

  {/* Card 2: Implementation (Technical/Code) */}
  <div className="space-y-4">
    <h4 className="system-footer-title">Implementation</h4>
    <div className="space-y-4">
      <p className="system-footer-item-text">
        Logic for managing multi-select arrays in state-driven interfaces:
      </p>
      <div className="text-code bg-black/40 p-5 radius-lg border border-white/5 overflow-x-auto">
        <pre className="font-mono text-[11px] leading-relaxed text-primary/90">
{`const toggle = (val) => {
  setArr(prev => prev.includes(val) 
    ? prev.filter(i => i !== val) 
    : [...prev, val])
}`}
        </pre>
      </div>
    </div>
  </div>

</footer>

    </div>
  )
}