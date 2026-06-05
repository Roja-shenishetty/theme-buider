import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { AutocompleteShowcase } from "@/components/showcase/AutocompleteShowcase"

export default function AutocompletePage() {
  return (
    <ComponentPageLayout
      title="Autocomplete"
      description="A smart, free-text input field that provides predictive suggestions as users type."
      image="/images/autocomplete-cover.jpg" // Update with your actual asset path
    >
      <AutocompleteShowcase />
    </ComponentPageLayout>
  )
}