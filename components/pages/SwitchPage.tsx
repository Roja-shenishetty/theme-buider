import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { SwitchShowcase } from "@/components/showcase/SwitchShowcase"

export default function SwitchPage() {
  return (
    <ComponentPageLayout
      title="Switch"
      description="A binary toggle control that triggers an immediate state change, optimized for settings panels."
      image="/images/switch-cover.jpg" // Update with your actual asset path
    >
      <SwitchShowcase />
    </ComponentPageLayout>
  )
}