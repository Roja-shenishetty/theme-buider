"use client"

import { useState } from "react"
import { Button } from "../../ui/button"

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-5 animate-fade-up">
      <div className="space-y-1">
        <h3 className="text-base font-semibold tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </div>

      <div className="rounded-xl border bg-background p-5 shadow-sm transition-all hover:shadow-md">
        {children}
      </div>
    </section>
  )
}

export function ToggleButtonShowcase() {
  const [active, setActive] = useState(false)

  return (
    <div className="max-w-5xl space-y-14">

      {/* 🔹 Header */}
      <section className="space-y-3 pb-6 border-b animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">
          Toggle Buttons
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Toggle buttons represent an on/off state. They allow users to switch
          between two states such as enabled or disabled.
        </p>
      </section>

      {/* 🔹 Basic */}
      <Section title="Basic Toggle">
        <Button
          data-state={active ? "on" : "off"}
          onClick={() => setActive(!active)}
          className="
            transition-all
            data-[state=on]:bg-primary
            data-[state=on]:text-primary-foreground
          "
        >
          {active ? "Active" : "Inactive"}
        </Button>
      </Section>

      {/* 🔹 Icons */}
      <Section title="With Icons">
        <div className="flex gap-3">
          <Button variant="ghost">🔔</Button>
          <Button variant="ghost">⭐</Button>
        </div>
      </Section>

      {/* 🔹 State-based */}
      <Section title="State-based Toggle">
        <Button
          data-state={active ? "on" : "off"}
          onClick={() => setActive(!active)}
          className="
            transition-all
            data-[state=on]:bg-primary
            data-[state=on]:text-primary-foreground
          "
        >
          {active ? "Enabled" : "Disabled"}
        </Button>
      </Section>

      {/* 🔹 Soft */}
      <Section title="Soft Toggle">
        <Button
          variant="ghost"
          data-state={active ? "on" : "off"}
          onClick={() => setActive(!active)}
          className="
            transition-all
            data-[state=on]:bg-primary/10
            data-[state=on]:text-primary
            hover:bg-muted
          "
        >
          Notifications
        </Button>
      </Section>

      {/* 🔹 Icon Toggle */}
      <Section title="Icon Toggle">
        <Button
          variant="outline"
          data-state={active ? "on" : "off"}
          onClick={() => setActive(!active)}
          className="
            w-10 h-10 p-0
            data-[state=on]:bg-primary
            data-[state=on]:text-primary-foreground
            transition-all
          "
        >
          ⭐
        </Button>
      </Section>

      {/* 🔹 Like */}
      <Section title="Like Toggle">
        <Button
          variant="ghost"
          data-state={active ? "on" : "off"}
          onClick={() => setActive(!active)}
          className="
            transition-all
            data-[state=on]:text-red-500
            hover:scale-105
            active:scale-95
          "
        >
          ♥ {active ? "Liked" : "Like"}
        </Button>
      </Section>

      {/* 🔹 Switch */}
      <Section title="Switch Style">
        <Button
          variant="outline"
          data-state={active ? "on" : "off"}
          onClick={() => setActive(!active)}
          className="
            w-16 justify-start
            data-[state=on]:justify-end
            transition-all
          "
        >
          <span className="w-6 h-6 rounded-full bg-current" />
        </Button>
      </Section>

      {/* 🔹 Glow */}
      <Section title="Glow Toggle">
        <Button
          data-state={active ? "on" : "off"}
          onClick={() => setActive(!active)}
          className="
            transition-all
            data-[state=on]:bg-primary
            data-[state=on]:text-primary-foreground
            data-[state=on]:shadow-lg
            data-[state=on]:shadow-primary/40
          "
        >
          Power
        </Button>
      </Section>

      {/* 🔹 Loading */}
      <Section title="Loading Toggle">
        <Button disabled className="opacity-70 cursor-not-allowed">
          Processing...
        </Button>
      </Section>

      {/* 🔹 Guidelines */}
      <Section title="Guidelines">
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Use toggle buttons for binary states</li>
          <li>Clearly indicate active state</li>
          <li>Avoid using for complex interactions</li>
        </ul>
      </Section>

      {/* 🔹 Code */}
      <Section title="Code Example">
        <div className="bg-muted border rounded-lg p-4 text-sm font-mono">
          {"<Button data-state='on'>Toggle</Button>"}
        </div>
      </Section>

    </div>
  )
}