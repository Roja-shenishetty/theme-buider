"use client"

import { useState } from "react"
import { Alert } from "@/components/ui/alerts/alert"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  RefreshCcw,
  Zap,
  ShieldAlert,
  Terminal,
} from "lucide-react"

/* 🔹 Section */
function ShowcaseSection({ title, description, children, badge }: any) {
  return (
    <section className="animate-fade-up w-full border-t border-primary/5 pt-16 first:border-none first:pt-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-wide mb-8">

        <div className="space-group">
          <div className="flex items-center gap-default">
            <div className="px-2 py-1 radius-md bg-primary/10">
              <Bell className="w-4 h-4 text-primary" />
            </div>

            <Typography variant="h3" className="tracking-tight">
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

      {/* 🔹 Background */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
        <Terminal className="w-[420px] h-[420px] text-primary/10 -rotate-12 translate-x-24 -translate-y-24" />
      </div>

      {/* 🔹 Header */}
      <header className="space-section border-b border-primary/10 pb-8">

        <div className="inline-flex items-center gap-default px-3 py-1 radius-full bg-primary/10 text-primary text-caption uppercase tracking-widest border border-primary/20">
          <ShieldAlert className="w-3 h-3" />
          Feedback Engine v2.4.0
        </div>

        <Typography variant="h1" className="text-h1">
          Glow <span className="text-primary italic">Alerts</span>
        </Typography>

        <Typography variant="body" className="text-body-muted max-w-2xl">
          Utilizing backdrop-filters, gradients, and glow shadows for
          high-impact feedback components.
        </Typography>

      </header>

      <div className="space-section">

        {/* 🔹 Gradient Alerts */}
        <ShowcaseSection
          title="Gradient Glow Matrix"
          description="High-intensity gradient alerts with glow effects."
          badge="Solid"
        >
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
        </ShowcaseSection>

        {/* 🔹 Soft + Filled */}
        <div className="grid md:grid-cols-2 gap-wide">

          <ShowcaseSection
            title="Soft Protocol"
            description="Muted glass-style alerts."
          >
            <div className="space-group">
              <Alert variant="success-soft" title="Success Soft" />
              <Alert variant="warning-soft" title="Warning Soft" />
              <Alert variant="danger-soft" title="Danger Soft" />
            </div>
          </ShowcaseSection>

          <ShowcaseSection
            title="Filled Protocol"
            description="High priority alerts."
          >
            <div className="space-group">
              <Alert variant="success-filled" title="Critical Success" />
              <Alert variant="warning-filled" title="Urgent Warning" />
              <Alert variant="danger-filled" title="Fatal Error" />
            </div>
          </ShowcaseSection>

        </div>

        {/* 🔹 Interaction */}
        <ShowcaseSection
          title="Micro Interactions"
          description="Interactive alerts with actions."
          badge="Live"
        >
          <div className="grid lg:grid-cols-2 gap-wide">

            <div className="card space-group border-dashed border-2 border-primary/10 bg-muted">
              <Alert
                title="Flashing Firmware..."
                description="Uploading binary to device."
                loading
                variant="info"
              />
            </div>

            <div className="card space-group border-dashed border-2 border-primary/10 bg-muted">
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
                <div className="flex flex-col items-center space-group">
                  <Typography variant="muted">
                    Alert dismissed
                  </Typography>

                  <Button
                    variant="ghost"
                    onClick={() => setVisible(true)}
                    className="text-primary text-caption uppercase"
                  >
                    Reset
                  </Button>
                </div>
              )}
            </div>

          </div>
        </ShowcaseSection>

        {/* 🔹 Footer */}
        <footer className="card space-section bg-foreground text-background mt-16">

          <div className="grid md:grid-cols-3 gap-wide">

            <div className="space-group">
              <Typography variant="label" className="text-primary uppercase">
                Hierarchy
              </Typography>
              <Typography variant="body" className="text-small opacity-60">
                Use glow only for important alerts.
              </Typography>
            </div>

            <div className="space-group">
              <Typography variant="label" className="text-primary uppercase">
                Motion
              </Typography>
              <Typography variant="body" className="text-small opacity-60">
                Subtle hover adds depth.
              </Typography>
            </div>

            <div className="space-group">
              <Typography variant="label" className="text-primary uppercase">
                Clarity
              </Typography>
              <Typography variant="body" className="text-small opacity-60">
                Always provide clear actions.
              </Typography>
            </div>

          </div>

        </footer>

      </div>
    </div>
  )
}