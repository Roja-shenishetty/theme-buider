import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { NumberFieldShowcase } from "@/components/showcase/NumberFieldShowcase"

export default function NumberFieldPage() {
  return (
    <ComponentPageLayout
      title="Number Field"
      description="Touch-friendly numeric inputs with clamped limits and step calculations."
      image="/images/number-field-cover.jpg" // Update with your actual asset path
    >
      <NumberFieldShowcase />
    </ComponentPageLayout>
  )
}