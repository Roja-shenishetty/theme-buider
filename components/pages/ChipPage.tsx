"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ChipShowcase } from "@/components/showcase/ChipShowcase"

export default function ChipPage() {
  return (
    <ComponentPageLayout
      title="Chips"
      description="Small interactive elements used for metadata, status indicators, or action triggers."
      image="/images/chip.jpg" 
    >
      <ChipShowcase />
    </ComponentPageLayout>
  )
}