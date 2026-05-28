import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { LabelShowcase } from "@/components/showcase/LabelShowcase"

export default function LabelPage() {
  return (
    <ComponentPageLayout
      title="Labels"
      description="Accessible text primitives that bind descriptive text to interactive controls."
      image="/images/label.svg" 
    >
      <LabelShowcase />
    </ComponentPageLayout>
  )
}