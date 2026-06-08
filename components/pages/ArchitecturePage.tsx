"use client"

import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ArchitectureShowcase } from "@/components/showcase/ArchitectureShowcase"

export default function ArchitecturePage() {
  return (
    <ComponentPageLayout
      title="Architecture Decisions"
      description="Why we enforce shadcn/ui and native CSS variables over heavy component libraries like Material UI (MUI)."
      image="/images/architecture.svg" 
    >
      <ArchitectureShowcase />
    </ComponentPageLayout>
  )
}