"use client"

import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { FoundationsShowcase } from "@/components/showcase/FoundationsShowcase"

export default function FoundationsPage() {
  return (
    <ComponentPageLayout
      title="Foundations"
      description="The underlying design tokens, colors, spacing, and typography that power the visual identity."
      image="/images/foundations.svg" 
    >
      <FoundationsShowcase />
    </ComponentPageLayout>
  )
}