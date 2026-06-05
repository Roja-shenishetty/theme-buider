import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ComboboxShowcase } from "@/components/showcase/ComboboxShowcase"

export default function ComboboxPage() {
  return (
    <ComponentPageLayout
      title="Combobox"
      description="A searchable dropdown powered by Radix Popover and CMDK, optimized for long datasets."
      image="/images/combobox-cover.jpg" // Update with your actual asset path
    >
      <ComboboxShowcase />
    </ComponentPageLayout>
  )
}