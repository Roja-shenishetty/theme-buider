"use client"

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
        <h3 className="text-base font-semibold tracking-tight text-foreground">
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

export function ButtonShowcase() {
  return (
    <div className="max-w-5xl space-y-14">

      {/* 🔹 Header */}
      <section className="space-y-3 pb-6 border-b animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">Buttons</h1>
        <p className="text-muted-foreground max-w-2xl">
          Buttons trigger actions in a user interface. They guide users through flows,
          highlight important actions, and enable interaction with the system.
        </p>
      </section>

      {/* 🔹 Variants */}
      <Section
        title="Variants"
        description="Variants communicate hierarchy and intent."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="danger-soft">Danger Soft</Button>
        </div>
      </Section>

      {/* 🔹 Sizes */}
      <Section title="Sizes">
        <div className="flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">⚙️</Button>
        </div>
      </Section>

      {/* 🔹 Icon Positions */}
      <Section title="Icon Positions">
        <div className="flex flex-wrap gap-3">
          <Button>
            <span className="mr-2">➕</span> Add
          </Button>

          <Button>
            Download <span className="ml-2">⬇️</span>
          </Button>
        </div>
      </Section>

      {/* 🔹 Shapes */}
      <Section title="Shapes">
        <div className="flex gap-3">
          <Button className="rounded-none">Square</Button>
          <Button className="rounded-md">Default</Button>
          <Button className="rounded-full px-6">Pill</Button>
        </div>
      </Section>

      {/* 🔹 Full Width */}
      <Section title="Full Width">
        <div className="w-full max-w-sm space-y-2">
          <Button fullWidth>Primary</Button>
          <Button fullWidth variant="secondary">
            ➕ With Icon
          </Button>
        </div>
      </Section>

      {/* 🔹 Interaction States */}
      <Section title="Interaction States">
        <div className="flex flex-wrap gap-3">
          <Button className="transition-transform hover:scale-105">
            Hover
          </Button>

          <Button className="active:scale-95">
            Pressed
          </Button>

          <Button disabled>Disabled</Button>

          <Button loading>Loading</Button>
        </div>
      </Section>

      {/* 🔹 With Icons */}
      <Section title="With Icons">
        <div className="flex flex-wrap gap-3">
          <Button>🌍 Search</Button>
          <Button variant="secondary">➕ Add</Button>
          <Button variant="danger">🗑 Delete</Button>
        </div>
      </Section>

      {/* 🔹 Icon Only */}
      <Section title="Icon Only">
        <div className="flex gap-3">
          <Button size="icon">⚙️</Button>
          <Button size="icon" variant="secondary">⋯</Button>
          <Button size="icon" variant="danger">🗑</Button>
        </div>
      </Section>

      {/* 🔹 Real Usage */}
      <Section title="Real Usage">
        <div className="flex flex-wrap gap-3">
          <Button>Submit</Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </Section>

      {/* 🔹 Guidelines */}
      <Section title="Usage Guidelines">
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 max-w-xl">
          <li>Use primary buttons for the main action</li>
          <li>Limit one primary action per section</li>
          <li>Use destructive styles for irreversible actions</li>
          <li>Keep labels short and action-oriented</li>
          <li>Ensure sufficient contrast and accessibility</li>
        </ul>
      </Section>

      {/* 🔹 Code Example */}
      <Section title="Code Example">
        <div className="bg-muted border rounded-lg p-4 text-sm font-mono overflow-x-auto">
          {"<Button variant='primary'>Click me</Button>"}
        </div>
      </Section>

      {/* 🔹 Loading with Label */}
      <Section title="Loading with Label">
        <div className="flex gap-3">
          <Button loading>Saving...</Button>
          <Button loading variant="secondary">Processing</Button>
        </div>
      </Section>

      {/* 🔹 With Badge */}
      <Section title="With Badge">
        <div className="flex gap-3">
          <Button className="relative">
            Notifications
            <span className="ml-2 bg-destructive text-white text-xs px-2 py-0.5 rounded-full">
              3
            </span>
          </Button>

          <Button variant="secondary" className="relative">
            Messages
            <span className="ml-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
              12
            </span>
          </Button>
        </div>
      </Section>

    </div>
  )
}