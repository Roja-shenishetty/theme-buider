"use client"

import { BookOpen, Rocket, Code, Palette, Boxes } from "lucide-react"
import { Button } from "@/components/ui/button"

const menu = [
  { id: "intro", icon: BookOpen },
  { id: "getting-started", icon: Rocket },
  { id: "develop", icon: Code },
  { id: "foundations", icon: Palette },
  { id: "components", icon: Boxes },
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
                // Logic to set default component per menu
                if (item.id === "components") {
                  setActiveComponent("button")
                } else if (item.id === "foundations") {
                  setActiveComponent("theme-editor")
                } else {
                  setActiveComponent("intro")
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