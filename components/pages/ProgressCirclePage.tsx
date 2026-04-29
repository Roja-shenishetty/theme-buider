"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ProgressCircleShowcase } from "@/components/showcase/ProgressCircleShowcase"

export default function ProgressCirclePage() {
  return (
    <ComponentPageLayout
      title="Progress Circles"
      description="Radial visual indicators for tracking hardware load, capacity percentages, and system health dials."
      video="/videos/circle-demo.mp4" 
    >
      <ProgressCircleShowcase />
    </ComponentPageLayout>
  )
}