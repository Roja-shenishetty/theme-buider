"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { RadioGroupShowcase } from "@/components/showcase/RadioGroupShowcase"

export default function RadioGroupPage() {
  return (
    <ComponentPageLayout
      title="Radio Group"
      description="Single-selection controller rings built for configuration switching, explicit mode parameters, and performance cluster tier selectors."
      video="/videos/radio-group-demo.mp4" 
    >
      <RadioGroupShowcase />
    </ComponentPageLayout>
  )
}