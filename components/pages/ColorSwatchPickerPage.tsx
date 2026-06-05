import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ColorSwatchPickerShowcase } from "@/components/showcase/ColorSwatchPickerShowcase"

export default function ColorSwatchPickerPage() {
  return (
    <ComponentPageLayout
      title="Color Swatch Picker"
      description="A smart radio-group container for managing the state and layout of large tonal scales and color matrices."
      image="/images/color-swatch-picker-cover.jpg" // Update with your actual asset path
    >
      <ColorSwatchPickerShowcase />
    </ComponentPageLayout>
  )
}