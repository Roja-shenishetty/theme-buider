import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { SelectShowcase } from "@/components/showcase/SelectShowcase"

export default function SelectPage() {
  return (
    <ComponentPageLayout
      title="Select Dropdown"
      description="Accessible dropdown menus built on Radix UI, supporting focus management and DOM portaling."
      image="/images/select-cover.jpg" // Update with your actual asset path
    >
      <SelectShowcase />
    </ComponentPageLayout>
  )
}