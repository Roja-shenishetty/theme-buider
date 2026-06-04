import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { SearchFieldShowcase } from "@/components/showcase/SearchFieldShowcase"

export default function SearchFieldPage() {
  return (
    <ComponentPageLayout
      title="Search Field"
      description="A composed query input with integrated icons, clear actions, and shortcut hints."
      image="/images/search-field-cover.jpg" // Update with your actual asset path
    >
      <SearchFieldShowcase />
    </ComponentPageLayout>
  )
}