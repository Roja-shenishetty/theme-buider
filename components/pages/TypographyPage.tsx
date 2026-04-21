import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { TypographyShowcase } from "@/components/showcase/TypographyShowcase"

export default function TypographyPage() {
  return (
    <ComponentPageLayout
      title="Typography"
      description="Typography helps establish hierarchy, readability, and visual consistency across your UI"
      image="https://images.pexels.com/photos/6475825/pexels-photo-6475825.jpeg"
    >
      <TypographyShowcase />
    </ComponentPageLayout>
  )
}