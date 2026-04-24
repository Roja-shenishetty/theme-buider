"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { AlertDialog } from "@/components/ui/alerts/alertbox"
import { MousePointer2, Keyboard, ShieldAlert, Lock } from "lucide-react"

/* 🔹 Custom hook remains stable for reusable logic */
function useDialog() {
  const [open, setOpen] = useState(false)
  const show = useCallback(() => setOpen(true), [])
  const toggle = useCallback(() => setOpen((o) => !o), [])
  return { open, setOpen, show, toggle }
}

export function DismissBehaviorSection() {
  const dialogDismiss = useDialog()
  const dialogKeyboard = useDialog()

  return (
    <section className="space-section animate-fade-up">
      
      <header className="space-group mb-10 border-b border-primary/5 pb-6">
        <Typography variant="h2" className="tracking-tighter">Dismissal Guardrails</Typography>
        <Typography variant="body" className="text-body-muted max-w-xl">
          Configure how strict the modal interaction should be by disabling standard 
          exit behaviors like backdrop clicks and keyboard shortcuts.
        </Typography>
      </header>

      <div className="grid md:grid-cols-2 gap-wide">
        
        {/* 🔹 Backrop Dismiss Control */}
        <div className="space-group">
          <div className="flex items-center gap-2 text-primary px-1">
            <MousePointer2 className="w-4 h-4" />
            <Typography variant="label" className="uppercase tracking-widest text-[10px]">Backdrop Lock</Typography>
          </div>

          <div className="card bg-muted/5 border-primary/10 p-8 space-group relative overflow-hidden group">
            <div className="flex justify-between items-center bg-background/50 p-4 radius-md border border-primary/5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-3 h-3 text-primary opacity-50" />
                <Typography variant="small" className="font-bold opacity-50 uppercase text-[10px]">Dismissable</Typography>
              </div>
              <Typography variant="code" className="text-primary font-black">FALSE</Typography>
            </div>

            <div className="flex gap-default">
              <Button onClick={dialogDismiss.show} className="btn-primary radius-md shadow-lg shadow-primary/20">
                Test Backdrop
              </Button>
              <Button variant="secondary" onClick={dialogDismiss.toggle} className="radius-md">
                Toggle State
              </Button>
            </div>

            <ShieldAlert className="absolute -bottom-6 -right-6 w-24 h-24 opacity-[0.03] rotate-12" />
          </div>

          <AlertDialog
            open={dialogDismiss.open}
            onOpenChange={dialogDismiss.setOpen}
            title="isDismissable = false"
            description="The only way to exit this protocol is by using the explicit action buttons. The backdrop is locked."
            isDismissable={false}
            confirmText="Understood"
            className="border-primary/20"
          />
        </div>

        {/* 🔹 Keyboard Dismiss Control */}
        <div className="space-group">
          <div className="flex items-center gap-2 text-primary px-1">
            <Keyboard className="w-4 h-4" />
            <Typography variant="label" className="uppercase tracking-widest text-[10px]">Input Lock</Typography>
          </div>

          <div className="card bg-muted/5 border-primary/10 p-8 space-group relative overflow-hidden group">
            <div className="flex justify-between items-center bg-background/50 p-4 radius-md border border-primary/5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-3 h-3 text-primary opacity-50" />
                <Typography variant="small" className="font-bold opacity-50 uppercase text-[10px]">ESC Key</Typography>
              </div>
              <Typography variant="code" className="text-primary font-black">DISABLED</Typography>
            </div>

            <div className="flex gap-default">
              <Button onClick={dialogKeyboard.show} className="btn-primary radius-md shadow-lg shadow-primary/20">
                Test Keyboard
              </Button>
              <Button variant="secondary" onClick={dialogKeyboard.toggle} className="radius-md">
                Toggle State
              </Button>
            </div>

            <Keyboard className="absolute -bottom-6 -right-6 w-24 h-24 opacity-[0.03] rotate-12" />
          </div>

          <AlertDialog
            open={dialogKeyboard.open}
            onOpenChange={dialogKeyboard.setOpen}
            title="Keyboard Dismiss Disabled"
            description="Escape key triggers are ignored. This ensures users must read the content before proceeding."
            isKeyboardDismissDisabled={true}
            confirmText="Acknowledged"
            className="border-primary/20 shadow-[0_0_40px_rgba(var(--primary),0.1)]"
          />
        </div>

      </div>

      {/* 🔹 Guidelines Footer */}
      {/* <footer className="mt-12 bg-foreground text-background pad-8 radius-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 radius-full blur-3xl -mr-16 -mt-16" />
        <div className="grid md:grid-cols-2 gap-wide relative z-10">
          <div className="space-y-2">
            <Typography variant="label" className="text-primary font-bold uppercase tracking-tighter">Use Case: Destructive Actions</Typography>
            <Typography variant="body" className="text-sm opacity-70 leading-relaxed">
              Always disable backdrop dismissal when deleting databases or resetting hardware. It prevents "accidental escapes" from important warnings.
            </Typography>
          </div>
          <div className="space-y-2">
            <Typography variant="label" className="text-primary font-bold uppercase tracking-tighter">Accessibility Note</Typography>
            <Typography variant="body" className="text-sm opacity-70 leading-relaxed">
              While strict, remember that these blocks can frustrate users. Only use them when the confirmation is legally or technically required.
            </Typography>
          </div>
        </div>
      </footer> */}

    </section>
  )
}