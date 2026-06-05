import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ColorSliderShowcase } from "@/components/showcase/ColorSliderShowcase"

export default function ColorSliderPage() {
  return (
    <ComponentPageLayout
      title="Color Slider"
      description="A 1D linear track engineered for Hue spectrums and Alpha transparency, powered by native pointer events."
      image="/images/color-slider-cover.jpg" // Update with your actual asset path
    >
      <ColorSliderShowcase />
    </ComponentPageLayout>
  )
}