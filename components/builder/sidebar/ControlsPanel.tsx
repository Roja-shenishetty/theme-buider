"use client"

import MainSidebar from "./MainSidebar"
import SecondarySidebar from "./SecondarySidebar"

type Props = {
  activeMenu: string
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>
  activeComponent: string
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ControlsPanel({
  activeMenu,
  setActiveMenu,
  activeComponent,
  setActiveComponent,
  isSidebarOpen,
}: Props) {
  return (
    <div
      className={`fixed md:relative z-40 h-full transition-transform duration-300
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      flex`}
    >
      <MainSidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setActiveComponent={setActiveComponent}
      />

      <SecondarySidebar
        activeMenu={activeMenu}
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
    </div>
  )
}