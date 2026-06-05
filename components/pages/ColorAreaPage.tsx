import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ColorAreaShowcase } from "@/components/showcase/ColorAreaShowcase"

export default function ColorAreaPage() {
  return (
    <ComponentPageLayout
      title="Color Area"
      description="A dependency-free 2D dragging canvas for selecting color saturation and brightness via pointer events."
      image="/images/color-area-cover.jpg" // Update with your actual asset path
    >
      <ColorAreaShowcase />
    </ComponentPageLayout>
  )
}