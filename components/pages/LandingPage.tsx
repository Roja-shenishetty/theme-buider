import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import Introduction from "@/components/showcase/LandingShowcase"

export default function IntroductionPage() {
  return (
    <ComponentPageLayout
      title="Introduction"
      description="Get started with the design system and explore its core concepts, principles, and components"
     video="/videos/intro.mp4" 
    >
      <Introduction />
    </ComponentPageLayout>
  )
}