"use client"

import { Avatar } from "@/components/ui/avatar"
import { BadgeWrapper } from "@/components/ui/badge/badge-wrapper"
import { User } from "lucide-react"

const users = [
  {
    id: 1,
    image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
    name: "John Doe",
  },
  {
    id: 2,
    image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
    name: "Kate Wilson",
  },
  {
    id: 3,
    image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
    name: "Emily Chen",
  },
  {
    id: 4,
    image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg",
    name: "Michael Brown",
  },
  {
    id: 5,
    image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg",
    name: "Olivia Davis",
  },
]

const colors = ["default", "accent", "success", "warning", "danger"] as const

export function AvatarShowcase() {
  return (
    <div className="max-w-5xl space-y-12">

      {/* Header */}
      <section className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Avatar</h1>
        <p className="text-muted-foreground">
          Avatars represent users with images, initials, or status indicators.
        </p>
      </section>

      {/* Basic */}
      <section className="space-y-4">
        <h3 className="text-base font-semibold">Basic</h3>
        <div className="flex gap-4">
          <Avatar src="https://i.pravatar.cc/100?img=1" />
          <Avatar fallback="JD" />
          <Avatar fallback="A" />
        </div>
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h3 className="text-base font-semibold">Variants</h3>
        <div className="flex gap-4">
          <Avatar variant="soft" fallback="S" />
          <Avatar variant="solid" fallback="S" />
        </div>
      </section>

      <section className="space-y-5">
  <div className="space-y-1">
    <h3 className="text-base font-semibold tracking-tight">
      Avatar with Badge
    </h3>
    <p className="text-sm text-muted-foreground">
      Combine avatars with badges to show notifications or status.
    </p>
  </div>

  <div className="rounded-xl border bg-background p-5 shadow-sm">
    <div className="flex gap-6">

      <BadgeWrapper content="5" variant="destructive">
        <Avatar src="https://i.pravatar.cc/100?img=2" fallback="JD" />
      </BadgeWrapper>

      <BadgeWrapper content="New" variant="secondary">
        <Avatar src="https://i.pravatar.cc/100?img=3" fallback="AB" />
      </BadgeWrapper>

      <BadgeWrapper dot variant="default" placement="bottom-right">
        <Avatar src="https://i.pravatar.cc/100?img=4" fallback="CD" />
      </BadgeWrapper>

    </div>
  </div>
</section>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-base font-semibold">Sizes</h3>
        <div className="flex gap-6">
          <Avatar size="sm" src={users[0].image} fallback="SM" />
          <Avatar size="md" src={users[2].image} fallback="MD" />
          <Avatar size="lg" src={users[4].image} fallback="LG" />
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-5">
        <h3 className="text-base font-semibold">Colors</h3>

        <div className="rounded-xl border bg-background p-5 shadow-sm flex gap-6">
          {colors.map((color) => (
            <Avatar key={color} color={color} fallback={color.slice(0,2).toUpperCase()} />
          ))}
        </div>
      </section>

      {/* Variant Grid */}
      <section className="space-y-5">
  <div className="space-y-1">
    <h3 className="text-base font-semibold tracking-tight">
      Variant Combinations
    </h3>
    <p className="text-sm text-muted-foreground">
      Combine colors, styles, icons, and images to create flexible avatar designs.
    </p>
  </div>

  <div className="rounded-xl border bg-background p-5 shadow-sm space-y-4">

    {/* Header row */}
    <div className="flex items-center gap-3">
      <div className="w-24 shrink-0" />
      {["default", "accent", "success", "warning", "danger"].map((color) => (
        <div
          key={color}
          className="w-20 shrink-0 text-center text-xs text-muted-foreground capitalize"
        >
          {color}
        </div>
      ))}
    </div>

    <div className="h-px bg-border" />

    {/* Letter */}
    <div className="flex items-center gap-3">
      <div className="w-24 shrink-0 text-sm text-muted-foreground">
        Letter
      </div>
      {["default", "accent", "success", "warning", "danger"].map((color) => (
        <div key={color} className="w-20 flex justify-center">
          <Avatar fallback="AG" color={color as any} />
        </div>
      ))}
    </div>

    {/* Letter Soft */}
    <div className="flex items-center gap-3">
      <div className="w-24 shrink-0 text-sm text-muted-foreground">
        Letter Soft
      </div>
      {["default", "accent", "success", "warning", "danger"].map((color) => (
        <div key={color} className="w-20 flex justify-center">
          <Avatar fallback="AG" color={color as any} variant="soft" />
        </div>
      ))}
    </div>

    {/* Icon */}
    <div className="flex items-center gap-3">
      <div className="w-24 shrink-0 text-sm text-muted-foreground">
        Icon
      </div>
      {["default", "accent", "success", "warning", "danger"].map((color) => (
        <div key={color} className="w-20 flex justify-center">
          <Avatar fallback="👤" color={color as any} />
        </div>
      ))}
    </div>

    {/* Icon Soft */}
    <div className="flex items-center gap-3">
      <div className="w-24 shrink-0 text-sm text-muted-foreground">
        Icon Soft
      </div>
      {["default", "accent", "success", "warning", "danger"].map((color) => (
        <div key={color} className="w-20 flex justify-center">
          <Avatar fallback="👤" color={color as any} variant="soft" />
        </div>
      ))}
    </div>

    {/* Images */}
    <div className="flex items-center gap-3">
      <div className="w-24 shrink-0 text-sm text-muted-foreground">
        Image
      </div>
      {[
        "https://i.pravatar.cc/100?img=3",
        "https://i.pravatar.cc/100?img=4",
        "https://i.pravatar.cc/100?img=5",
        "https://i.pravatar.cc/100?img=6",
        "https://i.pravatar.cc/100?img=7",
      ].map((src, i) => (
        <div key={i} className="w-20 flex justify-center">
          <Avatar src={src} fallback="U" />
        </div>
      ))}
    </div>

  </div>
</section>

      {/* Fallback */}
      <section className="space-y-5">
        <h3 className="text-base font-semibold">Fallback</h3>

        <div className="rounded-xl border bg-background p-5 shadow-sm flex gap-4">
          <Avatar fallback="JD" />
          <Avatar fallback={<User />} />
          <Avatar src="invalid" fallback="NA" delayMs={600} />
          <Avatar fallback="GB" fallbackClassName="avatar-gradient" />
        </div>
      </section>

      {/* Avatar Group */}
      <section className="space-y-5">
        <h3 className="text-base font-semibold">Avatar Group</h3>

        <div className="rounded-xl border bg-background p-5 shadow-sm space-y-4">

          <div className="flex -space-x-2">
            {users.slice(0, 4).map((user) => (
              <Avatar
                key={user.id}
                src={user.image}
                fallback={user.name.split(" ").map(n => n[0]).join("")}
                className="avatar-group-item"
              />
            ))}
          </div>

          <div className="flex -space-x-2">
            {users.slice(0, 3).map((user) => (
              <Avatar
                key={user.id}
                src={user.image}
                fallback={user.name.split(" ").map(n => n[0]).join("")}
                className="avatar-group-item"
              />
            ))}
            <Avatar
              fallback={`+${users.length - 3}`}
              className="avatar-group-item avatar-group-counter"
            />
          </div>

        </div>
      </section>

      {/* Custom Styles */}
      <section className="space-y-5">
  <h3 className="text-base font-semibold">Custom Styles</h3>

  <div className="rounded-xl border bg-background p-5 shadow-sm flex items-center gap-6">

    {/* XL */}
    <Avatar src={users[0].image} fallback="XL" className="avatar-xl" />

    {/* Square */}
    <Avatar src={users[2].image} fallback="SQ" className="avatar-square" />

    {/* Gradient */}
    <div className="avatar-gradient-border">
      <Avatar src={users[4].image} fallback="GB" className="avatar-inner" />
    </div>

    {/* Status */}
    <div className="avatar-status-wrapper">
      <Avatar src={users[3].image} fallback="ON" />
      <span className="avatar-status-dot" />
    </div>

    {/* ✅ BadgeWrapper (ADD THIS) */}
    <BadgeWrapper content="5" variant="destructive">
      <Avatar src={users[1].image} fallback="BW" />
    </BadgeWrapper>

  </div>
</section>

    </div>
  )
}