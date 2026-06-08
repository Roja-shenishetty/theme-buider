"use client"

import React from "react"
import { Typography } from "@/components/ui/typography"
import { Rocket, Terminal, FileCode2, FolderTree, PlayCircle, CheckCircle2 } from "lucide-react"

export function GettingStartedShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Rocket className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Quick Start</span>
        </div>
        
        <Typography variant="h1" className="text-h2 font-bold mb-4 tracking-tight">
          Initialize System
        </Typography>
        
        <div className="max-w-3xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
          <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
            Unlike heavy component libraries, our system requires zero `npm install` for styling. You simply inject the root CSS variables into your global stylesheet and begin composing.
          </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Layout */}
      <div className="space-y-16">
        
        {/* Step 1: The Core Engine (Using Blueprint Card) */}
        <section className="space-section animate-fade-up">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 radius-full bg-primary text-background flex items-center justify-center text-xs font-black">1</div>
            <h2 className="text-h4 font-bold">Mount the CSS Engine</h2>
          </div>
          
          <div className="card card-blueprint relative overflow-hidden">
            {/* Background Decorative Mesh */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="card-content grid md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <FileCode2 className="w-8 h-8 text-primary opacity-80" />
                <Typography variant="h4" className="text-h4 font-bold">globals.css</Typography>
                <Typography variant="body" className="text-muted text-sm">
                  Copy the micro-design tokens, border architecture, and fluid typography clamps into your main stylesheet. This instantly unlocks the utility classes across your entire application.
                </Typography>
              </div>

              {/* Code Snippet Block */}
              <div className="bg-black/80 dark:bg-black/40 radius-lg p-4 border border-primary/20 shadow-inner">
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">CSS Setup</span>
                </div>
                <pre className="text-[11px] font-mono text-primary/80 overflow-x-auto">
                  <code>
                    <span className="text-white/40">/* 1. Define Root Variables */</span>{'\n'}
                    :root {'{\n'}
                    {'  '}--space-4: clamp(8px, calc(0.38vw + 6.6px), 12px);{'\n'}
                    {'  '}--primary-rgb: 0, 112, 243;{'\n'}
                    {'}'}{'\n\n'}
                    <span className="text-white/40">/* 2. Import Utilities */</span>{'\n'}
                    @import './system/borders.css';{'\n'}
                    @import './system/cards.css';{'\n'}
                    @import './system/typography.css';
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Folder Structure (Using Glass Card) */}
        <section className="space-section animate-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-2 mb-6">
             <div className="w-6 h-6 radius-full bg-primary text-background flex items-center justify-center text-xs font-black">2</div>
            <h2 className="text-h4 font-bold">Establish File Structure</h2>
          </div>

          <div className="card card-glass p-8 relative overflow-hidden">
             <div className="grid md:grid-cols-12 gap-8 relative z-10">
                <div className="md:col-span-5 space-y-4">
                  <FolderTree className="w-8 h-8 text-primary opacity-80" />
                  <Typography variant="body" className="text-muted text-sm leading-relaxed">
                    We recommend isolating your UI primitives from your business logic. Keep standard components in <code className="text-code">/components/ui</code> and larger layouts in <code className="text-code">/components/system</code>.
                  </Typography>
                </div>

                <div className="md:col-span-7 bg-background/50 radius-md border border-primary/10 p-6 font-mono text-xs space-y-3">
                  <div className="flex items-center gap-2 text-primary font-bold"><FolderTree className="w-4 h-4"/> src/</div>
                  <div className="flex items-center gap-2 ml-4 text-muted-foreground"><FolderTree className="w-4 h-4"/> app/ <span className="opacity-50">(Routing)</span></div>
                  <div className="flex items-center gap-2 ml-4 text-muted-foreground"><FolderTree className="w-4 h-4 text-primary/50"/> components/</div>
                  <div className="flex items-center gap-2 ml-8 text-muted-foreground"><FolderTree className="w-4 h-4 text-primary"/> ui/ <span className="opacity-50">(Buttons, Inputs, Cards)</span></div>
                  <div className="flex items-center gap-2 ml-8 text-muted-foreground"><FolderTree className="w-4 h-4 text-primary"/> system/ <span className="opacity-50">(Footers, Sidebars)</span></div>
                  <div className="flex items-center gap-2 ml-4 text-muted-foreground"><FolderTree className="w-4 h-4"/> styles/ <span className="opacity-50">(globals.css)</span></div>
                </div>
             </div>
          </div>
        </section>

        {/* Step 3: Your First Component (Using Standard Cards Grid) */}
        <section className="space-section animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 radius-full bg-primary text-background flex items-center justify-center text-xs font-black">3</div>
            <h2 className="text-h4 font-bold">Build a Layout</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card card-hover-effect">
              <div className="card-header border-b border-primary/5">
                <div className="flex items-center justify-between">
                  <h3 className="card-title text-lg">Use the Variables</h3>
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
              </div>
              <div className="card-content space-y-4">
                <p className="text-small text-muted-foreground">
                  Combine <code className="text-code">.card</code>, <code className="text-code">.radius-xl</code>, and <code className="text-code">.space-y-4</code> to create native, fluid layouts instantly.
                </p>
              </div>
            </div>

            <div className="card card-hover-effect bg-primary/5 border-primary/20">
              <div className="card-header">
                <div className="flex items-center gap-3">
                  <PlayCircle className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="card-title text-primary">Next Steps</h3>
                    <p className="card-description">Move to Components</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p className="text-small text-muted-foreground">
                  Your environment is ready. Head over to the Components section to start copying Buttons, Inputs, and Data Displays into your <code className="text-code">ui/</code> folder.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="system-footer-title">Setup Guardrails</div>
        <div className="system-footer-grid">
          <div className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
            <span className="system-footer-item-heading">CSS Specificity</span>
            <p className="system-footer-item-text">
              Ensure your global variables file is imported <strong>before</strong> your component-specific CSS. This guarantees that utility classes like <code>.p-4</code> correctly override base element styles.
            </p>
          </div>
          <div className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
            <span className="system-footer-item-heading">Tailwind Integration</span>
            <p className="system-footer-item-text">
              If utilizing Tailwind alongside this system, map your Tailwind config to use these native CSS variables (e.g., <code>colors: {'{'} primary: 'var(--primary)' {'}'}</code>) to maintain a single source of truth.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}