"use client"

import { Button } from "../../ui/button"
import { Typography } from "@/components/ui/typography"
import { 
  Plus, 
  Download, 
  Settings, 
  Trash2, 
  Globe, 
  MoreHorizontal, 
  ArrowRight,
  Loader2,
  Bell,
  Mail
} from "lucide-react"

/* 🔹 Improved Section with Grid and Background Depth */
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

      {/* Using your 'card' class with a subtle primary tint */}
      <div className="card bg-muted/5 border-primary/10 p-10 flex flex-wrap items-center gap-wide overflow-hidden relative">
        <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
          <Typography variant="caption" className="uppercase tracking-widest">{title}</Typography>
        </div>
        {children}
      </div>
    </section>
  )
}

export function ButtonShowcase() {
  return (
    <div className="page-container space-page">

      {/* 🔹 Header: Uses your border-b and space-y tokens */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Action Elements
        </div>
        
        <Typography variant="body" className="text-body-muted max-w-2xl text-lg">
          The fundamental building blocks of user interaction. Designed for clarity, 
          responsiveness, and tactile feedback.
        </Typography>
      </header>

      {/* 🔹 Brand Variants */}
      <Section 
        title="Visual Variants" 
        description="Every variant serves a specific level of emphasis in your hierarchy."
      >
        <div className="flex flex-wrap items-center gap-default">
          <Button className="btn-primary radius-md shadow-lg shadow-primary/20">Primary</Button>
          <Button variant="secondary" className="radius-md">Secondary</Button>
          <Button variant="tertiary" className="radius-md border-primary/20">Tertiary</Button>
          <Button variant="outline" className="radius-md border-primary/30 text-primary hover:bg-primary/5">Outline</Button>
          <Button variant="ghost" className="radius-md text-muted-foreground hover:text-foreground">Ghost</Button>
          <Button variant="link" className="text-primary underline-offset-4 hover:underline">Link Style</Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white radius-md">Danger</Button>
          <Button className="bg-red-500/10 text-red-500 hover:bg-red-500/20 radius-md">Danger Soft</Button>
        </div>
      </Section>

      {/* 🔹 Scale & Proportion */}
      <Section title="Sizes" description="Adaptive scaling from compact toolbars to prominent hero actions.">
        <div className="flex items-end gap-wide">
          <Button size="sm" className="radius-sm">Small</Button>
          <Button size="default" className="radius-md">Default</Button>
          <Button size="lg" className="radius-lg px-8 py-6 text-md">Large Action</Button>
          <Button size="icon" className="radius-full bg-primary/10 text-primary hover:bg-primary border border-primary/20 hover:text-white transition-all">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* 🔹 Smart Shapes */}
      <Section title="Shape Architecture" description="Control the 'mood' of your UI using radius tokens.">
        <div className="flex gap-wide">
          <Button className="radius-none px-10 border-2">Sharp Square</Button>
          <Button className="radius-md px-10">Standard Radius</Button>
          <Button className="radius-full px-10 bg-foreground text-background">Pill / Organic</Button>
        </div>
      </Section>

      {/* 🔹 Dynamic Interaction States */}
      <Section title="Live Feedback" description="Tactile responses for hover, active, and loading states.">
        <div className="flex flex-wrap gap-wide">
          <Button className="transition-transform hover:scale-105 active:scale-95 duration-200">
            Micro-Interaction
          </Button>

          <Button disabled className="opacity-50 grayscale cursor-not-allowed">
            System Disabled
          </Button>

          <Button className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Synchronizing...
          </Button>

          <Button className="group">
            Next Step
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Section>

      {/* 🔹 Complex Indicators */}
      <Section title="Notification Integration" description="Using badges and pulses for real-time status.">
        <div className="flex gap-wide">
          <Button className="relative radius-md overflow-visible">
            <Mail className="w-4 h-4 mr-2" />
            Inbox
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full radius-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex radius-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center text-white">3</span>
            </span>
          </Button>

          <Button variant="secondary" className="radius-full">
            <Bell className="w-4 h-4 mr-2" />
            Activity
            <span className="ml-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 radius-full">
              +12
            </span>
          </Button>
        </div>
      </Section>

      {/* 🔹 Usage Guardrails */}
     <footer className="system-footer">
  {/* The Main Section Title */}
  <h4 className="system-footer-title">System Principles</h4>
  
  <div className="system-footer-grid">
    
    {/* Item 01 */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        01 Emphasis
      </div>
      <span className="system-footer-item-heading text-lg">Visual Hierarchy</span>
      <p className="system-footer-item-text">
        Limit to one Primary button per view to prevent cognitive overload and guide user focus.
      </p>
    </div>

    {/* Item 02 */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        02 Feedback
      </div>
      <span className="system-footer-item-heading text-lg">State Communication</span>
      <p className="system-footer-item-text">
        Always use a loading state for async operations to prevent double-clicks and hardware desync.
      </p>
    </div>

    {/* Item 03 */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        03 Clarity
      </div>
      <span className="system-footer-item-heading text-lg">Universal Design</span>
      <p className="system-footer-item-text">
        Pair icons with labels whenever possible to improve accessibility and lower the learning curve.
      </p>
    </div>

  </div>
</footer>

    </div>
  )
}