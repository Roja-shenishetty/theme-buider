import { useState } from "react"

type Props = {
  activeMenu: string
  activeComponent: string
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>
}

 export default function SecondarySidebar({
  activeMenu,
  activeComponent,
  setActiveComponent,
}: Props) {
  const [openSection, setOpenSection] = useState<string | null>(null)

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
    <div className="w-48 bg-background border-r p-3 h-full">
      
      {/* ❗ EMPTY STATE */}
      {sections.length === 0 && (
        <div className="text-sm text-muted-foreground px-3">
          No items available
        </div>
      )}

      {sections.map((section: any) => (
        <div key={section.title} className="mb-3">

          <div
  onClick={() =>
    setOpenSection(
      openSection === section.title ? null : section.title
    )
  }
  className={`section-header ${
    openSection === section.title ? "active" : ""
  }`}
>
  {section.title}
</div>

          {/* 🔥 CHILD ITEMS */}
          {openSection === section.title && (
            <div className="ml-2 mt-1 space-y-1">
              {section.children.map((item: any) => (
                <div
                  key={item.id}
                  onClick={() => setActiveComponent(item.id)}
                  className={`px-3 py-2 rounded-xl text-sm cursor-pointer transition
                    ${
                      activeComponent === item.id
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}