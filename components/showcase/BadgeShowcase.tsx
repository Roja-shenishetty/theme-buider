"use client"

import { BadgeWrapper } from "@/components/ui/badge/badge-wrapper"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge/badge"

type SectionProps = {
  title: string
  description?: string
  children: React.ReactNode
}

function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-5">
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

      <div className="rounded-xl border bg-background p-5 shadow-sm">
        {children}
      </div>
    </section>
  )
}

export function BadgeShowcase() {
  return (
    <div className="max-w-5xl space-y-14">

      {/* 🔹 Header */}
      <section className="space-y-3 border-b pb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Badge
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Badges display counts, labels, and status indicators.
        </p>
      </section>

      {/* 🔹 Basic */}
      <Section title="Basic">
        <div className="flex gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Danger</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </Section>

      {/* 🔹 With Avatar */}
      <Section
        title="With Avatar"
        description="Attach badges to avatars for notifications."
      >
        <div className="flex gap-6">

          <BadgeWrapper content="5" variant="destructive">
            <Avatar src="https://i.pravatar.cc/100?img=2" fallback="JD" />
          </BadgeWrapper>

          <BadgeWrapper content="New" variant="secondary">
            <Avatar src="https://i.pravatar.cc/100?img=3" fallback="AB" />
          </BadgeWrapper>

          <BadgeWrapper dot placement="bottom-right">
            <Avatar src="https://i.pravatar.cc/100?img=4" fallback="CD" />
          </BadgeWrapper>

        </div>
      </Section>

      {/* 🔹 Sizes */}
      <Section title="Sizes">
        <div className="flex gap-6">
          <BadgeWrapper content="2">
            <Avatar size="sm" fallback="SM" />
          </BadgeWrapper>

          <BadgeWrapper content="12">
            <Avatar size="md" fallback="MD" />
          </BadgeWrapper>

          <BadgeWrapper content="99+">
            <Avatar size="lg" fallback="LG" />
          </BadgeWrapper>
        </div>
      </Section>

      {/* 🔹 Placement */}
      <Section title="Placement">
        <div className="flex gap-6">
          <BadgeWrapper content="1" placement="top-right">
            <Avatar fallback="TR" />
          </BadgeWrapper>

          <BadgeWrapper content="1" placement="bottom-right">
            <Avatar fallback="BR" />
          </BadgeWrapper>
        </div>
      </Section>

      {/* 🔹 Dot Variant */}
      <Section title="Dot Variant">
        <div className="flex gap-6">
          <BadgeWrapper dot variant="default">
            <Avatar fallback="ON" />
          </BadgeWrapper>

          <BadgeWrapper dot variant="destructive">
            <Avatar fallback="ERR" />
          </BadgeWrapper>
        </div>
      </Section>

      {/* 🔹 Real Example */}
      <Section title="Real Usage">
        <div className="space-y-3 max-w-sm">

          <div className="flex items-center justify-between">
            <span>Messages</span>
            <Badge variant="secondary">12</Badge>
          </div>

          <div className="flex items-center justify-between">
            <span>Notifications</span>
            <Badge variant="destructive">3</Badge>
          </div>

          <div className="flex items-center justify-between">
            <span>Status</span>
            <Badge variant="outline">Online</Badge>
          </div>

        </div>
      </Section>
    <Section
  title="Badge Sizes"
  description="Badges scale with avatar size for consistent UI."
>
  <div className="flex items-center gap-6">

    <BadgeWrapper content="5" variant="destructive">
      <Avatar
        size="sm"
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg"
        fallback="SM"
      />
    </BadgeWrapper>

    <BadgeWrapper content="5" variant="destructive">
      <Avatar
        size="md"
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg"
        fallback="MD"
      />
    </BadgeWrapper>

    <BadgeWrapper content="5" variant="destructive">
      <Avatar
        size="lg"
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg"
        fallback="LG"
      />
    </BadgeWrapper>

  </div>
</Section>
<Section
  title="Badge Colors"
  description="Different color variants for status and notifications."
>
  <div className="flex items-center gap-6">

    <BadgeWrapper dot variant="default">
      <Avatar fallback="DF" />
    </BadgeWrapper>

    <BadgeWrapper dot variant="accent">
      <Avatar fallback="AC" />
    </BadgeWrapper>

    <BadgeWrapper dot variant="success">
      <Avatar fallback="SC" />
    </BadgeWrapper>

    <BadgeWrapper dot variant="warning">
      <Avatar fallback="WR" />
    </BadgeWrapper>

    <BadgeWrapper dot variant="danger">
      <Avatar fallback="DG" />
    </BadgeWrapper>

  </div>
</Section>
<Section
  title="Badge Variants"
  description="Different visual styles like solid, soft and secondary."
>
  <div className="flex flex-col gap-8">

    {/* PRIMARY (SOLID) */}
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-muted-foreground capitalize">
        primary
      </h3>

      <div className="flex items-center gap-6">
        <BadgeWrapper variant="accent" content="5">
          <Avatar fallback="AC" />
        </BadgeWrapper>

        <BadgeWrapper variant="default" content="5">
          <Avatar fallback="DF" />
        </BadgeWrapper>

        <BadgeWrapper variant="success" content="5">
          <Avatar fallback="SC" />
        </BadgeWrapper>

        <BadgeWrapper variant="warning" content="5">
          <Avatar fallback="WR" />
        </BadgeWrapper>

        <BadgeWrapper variant="danger" content="5">
          <Avatar fallback="DG" />
        </BadgeWrapper>
      </div>
    </div>

    {/* SECONDARY */}
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-muted-foreground capitalize">
        secondary
      </h3>

      <div className="flex items-center gap-6">
        <BadgeWrapper variant="secondary" content="5">
          <Avatar fallback="AC" />
        </BadgeWrapper>

        <BadgeWrapper variant="secondary" content="5">
          <Avatar fallback="DF" />
        </BadgeWrapper>

        <BadgeWrapper variant="secondary" content="5">
          <Avatar fallback="SC" />
        </BadgeWrapper>

        <BadgeWrapper variant="secondary" content="5">
          <Avatar fallback="WR" />
        </BadgeWrapper>

        <BadgeWrapper variant="secondary" content="5">
          <Avatar fallback="DG" />
        </BadgeWrapper>
      </div>
    </div>

    {/* SOFT */}
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-muted-foreground capitalize">
        soft
      </h3>

      <div className="flex items-center gap-6">
      <BadgeWrapper variant="accent" content="5" tone="soft">
  <Avatar fallback="AC" />
</BadgeWrapper>

<BadgeWrapper variant="default" content="5" tone="soft">
  <Avatar fallback="DF" />
</BadgeWrapper>

<BadgeWrapper variant="success" content="5" tone="soft">
  <Avatar fallback="SC" />
</BadgeWrapper>

<BadgeWrapper variant="warning" content="5" tone="soft">
  <Avatar fallback="WR" />
</BadgeWrapper>

<BadgeWrapper variant="danger" content="5" tone="soft">
  <Avatar fallback="DG" />
</BadgeWrapper>
      </div>
    </div>

  </div>
</Section>
    </div>
  )
}