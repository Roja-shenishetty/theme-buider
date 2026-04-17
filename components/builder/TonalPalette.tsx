"use client"

import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
} from "@material/material-color-utilities"

const tones = [0,10,20,30,40,50,60,70,80,90,95,98,99,100]

export default function TonalPalette({ color }: { color: string }) {
  const argb = argbFromHex(color)
  const theme = themeFromSourceColor(argb)

  const palette = theme.palettes.primary

  return (
    <div className="mt-4">

      <p className="text-sm text-gray-400 mb-2">
        Tonal Scale (Primary)
      </p>

     <div className="grid grid-cols-7 gap-2">
  {tones.map((tone) => {
    const hex = hexFromArgb(palette.tone(tone))

    return (
      <div key={tone} className="text-center">
        <div
          className="w-10 h-10 rounded-md shadow-sm border"
          style={{ background: hex }}
        />
        <span className="text-[10px] text-gray-400">{tone}</span>
      </div>
    )
  })}
</div>

    </div>
  )
}