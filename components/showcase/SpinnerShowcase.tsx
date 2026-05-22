"use client"

import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Info } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `<div className="flex gap-wide items-center justify-center">
  <Spinner size="md" variant="default" />
  <Spinner size="md" variant="muted" />
  <Spinner size="md" variant="success" />
  <Spinner size="md" variant="danger" />
</div>`;

const codeSizes = `<div className="flex gap-wide items-end justify-center">
  <div className="space-group items-center">
    <Spinner size="sm" />
    <span className="text-[10px] uppercase font-bold opacity-40">Small</span>
  </div>
  
  <div className="space-group items-center">
    <Spinner size="md" />
    <span className="text-[10px] uppercase font-bold opacity-40">Medium</span>
  </div>
  
  <div className="space-group items-center">
    <Spinner size="lg" />
    <span className="text-[10px] uppercase font-bold opacity-40">Large</span>
  </div>
  
  <div className="space-group items-center">
    <Spinner size="xl" />
    <span className="text-[10px] uppercase font-bold opacity-40">Extra Large</span>
  </div>
</div>`;

const codeButtons = `<div className="flex gap-wide flex-wrap justify-center">
  <Button disabled className="radius-md">
    <Spinner size="sm" variant="background" className="mr-2" />
    Deploying Node...
  </Button>

  <Button variant="outline" disabled className="radius-md">
    <Spinner size="sm" variant="muted" className="mr-2" />
    Fetching Telemetry...
  </Button>

  <Button variant="danger" disabled className="radius-md">
    <Spinner size="sm" variant="background" className="mr-2" />
    Purging System...
  </Button>
</div>`;

/* 🔹 Layout Blueprint Section Component */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6 relative">
        <div className="absolute -top-6 right-0 p-3 opacity-[0.03] pointer-events-none select-none z-0">
          <Typography variant="h1" className="text-h1 uppercase">{title[0]}</Typography>
        </div>
        <Typography variant="h3" className="tracking-tight font-bold text-primary/90 relative z-10">
          {title}
        </Typography>
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

export function SpinnerShowcase() {
  return (
    <div className="page-container space-page">

      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10 mb-8">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Loading Indicators
        </div>
        <Typography variant="body" className="text-body-muted max-w-2xl text-lg mt-2">
          Visual cues that inform users about active asynchronous processes, data fetching, and system delays.
        </Typography>
      </header>

      {/* 🔹 Semantic Variants */}
      <Section 
        title="Semantic Mapping" 
        description="Spinners inherit global color tokens to reflect the nature of the process they represent."
      >
        <ComponentWrapper title="Spinner // Status_Variants" code={codeBasic}>
          <div className="flex gap-wide items-center justify-center p-8">
            <Spinner size="md" variant="default" />
            <Spinner size="md" variant="muted" />
            <Spinner size="md" variant="success" />
            <Spinner size="md" variant="danger" />
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Scale Architecture */}
      <Section 
        title="Scale Architecture" 
        description="Standardized dimensions for mapping to inline text, buttons, or empty state containers."
      >
        <ComponentWrapper title="Spinner // Size_Tokens" code={codeSizes}>
          <div className="flex gap-wide items-end justify-center p-8">
            <div className="space-group items-center">
              <Spinner size="sm" />
              <span className="text-[10px] uppercase font-bold opacity-40">Small</span>
            </div>
            
            <div className="space-group items-center">
              <Spinner size="md" />
              <span className="text-[10px] uppercase font-bold opacity-40">Medium</span>
            </div>
            
            <div className="space-group items-center">
              <Spinner size="lg" />
              <span className="text-[10px] uppercase font-bold opacity-40">Large</span>
            </div>
            
            <div className="space-group items-center">
              <Spinner size="xl" />
              <span className="text-[10px] uppercase font-bold opacity-40">Hero</span>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Interactive States */}
      <Section 
        title="Interactive States" 
        description="Integrating size 'sm' spinners into interactive components to lock user actions during processing."
      >
        <ComponentWrapper title="Spinner // Button_Integration" code={codeButtons}>
          <div className="flex gap-wide flex-wrap justify-center p-8">
            <Button disabled className="radius-md">
              <Spinner size="sm" variant="background" className="mr-2" />
              Deploying Node...
            </Button>

            <Button variant="outline" disabled className="radius-md">
              <Spinner size="sm" variant="muted" className="mr-2" />
              Fetching Telemetry...
            </Button>

            <Button variant="danger" disabled className="radius-md">
              <Spinner size="sm" variant="background" className="mr-2" />
              Purging System...
            </Button>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 border-t border-primary/10 pt-8">
        <h4 className="text-h4 font-bold text-primary/90 mb-6 flex items-center gap-2">
          <Info className="w-5 h-5 text-primary" /> Loading Guardrails
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-wide">
          {/* Item 01 */}
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
              01 Button States
            </div>
            <span className="font-semibold text-body text-sm block">Locking Actions</span>
            <p className="text-caption text-xs leading-relaxed">
              Always pair a spinner inside a button with the <code>disabled</code> attribute to prevent users from triggering an asynchronous action multiple times.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
              02 Size Mapping
            </div>
            <span className="font-semibold text-body text-sm block">Contextual Scale</span>
            <p className="text-caption text-xs leading-relaxed">
              Use <code>sm</code> for buttons and inline text, <code>md</code> for card-level loading, and <code>xl</code> for full-page or overlay initialization states.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
              03 Empty States
            </div>
            <span className="font-semibold text-body text-sm block">Skeleton vs Spinner</span>
            <p className="text-caption text-xs leading-relaxed">
              Prefer Skeleton loaders over Spinners for initial page loads where the UI structure is known. Reserve Spinners for discrete data fetching and submissions.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}