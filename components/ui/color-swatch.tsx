"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export interface ColorSwatchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The hex, rgb, or hsl color string */
  value: string;
  /** Accessible label for screen readers (e.g., "Red 500") */
  label?: string;
  /** Forces the active styling (ring and checkmark) */
  isSelected?: boolean;
  /** Toggles the internal checkmark rendering when selected */
  showCheckmark?: boolean;
}

const ColorSwatch = React.forwardRef<HTMLButtonElement, ColorSwatchProps>(
  ({ className, value, label, isSelected, showCheckmark = true, ...props }, ref) => {
    
    // Quick luminance calculation to ensure the checkmark is always visible
    const isLight = React.useMemo(() => {
      // Very basic check: strip # and calculate YIQ
      const hex = value.replace("#", "");
      if (hex.length !== 6 && hex.length !== 3) return true; // fallback
      
      const r = parseInt(hex.length === 3 ? hex[0]+hex[0] : hex.slice(0, 2), 16) || 0;
      const g = parseInt(hex.length === 3 ? hex[1]+hex[1] : hex.slice(2, 4), 16) || 0;
      const b = parseInt(hex.length === 3 ? hex[2]+hex[2] : hex.slice(4, 6), 16) || 0;
      
      const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      return yiq >= 128;
    }, [value]);

    return (
      <button
        ref={ref}
        type="button"
        role="radio"
        aria-checked={isSelected}
        aria-label={label || `Color ${value}`}
        title={label || value}
        className={cn(
          "relative flex items-center justify-center shrink-0 w-8 h-8 radius-sm border shadow-sm transition-all duration-200",
          "focus:outline-none focus-ring focus:ring-2 focus:ring-primary/40 focus:ring-offset-1 focus:ring-offset-background",
          "hover:scale-110 active:scale-95",
          isSelected ? "ring-2 ring-primary ring-offset-1 ring-offset-background z-10" : "border-primary/10",
          className
        )}
        style={{ backgroundColor: value, ...props.style }}
        {...props}
      >
        {isSelected && showCheckmark && (
          <Check 
            className={cn(
              "w-4 h-4 transition-colors", 
              isLight ? "text-black/80" : "text-white drop-shadow-md"
            )} 
          />
        )}
      </button>
    )
  }
)
ColorSwatch.displayName = "ColorSwatch"

export { ColorSwatch }