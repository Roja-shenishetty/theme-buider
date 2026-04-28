"use client"

import { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { useThemeEngine } from "@/hooks/useThemeEngine" // 🔹 Import the brain
import { Zap, Palette, Layers, Hash } from "lucide-react"

type Props = {
  activeMenu: string
  activeComponent: string
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>
}

export default function SecondarySidebar({ activeMenu, activeComponent, setActiveComponent }: Props) {
  const { theme, setTheme } = useThemeEngine() // 🔹 Hook into global state
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
                    {/* 🔹 Standard Sidebar Link */}
                    <div
                      onClick={() => setActiveComponent(item.id)}
                      className={`sidebar-link ${activeComponent === item.id ? "active" : ""}`}
                    >
                      <Typography variant="small">{item.name}</Typography>
                    </div>

                    {/* 🔹 THEME EDITOR (SUB-COMPONENT) */}
                    {/* This only shows when you click into the Colors section */}
                    {item.id === "colors" && activeComponent === "colors" && (
                      <div className="mt-2 ml-2 p-4 radius-xl bg-primary/[0.03] border border-primary/10 space-y-4 animate-fade-up ring-1 ring-primary/5">
                        
                        {/* 1. Brand Selection */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 opacity-60">
                            <Zap className="w-3 h-3 text-primary" />
                            <Typography variant="caption" className="text-[9px] font-black uppercase">Brand Core</Typography>
                          </div>
                          <div className="flex items-center gap-3 bg-background/50 p-1.5 radius-md border border-primary/5">
                            <input 
                              type="color" 
                              value={theme.brand} 
                              onChange={(e) => setTheme({...theme, brand: e.target.value})}
                              className="w-6 h-6 radius-sm cursor-pointer border-none bg-transparent"
                            />
                            <Typography variant="code" className="text-[10px] font-bold">{theme.brand.toUpperCase()}</Typography>
                          </div>
                        </div>

                        {/* 2. Accent Selection */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 opacity-60">
                            <Palette className="w-3 h-3 text-accent" />
                            <Typography variant="caption" className="text-[9px] font-black uppercase">Accent System</Typography>
                          </div>
                          <div className="flex items-center gap-3 bg-background/50 p-1.5 radius-md border border-accent/5">
                            <input 
                              type="color" 
                              value={theme.accent} 
                              onChange={(e) => setTheme({...theme, accent: e.target.value})}
                              className="w-6 h-6 radius-sm cursor-pointer border-none bg-transparent"
                            />
                            <Typography variant="code" className="text-[10px] font-bold text-accent">{theme.accent.toUpperCase()}</Typography>
                          </div>
                        </div>

                        {/* 3. Surface Logic (Tinting) */}
                        <div className="pt-2 border-t border-primary/10">
                           <div className="flex justify-between items-center mb-2">
                             <div className="flex items-center gap-2 opacity-60">
                                <Layers className="w-3 h-3" />
                                <Typography variant="caption" className="text-[9px] font-black uppercase">Neutral Tint</Typography>
                             </div>
                             <span className="text-[10px] font-mono text-primary font-bold">{theme.neutralSat}%</span>
                           </div>
                           <input 
                             type="range" min="0" max="25" 
                             value={theme.neutralSat} 
                             onChange={(e) => setTheme({...theme, neutralSat: parseInt(e.target.value)})} 
                             className="w-full h-1 bg-primary/20 radius-full appearance-none accent-primary cursor-pointer" 
                           />
                        </div>
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