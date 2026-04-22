import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { AvatarShowcase } from "@/components/showcase/AvatarShowcase"

export default function AvatarPage() {
  return (
    <ComponentPageLayout
      title="Avatar"
      description="Avatars display user profile images, initials, and status."
      video="/videos/avatar.mp4"
    >
      <AvatarShowcase />
    </ComponentPageLayout>
  )
}