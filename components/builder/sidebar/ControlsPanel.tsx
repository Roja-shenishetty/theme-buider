"use client"

import MainSidebar from "./MainSidebar"
import SecondarySidebar from "./SecondarySidebar"

type Props = {
  activeMenu: string
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>
  activeComponent: string
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>
}

export default function ControlsPanel({
  activeMenu,
  setActiveMenu,
  activeComponent,
  setActiveComponent,
}: Props) {
  
  // Strictly check if we are on the components menu
  const showSecondarySidebar = activeMenu === "components"

  return (
    <div className="flex h-full w-full">
      
      {/* 1. MAIN SIDEBAR 
          We wrap it in a strict 80px (w-20) container to ensure it 
          always takes up the correct amount of space in the flex row.
      */}
      <div className="w-20 shrink-0 h-full relative z-20 bg-background border-r border-primary/10">
        <MainSidebar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          setActiveComponent={setActiveComponent}
        />
      </div>

      {/* 2. SECONDARY SIDEBAR 
          If false, this simply does not render, and the Page.tsx wrapper 
          automatically shrinks down to fit just the Main Sidebar!
      */}
      {showSecondarySidebar && (
        <div className="w-48 shrink-0 h-full bg-background relative z-10">
          <SecondarySidebar
            activeMenu={activeMenu}
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
          />
        </div>
      )}

    </div>
  )
}