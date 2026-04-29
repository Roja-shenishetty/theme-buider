"use client"

import { useState } from "react"
import { Button } from "../../ui/button"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../../system/ComponentWrapper"
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

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeVisualVariants = `<div className="flex flex-wrap items-center gap-default">
  <Button className="radius-md shadow-lg shadow-primary/20">Primary</Button>
  <Button variant="secondary" className="radius-md">Secondary</Button>
  <Button variant="tertiary" className="radius-md border-primary/20">Tertiary</Button>
  <Button variant="outline" className="radius-md border-primary/30 text-primary hover:bg-primary/5">Outline</Button>
  <Button variant="ghost" className="radius-md text-muted-foreground hover:text-foreground">Ghost</Button>
  <Button variant="link" className="text-primary underline-offset-4 hover:underline">Link Style</Button>
  <Button className="bg-red-500 hover:bg-red-600 text-white radius-md">Danger</Button>
  <Button className="bg-red-500/10 text-red-500 hover:bg-red-500/20 radius-md">Danger Soft</Button>
</div>`;

const codeSizes = `<div className="flex items-end gap-wide">
  <Button size="sm" className="radius-sm">Small</Button>
  <Button size="default" className="radius-md">Default</Button>
  <Button size="lg" className="radius-lg px-8 py-6 text-md">Large Action</Button>
  <Button size="icon" className="radius-full bg-primary/10 text-primary hover:bg-primary border border-primary/20 hover:text-white transition-all">
    <Settings className="w-4 h-4" />
  </Button>
</div>`;

const codeSmartShapes = `<div className="flex gap-wide">
  <Button className="radius-none px-10 border-2">Sharp Square</Button>
  <Button className="radius-md px-10">Standard Radius</Button>
  <Button className="radius-full px-10 bg-foreground text-background">Pill / Organic</Button>
</div>`;

const codeInteractionStates = `<div className="flex flex-wrap gap-wide">
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
</div>`;

const codeNotifications = `<div className="flex gap-wide">
  <Button className="relative radius-md overflow-visible">
    <Mail className="w-4 h-4 mr-2" />
    Inbox
    <span className="absolute -top-1 -right-1 flex h-4 w-4">
      <span className="animate-ping absolute inline-flex h-full w-full radius-full bg-red-400 opacity-75"></span>
      <span className="relative inline-flex radius-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center text-white">3</span>
    </span>
  </Button>

  <Button variant="secondary" className="radius-full px-6">
    <Bell className="w-4 h-4 mr-2" />
    Activity
    <span className="ml-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 radius-full">
      +12
    </span>
  </Button>
</div>`;


/* 🔹 Improved Section with Grid and Background Depth */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6 relative">
        {/* Subtle background identifier */}
        <div className="absolute -top-6 right-0 p-3 opacity-[0.03] pointer-events-none select-none z-0">
          <Typography variant="h1" className="text-8xl uppercase">{title[0]}</Typography>
        </div>
        <Typography variant="h3" className="tracking-tight font-bold relative z-10">{title}</Typography>
        {description && (
          <Typography variant="body" className="text-body-muted text-sm max-w-2xl relative z-10">
            {description}
          </Typography>
        )}
      </div>

      <div className="w-full">
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
        
        <Typography variant="body" className="text-body-muted max-w-2xl text-lg mt-2">
          The fundamental building blocks of user interaction. Designed for clarity, 
          responsiveness, and tactile feedback.
        </Typography>
      </header>

      {/* 🔹 Brand Variants */}
      <Section 
        title="Visual Variants" 
        description="Every variant serves a specific level of emphasis in your hierarchy."
      >
        <ComponentWrapper title="Buttons // Base_Tokens" code={codeVisualVariants}>
          <div className="flex flex-wrap items-center gap-default p-4">
            <Button className="radius-md shadow-lg shadow-primary/20">Primary</Button>
            <Button variant="secondary" className="radius-md">Secondary</Button>
            <Button variant="tertiary" className="radius-md border-primary/20">Tertiary</Button>
            <Button variant="outline" className="radius-md border-primary/30 text-primary hover:bg-primary/5">Outline</Button>
            <Button variant="ghost" className="radius-md text-muted-foreground hover:text-foreground">Ghost</Button>
            <Button variant="link" className="text-primary underline-offset-4 hover:underline">Link Style</Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white radius-md">Danger</Button>
            <Button className="bg-red-500/10 text-red-500 hover:bg-red-500/20 radius-md">Danger Soft</Button>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Scale & Proportion */}
      <Section title="Sizes" description="Adaptive scaling from compact toolbars to prominent hero actions.">
        <ComponentWrapper title="Scale // Dimension_Logic" code={codeSizes}>
          <div className="flex flex-wrap items-end gap-wide p-4">
            <Button size="sm" className="radius-sm">Small</Button>
            <Button size="default" className="radius-md">Default</Button>
            <Button size="lg" className="radius-lg px-8 py-6 text-md">Large Action</Button>
            <Button size="icon" className="radius-full bg-primary/10 text-primary hover:bg-primary border border-primary/20 hover:text-white transition-all">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Smart Shapes */}
      <Section title="Shape Architecture" description="Control the 'mood' of your UI using radius tokens.">
        <ComponentWrapper title="Geometry // Radius_Tokens" code={codeSmartShapes}>
          <div className="flex flex-wrap gap-wide p-4">
            <Button className="radius-none px-10 border-2">Sharp Square</Button>
            <Button className="radius-md px-10">Standard Radius</Button>
            <Button className="radius-full px-10 bg-foreground text-background">Pill / Organic</Button>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Dynamic Interaction States */}
      <Section title="Live Feedback" description="Tactile responses for hover, active, and loading states.">
        <ComponentWrapper title="State // Event_Handlers" code={codeInteractionStates}>
          <div className="flex flex-wrap items-center gap-wide p-4">
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
        </ComponentWrapper>
      </Section>

      {/* 🔹 Complex Indicators */}
      <Section title="Notification Integration" description="Using badges and pulses for real-time status.">
        <ComponentWrapper title="Composition // Hardware_Alerts" code={codeNotifications}>
          <div className="flex flex-wrap gap-wide p-4">
            <Button className="relative radius-md overflow-visible">
              <Mail className="w-4 h-4 mr-2" />
              Inbox
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full radius-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex radius-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center text-white">3</span>
              </span>
            </Button>

            <Button variant="secondary" className="radius-full px-6">
              <Bell className="w-4 h-4 mr-2" />
              Activity
              <span className="ml-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 radius-full">
                +12
              </span>
            </Button>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Usage Guardrails */}
      <footer className="system-footer mt-16 shadow-sm">
        {/* The Main Section Title */}
        <h4 className="system-footer-title">System Principles</h4>
        
        <div className="system-footer-grid">
          
          {/* Item 01 */}
          <div className="space-y-1">
            <span className="system-footer-item-heading">Contextual</span>
            <p className="system-footer-item-text">
              Only group actions that perform similar logic (e.g., Align Left, Center, Right).
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-1">
            <span className="system-footer-item-heading">Visual Weight</span>
            <p className="system-footer-item-text">
              Avoid grouping multiple high-intensity 'Primary' buttons together.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-1">
            <span className="system-footer-item-heading">Hardware Triggers</span>
            <p className="system-footer-item-text">
              Always use a loading state for async operations to prevent double-clicks and ESP32 hardware desync.
            </p>
          </div>
          
        </div>
      </footer>

    </div>
  )
}