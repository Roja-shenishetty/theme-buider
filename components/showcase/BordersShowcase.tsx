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

export function BordersShowcase() {
  return (
    <div className="max-w-5xl space-y-14">

      {/* 🔹 Header */}
      <section className="space-y-3 pb-6 border-b animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">
          Borders
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Borders help define boundaries, separate content, and improve visual hierarchy
          in UI design systems.
        </p>
      </section>

      {/* 🔹 Border Width */}
      <Section title="Border Width">
        <div className="flex flex-wrap gap-4">
          <div className="border p-4 transition-transform hover:scale-105">border</div>
          <div className="border-2 p-4 transition-transform hover:scale-105">border-2</div>
          <div className="border-4 p-4 transition-transform hover:scale-105">border-4</div>
          <div className="border-8 p-4 transition-transform hover:scale-105">border-8</div>
        </div>
      </Section>

      {/* 🔹 Border Styles */}
      <Section title="Border Styles">
        <div className="flex flex-wrap gap-4">
          <div className="border border-solid p-4 hover:bg-muted/50 transition">solid</div>
          <div className="border border-dashed p-4 hover:bg-muted/50 transition">dashed</div>
          <div className="border border-dotted p-4 hover:bg-muted/50 transition">dotted</div>
          <div className="border border-double p-4 hover:bg-muted/50 transition">double</div>
        </div>
      </Section>

      {/* 🔹 Border Colors */}
      <Section title="Border Colors">
        <div className="flex flex-wrap gap-4">
          <div className="border border-primary p-4 hover:shadow-md transition">primary</div>
          <div className="border border-secondary p-4 hover:shadow-md transition">secondary</div>
          <div className="border border-destructive p-4 hover:shadow-md transition">danger</div>
          <div className="border border-muted p-4 hover:shadow-md transition">muted</div>
        </div>
      </Section>

      {/* 🔹 Border Sides */}
      <Section title="Border Sides">
        <div className="flex flex-wrap gap-4">
          <div className="border-t-4 p-4">top</div>
          <div className="border-b-4 p-4">bottom</div>
          <div className="border-l-4 p-4">left</div>
          <div className="border-r-4 p-4">right</div>
        </div>
      </Section>

      {/* 🔹 Border Radius */}
      <Section title="Border Radius">
        <div className="flex flex-wrap gap-4">
          <div className="w-16 h-16 bg-muted rounded-sm flex items-center justify-center">sm</div>
          <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">md</div>
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">lg</div>
          <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center">xl</div>
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">full</div>
        </div>
      </Section>

      {/* 🔹 Divide */}
      <Section title="Divide">
        <div className="divide-y border rounded-lg overflow-hidden max-w-xs">
          <div className="p-3">Item 1</div>
          <div className="p-3">Item 2</div>
          <div className="p-3">Item 3</div>
        </div>
      </Section>

      {/* 🔹 Outline vs Border */}
      <Section title="Outline vs Border">
        <div className="flex gap-4">
          <div className="border p-4">border</div>
          <div className="outline outline-2 outline-primary p-4">outline</div>
        </div>
      </Section>

      {/* 🔹 Focus Ring */}
      <Section title="Focus Ring">
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-muted rounded focus:ring-2 focus:ring-primary transition">
            Focus me
          </button>
          <button className="px-4 py-2 bg-muted rounded focus:ring-4 focus:ring-secondary transition">
            Strong ring
          </button>
        </div>
      </Section>

      {/* 🔹 Real Usage */}
      <Section title="Real Usage">
        <div className="space-y-4 max-w-sm">

          <div className="p-4 border rounded-lg bg-background hover:shadow-md transition">
            Card with border + radius
          </div>

          <div className="p-4 border-l-4 border-primary bg-muted">
            Left accent border
          </div>

          <div className="p-4 border border-dashed rounded-lg hover:bg-muted/40 transition">
            Dashed container
          </div>

        </div>
      </Section>

    </div>
  )
}