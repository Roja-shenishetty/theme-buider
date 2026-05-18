"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { CheckboxGroupShowcase } from "@/components/showcase/CheckboxGroupShowcase"

export default function CheckboxGroupPage() {
  return (
    <ComponentPageLayout
      title="Checkbox Group"
      description="Structured checkbox collections compiled for multi-selection layout architectures, capability grouping, and high-density state matrices."
      video="/videos/checkbox-group-demo.mp4" 
    >
      <CheckboxGroupShowcase />
    </ComponentPageLayout>
  )
}