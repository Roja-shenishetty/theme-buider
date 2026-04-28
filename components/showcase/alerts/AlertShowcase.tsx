"use client"

import { useState } from "react"
import { Alert } from "@/components/ui/alerts/alert"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ComponentWrapper } from "./../../system/ComponentWrapper"
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  RefreshCcw,
  ShieldAlert,
  Terminal,
} from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeGlowMatrix = `<div className="space-group">
  <Alert variant="success" title="Initialization Successful" />
  <Alert variant="warning" title="Voltage Fluctuation" />
  <Alert variant="danger" title="Runtime Error" />
</div>`;

const codeSoftProtocol = `<div className="space-group">
  <Alert variant="success-soft" title="Success Soft" />
  <Alert variant="warning-soft" title="Warning Soft" />
  <Alert variant="danger-soft" title="Danger Soft" />
</div>`;

const codeFilledProtocol = `<div className="space-group">
  <Alert variant="success-filled" title="Critical Success" />
  <Alert variant="warning-filled" title="Urgent Warning" />
  <Alert variant="danger-filled" title="Fatal Error" />
</div>`;

const codeAsyncProcessing = `<Alert
  title="Flashing Firmware..."
  description="Uploading binary to device."
  loading
  variant="info"
/>`;

const codeActionRequired = `<Alert
  title="Update Ready"
  variant="success-soft"
  action={{
    label: "Apply Update",
    onClick: () => handleUpdate(),
  }}
  onClose={() => setVisible(false)}
/>`;

/* 🔹 Section Wrapper */
function ShowcaseSection({ title, description, children, badge }: any) {
  return (
    <section className="animate-fade-up w-full border-t border-primary/5 pt-16 first:border-none first:pt-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-wide mb-8">
        <div className="space-group">
          <div className="flex items-center gap-default">
            <div className="px-2 py-1 radius-md bg-primary/10">
              <Bell className="w-4 h-4 text-primary" />
            </div>
            <Typography variant="h3" className="tracking-tight uppercase">
              {title}
            </Typography>
          </div>
          {description && (
            <Typography variant="body" className="text-body-muted max-w-3xl">
              {description}
            </Typography>
          )}
        </div>
        {badge && (
          <div className="px-3 py-1 radius-full bg-muted border border-primary/10 text-caption font-mono font-medium uppercase tracking-widest text-primary/70">
            {badge}
          </div>
        )}
      </div>
      {children}
    </section>
  )
}

export function AlertShowcase() {
  const [visible, setVisible] = useState(true)

  return (
    <div className="page-container space-page relative overflow-hidden">
      
      {/* 🔹 Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
        <Terminal className="w-[420px] h-[420px] text-primary/10 -rotate-12 translate-x-24 -translate-y-24" />
      </div>

      {/* 🔹 Header */}
      <header className="space-section border-b border-primary/10 pb-8">
        <div className="inline-flex items-center gap-default px-3 py-1 radius-full bg-primary/10 text-primary text-caption uppercase tracking-widest border border-primary/20 mb-4">
          <ShieldAlert className="w-3 h-3" />
          Feedback Engine v2.4.0
        </div>
        <Typography variant="body" className="text-body-muted max-w-2xl">
          Utilizing backdrop-filters, gradients, and glow shadows for high-impact feedback components.
        </Typography>
      </header>

      <div className="space-section">
        
        {/* 🔹 Gradient Alerts */}
        <ShowcaseSection
          title="Gradient Glow Matrix"
          description="High-intensity gradient alerts with glow effects."
          badge="Solid"
        >
          <ComponentWrapper title="Glow_Matrix // Core" code={codeGlowMatrix}>
            <div className="space-group">
              <Alert
                variant="success"
                icon={<CheckCircle2 className="w-5 h-5" />}
                title="Initialization Successful"
                description="ESP32 handshake verified."
              />
              <Alert
                variant="warning"
                icon={<AlertTriangle className="w-5 h-5" />}
                title="Voltage Fluctuation"
                description="Detected unstable power input."
              />
              <Alert
                variant="danger"
                icon={<XCircle className="w-5 h-5" />}
                title="Runtime Error"
                description="Memory allocation failed."
              />
            </div>
          </ComponentWrapper>
        </ShowcaseSection>

        {/* 🔹 Soft + Filled Grid */}
        <div className="grid md:grid-cols-2 gap-wide mt-12">
          <ShowcaseSection title="Soft Protocol" description="Muted glass-style alerts.">
            <ComponentWrapper title="Soft_Protocol // Low_Power" code={codeSoftProtocol}>
              <div className="space-group">
                <Alert variant="success-soft" title="Success Soft" />
                <Alert variant="warning-soft" title="Warning Soft" />
                <Alert variant="danger-soft" title="Danger Soft" />
              </div>
            </ComponentWrapper>
          </ShowcaseSection>

          <ShowcaseSection title="Filled Protocol" description="High priority alerts.">
            <ComponentWrapper title="Filled_Protocol // High_Priority" code={codeFilledProtocol}>
              <div className="space-group">
                <Alert variant="success-filled" title="Critical Success" />
                <Alert variant="warning-filled" title="Urgent Warning" />
                <Alert variant="danger-filled" title="Fatal Error" />
              </div>
            </ComponentWrapper>
          </ShowcaseSection>
        </div>

        {/* 🔹 Interaction Showcase */}
        <ShowcaseSection
          title="Micro Interactions"
          description="Interactive alerts with actions."
          badge="Live"
        >
          <div className="grid lg:grid-cols-2 gap-wide">
            
            <ComponentWrapper title="Async_Logic // Flash" code={codeAsyncProcessing}>
              <div className="card space-group border-dashed border-2 border-primary/10 bg-muted p-4">
                <Alert
                  title="Flashing Firmware..."
                  description="Uploading binary to device."
                  loading
                  variant="info"
                />
              </div>
            </ComponentWrapper>

            <ComponentWrapper title="Action_Logic // Interrupt" code={codeActionRequired}>
              <div className="card space-group border-dashed border-2 border-primary/10 bg-muted p-4 min-h-[120px] flex items-center justify-center">
                {visible ? (
                  <Alert
                    title="Update Ready"
                    description="New config available."
                    variant="success-soft"
                    icon={<RefreshCcw className="w-4 h-4" />}
                    action={{
                      label: "Apply Update",
                      onClick: () => console.log("Updating..."),
                    }}
                    onClose={() => setVisible(false)}
                  />
                ) : (
                  <div className="flex flex-col items-center space-y-2">
                    <Typography variant="muted">Alert dismissed</Typography>
                    <Button
                      variant="ghost"
                      onClick={() => setVisible(true)}
                      className="text-primary text-caption uppercase"
                    >
                      Reset Node
                    </Button>
                  </div>
                )}
              </div>
            </ComponentWrapper>

          </div>
        </ShowcaseSection>

        {/* 🔹 Footer Protocol */}
        <footer className="system-footer mt-20">
          <h4 className="system-footer-title uppercase italic tracking-tighter">Design Protocol</h4>
          <div className="system-footer-grid">
            <div className="space-y-2">
              <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">01 Priority</div>
              <span className="system-footer-item-heading text-lg font-black">Hierarchy</span>
              <p className="system-footer-item-text text-xs opacity-70">
                Reserve <strong>Primary Glow</strong> effects strictly for critical system alerts or high-priority calls to action.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">02 Feedback</div>
              <span className="system-footer-item-heading text-lg font-black">Motion Engine</span>
              <p className="system-footer-item-text text-xs opacity-70">
                Leverage subtle hover transformations (<code>scale: 1.005</code>) to add tactile depth without distracting from data.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">03 Logic</div>
              <span className="system-footer-item-heading text-lg font-black">Visual Clarity</span>
              <p className="system-footer-item-text text-xs opacity-70">
                Always provide clear, unambiguous primary actions within each viewport to reduce user cognitive load.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}