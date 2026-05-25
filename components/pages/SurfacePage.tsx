import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { SurfaceShowcase } from "@/components/showcase/SurfaceShowcase"

export default function SurfacePage() {
  return (
    <ComponentPageLayout
      title="Surfaces"
      description="Fundamental layout primitives that manage elevation, depth, and nested container hierarchy."
      image="/images/surface.svg" 
    >
      <SurfaceShowcase />
    </ComponentPageLayout>
  )
}