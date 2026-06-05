"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ColorSliderProps {
  /** Value between 0 and 360 (for Hue) or 0 and 100 (for Alpha) */
  value?: number;
  onChange?: (value: number) => void;
  /** "hue" or "alpha" */
  type?: "hue" | "alpha";
  /** If type="alpha", pass the base color string (e.g., "#3b82f6") so the gradient matches */
  baseColor?: string;
  className?: string;
  disabled?: boolean;
}

const ColorSlider = React.forwardRef<HTMLDivElement, ColorSliderProps>(
  ({ value = 0, onChange, type = "hue", baseColor = "#000000", className, disabled }, ref) => {
    
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);

    // Max value depends on slider type
    const maxValue = type === "hue" ? 360 : 100;
    
    // Clamp internal value safely
    const safeValue = Math.max(0, Math.min(maxValue, value));
    const percentage = safeValue / maxValue;

    const handleMove = React.useCallback(
      (clientX: number) => {
        if (disabled || !containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        
        // Calculate percentage along the X axis
        let p = (clientX - rect.left) / rect.width;
        p = Math.max(0, Math.min(1, p));
        
        // Output the new scaled value
        onChange?.(Math.round(p * maxValue));
      },
      [disabled, maxValue, onChange]
    );

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
      if (disabled) return;
      setIsDragging(true);
      handleMove(e.clientX);
      e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
      setIsDragging(false);
      e.currentTarget.releasePointerCapture(e.pointerId);
    };

    // Calculate background track styles
    const trackStyle = React.useMemo(() => {
      if (type === "hue") {
        return {
          background: "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)"
        };
      }
      if (type === "alpha") {
        return {
          // Alpha uses a checkerboard pattern underneath a solid color-to-transparent gradient
          backgroundImage: `
            linear-gradient(to right, transparent, ${baseColor}),
            repeating-conic-gradient(#e5e7eb 0% 25%, white 0% 50%)
          `,
          backgroundSize: "100% 100%, 12px 12px"
        };
      }
      return {};
    }, [type, baseColor]);

    // Calculate thumb color preview
    const thumbColor = type === "hue" ? `hsl(${safeValue}, 100%, 50%)` : baseColor;

    return (
      <div
        ref={(node) => {
          (containerRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          "relative w-full h-4 radius-full touch-none select-none cursor-pointer",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none",
          className
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={trackStyle}
      >
        {/* The Dragging Thumb */}
        <div
          className={cn(
            "absolute top-1/2 -ml-2.5 -mt-2.5 w-5 h-5 radius-full border-2 border-white shadow-md transition-transform duration-75 pointer-events-none",
            isDragging ? "scale-110" : "scale-100"
          )}
          style={{
            left: `${percentage * 100}%`,
            backgroundColor: thumbColor,
            boxShadow: '0 0 0 1px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.2)'
          }}
        />
      </div>
    )
  }
)
ColorSlider.displayName = "ColorSlider"

export { ColorSlider }