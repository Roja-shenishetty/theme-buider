"use client"

import { useState, useEffect } from "react"
import ControlsPanel from "@/components/builder/sidebar/ControlsPanel"
import { useApplyTheme } from "@/lib/useTheme"
import PreviewLayout from "@/components/preview/PreviewLayout"

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const [activeMenu, setActiveMenu] = useState("components")
  const [activeComponent, setActiveComponent] = useState("intro")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

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
      button: { radius: 16, elevation: 1 },
      card: { radius: 16, elevation: 1 },
    },
  })

  // hydration safe
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("sidebar")
    if (saved === "closed") setIsSidebarOpen(false)
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("sidebar", isSidebarOpen ? "open" : "closed")
  }, [isSidebarOpen, mounted])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useApplyTheme(theme)

  if (!mounted) return null

  return (
    <div className="flex h-screen overflow-hidden bg-background">

      {/* ☰ Toggle (mobile) */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 md:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-primary text-white shadow-lg"
        >
          ☰
        </button>
      )}

      {/* 🌫 Overlay (mobile) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
        />
      )}

      {/* ✅ Sidebar */}
      <div
  className={`
    fixed md:relative z-40
    w-64 h-full shrink-0
    bg-background border-r
    transform transition-transform duration-300
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
>
  <div className="h-full overflow-y-auto hide-scrollbar">
    <ControlsPanel
      activeMenu={activeMenu}
      setActiveMenu={setActiveMenu}
      activeComponent={activeComponent}
      setActiveComponent={setActiveComponent}
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
    />
  </div>
</div>

      {/* ✅ Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Scroll container (ONLY ONE) */}
        <div
          className="flex-1 overflow-y-auto hide-scrollbar"
          onClick={() => {
            if (window.innerWidth < 768) setIsSidebarOpen(false)
          }}
        >
          <div className="p-4 md:p-8 lg:p-10 w-full max-w-[1600px]">

            {/* 📱 Mobile preview */}
            <div className="block md:hidden">
              <div className="max-w-sm mx-auto border rounded-2xl shadow-lg overflow-hidden">
                <PreviewLayout
                  type="mobile"
                  activeComponent={activeComponent}
                />
              </div>
            </div>

            {/* 💻 Desktop preview */}
            <div className="hidden md:block">
              <PreviewLayout
                type="desktop"
                activeComponent={activeComponent}
              />
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}