import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { SpacingShowcase } from "@/components/showcase/SpacingShowcase"

export default function SpacingPage() {
  return (
    <ComponentPageLayout
      title="Spacing"
      description="Spacing defines the distance between elements, helping create structure, hierarchy, and visual balance"
      image="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg"
    >
      <SpacingShowcase />
    </ComponentPageLayout>
  )
}