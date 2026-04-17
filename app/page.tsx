"use client"
import { useState, useEffect} from "react"
import { Button } from "@/components/ui/button"
import { generateTheme } from "@/lib/theme"

export default function Page() {
  const [color, setColor] = useState("#6750A4")
 

useEffect(() => {
  const theme = generateTheme(color)

  document.documentElement.style.setProperty("--primary", theme.primary)
  document.documentElement.style.setProperty("--secondary", theme.secondary)
  document.documentElement.style.setProperty("--background", theme.background)
  document.documentElement.style.setProperty("--foreground", theme.foreground)
}, [color])

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
</div>

      {/* RIGHT PANEL */}
      <div className="flex flex-1 items-center justify-center gap-4 bg-background text-foreground">

  <Button>
    Primary Button
  </Button>

  <Button variant="secondary">
    Secondary Button
  </Button>

  <div className="bg-primary text-primary-foreground p-6 rounded-lg">
    Primary Card
  </div>

  <div className="bg-secondary text-secondary-foreground p-6 rounded-lg">
    Secondary Card
  </div>

</div>

    </div>
  )
}