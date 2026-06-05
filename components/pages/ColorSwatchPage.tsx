import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ColorSwatchShowcase } from "@/components/showcase/ColorSwatchShowcase"

export default function ColorSwatchPage() {
  return (
    <ComponentPageLayout
      title="Color Swatch"
      description="An accessible, interactive button primitive representing a single color value, complete with dynamic luminance checking."
      image="/images/color-swatch-cover.jpg" // Update with your actual asset path
    >
      <ColorSwatchShowcase />
    </ComponentPageLayout>
  )
}