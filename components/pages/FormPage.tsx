import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { FormShowcase } from "@/components/showcase/FormShowcase"

export default function FormPage() {
  return (
    <ComponentPageLayout
      title="Forms & Inputs"
      description="High-density data entry structures utilizing Zod validation and strict typography for telemetry control."
      image="/images/form.svg" 
    >
      <FormShowcase />
    </ComponentPageLayout>
  )
}