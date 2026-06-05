"use client"

import { useState, useEffect } from "react"
import ControlsPanel from "@/components/builder/sidebar/ControlsPanel"
import { useApplyTheme } from "@/lib/useTheme"
import PreviewLayout from "@/components/preview/PreviewLayout"
import { Menu } from "lucide-react"

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
      if (window.innerWidth < 768) setIsSidebarOpen(false)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useApplyTheme(theme)

  if (!mounted) return null

  const isComponentsActive = activeMenu === "components";

  return (
    <div className="flex h-screen overflow-hidden bg-background">

      {/* 🔹 Toggle (mobile) */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-5 left-5 z-50 md:hidden h-12 w-14 flex items-center justify-center rounded-full 
                     bg-background/80 backdrop-blur-md border border-primary/20 text-foreground 
                     shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] hover:shadow-lg hover:border-primary/40 
                     active:scale-95 transition-all duration-300 ease-out"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-180" />
        </button>
      )}

      {/* 🌫 Overlay (mobile) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
        />
      )}

      {/* ✅ Sidebar Wrapper */}
      <div
        className={`
          fixed md:relative z-40
          h-full shrink-0
          bg-background border-r
          transform transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isComponentsActive ? "w-[192px]" : "w-20"} 
        `}
      >
        <div className="h-full overflow-y-auto hide-scrollbar">
          <ControlsPanel
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
          />
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="flex-1 flex flex-col">
        <div
          className="flex-1 overflow-y-auto hide-scrollbar"
          onClick={() => {
            if (window.innerWidth < 768) setIsSidebarOpen(false)
          }}
        >
          <div className="p-4 md:p-8 lg:p-10 w-full max-w-[1600px]">
            <div className="block md:hidden">
              <div className="max-w-sm mx-auto border rounded-2xl shadow-lg overflow-hidden">
                <PreviewLayout type="mobile" activeComponent={activeComponent} />
              </div>
            </div>
            <div className="hidden md:block">
              <PreviewLayout type="desktop" activeComponent={activeComponent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}