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
import ModalPage from "../pages/ModalPage"
import PopoverPage from "../pages/PopoverPage"
import TooltipPage from "../pages/TooltipPage"
import DrawerPage from "../pages/DrawerPage"
import ToastPage from "../pages/ToastPage"
import SpinnerPage from "../pages/SpinnerPage"
import DisclosurePage from "../pages/DisclosurePage"
import DisclosureGroupPage from "../pages/DisclosureGroupPage"
import SeperatorPage from "../pages/SeperatorPage"
import ScrollShadowPage from "../pages/ScrollShadowPage"
import SurfacePage from "../pages/SurfacePage"
import ToolBarPage from "../pages/ToolBarPage"
import FormPage from "../pages/FormPage"
import LabelPage from "../pages/LabelPage"
import FieldsetPage from "../pages/FieldsetPage"
import FieldErrorPage from "../pages/FieldErrorPage"
import ErrorMessagePage from "../pages/ErrorMessagePage"
import DescriptionPage from "../pages/DescriptionPage"
import KbdPage from "../pages/KbdPage"
import CloseButtonPage from "../pages/CloseButtonPage"
import InputPage from "../pages/InputPage"
import InputGroupPage from "../pages/InputGroupPage"
import InputOtpPage from "../pages/InputOtpPage"
import TextAreaPage from "../pages/TextAreaPage"
import TextFieldPage from "../pages/TextFieldPage"
import NumberFieldPage from "../pages/NumberFieldPage"
import SearchFieldPage from "../pages/SearchFieldPage"
import SelectPage from "../pages/SelectPage"
import ComboboxPage from "../pages/ComboboxPage"
import AutocompletePage from "../pages/AutocompletePage"
import DateFieldPage from "../pages/DateFieldPage"
import DateRangePickerPage from "../pages/DateRangePickerPage"
import DatePickerPage from "../pages/DatePickerPage"
import TimeFieldPage from "../pages/TimeFieldPage"
import SliderPage from "../pages/SliderPage"
import SwitchPage from "../pages/SwitchPage"
import ColorPickerPage from "../pages/ColorPickerPage"
import ColorFieldPage from "../pages/ColorFieldPage"
import ColorAreaPage from "../pages/ColorAreaPage"
import ColorSliderPage from "../pages/ColorSliderPage"
import ColorSwatchPage from "../pages/ColorSwatchPage"
import ColorSwatchPickerPage from "../pages/ColorSwatchPickerPage"
import FoundationsPage from "../pages/FoundationsPage"
import DevelopPage from "../pages/DevelopPage"
import GettingStartedPage from "../pages/GettingStartedPage"
import ArchitecturePage from "../pages/ArchitecturePage"
import testPage from "../pages/testPage"

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
  modal:ModalPage,
  popover:PopoverPage,
  tooltip:TooltipPage,
  drawer:DrawerPage,
  toast:ToastPage,
  spinner:SpinnerPage,
  disclosure:DisclosurePage,
  disclosuregroup:DisclosureGroupPage,
  separator:SeperatorPage,
  scrollshadow:ScrollShadowPage,
  surface:SurfacePage,
  toolbar:ToolBarPage,
  form:FormPage,
  label:LabelPage,
  fieldset:FieldsetPage,
  fielderror:FieldErrorPage,
  errormessage:ErrorMessagePage,
  description:DescriptionPage,
  kbd:KbdPage,
  closebutton:CloseButtonPage,
  input:InputPage,
  inputgroup:InputGroupPage,
  inputotp:InputOtpPage,
  textarea:TextAreaPage,
  textfield:TextFieldPage,
  numberfield:NumberFieldPage,
  searchfield:SearchFieldPage,
  select:SelectPage,
  combobox:ComboboxPage,
  autocomplete:AutocompletePage,
  datefield:DateFieldPage,
  datepicker:DatePickerPage,
  daterangepicker:DateRangePickerPage,
  timefield:TimeFieldPage,
  slider:SliderPage,
  switch:SwitchPage,
  colorpicker:ColorPickerPage,
  colorfield:ColorFieldPage,
  colorarea:ColorAreaPage,
  colorslider:ColorSliderPage,
  colorswatch:ColorSwatchPage,
  colorswatchpicker:ColorSwatchPickerPage,
  foundations:FoundationsPage,
  develop:DevelopPage,
  gettingstarted:GettingStartedPage,
  architecture:ArchitecturePage,
  test:testPage,
}
export default function PreviewContent({ activeComponent }: any) {
  // If activeComponent is not found in the map, it safely falls back to Introduction
  const Component = componentMap[activeComponent] || Introduction
  return <Component />
}