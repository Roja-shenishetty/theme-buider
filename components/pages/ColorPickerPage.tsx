import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ColorPickerShowcase } from "@/components/showcase/ColorPickerShowcase"

export default function ColorPickerPage() {
  return (
    <ComponentPageLayout
      title="Color Picker"
      description="A composed color selection tool featuring swatches, hex inputs, and native OS wheel access."
      image="/images/color-picker-cover.jpg" // Update with your actual asset path
    >
      <ColorPickerShowcase />
    </ComponentPageLayout>
  )
}