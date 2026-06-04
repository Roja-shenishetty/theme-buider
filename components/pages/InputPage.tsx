import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { InputShowcase } from "@/components/showcase/InputShowcase"

export default function InputPage() {
  return (
    <ComponentPageLayout
      title="Input"
      description="Standard text fields for data collection, search, and form submissions."
      image="/images/input-cover.jpg" // Update with your actual assets
    >
      <InputShowcase />
    </ComponentPageLayout>
  )
}