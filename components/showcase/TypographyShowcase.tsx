"use client"

import { Typography } from "@/components/ui/typography"
import { useState } from "react"

const typeScale = [
  { name: "display-lg", class: "text-5xl font-bold" },
  { name: "display-md", class: "text-4xl font-semibold" },
  { name: "headline-lg", class: "text-3xl font-semibold" },
  { name: "headline-md", class: "text-2xl font-medium" },
  { name: "title-lg", class: "text-xl font-medium" },
  { name: "body-lg", class: "text-base" },
  { name: "body-md", class: "text-sm" },
  { name: "label-md", class: "text-xs font-medium" },
]

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

      <div className="rounded-xl border bg-background shadow-sm overflow-hidden">
        <div className="p-5">{children}</div>
      </div>
    </section>
  )
}

export function TypographyShowcase() {
  const [copied, setCopied] = useState("")

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(""), 1500)
  }

  return (
    <div className="max-w-5xl space-y-14">

      {/* 🔹 Header */}
      <section className="space-y-3 pb-6 border-b animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">
          Typography
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Typography defines hierarchy, readability, and visual tone.
          A consistent type scale helps users scan and understand content quickly.
        </p>
      </section>

      {/* 🔹 Type Scale */}
      <Section
        title="Type Scale"
        description="Predefined text styles for consistent hierarchy."
      >
        <div className="divide-y">
          {typeScale.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-4 py-4"
            >
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">
                  {item.name}
                </p>
                <p className={item.class}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>

              <button
                onClick={() => copy(item.class)}
                className="
                  text-xs px-3 py-1 rounded-md
                  bg-muted hover:bg-primary hover:text-white
                  transition
                "
              >
                {copied === item.class ? "Copied" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Section
  title="Font Weights"
  description="Font weights help create hierarchy and emphasis."
>
  <div className="space-y-2">
    <p className="font-light">Light (300)</p>
    <p className="font-normal">Regular (400)</p>
    <p className="font-medium">Medium (500)</p>
    <p className="font-semibold">Semibold (600)</p>
    <p className="font-bold">Bold (700)</p>
    <p className="font-extrabold">Extra Bold (800)</p>
  </div>
</Section>

<Section
  title="Numeric Styles"
  description="Useful for dashboards, finance apps, and data-heavy UI."
>
  <div className="space-y-2">
    <p className="tabular-nums">
      Tabular: 1111 2222 3333
    </p>
    <p className="proportional-nums">
      Proportional: 1111 2222 3333
    </p>
    <p className="lining-nums">
      Lining Numbers: 1234567890
    </p>
    <p className="oldstyle-nums">
      Oldstyle Numbers: 1234567890
    </p>
  </div>
</Section>

<Section
  title="Text Transform"
  description="Control casing for UI consistency."
>
  <div className="space-y-2">
    <p className="uppercase">uppercase text</p>
    <p className="lowercase">LOWERCASE TEXT</p>
    <p className="capitalize">capitalize each word</p>
  </div>
</Section>

<Section
  title="Text Overflow"
  description="Handle long text gracefully in UI layouts."
>
  <div className="space-y-3 max-w-xs">
    <p className="truncate">
      This is a very long sentence that will be truncated
    </p>

    <p className="line-clamp-2">
      This is a longer paragraph that will be limited to two lines
      using line clamp utility classes in Tailwind CSS.
    </p>
  </div>
</Section>

<Section
  title="Real UI Example"
  description="Typography used in a real component layout."
>
  <div className="space-y-2 max-w-md border rounded-lg p-4">
    <p className="text-sm text-muted-foreground">Category</p>

    <h4 className="text-lg font-semibold">
      Building Scalable Design Systems
    </h4>

    <p className="text-sm text-muted-foreground">
      Learn how to structure typography and spacing effectively.
    </p>

    <p className="text-xs text-muted-foreground">
      5 min read
    </p>
  </div>
</Section>

      {/* 🔹 Font Families */}
    <Section
  title="Font Families"
  description="Different font families serve different purposes in UI and content."
>
  <div className="space-y-4">

    <div>
      <p className="text-xs text-muted-foreground">Sans-serif (UI)</p>
      <p className="font-sans text-lg">
        Clean, modern, and best for interfaces
      </p>
    </div>

    <div>
      <p className="text-xs text-muted-foreground">Serif (Editorial)</p>
      <p className="font-serif text-lg">
        Elegant and readable for long-form content
      </p>
    </div>

    <div>
      <p className="text-xs text-muted-foreground">Monospace (Code)</p>
      <p className="font-mono text-lg">
        Consistent width for code and data
      </p>
    </div>

    <div>
      <p className="text-xs text-muted-foreground">Display (Headings)</p>
      <p className="font-bold tracking-tight text-2xl">
        Used for strong visual impact
      </p>
    </div>

  </div>
</Section>

      {/* 🔹 Line Height */}
      <Section title="Line Height">
        <div className="space-y-2 max-w-md">
          <p className="leading-tight">
            Tight line height creates compact text blocks.
          </p>
          <p className="leading-normal">
            Normal line height is ideal for readability.
          </p>
          <p className="leading-loose">
            Loose line height improves long-form reading.
          </p>
        </div>
      </Section>


      {/* 🔹 Letter Spacing */}
      <Section title="Letter Spacing">
        <div className="space-y-1">
          <p className="tracking-tight">Tracking Tight</p>
          <p className="tracking-normal">Tracking Normal</p>
          <p className="tracking-wide">Tracking Wide</p>
        </div>
      </Section>

      {/* 🔹 Usage */}
      <Section title="Usage Example">
        <div className="space-y-2 max-w-xl">
          <Typography variant="h2">
            Building Better Interfaces
          </Typography>
          <Typography variant="body">
            Good typography improves readability and user experience.
            It helps users scan and understand content efficiently.
          </Typography>
          <Typography variant="muted">
            Updated just now
          </Typography>
        </div>
      </Section>

      {/* 🔹 Code */}
      <Section title="Code Example">
        <div className="bg-muted border rounded-lg p-4 text-sm font-mono">
          {"<Typography variant='h1'>Heading</Typography>"}
        </div>
      </Section>

    </div>
  )
}