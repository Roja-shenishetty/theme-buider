"use client"

import React from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge/badge"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { 
  Settings2, 
  Activity, 
  Info, 
  Server, 
  Cpu, 
  Network,
  Layers
} from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS FOR THE WRAPPER */
const codeStandardPopover = `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className="radius-md">
      <Info className="mr-2 w-4 h-4" /> System Status
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80 radius-xl border-primary/10 shadow-2xl p-6">
    <div className="space-group">
      <Typography variant="h4" className="font-bold text-primary/90">
        Telemetry Active
      </Typography>
      <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed">
        All hardware nodes are currently responding within expected latency thresholds. No packet loss detected on the primary trunk.
      </Typography>
    </div>
  </PopoverContent>
</Popover>`;

const codeConfigPopover = `<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary" className="radius-md group">
      <Settings2 className="mr-2 w-4 h-4 group-hover:rotate-90 transition-transform duration-500" /> 
      Quick Config
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80 p-0 overflow-hidden radius-xl border-primary/10 shadow-2xl" align="start">
    {/* Header Block */}
    <div className="p-4 bg-primary/5 border-b border-primary/5 flex items-center justify-between">
      <Typography variant="label" className="flex items-center gap-2">
        <Activity size={14} className="text-primary" />
        Telemetry Config
      </Typography>
      <Badge variant="outline" className="text-[9px] radius-full border-primary/20">LIVE</Badge>
    </div>

    {/* Dense Form Data */}
    <div className="p-5 space-group">
      <div className="space-y-1.5">
        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
          Active Stream ID
        </label>
        <input 
          type="text" 
          defaultValue="0x88F.A2" 
          readOnly 
          className="w-full h-9 px-3 text-sm radius-md border border-primary/10 bg-primary/5 text-code font-mono focus-ring focus:ring-2" 
        />
      </div>
      
      <div className="space-y-1.5 pt-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
          Refresh Rate (ms)
        </label>
        <input 
          type="number" 
          defaultValue={120} 
          className="w-full h-9 px-3 text-sm radius-md border border-primary/10 bg-background focus-ring focus:ring-2 focus:border-primary/30" 
        />
      </div>
    </div>
    
    <div className="p-3 border-t border-primary/5 bg-muted/5 flex justify-end">
      <Button size="sm" className="radius-md h-8 text-xs">Apply Sync</Button>
    </div>
  </PopoverContent>
</Popover>`;

const codeNodePopover = `<Popover>
  <PopoverTrigger asChild>
    <Button variant="ghost" className="radius-md h-auto p-2 border border-transparent hover:border-primary/10">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 radius-md bg-accent/10 flex items-center justify-center text-accent">
          <Server size={16} />
        </div>
        <div className="text-left space-y-0.5">
          <div className="text-sm font-bold leading-none">Node_Alpha</div>
          <div className="text-[10px] opacity-60 font-mono leading-none">192.168.1.44</div>
        </div>
      </div>
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-72 radius-xl border-primary/10 shadow-2xl p-0 overflow-hidden" align="center" sideOffset={8}>
    <div className="h-1 w-full bg-gradient-to-r from-accent to-primary" />
    <div className="p-5 space-group">
      <Typography variant="label" className="opacity-50">Hardware Metrics</Typography>
      
      <div className="flex justify-between items-center py-2 border-b border-primary/5">
        <span className="flex items-center gap-2 text-sm"><Cpu size={14} className="text-primary"/> Compute</span>
        <span className="font-mono text-xs font-bold text-primary">84.2%</span>
      </div>
      
      <div className="flex justify-between items-center py-2">
        <span className="flex items-center gap-2 text-sm"><Network size={14} className="text-accent"/> Packets</span>
        <span className="font-mono text-xs font-bold text-accent">0.02ms</span>
      </div>
    </div>
  </PopoverContent>
</Popover>`;

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

export function PopoverShowcase() {
  return (
    <div className="page-container space-page">

      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Contextual Overlays
        </div>
      </header>

      {/* 🔹 Standard Info Popover */}
      <Section title="Standard Popover" description="Basic informative overlay triggered by a button interaction. Highly padded for reading comfort.">
        <ComponentWrapper title="Popover // System_Status" code={codeStandardPopover}>
          <div className="flex justify-center p-10 h-[250px] items-start">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="radius-md">
                  <Info className="mr-2 w-4 h-4" /> System Status
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 radius-xl border-primary/10 shadow-2xl p-6">
                <div className="space-group">
                  <Typography variant="h4" className="font-bold text-primary/90">
                    Telemetry Active
                  </Typography>
                  <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed">
                    All hardware nodes are currently responding within expected latency thresholds. No packet loss detected on the primary trunk.
                  </Typography>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Quick Config / Zero-Padding Form Popover */}
      <Section title="Quick Settings Form" description="Zero-padding structure allowing for edge-to-edge headers, footers, and compact inputs.">
        <ComponentWrapper title="Popover // Dynamic_Config" code={codeConfigPopover}>
          <div className="flex justify-center p-10 h-[350px] items-start">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary" className="radius-md group">
                  <Settings2 className="mr-2 w-4 h-4 group-hover:rotate-90 transition-transform duration-500" /> 
                  Quick Config
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 overflow-hidden radius-xl border-primary/10 shadow-2xl" align="start">
                
                {/* Header Block */}
                <div className="p-4 bg-primary/5 border-b border-primary/5 flex items-center justify-between">
                  <Typography variant="label" className="flex items-center gap-2">
                    <Activity size={14} className="text-primary" />
                    Telemetry Config
                  </Typography>
                  <Badge variant="outline" className="text-[9px] radius-full border-primary/20">LIVE</Badge>
                </div>

                {/* Dense Form Data */}
                <div className="p-5 space-group">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                      Active Stream ID
                    </label>
                    <input 
                      type="text" 
                      defaultValue="0x88F.A2" 
                      readOnly 
                      className="w-full h-9 px-3 text-sm radius-md border border-primary/10 bg-primary/5 text-code font-mono focus-ring focus:ring-2" 
                    />
                  </div>
                  
                  <div className="space-y-1.5 pt-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                      Refresh Rate (ms)
                    </label>
                    <input 
                      type="number" 
                      defaultValue={120} 
                      className="w-full h-9 px-3 text-sm radius-md border border-primary/10 bg-background focus-ring focus:ring-2 focus:border-primary/30" 
                    />
                  </div>
                </div>
                
                {/* Footer Action */}
                <div className="p-3 border-t border-primary/5 bg-muted/5 flex justify-end">
                  <Button size="sm" className="radius-md h-8 text-xs">Apply Sync</Button>
                </div>

              </PopoverContent>
            </Popover>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Identity/Node Card Popover */}
      <Section title="Data Identity Card" description="Used for rendering detailed meta-information when interacting with small structural items (like avatars or server IDs).">
        <ComponentWrapper title="Popover // Node_Inspection" code={codeNodePopover}>
          <div className="flex justify-center p-10 h-[280px] items-start">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="radius-md h-auto p-2 border border-transparent hover:border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 radius-md bg-accent/10 flex items-center justify-center text-accent">
                      <Server size={16} />
                    </div>
                    <div className="text-left space-y-0.5">
                      <div className="text-sm font-bold leading-none">Node_Alpha</div>
                      <div className="text-[10px] opacity-60 font-mono leading-none">192.168.1.44</div>
                    </div>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72 radius-xl border-primary/10 shadow-2xl p-0 overflow-hidden" align="center" sideOffset={8}>
                <div className="h-1 w-full bg-gradient-to-r from-accent to-primary" />
                <div className="p-5 space-group">
                  <Typography variant="label" className="opacity-50">Hardware Metrics</Typography>
                  
                  <div className="flex justify-between items-center py-2 border-b border-primary/5">
                    <span className="flex items-center gap-2 text-sm"><Cpu size={14} className="text-primary"/> Compute</span>
                    <span className="font-mono text-xs font-bold text-primary">84.2%</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="flex items-center gap-2 text-sm"><Network size={14} className="text-accent"/> Packets</span>
                    <span className="font-mono text-xs font-bold text-accent">0.02ms</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 border-t border-primary/10 pt-8">
        <h4 className="text-h4 font-bold text-primary/90 mb-6 flex items-center gap-2">
          <Layers className="w-5 h-5 text-primary" /> Popover Mechanics
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-wide">
          {/* Item 01 */}
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
              01 Anchoring
            </div>
            <span className="font-semibold text-body text-sm block">Contextual Alignment</span>
            <p className="text-caption text-xs leading-relaxed">
              Popovers should utilize the <code>align="start"</code> or <code>align="end"</code> properties when positioned near screen edges to prevent UI clipping.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
              02 Z-Indexing
            </div>
            <span className="font-semibold text-body text-sm block">Shadow Elevations</span>
            <p className="text-caption text-xs leading-relaxed">
              Because Popovers float above standard content, they utilize the heavy <code>shadow-2xl</code> token to separate them from the flat layout planes.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
              03 Interaction
            </div>
            <span className="font-semibold text-body text-sm block">Dismissal Rules</span>
            <p className="text-caption text-xs leading-relaxed">
              Unlike Modals, Popovers are transient. They should naturally close when clicking outside the boundary or via the <code>ESC</code> key. Do not lock focus.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}