"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { PopoverShowcase } from "@/components/showcase/PopoverShowcase"

export default function PopoverPage() {
  return (
    <ComponentPageLayout
      title="Contextual Popovers"
      description="Transient, anchor-based overlays for rapid configuration and localized data inspection."
      video="/videos/popover-demo.mp4" // ✅ Local video asset for interaction/anchoring demo
    >
      <PopoverShowcase />
    </ComponentPageLayout>
  )
}