import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { TextareaShowcase } from "@/components/showcase/TextAreaShowcase"

export default function TextareaPage() {
  return (
    <ComponentPageLayout
      title="Textarea"
      description="Multi-line text inputs for gathering robust user feedback, bios, and descriptions."
      image="/images/textarea-cover.jpg" 
    >
      <TextareaShowcase />
    </ComponentPageLayout>
  )
}