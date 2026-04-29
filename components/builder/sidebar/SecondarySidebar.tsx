"use client"

import { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ThemeEditorPanel } from "./../../system/ThemeEditorPanel"

type Props = {
  activeMenu: string
  activeComponent: string
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>
}

export default function SecondarySidebar({ activeMenu, activeComponent, setActiveComponent }: Props) {
  const [openSection, setOpenSection] = useState<string | null>("Foundations")

   const data: any = {
    components: [
      {
    title: "Foundations",
    children: [
      { name: "Colors", id: "colors" },
      { name: "Typography", id: "typography" },
      { name: "Spacing", id: "spacing" },
      { name: "Borders", id: "borders" },
    ],
  },

  {
    title: "Buttons",
    children: [
      { name: "Button", id: "button" },
      { name: "Button Group", id: "buttongroup" },
      { name: "Toggle Button", id: "togglebutton" },
      { name: "Toggle Button Group", id: "togglebuttongroup" },
    ],
  },

  {
    title: "Inputs",
    children: [
      { name: "Input", id: "input" },
      { name: "Input Group", id: "inputgroup" },
      { name: "Input OTP", id: "inputotp" },
      { name: "Text Field", id: "textfield" },
      { name: "Text Area", id: "textarea" },
      { name: "Number Field", id: "numberfield" },
      { name: "Search Field", id: "searchfield" },
      { name: "Select", id: "select" },
      { name: "ComboBox", id: "combobox" },
      { name: "Autocomplete", id: "autocomplete" },
      { name: "Date Field", id: "datefield" },
      { name: "Date Picker", id: "datepicker" },
      { name: "Date Range Picker", id: "daterangepicker" },
      { name: "Time Field", id: "timefield" },
      { name: "Slider", id: "slider" },
      { name: "Switch", id: "switch" },
    ],
  },

  {
    title: "Selections",
    children: [
      { name: "Checkbox", id: "checkbox" },
      { name: "Checkbox Group", id: "checkboxgroup" },
      { name: "Radio Group", id: "radiogroup" },
      { name: "ListBox", id: "listbox" },
      { name: "Tag Group", id: "taggroup" },
    ],
  },

  {
    title: "Data Display",
    children: [
      { name: "Avatar", id: "avatar" },
      { name: "Badge", id: "badge" },
      { name: "Chip", id: "chip" },
      { name: "Table", id: "table" },
      { name: "Card", id: "card" },
      { name: "Meter", id: "meter" },
      { name: "Progress Bar", id: "progressbar" },
      { name: "Progress Circle", id: "progresscircle" },
      { name: "Skeleton", id: "skeleton" },
    ],
  },

  {
    title: "Navigation",
    children: [
      { name: "Breadcrumbs", id: "breadcrumbs" },
      { name: "Tabs", id: "tabs" },
      { name: "Pagination", id: "pagination" },
      { name: "Link", id: "link" },
    ],
  },

  {
    title: "Overlays",
    children: [
      { name: "Modal", id: "modal" },
      { name: "Popover", id: "popover" },
      { name: "Tooltip", id: "tooltip" },
      { name: "Drawer", id: "drawer" },
      { name: "Alert Dialog", id: "alertdialog" },
    ],
  },

  {
    title: "Feedback",
    children: [
      { name: "Alert", id: "alert" },
      { name: "Toast", id: "toast" },
      { name: "Spinner", id: "spinner" },
      { name: "Progress", id: "progressbar" },
    ],
  },

  {
    title: "Layout",
    children: [
      { name: "Accordion", id: "accordion" },
      { name: "Disclosure", id: "disclosure" },
      { name: "Disclosure Group", id: "disclosuregroup" },
      { name: "Separator", id: "separator" },
      { name: "Scroll Shadow", id: "scrollshadow" },
      { name: "Surface", id: "surface" },
      { name: "Toolbar", id: "toolbar" },
    ],
  },

  {
    title: "Forms",
    children: [
      { name: "Form", id: "form" },
      { name: "Label", id: "label" },
      { name: "Fieldset", id: "fieldset" },
      { name: "Field Error", id: "fielderror" },
      { name: "Error Message", id: "errormessage" },
      { name: "Description", id: "description" },
    ],
  },

  {
    title: "Colors & Pickers",
    children: [
      { name: "Color Picker", id: "colorpicker" },
      { name: "Color Field", id: "colorfield" },
      { name: "Color Area", id: "colorarea" },
      { name: "Color Slider", id: "colorslider" },
      { name: "Color Swatch", id: "colorswatch" },
      { name: "Color Swatch Picker", id: "colorswatchpicker" },
    ],
  },

  {
    title: "Utilities",
    children: [
      { name: "Kbd", id: "kbd" },
      { name: "Close Button", id: "closebutton" },
        ],
      },
    ],
  }

  const sections = data[activeMenu] || []

return (
    <div className="w-64 bg-background border-r h-full flex flex-col hide-scrollbar overflow-y-auto">
      <div className="p-4 space-group">
        
        {sections.map((section: any) => (
          <div key={section.title} className="sidebar-menu">
            <div
              onClick={() => setOpenSection(openSection === section.title ? null : section.title)}
              className={`section-header ${openSection === section.title ? "active" : ""}`}
            >
              <Typography variant="label" className="uppercase tracking-widest font-bold text-[10px]">
                {section.title}
              </Typography>
            </div>

            {openSection === section.title && (
              <div className="sidebar-list mt-1 space-y-1">
           {section.children.map((item: any) => (
  <div key={item.id}>
    <div
  onClick={() => setActiveComponent(item.id)}
  className={`sidebar-link flex justify-between items-center transition-all duration-200 
    ${activeComponent === item.id ? "active bg-primary/10" : "hover:bg-primary/5"}`}
>
  <Typography 
    variant="small" 
    className={`transition-colors duration-200 ${
      activeComponent === item.id 
        ? "text-black font-black" // 🔹 Hardcoded Black for max contrast
        : "text-muted-foreground font-medium"
    }`}
  >
    {item.name}
  </Typography>
    {activeComponent === item.id && <div className="w-1 h-1 animate-in fade-in" />}
  </div>

  {/* 🔹 THEME EDITOR: Now wrapped in a distinct, padded container */}
  {item.id === "colors" && activeComponent === "colors" && (
    <div className="my-1 rounded bg-muted/30 shadow-sm animate-in slide-in-from-left-2">
       <ThemeEditorPanel />
  </div>
                    )}

                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}