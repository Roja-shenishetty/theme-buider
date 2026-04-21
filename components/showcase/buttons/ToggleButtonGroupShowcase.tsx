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

export function ToggleButtonGroupShowcase() {
  const [active, setActive] = useState("left")
  const [formats, setFormats] = useState<string[]>([])

  const toggleFormat = (item: string) => {
    setFormats((prev) =>
      prev.includes(item)
        ? prev.filter((f) => f !== item)
        : [...prev, item]
    )
  }

  return (
    <div className="max-w-5xl space-y-14">

      {/* 🔹 Header */}
      <section className="space-y-3 pb-6 border-b animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">
          Toggle Button Groups
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Toggle button groups allow users to select one or multiple options.
          They are commonly used for alignment, formatting, or filters.
        </p>
      </section>

      {/* 🔹 Segmented */}
      <Section title="Segmented Control">
        <div className="inline-flex rounded-lg border p-1 bg-muted">
          {["left", "center", "right"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              data-state={active === item ? "on" : "off"}
              onClick={() => setActive(item)}
              className="
                capitalize px-4
                data-[state=on]:bg-background
                data-[state=on]:shadow-sm
                transition-all
              "
            >
              {item}
            </Button>
          ))}
        </div>
      </Section>

      {/* 🔹 Pill Toggle */}
      <Section title="Pill Toggle">
        <div className="flex gap-2 bg-muted p-1 rounded-full w-fit">
          {["left", "center", "right"].map((item) => (
            <Button
              key={item}
              variant={active === item ? "default" : "ghost"}
              onClick={() => setActive(item)}
              className="rounded-full w-24 capitalize transition-all"
            >
              {item}
            </Button>
          ))}
        </div>
      </Section>

      {/* 🔹 Toolbar */}
      <Section title="Formatting Toolbar">
        <div className="flex gap-2">
          {["bold", "italic", "underline"].map((item) => {
            const isActive = formats.includes(item)

            return (
              <Button
                key={item}
                variant={isActive ? "default" : "outline"}
                onClick={() => toggleFormat(item)}
                className="capitalize transition-transform hover:scale-105 active:scale-95"
              >
                {item}
              </Button>
            )
          })}
        </div>
      </Section>

      {/* 🔹 Icon Toggle */}
      <Section title="Icon Toggle">
        <div className="flex gap-2">
          {["A", "B", "C"].map((item) => (
            <Button
              key={item}
              variant={active === item ? "default" : "outline"}
              onClick={() => setActive(item)}
              className="w-10 h-10 p-0 transition-transform hover:scale-105 active:scale-90"
            >
              {item}
            </Button>
          ))}
        </div>
      </Section>

      {/* 🔹 Soft Toggle */}
      <Section title="Soft Toggle">
        <div className="flex gap-2">
          {["grid", "list"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              data-state={active === item ? "on" : "off"}
              onClick={() => setActive(item)}
              className="
                capitalize
                data-[state=on]:bg-primary/10
                data-[state=on]:text-primary
                hover:bg-muted
                transition-all
              "
            >
              {item}
            </Button>
          ))}
        </div>
      </Section>

      {/* 🔹 Size Variants */}
      <Section title="Size Variants">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            {["A", "B", "C"].map((item) => (
              <Button
                key={item}
                size="sm"
                variant={active === item ? "default" : "outline"}
                onClick={() => setActive(item)}
              >
                {item}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            {["A", "B", "C"].map((item) => (
              <Button
                key={item}
                size="lg"
                variant={active === item ? "default" : "outline"}
                onClick={() => setActive(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </Section>

      {/* 🔹 Theme Toggle */}
      <Section title="Theme Toggle">
        <div className="flex gap-2">
          {["light", "dark", "system"].map((item) => (
            <Button
              key={item}
              variant={active === item ? "default" : "outline"}
              onClick={() => setActive(item)}
              className="capitalize transition-transform hover:scale-105 active:scale-95"
            >
              {item}
            </Button>
          ))}
        </div>
      </Section>

      {/* 🔹 Press Feedback */}
      <Section title="Press Feedback">
        <div className="flex gap-2">
          {["one", "two", "three"].map((item) => (
            <Button
              key={item}
              variant={active === item ? "default" : "outline"}
              onClick={() => setActive(item)}
              className="capitalize transition-transform hover:scale-105 active:scale-90"
            >
              {item}
            </Button>
          ))}
        </div>
      </Section>

      {/* 🔹 Guidelines */}
      <Section title="Guidelines">
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Use segmented controls for mutually exclusive choices</li>
          <li>Use multi-select for formatting or filters</li>
          <li>Always show clear active state</li>
          <li>Keep animations subtle and fast</li>
        </ul>
      </Section>

      {/* 🔹 Code */}
      <Section title="Code Example">
        <div className="bg-muted border rounded-lg p-4 text-sm font-mono">
          {"<Button data-state='on'>Left</Button>"}
        </div>
      </Section>

    </div>
  )
}