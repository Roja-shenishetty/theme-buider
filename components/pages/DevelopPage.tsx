"use client"

import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { DevelopShowcase } from "@/components/showcase/DevelopShowcase"

export default function DevelopPage() {
  return (
    <ComponentPageLayout
      title="Develop"
      description="Engineering guidelines, component architecture, and how to consume the design system in your applications."
      image="/images/develop.svg" 
    >
      <DevelopShowcase />
    </ComponentPageLayout>
  )
}