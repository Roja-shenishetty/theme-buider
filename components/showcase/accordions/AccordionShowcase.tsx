"use client"

import { BasicAccordion } from "./BasicAccordion"
import { ControlledAccordion } from "./ControlledAccordion"
import { CustomIndicatorAccordion } from "./CustomindicatorAccordion"
import { CustomStyledAccordion } from "./CustomStyledAccordion"
import { DisabledAccordion } from "./DisabledAccordion"
import { FAQAccordion } from "./FAQAccordion"
import { MultipleAccordion } from "./MultipleAccordion"
import { SurfaceAccordion } from "./SurfaceAccordion"

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

export function AccordionShowcase() {
  return (
    <div className="max-w-5xl space-y-14">

      {/* 🔹 Header */}
      <section className="space-y-3 pb-6 border-b animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">
          Accordion
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Accordions allow users to expand and collapse sections of content,
          helping reduce clutter and improve readability.
        </p>
      </section>

      {/* 🔹 Basic */}
      <Section title="Basic">
        <BasicAccordion />
      </Section>

      {/* 🔹 Surface Style */}
      <Section title="Surface Variant">
        <SurfaceAccordion />
      </Section>

      {/* 🔹 Multiple Open */}
      <Section title="Multiple Selection">
        <MultipleAccordion />
      </Section>

      {/* 🔹 Controlled */}
      <Section title="Controlled Accordion">
        <ControlledAccordion />
      </Section>

      {/* 🔹 Custom Indicator */}
      <Section title="Custom Indicator">
        <CustomIndicatorAccordion />
      </Section>

      {/* 🔹 Custom Styled */}
      <Section title="Custom Styled">
        <CustomStyledAccordion />
      </Section>

      {/* 🔹 Disabled */}
      <Section title="Disabled State">
        <DisabledAccordion />
      </Section>

      {/* 🔹 FAQ */}
      <Section
        title="FAQ Example"
        description="Common real-world use case for accordions."
      >
        <FAQAccordion />
      </Section>

    </div>
  )
}