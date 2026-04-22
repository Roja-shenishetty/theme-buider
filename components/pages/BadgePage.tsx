import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { BadgeShowcase } from "@/components/showcase/BadgeShowcase"

export default function BadgePage() {
  return (
    <ComponentPageLayout
      title="Badge"
      description="Badges display counts, notifications, and statuses"
      video="/videos/badge.mp4"
    >
      <BadgeShowcase />
    </ComponentPageLayout>
  )
}