"use client"

import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { GettingStartedShowcase } from "@/components/showcase/GettingStartedShowcase"

export default function GettingStartedPage() {
  return (
    <ComponentPageLayout
      title="Getting Started"
      description="Initialize the design system, configure your global tokens, and build your first layout in minutes."
      image="/images/getting-started.svg" 
    >
      <GettingStartedShowcase />
    </ComponentPageLayout>
  )
}