"use client"

import { useState } from "react"

type Props = {
  theme: any
  setTheme: any
  setActiveComponent: (value: string) => void
  activeComponent: string
}

export default function ControlsPanel({
  theme,
  setTheme,
  setActiveComponent,
  activeComponent,
}: Props) {
  const [activeMenu, setActiveMenu] = useState("components")

  const menu = [
    { name: "Introduction", id: "intro" },
    { name: "Quick Start", id: "quick-start" },
    { name: "Design Principles", id: "design" },
    { name: "Showcase", id: "showcase" },
    { name: "Components", id: "components" },
  ]

  const items = [
    { name: "Colors", id: "colors" },
    { name: "Typography", id: "typography" },
    { name: "Spacing", id: "spacing" },
    { name: "Radius", id: "radius" },
    { name: "Accordion", id: "accordion" },
    { name: "Alert", id: "alert" },
    { name: "AlertDialog", id: "alertdialog" },
    { name: "Autocomplete", id: "autocomplete" },
    { name: "Avatar", id: "avatar" },
    { name: "Badge", id: "badge" },
    { name: "Breadcrumbs", id: "breadcrumbs" },
    { name: "Button", id: "button" },
    { name: "ButtonGroup", id: "buttongroup" },
    { name: "Calendar", id: "calendar" },
    { name: "Card", id: "card" },
    { name: "Checkbox", id: "checkbox" },
    { name: "CheckboxGroup", id: "checkboxgroup" },
    { name: "Chip", id: "chip" },
    { name: "CloseButton", id: "closebutton" },
    { name: "ColorArea", id: "colorarea" },
    { name: "ColorField", id: "colorfield" },
    { name: "ColorSlider", id: "colorslider" },
    { name: "ColorSwatch", id: "colorswatch" },
    { name: "ColorSwatchPicker", id: "colorswatchpicker" },
    { name: "ColorPicker", id: "colorpicker" },
    { name: "ComboBox", id: "combobox" },
    { name: "DateField", id: "datefield" },
    { name: "DatePicker", id: "datepicker" },
    { name: "DateRangePicker", id: "daterangepicker" },
    { name: "Description", id: "description" },
    { name: "Disclosure", id: "disclosure" },
    { name: "DisclosureGroup", id: "disclosuregroup" },
    { name: "Drawer", id: "drawer" },
    { name: "Dropdown", id: "dropdown" },
    { name: "ErrorMessage", id: "errormessage" },
    { name: "FieldError", id: "fielderror" },
    { name: "Fieldset", id: "fieldset" },
    { name: "Form", id: "form" },
    { name: "Input", id: "input" },
    { name: "InputGroup", id: "inputgroup" },
    { name: "InputOTP", id: "inputotp" },
    { name: "Kbd", id: "kbd" },
    { name: "Label", id: "label" },
    { name: "Link", id: "link" },
    { name: "ListBox", id: "listbox" },
    { name: "Meter", id: "meter" },
    { name: "Modal", id: "modal" },
    { name: "NumberField", id: "numberfield" },
    { name: "Pagination", id: "pagination" },
    { name: "Popover", id: "popover" },
    { name: "ProgressBar", id: "progressbar" },
    { name: "ProgressCircle", id: "progresscircle" },
    { name: "RadioGroup", id: "radiogroup" },
    { name: "RangeCalendar", id: "rangecalendar" },
    { name: "ScrollShadow", id: "scrollshadow" },
    { name: "SearchField", id: "searchfield" },
    { name: "Select", id: "select" },
    { name: "Separator", id: "separator" },
    { name: "Skeleton", id: "skeleton" },
    { name: "Slider", id: "slider" },
    { name: "Spinner", id: "spinner" },
    { name: "Surface", id: "surface" },
    { name: "Switch", id: "switch" },
    { name: "Table", id: "table" },
    { name: "Tabs", id: "tabs" },
    { name: "TagGroup", id: "taggroup" },
    { name: "TextField", id: "textfield" },
    { name: "TextArea", id: "textarea" },
    { name: "TimeField", id: "timefield" },
    { name: "Toast", id: "toast" },
    { name: "Toolbar", id: "toolbar" },
    { name: "ToggleButton", id: "togglebutton" },
    { name: "ToggleButtonGroup", id: "togglebuttongroup" },
    { name: "Tooltip", id: "tooltip" },
  ]

    return (
    <div>

       {/* 🔹 MENU */}
      <ul className="sidebar-menu">
        {menu.map((item) => (
          <li key={item.id}>
            <span
  onClick={() => {
    setActiveMenu((prev) =>
      prev === item.id ? "" : item.id
    )
    setActiveComponent(item.id) // ✅ IMPORTANT
  }}
  className="sidebar-item"
>
  {item.name}
</span>
          </li>
        ))}
      </ul>

      {/* 🔥 COMPONENT LIST */}
      <ul className="sidebar-list">
  {items.map((item) => (
    <li key={item.id}>
      <span
        onClick={() => setActiveComponent(item.id)}
        className={`sidebar-link ${
          activeComponent === item.id ? "active" : ""
        }`}
      >
        {item.name}
      </span>
    </li>
  ))}
</ul>

    </div>
  )
}