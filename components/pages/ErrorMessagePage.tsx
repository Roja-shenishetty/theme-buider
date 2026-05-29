import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ErrorMessageShowcase } from "@/components/showcase/ErrorMessageShowcase"

export default function ErrorMessagePage() {
  return (
    <ComponentPageLayout
      title="Error Messages"
      description="Persistent, high-severity alert blocks designed for communicating critical system and hardware faults."
      image="/images/error-message.svg" 
    >
      <ErrorMessageShowcase />
    </ComponentPageLayout>
  )
}