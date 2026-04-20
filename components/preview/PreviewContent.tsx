import Introduction from "@/components/showcase/Introduction"
import { ButtonShowcase } from "@/components/showcase/ButtonShowcase"
import { CardShowcase } from "../showcase/CardShowcase"
import { TypographyShowcase } from "../showcase/TypographyShowcase"
import { SpacingShowcase } from "../showcase/SpacingShowcase"
import { RadiusShowcase } from "../showcase/RadiusShowcase"
import { AccordionShowcase } from "../showcase/accordions/AccordionShowcase"

export default function PreviewContent({
  activeComponent,
}: {
  activeComponent: string
}) {
  switch (activeComponent) {
    case "intro":
      return <Introduction />
    case "typography":
      return <TypographyShowcase />
    case "spacing":
    return <SpacingShowcase />

  case "radius":
    return <RadiusShowcase />

    case "button":
      return <ButtonShowcase />

    case "card":
      return <CardShowcase />
   
    case "accordion":return <AccordionShowcase />

    default:
      return null
  }
}