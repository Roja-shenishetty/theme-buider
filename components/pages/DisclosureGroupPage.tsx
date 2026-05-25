// app/components/disclosure-group/page.tsx
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { DisclosureGroupShowcase } from "@/components/showcase/DisclosureGroupShowcase"

export default function DisclosureGroupPage() {
  return (
    <ComponentPageLayout
      title="Disclosure Groups"
      description="Stacked, globally orchestrated collapsible containers for deep system logs."
      image="/images/disclosure-group.svg" 
    >
      <DisclosureGroupShowcase />
    </ComponentPageLayout>
  )
}