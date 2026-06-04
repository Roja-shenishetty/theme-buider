import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { KbdShowcase } from "@/components/showcase/KbdShowcase"

export default function KbdPage() {
  return (
    <ComponentPageLayout
      title="Keyboard Shortcut (Kbd)"
      description="Visual indicators for physical keystrokes, shortcuts, and commands."
      image="/images/kbd-cover.jpg" // Update with your actual cover image path
    >
      <KbdShowcase />
    </ComponentPageLayout>
  )
}