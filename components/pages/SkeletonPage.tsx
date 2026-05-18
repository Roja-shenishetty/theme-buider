"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { SkeletonShowcase } from "@/components/showcase/SkeletonShowcase"

export default function SkeletonPage() {
  return (
    <ComponentPageLayout
      title="Skeleton"
      description="Progressive rendering placeholders designed to minimize perceived latency and prevent layout shift during data hydration."
      video="/videos/skeleton-demo.mp4" 
    >
      <SkeletonShowcase />
    </ComponentPageLayout>
  )
}