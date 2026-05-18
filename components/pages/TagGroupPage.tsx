"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { TagGroupShowcase } from "@/components/showcase/TagGroupShowcase"

export default function TagGroupPage() {
  return (
    <ComponentPageLayout
      title="Tag Group"
      description="Compact inline data representations mapped for multi-attribute categorization, active filter tracking, and dynamic array inputs."
      video="/videos/tag-group-demo.mp4" 
    >
      <TagGroupShowcase />
    </ComponentPageLayout>
  )
}