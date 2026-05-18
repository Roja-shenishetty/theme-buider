"use client"

import { ExternalLink, ArrowRight, BookOpen, GitBranch } from "lucide-react"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import Link from "next/link" // Swap this with your router's Link if not using Next.js

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeInline = `<div className="w-full max-w-2xl p-6 border border-primary/10 radius-lg bg-background shadow-primary/20">
  <p className="text-body leading-relaxed text-muted-foreground">
    The telemetry agent continuously monitors local port traffic. If you experience latency spikes, please refer to the{" "}
    <Link 
      href="/docs/network" 
      className="font-bold text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors focus-ring radius-sm"
    >
      Network Diagnostics Guide
    </Link>{" "}
    to recalibrate the buffer pools.
  </p>
</div>`

const codeAction = `<div className="w-full max-w-md p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
  <div className="flex items-center justify-between border-b border-primary/10 pb-3 mb-1">
    <h4 className="text-label text-muted uppercase tracking-widest">Active Instances</h4>
    <Link 
      href="/instances" 
      className="text-sm font-bold text-primary hover:text-primary/80 transition-colors focus-ring radius-sm"
    >
      View All
    </Link>
  </div>
  <p className="text-sm text-muted">3 nodes currently processing hardware requests.</p>
</div>`

const codeIcon = `<div className="w-full max-w-sm p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
  <h4 className="text-label text-muted uppercase tracking-widest mb-2">External Resources</h4>
  
  <div className="flex flex-col gap-1">
    <Link 
      href="https://github.com" 
      target="_blank"
      className="flex items-center justify-between p-2 radius-md hover:bg-foreground/[0.04] transition-colors focus-ring group"
    >
      <div className="flex items-center gap-default">
        <GitBranch size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
        <span className="text-body text-sm font-bold">Source Repository</span>
      </div>
      <ExternalLink size={14} className="text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
    </Link>

    <Link 
      href="/docs/api" 
      className="flex items-center justify-between p-2 radius-md hover:bg-foreground/[0.04] transition-colors focus-ring group"
    >
      <div className="flex items-center gap-default">
        <BookOpen size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
        <span className="text-body text-sm font-bold">API Reference</span>
      </div>
      <ArrowRight size={14} className="text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5" />
    </Link>
  </div>
</div>`

/* 🔹 Refined Blueprint Section Wrapper */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6 relative">
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

export function LinkShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-label">
          Hyperlink Anchors
        </div>
        
      </header>

      {/* 🔹 Inline Context */}
      <Section 
        title="Inline Body Links" 
        description="Links embedded within paragraphs must use heavy font-weights and strict underline-offsets to remain legible without breaking line-heights."
      >
        <ComponentWrapper title="Links // Inline_Context" code={codeInline}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-2xl p-6 border border-primary/10 radius-lg bg-background shadow-primary/20">
              <p className="text-body leading-relaxed text-muted-foreground">
                The telemetry agent continuously monitors local port traffic. If you experience latency spikes, please refer to the{" "}
                <Link 
                  href="#" 
                  className="font-bold text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors focus-ring radius-sm px-0.5 -mx-0.5"
                >
                  Network Diagnostics Guide
                </Link>{" "}
                to recalibrate the buffer pools.
              </p>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Standalone Actions */}
      <Section 
        title="Standalone Actions" 
        description="Text-only links used for structural navigation (e.g., 'View All', 'Reset'). They drop the underline in favor of color transitions to look cleaner in tight headers."
      >
        <ComponentWrapper title="Links // Action_Triggers" code={codeAction}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-md p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
              <div className="flex items-center justify-between border-b border-primary/10 pb-3 mb-1">
                <h4 className="text-label text-muted uppercase tracking-widest">Active Instances</h4>
                <Link 
                  href="#" 
                  className="text-sm font-bold text-primary hover:text-primary/80 transition-colors focus-ring radius-sm px-1 -mr-1"
                >
                  View All
                </Link>
              </div>
              <p className="text-sm text-muted">3 nodes currently processing hardware requests.</p>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Icon Links / Blocks */}
      <Section 
        title="Icon Block Links" 
        description="Used for external documentation, API references, or repository links. Expands the hit area to a full block row and utilizes hover-translation animations on the icons."
      >
        <ComponentWrapper title="Links // Resource_Blocks" code={codeIcon}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-sm p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
              <h4 className="text-label text-muted uppercase tracking-widest mb-2">External Resources</h4>
              
              <div className="flex flex-col gap-1">
                <Link 
                  href="#" 
                  className="flex items-center justify-between p-2 radius-md hover:bg-foreground/[0.04] transition-colors focus-ring group"
                >
                  <div className="flex items-center gap-default">
                    <GitBranch size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-body text-sm font-bold">Source Repository</span>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>

                <Link 
                  href="#" 
                  className="flex items-center justify-between p-2 radius-md hover:bg-foreground/[0.04] transition-colors focus-ring group"
                >
                  <div className="flex items-center gap-default">
                    <BookOpen size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-body text-sm font-bold">API Reference</span>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 pt-section border-t border-primary/10">
        <h4 className="system-footer-title text-h4 font-bold mb-8">Routing Architecture Rules</h4>
        
        <div className="system-footer-grid grid grid-cols-1 md:grid-cols-3 gap-wide">
          
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">01 Semantics</div>
            <span className="system-footer-item-heading text-lg font-bold block">Links vs Buttons</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              If an interaction changes the URL in the browser, it <strong>must</strong> be an <code>&lt;a&gt;</code> tag (or Next <code>Link</code>). If an interaction opens a modal, submits a form, or changes local state, it must be a <code>&lt;button&gt;</code>. Never mix these up.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">02 Typography</div>
            <span className="system-footer-item-heading text-lg font-bold block">Inline Legibility</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Always use <code>underline-offset-4</code> on inline text links. Standard underlines crash directly into descending letters like "g", "p", and "y", breaking the visual flow of data-dense paragraphs.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">03 Interaction</div>
            <span className="system-footer-item-heading text-lg font-bold block">Focus Compensation</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Notice the <code>px-0.5 -mx-0.5</code> trick on the inline link. This creates a slightly larger invisible hit area and allows the <code>focus-ring</code> to appear without shifting the paragraph text when navigating via keyboard.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}