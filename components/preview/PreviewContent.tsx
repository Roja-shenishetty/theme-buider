import SpacingPage from "@/components/pages/SpacePage"
import TypographyPage from "@/components/pages/TypographyPage"
import RadiusPage from "@/components/pages/BordersPage"
import ButtonPage from "@/components/pages/buttons/ButtonPage"
import CardPage from "@/components/pages/CardPage"
  import AccordionPage from "@/components/pages/AccordionPage"
import Introduction from "@/components/showcase/Introduction"
import IntroductionPage from "@/components/pages/IntroPage"
import ButtonGroupPage from "../pages/buttons/ButtonGroupPage"
import ToggleButtonPage from "../pages/buttons/ToggleButtonPage"
import ToggleButtonGroupPage from "../pages/buttons/ToggleButtonGroupPage"
import BordersPage from "@/components/pages/BordersPage"

const componentMap: any = {
  intro: IntroductionPage,
  typography: TypographyPage,
  spacing: SpacingPage,   // ✅ ADD THIS
  borders: BordersPage,
  button: ButtonPage,
  buttongroup:ButtonGroupPage,
  togglebutton:ToggleButtonPage,
  togglebuttongroup:ToggleButtonGroupPage,
  card: CardPage,
  accordion: AccordionPage,
}
export default function PreviewContent({ activeComponent }: any) {
  const Component = componentMap[activeComponent] || Introduction
  return <Component />
}