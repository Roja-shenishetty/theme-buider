"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { LinkShowcase } from "@/components/showcase/LinkShowcase"

export default function LinkPage() {
  return (
    <ComponentPageLayout
      title="Links"
      description="Strict styling paradigms for inline text routing, standalone layout actions, and external resource traversal."
      video="/videos/links-demo.mp4" 
    >
      <LinkShowcase />
    </ComponentPageLayout>
  )
}