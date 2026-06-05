import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { TimeFieldShowcase } from "@/components/showcase/TimeFieldShowcase"

export default function TimeFieldPage() {
  return (
    <ComponentPageLayout
      title="Time Field"
      description="A customized popover for time selection, ensuring cross-browser consistency and military time support."
      image="/images/time-field-cover.jpg" // Update with your actual asset path
    >
      <TimeFieldShowcase />
    </ComponentPageLayout>
  )
}