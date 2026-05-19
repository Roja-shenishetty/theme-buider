"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { DrawerShowcase } from "@/components/showcase/DrawerShowcase"

export default function DrawerPage() {
  return (
    <ComponentPageLayout
      title="Kinetic Drawers"
      description="Bottom-docked sheets featuring physics-based swipe interactions, background scaling, and safe-area padding."
      video="/videos/drawer-demo.mp4" 
    >
      <DrawerShowcase />
    </ComponentPageLayout>
  )
}