"use client"
import { useState, useEffect} from "react"
import { Button } from "@/components/ui/button"

function hexToHsl(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0, s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }

    h /= 6
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}

export default function Page() {
  const [color, setColor] = useState("#6750A4")
  const [secondary, setSecondary] = useState("#625B71")

useEffect(() => {
  document.documentElement.style.setProperty("--primary", hexToHsl(color))
  document.documentElement.style.setProperty("--secondary", hexToHsl(secondary))
}, [color, secondary])

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* LEFT PANEL */}
      <div style={{
  width: "280px",
  padding: 20,
  borderRight: "1px solid #e5e7eb",
  background: "black",
  color: "white",
  display: "flex",
  flexDirection: "column",
}}>
  <h2 style={{ marginBottom: 20 }}>Theme Builder</h2>

  {/* Primary */}
  <div>
    <label>Primary Color</label>
    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
  </div>

  {/* Secondary */}
  <div style={{ marginTop: 20 }}>
    <label>Secondary Color</label>
    <input type="color" value={secondary} onChange={(e) => setSecondary(e.target.value)} />
  </div>
</div>

      {/* RIGHT PANEL */}
      <div className="flex flex-1 items-center justify-center bg-background text-foreground">
   <Button variant="secondary">
  Preview Button
</Button>
      </div>

    </div>
  )
}