"use client"

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

export function SpacingShowcase() {
  const spacing = [
    { key: "0", value: "0px" },
    { key: "1", value: "4px" },
    { key: "2", value: "8px" },
    { key: "3", value: "12px" },
    { key: "4", value: "16px" },
    { key: "5", value: "20px" },
    { key: "6", value: "24px" },
    { key: "8", value: "32px" },
    { key: "10", value: "40px" },
    { key: "12", value: "48px" },
    { key: "16", value: "64px" },
  ]

  const paddingClasses: Record<string, string> = {
    "0": "p-0",
    "1": "p-1",
    "2": "p-2",
    "3": "p-3",
    "4": "p-4",
    "5": "p-5",
    "6": "p-6",
    "8": "p-8",
    "10": "p-10",
    "12": "p-12",
    "16": "p-16",
  }

  const marginClasses: Record<string, string> = {
    "0": "m-0",
    "1": "m-1",
    "2": "m-2",
    "3": "m-3",
    "4": "m-4",
    "5": "m-5",
    "6": "m-6",
    "8": "m-8",
    "10": "m-10",
    "12": "m-12",
    "16": "m-16",
  }

  return (
    <div className="max-w-5xl space-y-14">

      {/* 🔹 Header */}
      <section className="space-y-3 pb-6 border-b animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">
          Spacing
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Spacing utilities control layout rhythm using padding, margin, gap,
          and space between elements.
        </p>
      </section>

      {/* 🔹 Padding */}
      <Section title="Padding">
        <div className="space-y-3">
          {spacing.map((s) => (
            <div key={s.key} className="flex items-center gap-4">
              <span className="w-20 text-xs text-muted-foreground">
                p-{s.key}
              </span>

              <div
                className={`bg-muted ${paddingClasses[s.key]} transition-transform hover:scale-105`}
              >
                content
              </div>

              <span className="text-xs">{s.value}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 🔹 Margin */}
      <Section title="Margin">
        <div className="space-y-3">
          {spacing.map((s) => (
            <div key={s.key} className="flex items-center gap-4 bg-muted p-4">
              <span className="w-20 text-xs text-muted-foreground">
                m-{s.key}
              </span>

              <div
                className={`bg-primary text-white px-2 ${marginClasses[s.key]}`}
              >
                box
              </div>

              <span className="text-xs">{s.value}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 🔹 Gap */}
      <Section title="Gap">
        <div className="space-y-4">
          {["1", "2", "4", "6"].map((g) => (
            <div key={g} className={`flex gap-${g}`}>
              <div className="bg-muted p-2">1</div>
              <div className="bg-muted p-2">2</div>
              <div className="bg-muted p-2">3</div>

              <span className="text-xs ml-4">gap-{g}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 🔹 Space Y */}
      <Section title="Vertical Spacing (space-y)">
        <div className="space-y-4">
          {["1", "2", "4", "6"].map((s) => (
            <div key={s} className={`space-y-${s} bg-muted p-3`}>
              <div className="bg-background p-2">Item 1</div>
              <div className="bg-background p-2">Item 2</div>
              <div className="bg-background p-2">Item 3</div>

              <span className="text-xs">space-y-{s}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 🔹 Real Usage */}
      <Section title="Real Layout Example">
        <div className="space-y-6 bg-muted p-4 rounded-xl max-w-md">
          <div className="bg-background p-3 rounded hover:shadow-sm transition">
            Header
          </div>
          <div className="bg-background p-3 rounded hover:shadow-sm transition">
            Content
          </div>
          <div className="bg-background p-3 rounded hover:shadow-sm transition">
            Footer
          </div>
        </div>
      </Section>

    </div>
  )
}