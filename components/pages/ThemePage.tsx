import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ThemeShowcase } from "@/components/showcase/ThemeShowCase"

export default function ThemePage() {
  return (
    <ComponentPageLayout
      title="Colors"
      description="Mathematical color generation, tonal palettes, and dynamic theme tokens driven by HSL values."
    image="/images/colors.jpg" 
    >
      <ThemeShowcase />
    </ComponentPageLayout>
  )
}