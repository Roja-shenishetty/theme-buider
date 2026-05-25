import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ScrollShadowShowcase } from "@/components/showcase/ScrollShadowShowcase"

export default function ScrollShadowPage() {
  return (
    <ComponentPageLayout
      title="Scroll Shadow"
      description="Visual overlay indicators for constrained, overflowable content blocks."
      image="/images/scroll-shadow.svg" 
    >
      <ScrollShadowShowcase />
    </ComponentPageLayout>
  )
}