"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ColorAreaProps {
  /** The currently selected color in hex format (e.g., "#3b82f6") */
  value?: string;
  /** Callback fired when the user drags the thumb */
  onChange?: (value: string) => void;
  /** The base hue color to render the gradient over (e.g., "#0000ff"). If not provided, defaults to pure red. */
  hue?: string;
  className?: string;
  disabled?: boolean;
}

// --- Helper Functions for Color Math ---
// These ensure we can map X/Y coordinates to Hex values without a heavy library.

function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 255, g: 0, b: 0 };
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function getRgbAtPosition(x: number, y: number, baseHueHex: string) {
  const hueRgb = hexToRgb(baseHueHex);
  
  // X axis represents Saturation (0 to 1)
  // Y axis represents Value/Brightness (1 to 0)
  
  // Interpolate between white (left) and hue (right)
  const rTop = 255 - (255 - hueRgb.r) * x;
  const gTop = 255 - (255 - hueRgb.g) * x;
  const bTop = 255 - (255 - hueRgb.b) * x;
  
  // Interpolate between top color and black (bottom)
  const r = Math.round(rTop * (1 - y));
  const g = Math.round(gTop * (1 - y));
  const b = Math.round(bTop * (1 - y));
  
  return { r, g, b };
}

const ColorArea = React.forwardRef<HTMLDivElement, ColorAreaProps>(
  ({ value = "#ff0000", onChange, hue = "#ff0000", className, disabled }, ref) => {
    
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    
    // Position of the thumb (0 to 1)
    const [position, setPosition] = React.useState({ x: 1, y: 0 });

    // Handle initial value positioning (simplified approximation for demo)
    // In a production app, you'd convert Hex -> HSV to perfectly position the thumb initially.
    // For this implementation, we focus on the drag-to-hex output.

    const handleMove = React.useCallback(
      (clientX: number, clientY: number) => {
        if (disabled || !containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        
        // Clamp values between 0 and 1
        let x = (clientX - rect.left) / rect.width;
        let y = (clientY - rect.top) / rect.height;
        
        x = Math.max(0, Math.min(1, x));
        y = Math.max(0, Math.min(1, y));
        
        setPosition({ x, y });
        
        // Calculate new color
        const newRgb = getRgbAtPosition(x, y, hue);
        const newHex = rgbToHex(newRgb.r, newRgb.g, newRgb.b);
        onChange?.(newHex);
      },
      [disabled, hue, onChange]
    );

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
      if (disabled) return;
      setIsDragging(true);
      handleMove(e.clientX, e.clientY);
      // Capture pointer events so dragging works even if the cursor leaves the div
      e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      if (isDragging) {
        handleMove(e.clientX, e.clientY);
      }
    };

    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
      setIsDragging(false);
      e.currentTarget.releasePointerCapture(e.pointerId);
    };

    return (
      <div
        ref={(node) => {
          // Merge refs
          (containerRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          "relative w-full h-48 radius-md overflow-hidden touch-none select-none",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none",
          className
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          // The base layer is the solid Hue color
          backgroundColor: hue,
        }}
      >
        {/* White gradient layer (Saturation: left to right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        
        {/* Black gradient layer (Brightness: top to bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />

        {/* The Dragging Thumb */}
        <div
          className={cn(
            "absolute w-4 h-4 -ml-2 -mt-2 radius-full border-2 border-white shadow-md bg-transparent pointer-events-none transition-transform duration-75",
            isDragging ? "scale-110" : "scale-100"
          )}
          style={{
            left: `${position.x * 100}%`,
            top: `${position.y * 100}%`,
            boxShadow: '0 0 0 1px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.2)'
          }}
        />
      </div>
    )
  }
)
ColorArea.displayName = "ColorArea"

export { ColorArea }