"use client"

import { useState } from "react"
import ControlsPanel from "@/components/builder/ControlsPanel"
import { useApplyTheme } from "@/lib/useTheme"
import PreviewLayout from "@/components/preview/PreviewLayout"

export default function Page() {
const [activeComponent, setActiveComponent] = useState("intro") // 👈 NEW

  const [theme, setTheme] = useState({
    colors: {
      primary: "#6750A4",
      secondary: "#625B71",
      background: "#ffffff",
      surface: "#f5f5f5",
    },
    radius: 16,
    spacing: 16,
    typography: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    components: {
      button: {
        radius: 16,
        elevation: 1,
      },
      card: {
        radius: 16,
        elevation: 1,
      },
    },
  })

  useApplyTheme(theme)

  return (
    <div className="flex h-screen overflow-hidden">

      {/* LEFT PANEL */}
    <ControlsPanel
  theme={theme}
  setTheme={setTheme}
  setActiveComponent={setActiveComponent}
  activeComponent={activeComponent} // ✅ ADD THIS
/>
      {/* RIGHT PANEL */}
      <div className="flex-1 overflow-auto bg-background">
        <div className="flex min-h-full items-center justify-center gap-10 p-10">

          <PreviewLayout
            type="desktop"
            activeComponent={activeComponent} // 👈 NEW
          />

        </div>
      </div>

    </div>
  )
}