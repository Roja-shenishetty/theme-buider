import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { CardShowcase } from "@/components/showcase/CardShowcase"

export default function CardPage() {
  return (
    <ComponentPageLayout
      title="Cards"
      description="Cards group related content and actions in a flexible container"
      image="/images/card.jpg"
    >
      <CardShowcase />
    </ComponentPageLayout>
  )
}