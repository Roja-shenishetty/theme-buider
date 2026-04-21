"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

type Props = {
  title: string
  description: string
  image?: string
  video?: string // ✅ ADD THIS
  animation?: React.ReactNode
  children: React.ReactNode
}

export default function ComponentPageLayout({
  title,
  description,
  image,
  video,
  animation,
  children,
}: Props) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-8">

      {/* 🔥 HEADER */}
      <div className="space-y-6">

        {/* 🔹 HEADER TEXT */}
        <div className="bg-card rounded-2xl p-6 md:p-10">
          <h1 className="text-3xl md:text-6xl font-bold mb-3">
            {title}
          </h1>

          <p className="text-muted-foreground text-sm md:text-lg mb-4 max-w-2xl">
            {description}
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="secondary" className="rounded-full">
              Resources
            </Button>
            <Button size="sm" variant="secondary" className="rounded-full">
              UI
            </Button>
            <Button size="sm" variant="secondary" className="rounded-full">
              +4
            </Button>
          </div>
        </div>

        {/* 🔥 HERO BLOCK */}
        <div className="w-full">
          <div className="relative overflow-hidden rounded-2xl bg-card h-[260px] md:h-[360px] lg:h-[420px]">

            {/* ✨ Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-3xl" />

            <div className="relative z-10 w-full h-full">

              {video ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={video} type="video/mp4" />
                </video>
              ) : animation ? (
                <div className="w-full h-full flex items-center justify-center">
                  {animation}
                </div>
              ) : image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              ) : null}

            </div>

          </div>
        </div>

      </div>

      {/* 🔥 CONTENT */}
      <div className="pt-2">
        {children}
      </div>

    </div>
  )
}