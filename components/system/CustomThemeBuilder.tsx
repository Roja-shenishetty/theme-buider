"use client"

import { useThemeEngine } from "@/hooks/useThemeEngine"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Settings, RefreshCw } from "lucide-react"

export function CustomThemeBuilder() {
  const { theme, setTheme } = useThemeEngine();

  // 🔹 Renamed to match the usage below
  const updateThemeValue = (key: string, val: string) => {
    setTheme((prev: any) => ({ ...prev, [key]: val }));
  };
  
  return (
    <div className="p-8 rounded-[2rem] border border-border bg-card shadow-lg">
      <div className="flex items-center gap-3 mb-8">
        <Settings className="text-primary" />
        <h3 className="text-xl font-black">Build Custom Theme</h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-1">
            <Label>Brand Primary</Label>
            <div className="flex gap-2">
              <Input type="color" value={theme.brand} onChange={(e) => updateThemeValue('brand', e.target.value)} className="w-12 h-9 p-1 cursor-pointer" />
              <Input value={theme.brand} onChange={(e) => updateThemeValue('brand', e.target.value)} className="font-mono" />
            </div>
          </div>

          <div className="space-y-1">
            <Label>Page Background</Label>
            <div className="flex gap-2">
              <Input type="color" value={theme.bgPage} onChange={(e) => updateThemeValue('bgPage', e.target.value)} className="w-12 h-9 p-1 cursor-pointer" />
              <Input value={theme.bgPage} onChange={(e) => updateThemeValue('bgPage', e.target.value)} className="font-mono" />
            </div>
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-xl border border-border flex flex-col items-center justify-center gap-4">
           <div className="w-16 h-16 rounded-full shadow-lg" style={{ backgroundColor: theme.brand }} />
           <span className="text-xs font-bold uppercase tracking-widest">Active State</span>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-border flex justify-end">
         <Button variant="outline" onClick={() => window.location.reload()}>
            <RefreshCw className="w-4 h-4 mr-2" /> Reset System
         </Button>
      </div>
    </div>
  )
}