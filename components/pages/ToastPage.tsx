import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ToastShowcase } from "@/components/showcase/ToastShowcase"

export default function ToastPage() {
  return (
    <ComponentPageLayout
      title="Toast & Notifications"
      description="Brief, non-interruptive popups that display system feedback and operational status."
      image="/images/toast.svg" 
    >
      <ToastShowcase />
    </ComponentPageLayout>
  )
}