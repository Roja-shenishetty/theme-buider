"use client"

import { useState } from "react"
import { Button } from "../../ui/button"
import { Typography } from "@/components/ui/typography"
import { 
  Bell, 
  BellOff, 
  Star, 
  Heart, 
  Power, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX,
  Loader2
} from "lucide-react"

/* 🔹 Contextual Section Wrapper */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6">
        <Typography variant="h3" className="tracking-tight font-bold">{title}</Typography>
        {description && (
          <Typography variant="body" className="text-body-muted text-sm max-w-2xl">
            {description}
          </Typography>
        )}
      </div>

      <div className="card bg-muted/5 border-primary/10 p-10 flex flex-wrap items-center gap-wide overflow-hidden relative">
        {children}
      </div>
    </section>
  )
}

export function ToggleButtonShowcase() {
  const [active, setActive] = useState(false)
  const [starred, setStarred] = useState(true)
  const [liked, setLiked] = useState(false)
  const [power, setPower] = useState(false)

  return (
    <div className="page-container space-page">

      {/* 🔹 Header Section */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Binary States
        </div>
       
        <Typography variant="body" className="text-body-muted max-w-2xl text-lg">
          Represent binary on/off states with immediate visual feedback and tactical micro-interactions.
        </Typography>
      </header>

      {/* 🔹 Soft System Toggle */}
      <Section 
        title="Soft System Toggle" 
        description="Uses your primary/10 blend for a clean, non-obstructive 'active' state."
      >
        <Button
          variant="ghost"
          data-state={active ? "on" : "off"}
          onClick={() => setActive(!active)}
          className="
            radius-md px-8 py-6 border border-transparent transition-all
            data-[state=on]:bg-primary/10 
            data-[state=on]:text-primary 
            data-[state=on]:border-primary/20
            hover:bg-muted
          "
        >
          {active ? <Bell className="w-4 h-4 mr-2" /> : <BellOff className="w-4 h-4 mr-2" />}
          System Notifications
        </Button>
      </Section>

      {/* 🔹 Icon-Only Toggles */}
      <Section title="Icon-Only Toggles" description="High-density interactions for sidebars and toolbars.">
        <div className="flex gap-default">
          <Button
            variant="outline"
            data-state={starred ? "on" : "off"}
            onClick={() => setStarred(!starred)}
            className="
              w-12 h-12 p-0 radius-md transition-all
              data-[state=on]:bg-yellow-500/10 
              data-[state=on]:text-yellow-500 
              data-[state=on]:border-yellow-500/30
            "
          >
            <Star className={`w-5 h-5 ${starred ? "fill-current" : ""}`} />
          </Button>

          <Button
            variant="outline"
            data-state={liked ? "on" : "off"}
            onClick={() => setLiked(!liked)}
            className="
              w-12 h-12 p-0 radius-full transition-all border-dashed
              data-[state=on]:bg-red-500/10 
              data-[state=on]:text-red-500 
              data-[state=on]:border-red-500/30 
              data-[state=on]:border-solid
              hover:scale-110 active:scale-90
            "
          >
            <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
          </Button>
        </div>
      </Section>

      {/* 🔹 Hardware Style Switch */}
      <Section title="Tactile Switch" description="A button that mimics physical hardware movement.">
        <div 
          onClick={() => setPower(!power)}
          className={`
            w-20 h-10 radius-full p-1 cursor-pointer transition-all duration-500 border-2
            ${power ? "bg-primary border-primary/20" : "bg-muted border-primary/5"}
          `}
        >
          <div className={`
            h-7 w-7 radius-full bg-white shadow-lg transition-all duration-500 flex items-center justify-center
            ${power ? "translate-x-10 rotate-180" : "translate-x-0"}
          `}>
            <Power className={`w-3 h-3 ${power ? "text-primary" : "text-muted-foreground"}`} />
          </div>
        </div>
        <Typography variant="caption" className="ml-4 font-bold uppercase tracking-tighter">
          System {power ? "Online" : "Offline"}
        </Typography>
      </Section>

      {/* 🔹 Glow & Elevation */}
      <Section title="Glow State" description="Maximum emphasis for critical toggles using your primary shadow.">
        <Button
          data-state={power ? "on" : "off"}
          onClick={() => setPower(!power)}
          className="
            radius-lg px-10 py-7 text-md font-bold uppercase tracking-widest transition-all
            data-[state=on]:bg-primary 
            data-[state=on]:text-primary-foreground 
            data-[state=on]:shadow-[0_0_30px_rgba(var(--primary),0.4)]
            active:scale-95
          "
        >
          <Power className="w-5 h-5 mr-3" />
          Core Power
        </Button>
      </Section>

      {/* 🔹 Async Toggle */}
      <Section title="Async Processing" description="State displayed during network or processing delays.">
        <Button disabled className="radius-md bg-muted/50 border border-primary/5 opacity-80 cursor-wait">
          <Loader2 className="w-4 h-4 mr-2 animate-spin text-primary" />
          Deploying to Edge...
        </Button>
      </Section>

      {/* 🔹 Code & Principles */}
      <footer className="system-footer">
  {/* Ambient background glow managed by global CSS */}
  <h4 className="system-footer-title">Development Guideline</h4>
  
  <div className="system-footer-grid md:items-center">
    
    {/* Guideline Explanation */}
    <div className="space-y-3">
      <span className="system-footer-item-heading text-lg">Attribute-Driven Styling</span>
      <p className="system-footer-item-text">
        Leverage <code>data-state="on|off"</code> with your tailwind modifiers. 
        This strictly separates your **React business logic** from your **visual CSS states**.
      </p>
    </div>

    {/* Technical Implementation Code Block */}
    <div className="text-code bg-black/40 p-6 radius-lg border border-white/5 overflow-x-auto shadow-inner">
      <pre className="font-mono text-[11px] leading-relaxed text-primary/90">
{`<Button 
  data-state={isActive ? "on" : "off"}
  className="data-[state=on]:bg-primary"
/>`}
      </pre>
    </div>

  </div>
</footer>

    </div>
  )
}