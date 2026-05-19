"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ModalShowcase } from "@/components/showcase/ModalShowcase"

export default function ModalPage() {
  return (
    <ComponentPageLayout
      title="Spatial Overlays"
      description="Modal viewports and interception dialogues mapped across multi-viewport layout grids for contextual focus trapping."
      video="/videos/modal-demo.mp4" // ✅ Local video asset for interaction/focus-trap demo
    >
      <ModalShowcase />
    </ComponentPageLayout>
  )
}