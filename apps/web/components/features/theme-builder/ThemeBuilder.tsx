"use client";

import { useState, useEffect } from "react";
import { tokens as defaultTokens } from "@/theme/tokens";
import { applyTheme } from "@/theme/applyTheme";
import { generateShades } from "@/theme/utils/generateShades";
import ColorPicker from "../../ColorPicker";
import FontSelector from "../../FontSelector";
import { useRouter } from "next/navigation";
import { setFramework } from "@/theme/framework";

type Theme = typeof defaultTokens;
type Mode = "light" | "dark";
type ColorKey = keyof Theme["light"]["colors"];

export default function ThemeBuilder() {
  const router = useRouter();

  const [theme, setTheme] = useState<Theme>(defaultTokens);
  const [draftTheme, setDraftTheme] = useState<Theme>(defaultTokens);
  const [hasChanges, setHasChanges] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // ✅ SAFE MODE
  const getMode = (): Mode => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("mode") === "dark" ? "dark" : "light";
  };

  // ✅ LOAD THEME (DEEP MERGE)
  useEffect(() => {
    const saved = localStorage.getItem("themeTokens");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        const merged: Theme = {
          ...defaultTokens,

          light: {
            ...defaultTokens.light,
            ...parsed.light,
            colors: {
              ...defaultTokens.light.colors,
              ...(parsed.light?.colors || {}),
            },
          },

          dark: {
            ...defaultTokens.dark,
            ...parsed.dark,
            colors: {
              ...defaultTokens.dark.colors,
              ...(parsed.dark?.colors || {}),
            },
          },

          typography: {
            ...defaultTokens.typography,
            ...(parsed.typography || {}),
          },
        };

        setTheme(merged);
        setDraftTheme(merged);
      } catch (e) {
        console.error("Invalid theme JSON", e);
      }
    }
  }, []);

  // 👀 LIVE PREVIEW
  useEffect(() => {
    const mode = getMode();

    if (draftTheme?.[mode]?.colors) {
      applyTheme(draftTheme, mode);
    }
  }, [draftTheme]);

  // 🔍 CHANGE DETECTION
  useEffect(() => {
    setHasChanges(JSON.stringify(theme) !== JSON.stringify(draftTheme));
  }, [theme, draftTheme]);

  // 🎨 UPDATE COLOR
  const updateColor = (key: ColorKey, value: string, mode: Mode) => {
    setDraftTheme((prev) => {
      const currentMode = prev?.[mode] || defaultTokens[mode];

      const updatedColor =
        key === "primary" || key === "secondary"
          ? generateShades(value)
          : value;

      return {
        ...prev,
        [mode]: {
          ...currentMode,
          colors: {
            ...currentMode.colors,
            [key]: updatedColor,
          },
        },
      };
    });
  };

  // ✅ SAVE
  const handleSave = () => {
    setTheme(draftTheme);

    localStorage.setItem(
      "themeTokens",
      JSON.stringify({
        light: draftTheme.light,
        dark: draftTheme.dark,
        typography: draftTheme.typography,
      })
    );

    const mode = getMode();

    if (draftTheme?.[mode]?.colors) {
      applyTheme(draftTheme, mode);
    }

    router.push("/");
  };

  // 🚪 EXIT
  const handleExit = () => {
    if (hasChanges) {
      setShowConfirm(true);
    } else {
      router.push("/");
    }
  };

  // ❌ DISCARD
  const discardChanges = () => {
    const mode = getMode();

    if (theme?.[mode]?.colors) {
      applyTheme(theme, mode);
    }

    router.push("/");
  };

  const mode: Mode = getMode();

  const activeTheme: Theme["light"] =
    draftTheme?.[mode]?.colors
      ? draftTheme[mode]
      : defaultTokens[mode];

  return (
    <div className="p-4 space-y-6">
      <h2 className="font-bold text-lg">🎨 Theme Builder</h2>

      {/* FRAMEWORK */}
      <select
        onChange={(e) => setFramework(e.target.value as any)}
        className="input"
      >
        <option value="tailwind">Tailwind</option>
        <option value="shadcn">shadcn</option>
        <option value="mui">MUI</option>
      </select>

      {/* COLORS */}
      <ColorPicker
        label="Primary"
        value={activeTheme.colors.primary[500]}
        onChange={(val) => updateColor("primary", val, mode)}
      />

      <ColorPicker
        label="Secondary"
        value={activeTheme.colors.secondary[500]}
        onChange={(val) => updateColor("secondary", val, mode)}
      />

      <ColorPicker
        label="Background"
        value={activeTheme.colors.background}
        onChange={(val) => updateColor("background", val, mode)}
      />

      <ColorPicker
        label="Text Color"
        value={activeTheme.colors.foreground}
        onChange={(val) => updateColor("foreground", val, mode)}
      />

      <ColorPicker
        label="Muted Text"
        value={activeTheme.colors.muted}
        onChange={(val) => updateColor("muted", val, mode)}
      />

      <ColorPicker
        label="Muted Background"
        value={activeTheme.colors.mutedBg}
        onChange={(val) => updateColor("mutedBg", val, mode)}
      />

      {/* TYPOGRAPHY */}
      <FontSelector
        value={
          draftTheme.typography?.fontFamily || {
            heading: "Inter, sans-serif",
            body: "Inter, sans-serif",
          }
        }
        onChange={(val) =>
          setDraftTheme((prev) => ({
            ...prev,
            typography: {
              ...prev.typography,
              fontFamily: val,
            },
          }))
        }
      />

      {/* ACTIONS */}
      <div className="flex gap-4 pt-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Save & Exit
        </button>

        <button
          onClick={handleExit}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Exit
        </button>
      </div>

      {/* MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg space-y-4">
            <h3 className="font-semibold text-lg">Unsaved Changes</h3>
            <p>Do you want to save before exiting?</p>

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Save
              </button>

              <button
                onClick={discardChanges}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Discard
              </button>

              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}