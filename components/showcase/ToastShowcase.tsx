"use client"

import { ComponentWrapper } from "./../system/ComponentWrapper"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { Typography } from "@/components/ui/typography"
import { Bell, CheckCircle, AlertTriangle, Info, RefreshCcw } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `const { toast } = useToast()

<Button 
  variant="outline" 
  className="radius-md px-6"
  onClick={() => {
    toast({
      title: "Telemetry Synced",
      description: "Node parameters have been successfully updated in the background.",
    })
  }}
>
  <Bell className="w-4 h-4 mr-2" />
  Trigger Standard Toast
</Button>`;

const codeVariants = `const { toast } = useToast()

<div className="flex flex-wrap gap-wide justify-center">
  <Button 
    variant="outline" 
    className="radius-md border-green-500/30 text-green-600 hover:bg-green-500/10 dark:text-green-400" 
    onClick={() => {
      toast({
        title: "Operation Successful",
        description: "Database changes committed to main branch.",
        variant: "success", 
      })
    }}
  >
    <CheckCircle className="w-4 h-4 mr-2" />
    Success State
  </Button>

  <Button 
    variant="danger" 
    className="radius-md" 
    onClick={() => {
      toast({
        title: "Critical Error",
        description: "ESP32 partition wipe failed. Aborting sequence.",
        variant: "destructive", // Or "danger" depending on your toast provider config
      })
    }}
  >
    <AlertTriangle className="w-4 h-4 mr-2" />
    Danger State
  </Button>
</div>`;

const codeAction = `const { toast } = useToast()

<Button 
  variant="secondary" 
  className="radius-md" 
  onClick={() => {
    toast({
      title: "Module Offline",
      description: "Core-alpha-01 has been dynamically unlinked.",
      action: (
        <ToastAction altText="Reconnect module" className="radius-md border-primary/20 hover:bg-primary/10">
          <RefreshCcw className="w-3 h-3 mr-2" /> Reconnect
        </ToastAction>
      ),
    })
  }}
>
  <Info className="w-4 h-4 mr-2" /> Actionable Overlay
</Button>`;

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

export function ToastShowcase() {
  const { toast } = useToast()

  return (
  <div className="page-container space-page">

  {/* 🔹 Header */}
  <header className="space-group pb-10 border-b border-primary/10 mb-8">
   <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
      Notification Engine
    </div>
  </header>
      {/* 🔹 Standard Anatomy */}
      <Section 
        title="Standard Toast" 
        description="Non-interruptive system feedback designed for transient lifecycle events."
      >
        <ComponentWrapper title="Toast // Standard_Feedback" code={codeBasic}>
          <div className="flex justify-center p-8">
            <Button 
              variant="outline"
              className="radius-md px-6"
              onClick={() => {
                toast({
                  title: "Telemetry Synced",
                  description: "Node parameters have been successfully updated in the background.",
                })
              }}
            >
              <Bell className="w-4 h-4 mr-2" />
              Trigger Standard Toast
            </Button>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Semantic Variants */}
      <Section 
        title="Semantic Mapping" 
        description="Communicating operation status through integrated color topography (Success, Danger)."
      >
        <ComponentWrapper title="Toast // Status_Variants" code={codeVariants}>
          <div className="flex flex-wrap gap-wide justify-center p-8">
            <Button 
              variant="outline" 
              className="radius-md border-green-500/30 text-green-600 hover:bg-green-500/10 dark:text-green-400" 
              onClick={() => {
                toast({
                  title: "Operation Successful",
                  description: "Database changes committed to main branch.",
                  // @ts-ignore - Assuming success variant is configured in your system
                  variant: "success", 
                })
              }}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Success State
            </Button>

            <Button 
              variant="danger"
              className="radius-md"
              onClick={() => {
                toast({
                  variant: "destructive", // Leave as destructive if your shadcn toast.tsx expects it, otherwise change to danger
                  title: "Critical Error",
                  description: "ESP32 partition wipe failed. Aborting sequence.",
                })
              }}
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Danger State
            </Button>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Interactive Operations */}
      <Section 
        title="Interactive Recovery" 
        description="Providing inline action triggers to undo or recover from recent system mutations."
      >
        <ComponentWrapper title="Toast // Action_Recovery" code={codeAction}>
          <div className="flex justify-center p-8">
            <Button 
              variant="secondary"
              className="radius-md"
              onClick={() => {
                toast({
                  title: "Module Offline",
                  description: "Core-alpha-01 has been dynamically unlinked.",
                  action: (
                    <ToastAction altText="Reconnect module" className="radius-md border-primary/20 hover:bg-primary/10">
                      <RefreshCcw className="w-3 h-3 mr-2" /> Reconnect
                    </ToastAction>
                  ),
                })
              }}
            >
              <Info className="w-4 h-4 mr-2" />
              Actionable Overlay
            </Button>
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
              01 Timing
            </div>
            <span className="font-semibold text-body text-sm block">Auto-Dismissal</span>
            <p className="text-caption text-xs leading-relaxed">
              Informational toasts should disappear after 4-5 seconds. Critical errors (destructive) should persist until dismissed by the user.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
              02 Verbosity
            </div>
            <span className="font-semibold text-body text-sm block">Character Limits</span>
            <p className="text-caption text-xs leading-relaxed">
              Keep titles under 4-5 words. Use the <code>description</code> strictly for actionable context, never for long error logs or stack traces.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2 p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
              03 Critical Paths
            </div>
            <span className="font-semibold text-body text-sm block">Action Alternatives</span>
            <p className="text-caption text-xs leading-relaxed">
              Because toasts naturally disappear, never make a toast action (like "Undo") the <em>only</em> way to recover from a destructive action.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}