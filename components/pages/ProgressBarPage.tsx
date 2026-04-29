"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ProgressBarShowcase } from "@/components/showcase/ProgressBarShowcase"

export default function ProgressBarPage() {
  return (
    <ComponentPageLayout
      title="Progress Bars"
      description="Linear visual indicators used for process tracking, system updates, and asynchronous data streaming."
      video="/videos/progress-demo.mp4" 
    >
     
      <ProgressBarShowcase />
    </ComponentPageLayout>
  )
}