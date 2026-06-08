"use client"

import React from "react"
import { Typography } from "@/components/ui/typography"
import { Code, Terminal, Cpu, GitBranch, Box } from "lucide-react"

export function DevelopShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Code className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Engineering</span>
        </div>
        
        <Typography variant="h1" className="text-h2 font-bold mb-4 tracking-tight">
          Developer Guide
        </Typography>
        
        <div className="max-w-3xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
          <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
            This system is designed for full-stack engineers who want total control over their markup and styles. We prioritize native CSS variables, zero-runtime styling, and accessible React primitives.
          </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Layout */}
      <div className="space-y-16">
        
        {/* 1. Architecture Philosophy */}
        <section className="space-section animate-fade-up">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-5 h-5 text-primary" />
            <h2 className="text-h4 font-bold">Component Architecture</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card card-blueprint space-y-4">
              <Box className="w-8 h-8 text-primary opacity-80 mb-2" />
              <Typography variant="h4" className="text-h4 font-bold">Ownership</Typography>
              <Typography variant="body" className="text-muted text-sm">
                You do not install these components via an opaque npm package. You copy and paste the code directly into your `components/ui` directory. The code is yours to modify, extend, and break.
              </Typography>
            </div>
            
            <div className="card card-blueprint space-y-4">
              <Terminal className="w-8 h-8 text-primary opacity-80 mb-2" />
              <Typography variant="h4" className="text-h4 font-bold">Zero Runtime</Typography>
              <Typography variant="body" className="text-muted text-sm">
                Styling is handled entirely by our highly dense micro-tokens and standard CSS. We avoid massive runtime CSS-in-JS libraries to ensure maximum performance across all devices.
              </Typography>
            </div>
          </div>
        </section>

        {/* 2. Using the Utilities (Code Example) */}
        <section className="space-section animate-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-2 mb-6">
            <GitBranch className="w-5 h-5 text-primary" />
            <h2 className="text-h4 font-bold">Consuming Tokens</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Context Panel */}
            <div className="md:col-span-5 space-y-4">
              <Typography variant="body" className="text-muted">
                Instead of arbitrarily guessing spacing or writing custom CSS for every new file, combine the utility classes defined in our core CSS files. 
              </Typography>
              <Typography variant="body" className="text-muted">
                These classes are automatically bound to the fluid viewport clamps defined in the root layout.
              </Typography>
              
              <div className="p-4 radius-md bg-primary/5 border border-primary/10 mt-6">
                <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                  <li><span className="text-primary font-bold">.space-y-4</span> → Stack children</li>
                  <li><span className="text-primary font-bold">.p-6</span> → Component padding</li>
                  <li><span className="text-primary font-bold">.radius-xl</span> → Large geometric curve</li>
                  <li><span className="text-primary font-bold">.border-primary/20</span> → Alpha borders</li>
                </ul>
              </div>
            </div>

            {/* Code Block Simulation */}
            <div className="md:col-span-7">
              <div className="card card-glass w-full h-full p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <div className="w-3 h-3 radius-full bg-danger"></div>
                  <div className="w-3 h-3 radius-full bg-accent"></div>
                  <div className="w-3 h-3 radius-full bg-success"></div>
                  <span className="ml-2 text-xs font-mono text-muted-foreground">example.tsx</span>
                </div>
                
                <pre className="text-xs md:text-sm font-mono overflow-x-auto whitespace-pre-wrap text-muted-foreground">
                  <code>
                    <span className="text-primary">export function</span> UserProfile() {'{\n'}
                    {'  '}return ({'\n'}
                    {'    '}&lt;<span className="text-primary">div</span> className="<span className="text-accent">card radius-xl p-6 border border-primary/20</span>"&gt;{'\n'}
                    {'      '}&lt;<span className="text-primary">div</span> className="<span className="text-accent">space-y-4</span>"&gt;{'\n'}
                    {'        '}&lt;<span className="text-primary">h2</span> className="<span className="text-accent">text-h4 font-bold</span>"&gt;Jane Doe&lt;/<span className="text-primary">h2</span>&gt;{'\n'}
                    {'        '}&lt;<span className="text-primary">p</span> className="<span className="text-accent">text-muted text-sm</span>"&gt;Full Stack Engineer&lt;/<span className="text-primary">p</span>&gt;{'\n'}
                    {'      '}&lt;/<span className="text-primary">div</span>&gt;{'\n'}
                    {'    '}&lt;/<span className="text-primary">div</span>&gt;{'\n'}
                    {'  '}){'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="system-footer-title">Engineering Tenets</div>
        <div className="system-footer-grid">
          <div className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
            <span className="system-footer-item-heading">Strict Typings</span>
            <p className="system-footer-item-text">
              Every component must export rigorous TypeScript interfaces. Avoid <code>any</code>. Map directly to native HTML attributes using <code>React.HTMLAttributes&lt;HTMLElement&gt;</code> whenever possible.
            </p>
          </div>
          <div className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
            <span className="system-footer-item-heading">Server & Client Separation</span>
            <p className="system-footer-item-text">
              Keep <code>"use client"</code> directives at the lowest possible leaf node. Structural layouts, grids, and typography wrappers should remain Server Components by default.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}