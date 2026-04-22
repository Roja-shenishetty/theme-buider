"use client"

import { useState } from "react"
import { Alert } from "@/components/ui/alerts/alert"

type SectionProps = {
  title: string
  description?: string
  children: React.ReactNode
}

function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-base font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <div className="border rounded-xl p-5 bg-background">
        {children}
      </div>
    </section>
  )
}
export function AlertShowcase() {
  const [visible, setVisible] = useState(true)

  return (
    <div className="max-w-5xl space-y-14">

      {/* Header */}
      <section className="space-y-3 border-b pb-6">
        <h1 className="text-2xl font-bold">Alerts</h1>
        <p className="text-muted-foreground">
          Alerts display important messages and system feedback.
        </p>
      </section>

      {/* Basic */}
      <Section title="Basic">
        <Alert
          title="New features available"
          description="Check out our latest updates."
        />
      </Section>

      {/* Variants */}
      <Section title="Variants">
        <div className="space-y-3">
          <Alert title="Default alert" />
          <Alert title="Success alert" variant="success" />
          <Alert title="Warning alert" variant="warning" />
          <Alert title="Error alert" variant="danger" />
          <Alert title="Info alert" variant="info" />
        </div>
      </Section>

      {/* Subtle / Soft */}
      <Section title="Soft Variants">
        <div className="space-y-3">
          <Alert title="Soft success" variant="success-soft" />
          <Alert title="Soft warning" variant="warning-soft" />
          <Alert title="Soft danger" variant="danger-soft" />
        </div>
      </Section>

      {/* Filled */}
      <Section title="Filled Variants">
        <div className="space-y-3">
          <Alert title="Filled success" variant="success-filled" />
          <Alert title="Filled warning" variant="warning-filled" />
          <Alert title="Filled danger" variant="danger-filled" />
        </div>
      </Section>

      {/* With Actions */}
      <Section title="With Actions">
        <Alert title="Update available">
          <button className="mt-2 text-sm underline">
            Refresh
          </button>
        </Alert>
      </Section>

      {/* Dismissible */}
      <Section title="Dismissible Alert">
        {visible && (
          <div className="relative">
            <Alert
              title="Profile updated"
              description="Your changes have been saved."
              variant="success"
            />

            <button
              onClick={() => setVisible(false)}
              className="absolute top-3 right-3 text-sm text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>
        )}
      </Section>

      {/* Icon Example */}
      <Section title="With Icon">
        <Alert title="Success" variant="success">
          <span className="text-sm">✔ Operation completed</span>
        </Alert>
      </Section>

      {/* Inline */}
      <Section title="Inline Alert">
        <div className="flex items-center gap-3 border p-3 rounded-lg">
          <span className="text-sm">⚠️ Session expiring</span>
          <button className="text-sm underline">Extend</button>
        </div>
      </Section>

      {/* Guidelines */}
      <Section title="Guidelines">
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Use alerts for important feedback</li>
          <li>Choose correct variant (success, warning, error)</li>
          <li>Keep messages short and actionable</li>
          <li>Avoid stacking too many alerts</li>
        </ul>
      </Section>

<Section title="Loading State">
  <Alert
    title="Processing"
    description="Please wait while we complete your request."
    variant="info"
    loading
  />
</Section>

<Section title="With Action Button">
  <Alert
    title="Update available"
    description="Refresh to apply changes."
    action={{
      label: "Refresh",
      onClick: () => alert("Refreshing..."),
    }}
  />
</Section>

<Section title="Dismissible Alert">
  {visible && (
    <Alert
      title="Saved successfully"
      variant="success"
      onClose={() => setVisible(false)}
    />
  )}
</Section>

<Section title="Full Example">
  <Alert
    title="Sync in progress"
    description="We are syncing your data."
    variant="info"
    loading
    action={{ label: "Cancel" }}
    onClose={() => console.log("closed")}
  />
</Section>

    </div>
  )
}