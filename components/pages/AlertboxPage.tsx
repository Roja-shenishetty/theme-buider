import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { AlertDialogShowcase } from "@/components/showcase/alerts/AlertboxShowcase"

export default function AlertDialogPage() {
  return (
    <ComponentPageLayout
      title="Alert Dialog"
      description="Dialogs that require user confirmation before proceeding"
      image="/images/alertbox.jpg" 
    >
      <AlertDialogShowcase />
    </ComponentPageLayout>
  )
}