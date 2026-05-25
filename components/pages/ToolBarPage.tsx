import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ToolbarShowcase } from "@/components/showcase/ToolBarShowcase"

export default function ToolbarPage() {
  return (
    <ComponentPageLayout
      title="Toolbars"
      description="Command clusters for organizing high-density actions, tool switching, and data filters."
      image="/images/toolbar.svg" 
    >
      <ToolbarShowcase />
    </ComponentPageLayout>
  )
}