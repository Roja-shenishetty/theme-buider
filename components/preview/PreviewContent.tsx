import SpacingPage from "@/components/pages/SpacePage"
import TypographyPage from "@/components/pages/TypographyPage"
import ButtonPage from "@/components/pages/buttons/ButtonPage"
import CardPage from "@/components/pages/CardPage"
import AccordionPage from "@/components/pages/AccordionPage"
import Introduction from "@/components/showcase/LandingShowcase"
import IntroductionPage from "@/components/pages/LandingPage"
import ButtonGroupPage from "../pages/buttons/ButtonGroupPage"
import ToggleButtonPage from "../pages/buttons/ToggleButtonPage"
import ToggleButtonGroupPage from "../pages/buttons/ToggleButtonGroupPage"
import BordersPage from "@/components/pages/BordersPage"
import AlertPage from "@/components/pages/AlertPage"
import AlertboxPage from "@/components/pages/AlertboxPage"
import AvatarPage from "@/components/pages/AvatarPage"
import BadgePage from "@/components/pages/BadgePage"
import ChipPage from "@/components/pages/ChipPage"
import TablePage from "@/components/pages/TablePage"
import ThemePage from "@/components/pages/ThemePage"
import MeterPage from "../pages/MeterPage"
import ProgressBarPage from "../pages/ProgressBarPage"
import ProgressCirclePage from "../pages/ProgressCirclePage"
import SkeletonPage from "../pages/SkeletonPage"
import CheckboxPage from "../pages/CheckboxPage"
import CheckboxGroupPage from "../pages/CheckboxGroupPage"
import RadioGroupPage from "../pages/RadioGroupPage"
import ListboxPage from "../pages/ListboxPage"
import TagGroupPage from "../pages/TagGroupPage"
import BreadcrumbPage from "../pages/BreadcrumbPage"
import TabsPage from "../pages/TabsPage"
import PaginationPage from "../pages/PaginationPage"
import LinkPage from "../pages/LinkPage"

const componentMap: any = {
  intro: IntroductionPage,
  typography: TypographyPage,
  spacing: SpacingPage,  
  borders: BordersPage,
  button: ButtonPage,
  buttongroup:ButtonGroupPage,
  togglebutton:ToggleButtonPage,
  togglebuttongroup:ToggleButtonGroupPage,
  card: CardPage,
  accordion: AccordionPage,
  alert: AlertPage,
  alertdialog: AlertboxPage,
  avatar: AvatarPage,
  badge: BadgePage,
  theme: ThemePage,
  chip: ChipPage,
  table: TablePage,
  meter: MeterPage,
  progressbar: ProgressBarPage,
  progresscircle:ProgressCirclePage,
  skeleton: SkeletonPage, 
  checkbox: CheckboxPage,
  checkboxgroup: CheckboxGroupPage,
  radiogroup: RadioGroupPage,
  listbox: ListboxPage,
  taggroup: TagGroupPage,
  breadcrumbs: BreadcrumbPage,
  tabs:TabsPage,
  pagination:PaginationPage,
  link:LinkPage,
}
export default function PreviewContent({ activeComponent }: any) {
  const Component = componentMap[activeComponent] || Introduction
  return <Component />
}