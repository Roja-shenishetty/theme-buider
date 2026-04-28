import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { TypographyShowcase } from "@/components/showcase/TypographyShowcase"

export default function TypographyPage() {
  return (
    <ComponentPageLayout
      title="Typography"
      description="Typography helps establish hierarchy, readability, and visual consistency across your UI"
      image="/images/typography.jpeg"
    >
      <TypographyShowcase />
    </ComponentPageLayout>
  )
}