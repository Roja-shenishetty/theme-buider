"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge/badge"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Maximize2, ShieldAlert, Sliders, CheckCircle2, Info, X } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS FOR THE WRAPPER */
const codeStandardModal = `<Dialog>
  <DialogTrigger asChild>
    <Button className="radius-md">Trigger Dialog</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[420px] radius-xl border-primary/10 bg-background p-6 shadow-2xl">
    <DialogHeader className="space-y-1">
      <DialogTitle className="text-h4 font-bold flex items-center justify-between">
        Configuration Engine
        <Badge variant="outline" className="text-[10px] radius-full">v1.0</Badge>
      </DialogTitle>
      <DialogDescription className="text-caption text-sm">
        Initialize telemetry protocols and configure parameters.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4 space-y-4">
      <p className="text-small text-muted-foreground">
        Changes made here will affect native workspace runtime scripts immediately.
      </p>
    </div>
    <DialogFooter className="gap-2 pt-2">
      <Button variant="outline" className="radius-md">Cancel</Button>
      <Button className="radius-md">Deploy Changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

/* 🔹 Fixed: Variant name updated within template string */
const codeAlertDestructive = `<Dialog>
  <DialogTrigger asChild>
    <Button variant="danger" className="radius-md">Wipe Node</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[400px] radius-lg border-danger/20 bg-background p-6 shadow-2xl">
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 min-w-10 radius-md bg-red-500/10 text-red-500 flex items-center justify-center">
        <ShieldAlert className="w-5 h-5" />
      </div>
      <div className="space-y-2 flex-1">
        <DialogTitle className="text-xl font-bold text-red-500">Destructive Protocol</DialogTitle>
        <DialogDescription className="text-sm text-muted-foreground">
          Are you completely certain? This wipes all runtime variables in the ESP32 partition. This action cannot be reversed.
        </DialogDescription>
      </div>
    </div>
    <div className="flex justify-end gap-default pt-4 border-t border-primary/5 mt-4">
      <Button variant="ghost" className="radius-md">Abort</Button>
      <Button variant="danger" className="radius-md">Confirm Deletion</Button>
    </div>
  </DialogContent>
</Dialog>`;

const codeFormModal = `<Dialog>
  <DialogTrigger asChild>
    <Button variant="default" className="radius-md">
      Create Resource
    </Button>
  </DialogTrigger>
  {/* Note the p-0 padding to allow edge-to-edge header/footer backgrounds */}
  <DialogContent className="sm:max-w-[480px] radius-xl border-primary/10 bg-background p-0 shadow-2xl overflow-hidden">
    
    {/* 🔹 Form Header (Tinted) */}
    <div className="p-6 border-b border-primary/5 bg-primary/5">
      <DialogTitle className="text-h4 font-bold text-primary/90">Deploy Resource</DialogTitle>
      <DialogDescription className="text-caption text-sm mt-1">
        Configure the initialization parameters for your new computational node.
      </DialogDescription>
    </div>
    
    {/* 🔹 Form Body */}
    <div className="p-6 space-group">
      {/* Input Group 01 */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
          Node Identifier
        </label>
        <input 
          type="text" 
          placeholder="e.g., core-alpha-01" 
          className="w-full px-3 py-2 h-9 radius-md border border-primary/10 bg-background text-sm focus-ring focus:ring-2 focus:border-primary/30 transition-all placeholder:text-muted-foreground/50"
        />
      </div>
      
      {/* Input Group 02 */}
      <div className="space-y-1.5 pt-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
          Environment Target
        </label>
        <select className="w-full px-3 py-2 h-9 radius-md border border-primary/10 bg-background text-sm focus-ring focus:ring-2 focus:border-primary/30 transition-all text-primary/90 appearance-none">
          <option>Production (Encrypted)</option>
          <option>Staging (Sandbox)</option>
          <option>Local (Offline)</option>
        </select>
      </div>
    </div>

    {/* 🔹 Form Footer */}
    <div className="p-4 border-t border-primary/10 bg-background flex justify-end gap-default">
      <DialogClose asChild>
        <Button variant="ghost" className="radius-md">Cancel</Button>
      </DialogClose>
      <Button variant="default" className="radius-md">Initialize Deployment</Button>
    </div>
    
  </DialogContent>
</Dialog>`;

const codeControlledState = `<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogTrigger asChild>
    <Button variant="secondary" className="radius-md">Process Stream</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[460px] radius-xl overflow-hidden border-primary/10 p-0 shadow-2xl">
    <div className="h-2 bg-gradient-to-r from-primary via-accent to-transparent" />
    <div className="p-8 space-y-6">
      <div className="space-y-1">
        <DialogTitle className="text-2xl font-black tracking-tight">Active Operation</DialogTitle>
        <DialogDescription className="text-sm">Asynchronous processing queue frame</DialogDescription>
      </div>
      <div className="p-4 radius-md bg-primary/5 border border-primary/10 flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
        <span className="text-small font-mono">Stream status: Active ID_229A</span>
      </div>
      <Button onClick={() => setIsOpen(false)} fullWidth className="radius-md">
        Terminate & Close
      </Button>
    </div>
  </DialogContent>
</Dialog>`;

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

export function ModalShowcase() {
  const [isControlledOpen, setIsControlledOpen] = useState(false)

  return (
    <div className="page-container space-page">

      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Spatial Overlay Engine
        </div>
      </header>

      {/* 🔹 Core Dialog */}
      <Section title="Standard Dialog" description="High-density dialog box incorporating custom radius-xl configurations and semantic badge parameters.">
        <ComponentWrapper title="Dialog // Configuration_Node" code={codeStandardModal}>
          <div className="flex justify-center p-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="radius-md">
                  <Maximize2 className="mr-2 w-4 h-4" /> Open Standard Modal
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[420px] radius-xl border-primary/10 bg-background p-6 shadow-2xl">
                <DialogHeader className="space-y-1">
                  <DialogTitle className="text-h4 font-bold flex items-center justify-between">
                    Configuration Engine
                    <Badge variant="outline" className="text-[10px] radius-full">v1.0</Badge>
                  </DialogTitle>
                  <DialogDescription className="text-caption text-sm">
                    Initialize telemetry protocols and configure parameters.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-small text-muted-foreground leading-relaxed">
                    Changes made here will affect native workspace runtime scripts immediately. Ensure target endpoints are configured correctly.
                  </p>
                </div>
                <DialogFooter className="gap-2 pt-2">
                  <Button variant="outline" className="radius-md">Cancel</Button>
                  <Button className="radius-md">Deploy Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </ComponentWrapper>
      </Section>


{/* 🔹 Data Entry / Form Overlay */}
      <Section title="Data Entry Form" description="Structured zero-padding layout to support edge-to-edge form headers and footers.">
        <ComponentWrapper title="Dialog // Resource_Allocation" code={codeFormModal}>
          <div className="flex justify-center p-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="radius-md">
                  Open Form Interface
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[480px] radius-xl border-primary/10 bg-background p-0 shadow-2xl overflow-hidden">
                
                <div className="p-6 border-b border-primary/5 bg-primary/5">
                  <DialogTitle className="text-h4 font-bold text-primary/90">Deploy Resource</DialogTitle>
                  <DialogDescription className="text-caption text-sm mt-1">
                    Configure the initialization parameters for your new computational node.
                  </DialogDescription>
                </div>
                
                <div className="p-6 space-group">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                      Node Identifier
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g., core-alpha-01" 
                      className="w-full px-3 py-2 h-9 radius-md border border-primary/10 bg-background text-sm focus-ring focus:ring-2 focus:border-primary/30 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                  
                  <div className="space-y-1.5 pt-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                      Environment Target
                    </label>
                    <select className="w-full px-3 py-2 h-9 radius-md border border-primary/10 bg-background text-sm focus-ring focus:ring-2 focus:border-primary/30 transition-all text-primary/90">
                      <option>Production (Encrypted)</option>
                      <option>Staging (Sandbox)</option>
                      <option>Local (Offline)</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 border-t border-primary/10 bg-background flex justify-end gap-default">
                  <Button variant="ghost" className="radius-md">Cancel</Button>
                  <Button variant="default" className="radius-md">Initialize Deployment</Button>
                </div>
                
              </DialogContent>
            </Dialog>
          </div>
        </ComponentWrapper>
      </Section>


      {/* 🔹 Destructive Confirmation System */}
      <Section title="Destructive Protocol" description="Highly descriptive alert dialog featuring warning indicators for high-risk system mutations.">
        <ComponentWrapper title="Dialog // System_Purge" code={codeAlertDestructive}>
          <div className="flex justify-center p-4">
            <Dialog>
              <DialogTrigger asChild>
                {/* 🔹 Fixed: Adjusted to danger variant token layout */}
                <Button variant="danger" className="radius-md">
                  <ShieldAlert className="mr-2 w-4 h-4" /> Initialize Purge
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[400px] radius-lg border-danger/20 bg-background p-6 shadow-2xl">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 min-w-10 radius-md bg-red-500/10 text-red-500 flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <DialogTitle className="text-xl font-bold text-red-500">Destructive Protocol</DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
                      Are you completely certain? This wipes all runtime variables in the ESP32 partition. This action cannot be reversed.
                    </DialogDescription>
                  </div>
                </div>
                <div className="flex justify-end gap-default pt-4 border-t border-primary/5 mt-4">
                  <Button variant="ghost" className="radius-md">Abort</Button>
                  {/* 🔹 Fixed: Adjusted to danger variant token layout */}
                  <Button variant="danger" className="radius-md">Confirm Deletion</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Controlled Interceptor Block */}
      <Section title="State-Controlled Overlay" description="Programmatic interaction blocking utilizing custom gradient anchors and mono layout styles.">
        <ComponentWrapper title="Dialog // Controlled_Interceptor" code={codeControlledState}>
          <div className="flex justify-center p-4">
            <Dialog open={isControlledOpen} onOpenChange={isControlledOpen ? setIsControlledOpen : () => {}}>
              <DialogTrigger asChild>
                <Button variant="secondary" className="radius-md" onClick={() => setIsControlledOpen(true)}>
                  <Sliders className="mr-2 w-4 h-4" /> Trigger Process Interceptor
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[460px] radius-xl overflow-hidden border-primary/10 p-0 shadow-2xl">
                <div className="h-2 bg-gradient-to-r from-primary via-accent to-transparent" />
                <div className="p-8 space-y-6">
                  <div className="space-y-1">
                    <DialogTitle className="text-2xl font-black tracking-tight">Active Operation</DialogTitle>
                    <DialogDescription className="text-sm">Asynchronous processing queue frame</DialogDescription>
                  </div>
                  <div className="p-4 radius-md bg-primary/5 border border-primary/10 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-small font-mono text-code">Stream status: Active ID_229A</span>
                  </div>
                  <p className="text-small text-muted-foreground">
                    This dialogue enforces validation. It programmatically locks structural escape paths until an automated sequence clears execution vectors.
                  </p>
                  <Button onClick={() => setIsControlledOpen(false)} fullWidth className="radius-md w-full">
                    Terminate & Close
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 border-t border-primary/10 pt-8">
        <h4 className="text-h4 font-bold text-primary/90 mb-6 flex items-center gap-2">
          <Info className="w-5 h-5 text-primary" /> Overlay Guardrails
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-wide">
          {/* Item 01 */}
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
              01 Focus Capture
            </div>
            <span className="font-semibold text-body text-sm block">Focus Trapping Hierarchy</span>
            <p className="text-caption text-xs leading-relaxed">
              Modals utilize automatic focus capturing. Avoid nesting multiple focus blocks within a single layout layer to prevent viewport freeze bugs.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
              02 Intrusiveness
            </div>
            <span className="font-semibold text-body text-sm block">Context Isolation</span>
            <p className="text-caption text-xs leading-relaxed">
              Reserve <code>radius-xl</code> and <code>shadow-2xl</code> structures solely for modals to generate visual distance from flat viewport rows.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
              03 State Management
            </div>
            <span className="font-semibold text-body text-sm block">Explicit Close Methods</span>
            <p className="text-caption text-xs leading-relaxed">
              When standard dismiss keys are locked out via state injection, explicit programmatic triggers must be explicitly provided in the lower action layout.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}