"use client"

import { Typography } from "@/components/ui/typography"

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
    <section className="space-section animate-fade-up">
      <div className="space-y-2">
        <Typography variant="h3">{title}</Typography>

        {description && (
          <Typography variant="muted">
            {description}
          </Typography>
        )}
      </div>

      <div className="card">
        {children}
      </div>
    </section>
  )
}

export function AccordionShowcase() {
  return (
    <div className="page-container space-page">

      {/* 🔹 Header */}
      <section className="space-y-3 pb-8 border-b animate-fade-up">
        <Typography variant="h2">Accordion</Typography>

        <Typography variant="muted">
          Accordions allow users to expand and collapse sections of content,
          helping reduce clutter and improve readability.
        </Typography>
      </section>

      {/* 🔹 Basic */}
      <Section title="Basic">
        <BasicAccordion />
      </Section>

      {/* 🔹 Surface */}
      <Section title="Surface Variant">
        <SurfaceAccordion />
      </Section>

      {/* 🔹 Multiple */}
      <Section title="Multiple Selection">
        <MultipleAccordion />
      </Section>

      {/* 🔹 Controlled */}
      <Section title="Controlled Accordion">
        <ControlledAccordion />
      </Section>

      {/* 🔹 Indicator */}
      <Section title="Custom Indicator">
        <CustomIndicatorAccordion />
      </Section>

      {/* 🔹 Styled */}
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