"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { ComponentWrapper } from "./../system/ComponentWrapper"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeProfile = `<div className="p-6 border border-primary/10 radius-lg shadow-primary/20 bg-background w-full max-w-md mx-auto">
  <div className="flex items-center gap-default">
    <Skeleton className="w-16 h-16 radius-full shrink-0" />
    <div className="flex-1 space-y-3">
      <Skeleton className="h-4 w-2/5 radius-sm" />
      <Skeleton className="h-3 w-4/5 radius-sm" />
      <Skeleton className="h-3 w-3/5 radius-sm" />
    </div>
  </div>
</div>`

const codeContentCard = `<div className="p-6 border border-primary/10 radius-lg shadow-primary/20 bg-background space-y-4 w-full max-w-md mx-auto">
  <Skeleton className="h-40 full-width radius-md" />
  <div className="space-y-2">
    <Skeleton className="h-5 w-2/5 radius-sm" />
    <Skeleton className="h-4 full-width radius-sm" />
    <Skeleton className="h-4 w-4/5 radius-sm" />
  </div>
  <div className="flex gap-default pt-2">
    <Skeleton className="h-10 flex-1 radius-md" />
    <Skeleton className="h-10 flex-1 radius-md" />
  </div>
</div>`

/* 🔹 Refined Blueprint Section */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6 relative">
        {/* Subtle background identifier */}
        <div className="absolute -top-6 right-0 p-3 opacity-[0.03] pointer-events-none select-none z-0">
          <span className="text-[120px] font-black uppercase leading-none tracking-tighter">
            {title[0]}
          </span>
        </div>
        <h3 className="text-h3 tracking-tight font-bold text-primary/90 relative z-10">
          {title}
        </h3>
        {description && (
          <p className="text-body text-muted text-sm max-w-2xl relative z-10">
            {description}
          </p>
        )}
      </div>

      <div className="w-full">
        {children}
      </div>
    </section>
  )
}

export function SkeletonShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-label">
          Loading Architecture
        </div>
        
        <p className="text-body text-muted max-w-2xl text-lg mt-2">
          Progressive rendering placeholders designed to minimize perceived latency and prevent layout shift during data hydration.
        </p>
      </header>

      {/* 🔹 Identity / Profile Skeleton */}
      <Section 
        title="Identity State" 
        description="High-density skeleton mimicking the spatial footprint of avatars and accompanying meta-data."
      >
        <ComponentWrapper title="Skeleton // User_Profile" code={codeProfile}>
          <div className="flex justify-center p-4 full-width">
            <div className="p-6 border border-primary/10 radius-lg shadow-primary/20 bg-background w-full max-w-md">
              <div className="flex items-center gap-default">
                <Skeleton className="w-16 h-16 radius-full shrink-0" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-4 w-2/5 radius-sm" />
                  <Skeleton className="h-3 w-4/5 radius-sm" />
                  <Skeleton className="h-3 w-3/5 radius-sm" />
                </div>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Data / Content Skeleton */}
      <Section 
        title="Content Structure" 
        description="Full-width block skeletons representing hero images, stacked typography layers, and dual-action buttons."
      >
        <ComponentWrapper title="Skeleton // Data_Card" code={codeContentCard}>
          <div className="flex justify-center p-4 full-width">
            <div className="p-6 border border-primary/10 radius-lg shadow-primary/20 bg-background space-y-4 w-full max-w-md">
              <Skeleton className="h-40 full-width radius-md" />
              
              <div className="space-y-2">
                <Skeleton className="h-5 w-2/5 radius-sm" />
                <Skeleton className="h-4 full-width radius-sm" />
                <Skeleton className="h-4 w-4/5 radius-sm" />
              </div>

              <div className="flex gap-default pt-2">
                <Skeleton className="h-10 flex-1 radius-md" />
                <Skeleton className="h-10 flex-1 radius-md" />
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Animation Variants */}
<Section
  title="Animation States"
  description="Different loading motion systems for perceived responsiveness and visual hierarchy."
>
  <ComponentWrapper
    title="Skeleton // Animation_Types"
    code={`<Skeleton animation="shimmer" className="h-24 w-full" />`}
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">

      {/* SHIMMER */}
      <div className="space-y-3">
        
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">
            Shimmer
          </p>

          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Motion
          </span>
        </div>

        <div
          className="
            bg-surface
            border border-border
            rounded-[var(--card-radius)]
            p-[var(--spacing)]
            shadow-[var(--elevation-1)]
            space-y-3
          "
        >
          <Skeleton
            animation="shimmer"
            className="h-24 w-full rounded-[var(--radius)]"
          />

          <Skeleton
            animation="shimmer"
            className="h-4 w-3/5"
          />

          <Skeleton
            animation="shimmer"
            className="h-4 w-4/5"
          />
        </div>
      </div>

      {/* PULSE */}
      <div className="space-y-3">

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">
            Pulse
          </p>

          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Default
          </span>
        </div>

        <div
          className="
            bg-surface
            border border-border
            rounded-[var(--card-radius)]
            p-[var(--spacing)]
            shadow-[var(--elevation-1)]
            space-y-3
          "
        >
          <Skeleton
            animation="pulse"
            className="h-24 w-full rounded-[var(--radius)]"
          />

          <Skeleton
            animation="pulse"
            className="h-4 w-3/5"
          />

          <Skeleton
            animation="pulse"
            className="h-4 w-4/5"
          />
        </div>
      </div>

      {/* STATIC */}
      <div className="space-y-3">

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">
            Static
          </p>

          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            None
          </span>
        </div>

        <div
          className="
            bg-surface
            border border-border
            rounded-[var(--card-radius)]
            p-[var(--spacing)]
            shadow-[var(--elevation-1)]
            space-y-3
          "
        >
          <Skeleton
            animation="none"
            className="h-24 w-full rounded-[var(--radius)]"
          />

          <Skeleton
            animation="none"
            className="h-4 w-3/5"
          />

          <Skeleton
            animation="none"
            className="h-4 w-4/5"
          />
        </div>
      </div>

    </div>
  </ComponentWrapper>
</Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 pt-section border-t border-primary/10">
        <h4 className="system-footer-title text-h4 font-bold mb-8">Skeleton Encapsulation Rules</h4>
        
        <div className="system-footer-grid grid grid-cols-1 md:grid-cols-3 gap-wide">
          
          {/* Item 01 */}
          <div className="space-y-2">
            <div className="text-label opacity-50">
              01 Fidelity
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Structural Accuracy</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Skeletons must closely mimic the exact dimensions and spacing (<code>radius-sm</code>, <code>gap-default</code>) of the final rendered component to prevent layout shifts.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2">
            <div className="text-label opacity-50">
              02 Minimalism
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Abstracted Detail</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Do not create a skeleton for every single text node or icon. Group micro-elements into single, larger skeleton blocks to reduce DOM rendering load.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2">
            <div className="text-label opacity-50">
              03 Typography
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Textual Variance</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              When mocking paragraph blocks, vary the widths (e.g., <code>w-4/5</code>, <code>w-3/5</code>) to create a natural, ragged-right edge mimicking real text.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}