import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { SliderShowcase } from "@/components/showcase/SliderShowcase"

export default function SliderPage() {
  return (
    <ComponentPageLayout
      title="Slider"
      description="An analog control input supporting continuous ranges, multi-thumb bounds, and discrete intervals."
      image="/images/slider-cover.jpg" // Update with your actual asset path
    >
      <SliderShowcase />
    </ComponentPageLayout>
  )
}