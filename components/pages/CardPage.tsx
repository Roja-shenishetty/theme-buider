import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { CardShowcase } from "@/components/showcase/CardShowcase"

export default function CardPage() {
  return (
    <ComponentPageLayout
      title="Cards"
      description="Cards group related content and actions in a flexible container"
      image="https://images.pexels.com/photos/11780441/pexels-photo-11780441.jpeg"
    >
      <CardShowcase />
    </ComponentPageLayout>
  )
}