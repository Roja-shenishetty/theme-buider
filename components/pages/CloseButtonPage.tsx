import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { CloseButtonShowcase } from "@/components/showcase/CloseButtonShowcase"

export default function CloseButtonPage() {
  return (
    <ComponentPageLayout
      title="Close Button"
      description="A standardized dismiss action for cards, modals, banners, and chips."
      image="/images/close-button-cover.jpg" // Update with your actual assets
    >
      <CloseButtonShowcase />
    </ComponentPageLayout>
  )
}