import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ColorFieldShowcase } from "@/components/showcase/ColorFieldShowcase"

export default function ColorFieldPage() {
  return (
    <ComponentPageLayout
      title="Color Field"
      description="A specialized text input for explicit hexadecimal and RGB color string entry, featuring an inline visual swatch."
      image="/images/color-field-cover.jpg" // Update with your actual asset path
    >
      <ColorFieldShowcase />
    </ComponentPageLayout>
  )
}