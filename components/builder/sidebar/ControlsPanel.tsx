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
    <div className="flex">

      {/* SIDEBAR (fixed) */}
      <MainSidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setActiveComponent={setActiveComponent}
      />

      {/* CONTENT WRAPPER */}
      <div className="ml-20 flex">
        <SecondarySidebar
          activeMenu={activeMenu}
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      </div>

    </div>
  )
}