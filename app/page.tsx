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

  // ✅ hydration safe
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
    <div className="flex h-screen overflow-hidden">

      {/* ☰ Toggle button */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 bg-primary text-primary-foreground px-3 py-2 rounded shadow"
        >
          ☰
        </button>
      )}

      {/* 🌫 Overlay (mobile only) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
        />
      )}

      {/* ✅ Sidebar (ONLY ONCE) */}
      <div
        className={`
          fixed md:static z-40 h-full
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          transition-transform duration-300
        `}
      >
        <ControlsPanel
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      {/* ✅ Content */}
      <div
        className="flex-1 overflow-auto bg-background md:ml-20"
        onClick={() => {
          if (window.innerWidth < 768) setIsSidebarOpen(false)
        }}
      >
        <div className="min-h-full p-4 md:p-10">

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
  )
}