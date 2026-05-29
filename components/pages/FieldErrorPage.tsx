import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { FieldErrorShowcase } from "@/components/showcase/FieldErrorShowcase"

export default function FieldErrorPage() {
  return (
    <ComponentPageLayout
      title="Field Error"
      description="Micro-typography alerts for providing immediate, contextual validation feedback on user inputs."
      image="/images/field-error.svg" 
    >
      <FieldErrorShowcase />
    </ComponentPageLayout>
  )
}