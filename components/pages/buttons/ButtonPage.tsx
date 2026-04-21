import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ButtonShowcase } from "@/components/showcase/buttons/ButtonShowcase"

export default function ButtonPage() {
  return (
    <ComponentPageLayout
      title="Buttons"
      description="Buttons prompt most actions in a UI"
      video="/videos/button.mp4" // ✅ LOCAL FILE
    >
      <ButtonShowcase />
    </ComponentPageLayout>
  )
}