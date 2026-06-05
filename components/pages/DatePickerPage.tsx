import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { DatePickerShowcase } from "@/components/showcase/DatePickerShowcase"

export default function DatePickerPage() {
  return (
    <ComponentPageLayout
      title="Date Picker"
      description="A standalone date selection control featuring quick presets, optimized for toolbars and inline layouts."
      image="/images/date-picker-cover.jpg" // Update with your actual asset path
    >
      <DatePickerShowcase />
    </ComponentPageLayout>
  )
}