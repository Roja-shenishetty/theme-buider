"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { AlertDialog } from "@/components/ui/alerts/alertbox"
import { ComponentWrapper } from "./../../system/ComponentWrapper"

import { ControlledSection } from "./ControlledSection"
import { DialogHooksSection } from "./DialogHookSection"
import { DismissBehaviorSection } from "./DismisableBehaviourSection"

import {
  Info,
  Trash2,
  Box,
  Zap,
  Terminal,
  ShieldAlert,
  Settings2,
} from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const intentCode = `"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertDialog } from "@/components/ui/alerts/alertbox"
import { Info, Trash2 } from "lucide-react"

export function InteractionIntents() {
  const [openBasic, setOpenBasic] = useState(false)
  const [openDanger, setOpenDanger] = useState(false)

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Standard Implementation */}
      <div className="card p-10 bg-muted/5">
        <Button onClick={() => setOpenBasic(true)} className="btn-primary w-full">
          <Info className="w-5 h-5 mr-3" /> Initialize Sync
        </Button>
        <AlertDialog
          open={openBasic}
          onOpenChange={setOpenBasic}
          title="Sync Local Configuration?"
          description="This will push your current Arduino pin mappings to the cloud database."
          confirmText="Start Sync"
        />
      </div>

      {/* Danger Implementation */}
      <div className="card p-10 bg-red-500/[0.02] border-red-500/10">
        <Button variant="danger" onClick={() => setOpenDanger(true)} className="w-full">
          <Trash2 className="w-5 h-5 mr-3" /> Wipe Build History
        </Button>
        <AlertDialog
          open={openDanger}
          onOpenChange={setOpenDanger}
          variant="danger"
          title="Wipe Build History?"
          description="This action is irreversible and will delete 14 production binaries from local storage."
          confirmText="Wipe Permanently"
        />
      </div>
    </div>
  )
}`;

const portalCode = `"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertDialog } from "@/components/ui/alerts/alertbox"
import { Box } from "lucide-react"

export function PortalDemo() {
  const [openPortal, setOpenPortal] = useState(false)
  const [portalEl, setPortalEl] = useState<HTMLDivElement | null>(null)

  return (
    <div
      ref={setPortalEl}
      className="relative w-full h-[400px] border-2 border-dashed border-primary/20 radius-2xl overflow-hidden"
    >
      <Button variant="secondary" onClick={() => setOpenPortal(true)}>
        <Box className="w-4 h-4 mr-2" /> Mount Inside Blueprint
      </Button>

      {portalEl && (
        <AlertDialog
          open={openPortal}
          onOpenChange={setOpenPortal}
          portalContainer={portalEl}
          title="Portaled Interaction"
          description="This dialog is rendered specifically inside this blue-print zone."
        />
      )}
    </div>
  )
}`;

/* 🔹 Full-Width Section Wrapper */
function ShowcaseSection({ title, description, children, badge }: any) {
  return (
    <section className="animate-fade-up w-full border-t border-primary/5 pt-16 first:border-none first:pt-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 bg-primary/10 radius-md">
               <Settings2 className="w-4 h-4 text-primary" />
            </div>
            <Typography variant="h2" className="tracking-tighter font-bold">
              {title}
            </Typography>
          </div>
          {description && (
            <Typography variant="body" className="text-body-muted max-w-3xl leading-relaxed">
              {description}
            </Typography>
          )}
        </div>
        {badge && (
          <div className="px-4 py-1.5 radius-full bg-muted border border-primary/10 text-[10px] font-mono font-bold uppercase tracking-widest text-primary/70">
            {badge}
          </div>
        )}
      </div>

      <div className="w-full">
        {children}
      </div>
    </section>
  )
}

export function AlertDialogShowcase() {
  const [openBasic, setOpenBasic] = useState(false)
  const [openDanger, setOpenDanger] = useState(false)
  const [openPortal, setOpenPortal] = useState(false)
  const [portalEl, setPortalEl] = useState<HTMLDivElement | null>(null)

  return (
    <div className="page-container space-page max-w-6xl mx-auto relative overflow-hidden">
      
      {/* 🔹 AMBIENT DECORATION */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
        <Terminal className="w-[500px] h-[500px] text-primary/20 -rotate-12 translate-x-32 -translate-y-32" />
      </div>

      {/* 🔹 HERO HEADER */}
      <header className="space-section border-b border-primary/10 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-black uppercase tracking-widest border border-primary/20 mb-6">
          <ShieldAlert className="w-3 h-3" />
          Protocol Engine v2.4.0
        </div>
        <Typography variant="body" className="text-body-muted max-w-2xl text-lg lg:text-xl leading-relaxed">
          Critical system overrides. Use these components when the user must acknowledge an action 
          before the application can continue.
        </Typography>
      </header>

      <div className="space-y-32 mt-16">
        
        {/* 1. Intents Stack */}
        <ShowcaseSection 
          title="Interaction Intents" 
          description="Different visual weights for standard info vs high-risk hardware wipes."
          badge="UI Logic"
        >
          <ComponentWrapper title="Logic_Gates // Action_Intents" code={intentCode}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Standard Implementation */}
              <div className="card p-10 radius-2xl border-2 border-primary/5 bg-muted/5 space-y-6 group">
                 <Typography variant="h4" className="font-bold">Standard Intent</Typography>
                 <Typography variant="body" className="text-sm opacity-60">General confirmation protocol for non-destructive cloud syncs.</Typography>
                 <Button onClick={() => setOpenBasic(true)} className="btn-primary w-full py-7 radius-lg shadow-lg shadow-primary/20">
                    <Info className="w-5 h-5 mr-3" />
                    Initialize Sync
                 </Button>
                 
                 <AlertDialog
                   open={openBasic}
                   onOpenChange={setOpenBasic}
                   title="Sync Local Configuration?"
                   description="This will push your current Arduino pin mappings to the cloud database."
                   confirmText="Start Sync"
                 />
              </div>

              {/* Danger Implementation */}
              <div className="card p-10 radius-2xl border-2 border-red-500/10 bg-red-500/[0.02] space-y-6">
                 <Typography variant="h4" className="font-bold text-red-500">Destructive Protocol</Typography>
                 <Typography variant="body" className="text-sm opacity-60">High-risk confirmation for permanent hardware memory wipes.</Typography>
                 <Button variant="danger" onClick={() => setOpenDanger(true)} className="w-full py-7 radius-lg shadow-lg shadow-red-500/20">
                    <Trash2 className="w-5 h-5 mr-3" />
                    Wipe Build History
                 </Button>

                 <AlertDialog
                   open={openDanger}
                   onOpenChange={setOpenDanger}
                   variant="danger"
                   title="Wipe Build History?"
                   description="This action is irreversible and will delete 14 production binaries from local storage."
                   confirmText="Wipe Permanently"
                 />
              </div>
            </div>
          </ComponentWrapper>
        </ShowcaseSection>

        {/* 2. Logic Panels (Already wrapped in their own files) */}
        <div className="space-y-16">
          <ControlledSection />
          <DialogHooksSection />
        </div>

        {/* 3. The Visual Portal Demo */}
        <ShowcaseSection 
          title="Custom Container Portal" 
          description="Demonstrating the 'portalContainer' property for rendering dialogs into specific DOM nodes."
        >
          <ComponentWrapper title="DOM_Node // Portal_Injection" code={portalCode}>
            <div
              ref={setPortalEl}
              className="relative w-full h-[400px] border-2 border-dashed border-primary/20 radius-2xl bg-muted/20 flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Blueprint Grid Overlay */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#var(--primary)_1px,transparent_1px)] [background-size:20px_20px]" />
              
              <Zap className="w-12 h-12 text-primary/30 mb-4 animate-pulse" />
              <Button variant="secondary" onClick={() => setOpenPortal(true)} className="radius-full border-primary/20 backdrop-blur-sm relative z-10">
                <Box className="w-4 h-4 mr-2" />
                Mount Inside Blueprint
              </Button>

              {portalEl && (
                <AlertDialog
                  open={openPortal}
                  onOpenChange={setOpenPortal}
                  portalContainer={portalEl}
                  title="Portaled Interaction"
                  description="This dialog is rendered specifically inside this blue-print zone."
                />
              )}
            </div>
          </ComponentWrapper>
        </ShowcaseSection>

        {/* 4. Strict Logic (Already wrapped in its own file) */}
        <DismissBehaviorSection />

      </div>

      {/* 🔹 FOOTER: Technical Guidelines */}
      <footer className="system-footer mt-32">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-12 relative z-10 border-b border-primary/20 pb-8">
          <ShieldAlert className="text-primary w-10 h-10" />
          <Typography variant="h2" className="text-primary font-black tracking-tighter uppercase text-4xl">
            Interaction Guidelines
          </Typography>
        </div>

        {/* Grid Layout */}
        <div className="system-footer-grid">
          
          {/* Item 01: Hierarchy */}
          <div className="space-y-4">
            <div className="text-primary font-mono text-3xl font-black tracking-tighter">01</div>
            <Typography variant="label" className="text-foreground text-xl font-bold">
              Hierarchy
            </Typography>
            <Typography variant="body" className="system-footer-item-text text-sm">
              Never use Alert Dialogs for marketing or information. Only for blocking flow and critical user confirmation.
            </Typography>
          </div>

          {/* Item 02: Accessibility */}
          <div className="space-y-4">
            <div className="text-primary font-mono text-3xl font-black tracking-tighter">02</div>
            <Typography variant="label" className="text-foreground text-xl font-bold">
              Accessibility
            </Typography>
            <Typography variant="body" className="system-footer-item-text text-sm">
              Ensure the <code>'Escape'</code> key logic is consistent across the entire hardware dashboard for intuitive navigation.
            </Typography>
          </div>

          {/* Item 03: Safety */}
          <div className="space-y-4">
            <div className="text-primary font-mono text-3xl font-black tracking-tighter">03</div>
            <Typography variant="label" className="text-foreground text-xl font-bold">
              Safety
            </Typography>
            <Typography variant="body" className="system-footer-item-text text-sm">
              Use <code>isDismissable=false</code> when resetting ESP32 chips to prevent accidental state loss during flashing.
            </Typography>
          </div>

        </div>
      </footer>

      {/* Actual Dialog Components (Hidden until triggered) */}
      <AlertDialog
        open={openBasic}
        onOpenChange={setOpenBasic}
        title="Sync Local Configuration?"
        description="This will push your current Arduino pin mappings to the cloud database."
        confirmText="Start Sync"
      />

      <AlertDialog
        open={openDanger}
        onOpenChange={setOpenDanger}
        variant="danger"
        title="Wipe Build History?"
        description="This action is irreversible and will delete 14 production binaries from local storage."
        confirmText="Wipe Permanently"
      />

    </div>
  )
}