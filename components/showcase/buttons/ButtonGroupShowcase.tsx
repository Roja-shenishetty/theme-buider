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

export function ButtonGroupShowcase() {
  const [active, setActive] = useState("left")

  return (
    <div className="max-w-5xl space-y-14">

      {/* 🔹 Header */}
      <section className="space-y-3 pb-6 border-b animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">
          Button Groups
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Button groups organize related actions into a single container,
          reducing visual clutter and improving usability.
        </p>
      </section>

      {/* 🔹 Basic */}
      <Section title="Basic">
        <div className="flex">
          <Button className="rounded-r-none">Left</Button>
          <Button variant="secondary" className="rounded-none">Middle</Button>
          <Button variant="outline" className="rounded-l-none">Right</Button>
        </div>
      </Section>

      {/* 🔹 Sizes */}
      <Section title="Sizes">
        <div className="flex gap-4">
          <div className="flex">
            <Button size="sm" className="rounded-r-none">A</Button>
            <Button size="sm" className="rounded-l-none">B</Button>
          </div>

          <div className="flex">
            <Button size="lg" className="rounded-r-none">A</Button>
            <Button size="lg" className="rounded-l-none">B</Button>
          </div>
        </div>
      </Section>

      {/* 🔹 Segmented */}
      <Section title="Segmented Control">
        <div className="flex bg-muted p-1 rounded-full w-fit">
          <Button className="rounded-full bg-background shadow-sm">
            Day
          </Button>
          <Button variant="ghost" className="rounded-full">
            Week
          </Button>
          <Button variant="ghost" className="rounded-full">
            Month
          </Button>
        </div>
      </Section>

      {/* 🔹 Icon Group */}
      <Section title="Icon Group">
        <div className="flex">
          <Button size="icon" className="rounded-r-none">⬅️</Button>
          <Button size="icon" className="rounded-none">🏠</Button>
          <Button size="icon" className="rounded-l-none">➡️</Button>
        </div>
      </Section>

      {/* 🔹 Toolbar */}
      <Section title="Toolbar">
        <div className="flex gap-2 bg-muted p-2 rounded-lg w-fit">
          <Button size="icon" variant="ghost">✏️</Button>
          <Button size="icon" variant="ghost">📎</Button>
          <Button size="icon" variant="ghost">🗑</Button>
        </div>
      </Section>

      {/* 🔹 Vertical */}
      <Section title="Vertical">
        <div className="flex flex-col w-fit">
          <Button className="rounded-b-none">Top</Button>
          <Button className="rounded-none">Middle</Button>
          <Button className="rounded-t-none">Bottom</Button>
        </div>
      </Section>

      {/* 🔹 Responsive */}
      <Section title="Responsive">
        <div className="flex flex-col sm:flex-row gap-2">
          <Button fullWidth>Save</Button>
          <Button fullWidth variant="secondary">Cancel</Button>
        </div>
      </Section>

      {/* 🔹 With Badges */}
      <Section title="With Badges">
        <div className="flex gap-2">
          <Button>
            Inbox
            <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">
              5
            </span>
          </Button>

          <Button variant="secondary">
            Alerts
            <span className="ml-2 text-xs bg-destructive text-white px-2 py-0.5 rounded-full">
              2
            </span>
          </Button>
        </div>
      </Section>

      {/* 🔹 Floating */}
      <Section title="Floating Actions">
        <div className="flex gap-3">
          <Button className="rounded-full shadow-lg">➕</Button>
          <Button className="rounded-full shadow-lg">✏️</Button>
        </div>
      </Section>

      {/* 🔹 Active State (FIXED CLEANLY) */}
      <Section title="Active State">
        <div className="flex">
          {["left", "center", "right"].map((item, i) => (
            <Button
              key={item}
              data-state={active === item ? "on" : "off"}
              onClick={() => setActive(item)}
              className="
                capitalize
                data-[state=on]:bg-primary
                data-[state=on]:text-primary-foreground
                transition-all
                first:rounded-r-none
                last:rounded-l-none
                not-first:not-last:rounded-none
              "
            >
              {item}
            </Button>
          ))}
        </div>
      </Section>

      {/* 🔹 Guidelines */}
      <Section title="Guidelines">
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 max-w-xl">
          <li>Group only related actions together</li>
          <li>Maintain consistent sizes</li>
          <li>Avoid mixing too many variants</li>
        </ul>
      </Section>

      {/* 🔹 Code */}
      <Section title="Code Example">
        <div className="bg-muted border rounded-lg p-4 text-sm font-mono">
          {"<ButtonGroup><Button>A</Button><Button>B</Button></ButtonGroup>"}
        </div>
      </Section>

    </div>
  )
}