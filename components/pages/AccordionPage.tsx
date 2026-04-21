import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { AccordionShowcase } from "@/components/showcase/accordions/AccordionShowcase"

export default function AccordionPage() {
  return (
    <ComponentPageLayout
      title="Accordion"
      description="Accordions organize content into collapsible sections"
      image="https://images.pexels.com/photos/34804018/pexels-photo-34804018.jpeg"
    >
      <AccordionShowcase />
    </ComponentPageLayout>
  )
}