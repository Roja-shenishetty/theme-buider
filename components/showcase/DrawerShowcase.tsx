"use client"

import React, { useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge/badge"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { ArrowUpFromLine, Activity, Settings2, GripHorizontal, ShieldAlert, X } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS FOR THE WRAPPER */
const codeStandardDrawer = `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline" className="radius-md">
      <ArrowUpFromLine className="mr-2 w-4 h-4" /> Open Inspector
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-lg">
      <DrawerHeader>
        <DrawerTitle className="flex items-center justify-between">
          Telemetry Logs
          <Badge variant="outline" className="text-[10px] radius-full">Live</Badge>
        </DrawerTitle>
        <DrawerDescription>
          Swipe up to expand or drag down to dismiss the active node inspector.
        </DrawerDescription>
      </DrawerHeader>
      
      <div className="p-6 space-group">
        <div className="h-32 radius-xl bg-primary/5 border border-primary/10 flex items-center justify-center border-dashed">
          <Typography variant="caption" className="opacity-50 font-mono text-xs">
            [ Log Stream Output ]
          </Typography>
        </div>
      </div>

      <DrawerFooter>
        <Button className="radius-md">Export Trace</Button>
        <DrawerClose asChild>
          <Button variant="ghost" className="radius-md">Close Sequence</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`;

/* 🔹 Update this string block at the top of your file */
const codeDenseDrawer = `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="secondary" className="radius-md group">
      <Settings2 className="mr-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
      System Parameters
    </Button>
  </DrawerTrigger>
  <DrawerContent className="p-0 overflow-hidden">
    {/* 🔹 FIX: Added Screen-Reader Only Title for Accessibility */}
    <DrawerTitle className="sr-only">Core Configuration Settings</DrawerTitle>
    
    <div className="mx-auto w-full max-w-lg">
      
      {/* Zero-padding tinted header */}
      <div className="px-6 py-4 mt-6 bg-primary/5 border-b border-primary/5 flex items-center justify-between">
        <Typography variant="label" className="flex items-center gap-2">
          <Activity size={14} className="text-primary" /> Core Configuration
        </Typography>
        <DrawerClose className="opacity-50 hover:opacity-100 transition-opacity focus-ring radius-sm">
          <X className="w-4 h-4" />
        </DrawerClose>
      </div>

      <div className="p-6 space-group">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
            Node Identity
          </label>
          <input 
            type="text" 
            defaultValue="alpha_mainframe_01" 
            className="w-full px-3 py-2 h-10 radius-md border border-primary/10 bg-background text-sm focus-ring focus:ring-2 transition-all"
          />
        </div>
      </div>

      <div className="p-4 border-t border-primary/10 bg-muted/5 flex justify-end gap-default">
        <DrawerClose asChild>
          <Button variant="ghost" className="radius-md">Abort</Button>
        </DrawerClose>
        <Button className="radius-md">Flash Memory</Button>
      </div>

    </div>
  </DrawerContent>
</Drawer>`;

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

export function DrawerShowcase() {
  return (
    <div className="page-container space-page">

      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Kinetic Interception
        </div>
        
      </header>

      {/* 🔹 Standard Log Drawer */}
      <Section title="Standard Inspector" description="Default drawer configuration utilizing automatic layout structuring and drag mechanics.">
        <ComponentWrapper title="Drawer // System_Logs" code={codeStandardDrawer}>
          <div className="flex justify-center p-10 items-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="radius-md">
                  <ArrowUpFromLine className="mr-2 w-4 h-4" /> Open Inspector
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-lg">
                  <DrawerHeader>
                    <DrawerTitle className="flex items-center justify-between">
                      Telemetry Logs
                      <Badge variant="outline" className="text-[10px] radius-full border-primary/20">Live</Badge>
                    </DrawerTitle>
                    <DrawerDescription>
                      Swipe up to expand or drag down to dismiss the active node inspector.
                    </DrawerDescription>
                  </DrawerHeader>
                  
                  <div className="p-6 space-group pt-0">
                    <div className="h-40 radius-xl bg-primary/5 border border-primary/10 flex items-center justify-center border-dashed">
                      <Typography variant="caption" className="opacity-50 font-mono text-xs">
                        [ Log Stream Output Attached ]
                      </Typography>
                    </div>
                  </div>

                  <DrawerFooter>
                    <Button className="radius-md">Export Trace</Button>
                    <DrawerClose asChild>
                      <Button variant="ghost" className="radius-md">Close Sequence</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </ComponentWrapper>
      </Section>

     {/* 🔹 Dense Form/Settings Drawer */}
      <Section title="Structured Form Sheet" description="Utilizing zero-padding logic to push background tints to the absolute edges of the drawer container.">
        <ComponentWrapper title="Drawer // Node_Configuration" code={codeDenseDrawer}>
          <div className="flex justify-center p-10 items-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="secondary" className="radius-md group">
                  <Settings2 className="mr-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
                  System Parameters
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-0 overflow-hidden">
                {/* 🔹 FIX: Added Screen-Reader Only Title for Accessibility */}
                <DrawerTitle className="sr-only">Core Configuration Settings</DrawerTitle>
                
                <div className="mx-auto w-full max-w-lg pb-safe">
                  
                  {/* Zero-padding tinted header */}
                  <div className="px-6 py-4 mt-6 bg-primary/5 border-b border-primary/5 flex items-center justify-between">
                    <Typography variant="label" className="flex items-center gap-2">
                      <Activity size={14} className="text-primary" /> Core Configuration
                    </Typography>
                    <DrawerClose className="opacity-50 hover:opacity-100 transition-opacity focus-ring radius-sm">
                      <X className="w-4 h-4" />
                    </DrawerClose>
                  </div>

                  <div className="p-6 space-group">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                        Node Identity
                      </label>
                      <input 
                        type="text" 
                        defaultValue="alpha_mainframe_01" 
                        className="w-full px-3 py-2 h-10 radius-md border border-primary/10 bg-background text-sm focus-ring focus:ring-2 transition-all"
                      />
                    </div>
                    
                    <div className="space-y-1.5 pt-4">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                        Security Clearance
                      </label>
                      <select className="w-full px-3 py-2 h-10 radius-md border border-primary/10 bg-background text-sm focus-ring focus:ring-2 transition-all">
                        <option>Level 4 (Hardware Access)</option>
                        <option>Level 2 (Telemetry Only)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 border-t border-primary/10 bg-muted/5 flex justify-end gap-default">
                    <DrawerClose asChild>
                      <Button variant="ghost" className="radius-md">Abort</Button>
                    </DrawerClose>
                    <Button className="radius-md">Flash Memory</Button>
                  </div>

                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </ComponentWrapper>
      </Section>


      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 border-t border-primary/10 pt-8">
        <h4 className="text-h4 font-bold text-primary/90 mb-6 flex items-center gap-2">
          <GripHorizontal className="w-5 h-5 text-primary" /> Sheet Mechanics
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-wide">
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">01 Ergonomics</div>
            <span className="font-semibold text-body text-sm block">Mobile Preference</span>
            <p className="text-caption text-xs leading-relaxed">
              Drawers are functionally superior to Modals on mobile breakpoints as they originate from the natural thumb-reach zone.
            </p>
          </div>

          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">02 Scaling</div>
            <span className="font-semibold text-body text-sm block">Background Zoom</span>
            <p className="text-caption text-xs leading-relaxed">
              The <code>shouldScaleBackground</code> flag wraps the main DOM view and mathematically shrinks it back on the Z-axis, creating a high-fidelity depth effect.
            </p>
          </div>

          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">03 Geometry</div>
            <span className="font-semibold text-body text-sm block">Corner Radii</span>
            <p className="text-caption text-xs leading-relaxed">
              Drawers exclusively use the maximum <code>radius-2xl</code> token on the top edge to communicate an overlapping physical sheet to the user.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}