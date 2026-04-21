import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ToggleButtonGroupShowcase } from "@/components/showcase/buttons/ToggleButtonGroupShowcase"

export default function ButtonPage() {
  return (
    <ComponentPageLayout
      title="Buttons"
      description="Buttons prompt most actions in a UI"
      image="https://images.pexels.com/photos/4835416/pexels-photo-4835416.jpeg"
    >
      <ToggleButtonGroupShowcase/>
    </ComponentPageLayout>
  )
}