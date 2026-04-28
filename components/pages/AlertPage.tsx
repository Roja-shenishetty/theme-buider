import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { AlertShowcase } from "@/components/showcase/alerts/AlertShowcase"

export default function AlertPage() {
  return (
    <ComponentPageLayout
      title="Alerts"
      description="Alerts display important messages, feedback, and system status to users."
      image="/images/alert.svg" 
    >
      <AlertShowcase />
    </ComponentPageLayout>
  )
}