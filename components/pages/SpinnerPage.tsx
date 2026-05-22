import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { SpinnerShowcase } from "@/components/showcase/SpinnerShowcase"

export default function SpinnerPage() {
  return (
    <ComponentPageLayout
      title="Spinners"
      description="Visual indicators for asynchronous processes and system latency."
      image="/images/spinner.svg" 
    >
      <SpinnerShowcase />
    </ComponentPageLayout>
  )
}