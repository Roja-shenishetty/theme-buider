"use client"

import {
  BookOpen,
  Rocket,
  Code,
  Palette,
  Boxes,
} from "lucide-react"

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
  setActiveComponent, // ✅ ADD THIS
}: Props) {
  return (
    <div className="main-sidebar">
      {menu.map((item) => {
        const Icon = item.icon

        return (
          <button
            key={item.id}
            onClick={() => {
              setActiveMenu(item.id)

              // 🔥 IMPORTANT FIX
              if (item.id === "components") {
                setActiveComponent("button")
              } else {
                setActiveComponent("intro")
              }
            }}
            className={`sidebar-icon ${
              activeMenu === item.id ? "active" : ""
            }`}
          >
            <Icon size={20} />
          </button>
        )
      })}
    </div>
  )
}