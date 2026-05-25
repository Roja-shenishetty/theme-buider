import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { DisclosureShowcase } from "../showcase/DiscolsureShowcase"


export default function DisclosurePage() {
  return (
    <ComponentPageLayout
      title="Disclosure"
      description="Atomic controls for managing localized, collapsible content blocks."
      image="/images/disclosure.svg" 
    >
      <DisclosureShowcase />
    </ComponentPageLayout>
  )
}