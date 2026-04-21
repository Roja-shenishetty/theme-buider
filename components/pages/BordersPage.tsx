import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { BordersShowcase } from "@/components/showcase/BordersShowcase"

export default function BordersPage() {
  return (
    <ComponentPageLayout
      title="Spacing & Borders"
      description="Spacing and borders define the structure and separation of elements. Use margin, padding, border width, color, and radius to create clear, consistent layouts."
      image="/images/borders.png" // ✅ update this image
    >
      <BordersShowcase />
    </ComponentPageLayout>
  )
}