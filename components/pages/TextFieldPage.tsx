import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { TextFieldShowcase } from "@/components/showcase/TextFieldShowcase"

export default function TextFieldPage() {
  return (
    <ComponentPageLayout
      title="TextField"
      description="A smart, fully accessible form component that bundles labels, inputs, and validation states."
      image="/images/text-field-cover.jpg" // Update with your actual asset path
    >
      <TextFieldShowcase />
    </ComponentPageLayout>
  )
}