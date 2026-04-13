"use client";

import { useState, useEffect } from "react";
import { tokens as defaultTokens } from "@/theme/tokens";
import { applyTheme } from "@/theme/applyTheme";
import ColorPicker from "./ColorPicker";
import FontSelector from "./FontSelector";

type Theme = typeof defaultTokens;
type ColorKey = keyof Theme["colors"];

export default function ThemeBuilder() {
  const [theme, setTheme] = useState<Theme>(defaultTokens);

 // ✅ Load first
useEffect(() => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    setTheme(JSON.parse(saved));
  }
}, []);

// ✅ Then apply + save
useEffect(() => {
  applyTheme(theme);
  localStorage.setItem("theme", JSON.stringify(theme));
}, [theme]);

  const updateColor = (
    key: ColorKey,
    value: string,
    shade?: number
  ) => {
    setTheme((prev) => {
      const current = prev.colors[key];

      return {
        ...prev,
        colors: {
          ...prev.colors,
          [key]:
            typeof current === "object"
              ? {
                  ...(current as Record<number, string>),
                  [shade as number]: value,
                }
              : value,
        },
      };
    });
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="font-bold text-lg">🎨 Theme Builder</h2>

      {/* PRIMARY */}
      <ColorPicker
        label="Primary"
        value={theme.colors.primary[500]}
        onChange={(val) => updateColor("primary", val, 500)}
      />

      {/* SECONDARY */}
      <ColorPicker
        label="Secondary"
        value={theme.colors.secondary[500]}
        onChange={(val) => updateColor("secondary", val, 500)}
      />

      {/* BACKGROUND */}
      <ColorPicker
        label="Background"
        value={theme.colors.background}
        onChange={(val) => updateColor("background", val)}
      />

      {/* FONT */}
      <FontSelector
        value={theme.typography.fontFamily}
        onChange={(val) =>
          setTheme((prev) => ({
            ...prev,
            typography: {
              ...prev.typography,
              fontFamily: val,
            },
          }))
        }
      />
    </div>
  );
}