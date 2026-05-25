import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { SeparatorShowcase } from "@/components/showcase/SeperatorShowcase"

export default function SeparatorPage() {
  return (
    <ComponentPageLayout
      title="Separator"
      description="Visual dividers for establishing hierarchy and splitting dense telemetry layouts."
      image="/images/separator.svg" 
    >
      <SeparatorShowcase />
    </ComponentPageLayout>
  )
}