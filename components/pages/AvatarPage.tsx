import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { AvatarShowcase } from "@/components/showcase/AvatarShowcase"

export default function AvatarPage() {
  return (
    <ComponentPageLayout
      title="Avatar"
      description="Avatars display user profile images, initials, and status."
      image="/images/avatar.jpg"
    >
      <AvatarShowcase />
    </ComponentPageLayout>
  )
}