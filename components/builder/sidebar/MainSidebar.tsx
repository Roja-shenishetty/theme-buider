"use client"

import { BookOpen, Rocket, Code, Palette, Boxes,Scale,TestTube } from "lucide-react"

const menu = [
  { id: "intro", icon: BookOpen },
  { id: "gettingstarted", icon: Rocket },
  { id: "develop", icon: Code },
  { id: "foundations", icon: Palette },
  { id: "components", icon: Boxes },
  { id: "architecture", icon: Scale },
  { id:"test", icon:TestTube }
]

type Props = {
  activeMenu: string
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>
}

export default function MainSidebar({
  activeMenu,
  setActiveMenu,
  setActiveComponent,
}: Props) {
  return (
    <aside className="main-sidebar">
      <div className="flex flex-col items-center gap-default">
        {menu.map((item) => {
          const Icon = item.icon
          const isActive = activeMenu === item.id

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveMenu(item.id)
                
                // 🔹 FIX: Map directly to the keys available in PreviewContent
                if (item.id === "components") {
                  setActiveComponent("button")
                } else if (item.id === "foundations") {
                  setActiveComponent("foundations") // Changed from "theme-editor"
                } else {
                  setActiveComponent(item.id) // Dynamically routes "intro", "develop", etc.
                }
              }}
              className={`sidebar-icon ${isActive ? "active" : ""}`}
              aria-label={item.id}
            >
              <Icon size={20} />
            </button>
          )
        })}
      </div>
    </aside>
  )
}