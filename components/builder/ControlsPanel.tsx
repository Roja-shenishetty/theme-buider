"use client"

import { useState } from "react"
import Tabs from "./Tabs"
import TonalPalette from "./TonalPalette"

export default function ControlsPanel({ theme, setTheme }: any) {
  const [activeTab, setActiveTab] = useState("colors")

  return (
    <div className="w-80 p-6 border-r bg-neutral-900 text-white flex flex-col">

      <h2 className="text-xl font-semibold mb-4">Theme Builder</h2>

      <Tabs active={activeTab} setActive={setActiveTab} />

      {/* CONTENT */}
      <div className="flex flex-col gap-6">

        {activeTab === "colors" && (
  <div className="flex flex-col gap-4">

    {/* 🎨 Color Pickers */}
    {["primary", "secondary", "background", "surface"].map((key) => (
      <div key={key} className="bg-neutral-800 p-3 rounded-lg">
        <label className="text-sm capitalize">{key}</label>

        <input
          type="color"
          value={theme.colors[key]}
          onChange={(e) =>
            setTheme({
              ...theme,
              colors: {
                ...theme.colors,
                [key]: e.target.value,
              },
            })
          }
          className="w-full h-10 mt-2 cursor-pointer"
        />
      </div>
    ))}

    {/* 🔥 ADD THIS (IMPORTANT) */}
    <div className="mt-4">
      <p className="text-sm text-gray-400 mb-2">Tonal Palette</p>
      <TonalPalette color={theme.colors.primary} />
    </div>

  </div>
)}

        {/* 🔤 TYPOGRAPHY */}
        {activeTab === "typography" && (
          <div className="flex flex-col gap-4">

            <div>
              <label className="text-sm">Font Size: {theme.fontSize}px</label>
              <input
                type="range"
                min="12"
                max="24"
                value={theme.fontSize}
                onChange={(e) =>
                  setTheme({ ...theme, fontSize: +e.target.value })
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm">Font Weight: {theme.fontWeight}</label>
              <input
                type="range"
                min="300"
                max="800"
                step="100"
                value={theme.fontWeight}
                onChange={(e) =>
                  setTheme({ ...theme, fontWeight: +e.target.value })
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm">Line Height: {theme.lineHeight}</label>
              <input
                type="range"
                min="1"
                max="2"
                step="0.1"
                value={theme.lineHeight}
                onChange={(e) =>
                  setTheme({ ...theme, lineHeight: +e.target.value })
                }
                className="w-full"
              />
            </div>

          </div>
        )}

        {/* 📏 SPACING */}
        {activeTab === "spacing" && (
          <div>
            <label className="text-sm">Spacing: {theme.spacing}px</label>
            <input
              type="range"
              min="8"
              max="40"
              value={theme.spacing}
              onChange={(e) =>
                setTheme({ ...theme, spacing: +e.target.value })
              }
              className="w-full"
            />
          </div>
        )}

        {/* 📐 LAYOUT */}
        {activeTab === "layout" && (
  <div className="flex flex-col gap-4">

    <div>
      <label>Button Radius: {theme.components.button.radius}px</label>
      <input
        type="range"
        min="4"
        max="40"
        value={theme.components.button.radius}
        onChange={(e) =>
          setTheme({
            ...theme,
            components: {
              ...theme.components,
              button: {
                ...theme.components.button,
                radius: +e.target.value,
              },
            },
          })
        }
      />
    </div>

    <div>
      <label>Card Radius: {theme.components.card.radius}px</label>
      <input
        type="range"
        min="4"
        max="40"
        value={theme.components.card.radius}
        onChange={(e) =>
          setTheme({
            ...theme,
            components: {
              ...theme.components,
              card: {
                ...theme.components.card,
                radius: +e.target.value,
              },
            },
          })
        }
      />
    </div>

  </div>
)}

      </div>
    </div>
  )
}