import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { DateRangePickerShowcase } from "@/components/showcase/DateRangePickerShowcase"

export default function DateRangePickerPage() {
  return (
    <ComponentPageLayout
      title="Date Range Picker"
      description="An advanced double-calendar input for selecting temporal spans, querying analytics, and booking durations."
      image="/images/date-range-picker-cover.jpg" // Update with your actual asset path
    >
      <DateRangePickerShowcase />
    </ComponentPageLayout>
  )
}