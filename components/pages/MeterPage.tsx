"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { MeterShowcase } from "@/components/showcase/MeterShowcase"

export default function MeterPage() {
  return (
    <ComponentPageLayout
      title="System Meters"
      description="Visual measurement gauges for tracking hardware utilization, thermal thresholds, and resource allocation."
      video="/videos/meter-demo.mp4" // ✅ Local video asset for real-time jitter demo
    >
    
      <MeterShowcase />
    </ComponentPageLayout>
  )
}