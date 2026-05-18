"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { BreadcrumbShowcase } from "@/components/showcase/BreadcrumbShowcase"

export default function BreadcrumbPage() {
  return (
    <ComponentPageLayout
      title="Breadcrumb"
      description="Structural navigational paths that reveal an entity's placement within the application hierarchy, enabling instant upstream traversal."
      video="/videos/breadcrumb-demo.mp4" 
    >
      <BreadcrumbShowcase />
    </ComponentPageLayout>
  )
}