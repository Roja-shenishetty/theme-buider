import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { DescriptionShowcase } from "@/components/showcase/DescriptionShowcase"

export default function DescriptionPage() {
  return (
    <ComponentPageLayout
      title="Descriptions"
      description="Micro-typography primitives for providing contextual guidance and system metadata."
      image="/images/description.svg" 
    >
      <DescriptionShowcase />
    </ComponentPageLayout>
  )
}