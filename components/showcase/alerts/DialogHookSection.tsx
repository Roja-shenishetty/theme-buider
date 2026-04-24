"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { AlertDialog } from "@/components/ui/alerts/alertbox"
import {  Binary, Terminal, ShieldCheck } from "lucide-react"

// ✅ Reusable Logic Abstraction
function useDialog() {
  const [open, setOpen] = useState(false)

  const show = useCallback(() => setOpen(true), [])
  const toggle = useCallback(() => setOpen((o) => !o), [])

  return { open, setOpen, show, toggle }
}

export function DialogHooksSection() {
  const [isOpen, setIsOpen] = useState(false)
  const dialog = useDialog()

  const handleOpen = useCallback(() => setIsOpen(true), [])
  const handleToggle = useCallback(() => setIsOpen((o) => !o), [])

  return (
    <section className="space-section animate-fade-up">
      
      <header className="space-group mb-10">
        <Typography variant="h2" className="tracking-tighter">Hook Architecture</Typography>
        <Typography variant="body" className="text-body-muted max-w-xl">
          Comparing standard local state management vs. our system's reusable hook protocol.
        </Typography>
      </header>

      <div className="grid md:grid-cols-2 gap-wide">
        
        {/* 🔹 Option A: Standard useState */}
        <div className="space-group">
          <div className="flex items-center gap-2 text-muted-foreground mb-2 px-1">
            <Binary className="w-4 h-4" />
            <Typography variant="label" className="uppercase tracking-widest text-[10px]">Standard Implementation</Typography>
          </div>

          <div className="card bg-muted/5 border-primary/5 p-8 space-group relative overflow-hidden group">
            <div className="flex justify-between items-center bg-background/50 p-3 radius-md border border-primary/5">
              <Typography variant="small" className="font-bold opacity-50 uppercase text-[10px]">Status</Typography>
              <Typography variant="code" className={isOpen ? "text-primary" : "text-muted-foreground opacity-50"}>
                {isOpen ? "ACTIVE" : "IDLE"}
              </Typography>
            </div>

            <div className="flex gap-default">
              <Button onClick={handleOpen} className="radius-md px-6">
                Open
              </Button>
              <Button variant="secondary" onClick={handleToggle} className="radius-md">
                Toggle
              </Button>
            </div>
            
            {/* Background Blueprint Decorative */}
            <Terminal className="absolute -bottom-4 -right-4 w-20 h-20 opacity-[0.03] rotate-12" />
          </div>

          <AlertDialog
            open={isOpen}
            onOpenChange={setIsOpen}
            title="Local State Protocol"
            description="Triggered using standard React.useState inside the component."
          />
        </div>

        {/* 🔹 Option B: Custom useDialog Hook */}
        <div className="space-group">
          <div className="flex items-center gap-2 text-primary mb-2 px-1">
            <ShieldCheck className="w-4 h-4" />
            <Typography variant="label" className="uppercase tracking-widest text-[10px]">Recommended System Hook</Typography>
          </div>

          <div className="card bg-primary/5 border-primary/20 p-8 space-group relative overflow-hidden shadow-lg shadow-primary/5">
            <div className="flex justify-between items-center bg-primary/10 p-3 radius-md border border-primary/20">
              <Typography variant="small" className="text-primary font-bold uppercase text-[10px]">Hook Status</Typography>
              <Typography variant="code" className="text-primary font-black">
                {dialog.open ? "PORTAL_OPEN" : "READY"}
              </Typography>
            </div>

            <div className="flex gap-default">
              <Button onClick={dialog.show} className="btn-primary radius-md px-8 shadow-md shadow-primary/20">
                Show
              </Button>
              <Button 
                variant="outline" 
                onClick={dialog.toggle} 
                className="radius-md border-primary/20 text-primary hover:bg-primary/10"
              >
                Switch
              </Button>
            </div>

            
          </div>

          <AlertDialog
            open={dialog.open}
            onOpenChange={dialog.setOpen}
            title="Hook Logic Protocol"
            description="Triggered via useDialog() abstraction for cleaner code separation."
            className="border-primary/20"
          />
        </div>

      </div>

      {/* 🔹 Implementation Comparison */}
      {/* <footer className="mt-12 bg-foreground text-background pad-8 radius-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 radius-full blur-3xl -mr-16 -mt-16" />
        <div className="grid md:grid-cols-2 gap-wide relative z-10">
          <div className="space-y-2">
            <Typography variant="label" className="text-primary font-bold">Encapsulation</Typography>
            <Typography variant="muted" className="text-sm opacity-80 leading-relaxed">
              Custom hooks allow you to move state logic out of the UI, making your 10th-grade coding projects much easier to read and debug.
            </Typography>
          </div>
          <div className="space-y-2">
            <Typography variant="label" className="text-primary font-bold">Stability</Typography>
            <Typography variant="muted" className="text-sm opacity-80 leading-relaxed">
              By using <code>useCallback</code>, we ensure our handlers don't trigger unnecessary re-renders, which is critical for smooth hardware dashboards.
            </Typography>
          </div>
        </div>
      </footer> */}

    </section>
  )
}