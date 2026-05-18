"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { TabsShowcase } from "@/components/showcase/TabsShowcase"

export default function TabsPage() {
  return (
    <ComponentPageLayout
      title="Tabs"
      description="Modular layout architectures used to compartmentalize related settings, metrics, or technical data without requiring structural page routing."
      video="/videos/tabs-demo.mp4" 
    >
      <TabsShowcase />
    </ComponentPageLayout>
  )
}