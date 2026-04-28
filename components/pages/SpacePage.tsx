import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { SpacingShowcase } from "@/components/showcase/SpacingShowcase"

export default function SpacingPage() {
  return (
    <ComponentPageLayout
      title="Spacing"
      description="Spacing defines the distance between elements, helping create structure, hierarchy, and visual balance"
      image="/images/spacing.jpg"
    >
      <SpacingShowcase />
    </ComponentPageLayout>
  )
}