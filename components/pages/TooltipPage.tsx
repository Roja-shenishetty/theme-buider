"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { TooltipShowcase } from "@/components/showcase/TooltipShowcase"

export default function TooltipPage() {
  return (
    <ComponentPageLayout
      title="Micro-Interaction Tooltips"
      description="Transient floating labels and contextual data blocks tied to cursor hover states."
      video="/videos/tooltip-demo.mp4" 
    >
      <TooltipShowcase />
    </ComponentPageLayout>
  )
}