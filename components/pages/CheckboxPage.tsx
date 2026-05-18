"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { CheckboxShowcase } from "@/components/showcase/CheckboxShowcase"

export default function CheckboxPage() {
  return (
    <ComponentPageLayout
      title="Checkbox"
      description="Interactive binary toggles designed for multi-selection lists, agreement confirmations, and detailed configuration settings."
      video="/videos/checkbox-demo.mp4" 
    >
      <CheckboxShowcase />
    </ComponentPageLayout>
  )
}