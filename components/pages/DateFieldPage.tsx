import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { DateFieldShowcase } from "@/components/showcase/DateFieldShowcase"

export default function DateFieldPage() {
  return (
    <ComponentPageLayout
      title="Date Field"
      description="A smart date picker input powered by Radix Popover, React DayPicker, and date-fns."
      image="/images/date-field-cover.jpg" // Update with your actual asset path
    >
      <DateFieldShowcase />
    </ComponentPageLayout>
  )
}