import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { InputGroupShowcase } from "@/components/showcase/InputGroupShowcase"

export default function InputGroupPage() {
  return (
    <ComponentPageLayout
      title="Input Group"
      description="Extend text inputs with prefixes, suffixes, and integrated actions."
      image="/images/input-group-cover.jpg" // Update with your actual assets
    >
      <InputGroupShowcase />
    </ComponentPageLayout>
  )
}