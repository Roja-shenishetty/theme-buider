"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { AlertDialog } from "@/components/ui/alerts/alertbox"
import { Activity, Radio, ToggleRight } from "lucide-react"
import { ComponentWrapper } from "./../../system/ComponentWrapper"

/* 🔹 TECHNICAL SOURCE CODE STRING */
const controlledSectionCode = `"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { AlertDialog } from "@/components/ui/alerts/alertbox"
import { Activity, ToggleRight } from "lucide-react"

export function ControlledSection() {
  const [isOpen, setIsOpen] = useState(false)

  // ✅ Stable handlers for performance
  const handleOpen = useCallback(() => setIsOpen(true), [])
  const handleToggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return (
    <div className="space-group">
      {/* 🔹 Interactive Debugger Card */}
      <div className="card bg-muted/5 border-dashed border-2 border-primary/10 p-8 space-group relative overflow-hidden">
        
        {/* Status Tracker */}
        <div className="flex items-center justify-between bg-background/50 pad-3 radius-md border border-primary/5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className={\`w-2 h-2 radius-full transition-all duration-500 \${
              isOpen ? "bg-primary shadow-[0_0_8px_var(--primary)]" : "bg-muted-foreground/30"
            }\`} />
            <Typography variant="small" className="font-bold uppercase tracking-widest text-[10px]">
              Internal Hook Value:
            </Typography>
          </div>
          <Typography variant="code" className={\`transition-colors font-black \${
            isOpen ? "text-primary" : "text-muted-foreground"
          }\`}>
            {isOpen ? "TRUE" : "FALSE"}
          </Typography>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap gap-default mt-4">
          <Button 
            onClick={handleOpen} 
            className=" radius-md shadow-lg shadow-primary/10 group"
          >
            <Activity className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
            Set Open
          </Button>

          <Button 
            variant="secondary" 
            onClick={handleToggle} 
            className="radius-md hover:bg-primary/10 hover:text-primary transition-all"
          >
            <ToggleRight className="w-4 h-4 mr-2" />
            Toggle State
          </Button>
        </div>
      </div>

      {/* 🔹 The Dialog Component */}
      <AlertDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Protocol: Controlled Override"
        description="This interaction is being driven by the external state visualizer above."
        confirmText="Acknowledge"
        cancelText="Close Monitor"
      />
    </div>
  )
}`;

export function ControlledSection() {
  const [isOpen, setIsOpen] = useState(false)

  // ✅ stable handlers for performance
  const handleOpen = useCallback(() => setIsOpen(true), [])
  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <ComponentWrapper title="State_Override // Controlled_Hook" code={controlledSectionCode}>
      <div className="space-group mb-2">
        
        {/* 🔹 Technical Labeling */}
        <div className="space-group mb-6">
          <div className="flex items-center gap-2 text-primary">
            <Radio className="w-4 h-4 animate-pulse" />
            <Typography variant="h3" className="tracking-tight font-bold">
              Controlled State
            </Typography>
          </div>
          <Typography variant="body" className="text-body-muted text-sm max-w-2xl">
            Managing the lifecycle of a dialog through a parent <code>useState</code> hook. 
            Ideal for complex conditional logic or hardware-triggered events.
          </Typography>
        </div>

        {/* 🔹 Interactive Debugger Card */}
        <div className="card bg-muted/5 border-dashed border-2 border-primary/10 p-8 space-group relative overflow-hidden">
          
          {/* Status Tracker */}
          <div className="flex items-center justify-between bg-background/50 pad-3 radius-md border border-primary/5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 radius-full transition-all duration-500 ${
                isOpen ? "bg-primary shadow-[0_0_8px_var(--primary)]" : "bg-muted-foreground/30"
              }`} />
              <Typography variant="small" className="font-bold uppercase tracking-widest text-[10px]">
                Internal Hook Value:
              </Typography>
            </div>
            <Typography variant="code" className={`transition-colors font-black ${
              isOpen ? "text-primary" : "text-muted-foreground"
            }`}>
              {isOpen ? "TRUE" : "FALSE"}
            </Typography>
          </div>

          {/* Action Controls */}
          <div className="flex flex-wrap gap-default mt-4">
            <Button 
              onClick={handleOpen} 
              className="radius-md shadow-lg shadow-primary/10 group"
            >
              <Activity className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
              Set Open
            </Button>

            <Button 
              variant="secondary" 
              onClick={handleToggle} 
              className="radius-md hover:bg-primary/10 hover:text-primary transition-all"
            >
              <ToggleRight className="w-4 h-4 mr-2" />
              Toggle State
            </Button>
          </div>

          {/* Background Blueprint Decorative */}
          <div className="absolute -bottom-4 -right-4 opacity-5 pointer-events-none select-none">
            <Typography variant="h1" className="text-8xl">STATE</Typography>
          </div>
        </div>

        {/* 🔹 Implementation Code Block Note */}
        <div 
          className="mt-6 bg-foreground text-background pad-4 radius-lg flex items-center justify-between group cursor-pointer hover:bg-foreground/90 transition-all"
          title="This logic is available in the Terminal output above"
        >
          <code className="text-xs font-mono opacity-80">
            const [isOpen, setIsOpen] = useState(false);
          </code>
          <Typography variant="caption" className="text-primary font-bold">L-14</Typography>
        </div>

        {/* 🔹 The Dialog Component */}
        <AlertDialog
          open={isOpen}
          onOpenChange={setIsOpen}
          title="Protocol: Controlled Override"
          description="This interaction is being driven by the external state visualizer above."
          confirmText="Acknowledge"
          cancelText="Close Monitor"
        />

      </div>
    </ComponentWrapper>
  )
}