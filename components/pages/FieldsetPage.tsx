import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { FieldsetShowcase } from "@/components/showcase/FieldsetShowcase"

export default function FieldsetPage() {
  return (
    <ComponentPageLayout
      title="Fieldset & Legend"
      description="Semantic HTML wrappers for grouping related form controls and propagating disabled states."
      image="/images/fieldset.svg" 
    >
      <FieldsetShowcase />
    </ComponentPageLayout>
  )
}