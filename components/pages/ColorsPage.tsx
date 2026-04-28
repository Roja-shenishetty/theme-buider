import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ColorShowcase } from "@/components/showcase/ColorShowcase"

export default function ColorsPage() {
  return (
    <ComponentPageLayout
      title="Colors"
      description="Mathematical color generation, tonal palettes, and dynamic theme tokens driven by HSL values."
    image="/images/colors1.jpg" 
    >
      <ColorShowcase />
    </ComponentPageLayout>
  )
}