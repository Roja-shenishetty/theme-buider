"use client"

import { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ComponentWrapper } from "../system/ComponentWrapper"
import { ChevronDown, Database, Terminal, Settings2 } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const codeBasic = `<Collapsible className="w-full radius-md border border-primary/10">
  <CollapsibleTrigger className="w-full p-4 flex items-center justify-between">
    <span className="text-sm font-bold uppercase">View Raw Telemetry</span>
    <ChevronDown className="w-4 h-4" />
  </CollapsibleTrigger>
  <CollapsibleContent className="p-4 pt-0 text-xs font-mono opacity-70">
    [SYSTEM]: Ready state initialized.
  </CollapsibleContent>
</Collapsible>`;

export function DisclosureShowcase() {
  return (
    <div className="page-container space-page">
      <header className="pb-10 border-b border-primary/10 mb-8">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Database className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Disclosure Protocol</span>
        </div>
        <Typography variant="h1" className="text-h3 font-bold mb-4">Transient Overlays</Typography>
      </header>

      <section className="space-section">
         <ComponentWrapper title="Disclosure // Minimal" code={codeBasic}>
            <div className="max-w-md mx-auto p-4">
              <Collapsible className="w-full radius-md border border-primary/10 bg-background/50">
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-primary/5 transition-colors">
                  <span className="text-sm font-bold uppercase flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" /> System Logs
                  </span>
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0 text-xs font-mono text-muted-foreground border-t border-primary/5">
                  <p>ID: 0x44F9 - Sequence: 1024</p>
                  <p>STATUS: ONLINE</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
         </ComponentWrapper>
      </section>

      {/* Footer Guidelines */}
      <footer className="system-footer mt-20">
         <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Disclosure Guardrails</h4>
         <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 radius-lg bg-black/5 border border-primary/5">
              <span className="font-bold block mb-2">Primary Usage</span>
              <p className="text-xs opacity-70">Use Disclosures for optional configuration blocks or secondary metadata that is not critical to the primary user path.</p>
            </div>
            <div className="p-6 radius-lg bg-black/5 border border-primary/5">
              <span className="font-bold block mb-2">Visual Feedback</span>
              <p className="text-xs opacity-70">Ensure the trigger icon rotates or changes color to clearly signal state changes to the user.</p>
            </div>
         </div>
      </footer>
    </div>
  )
}