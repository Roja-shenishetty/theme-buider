"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

interface MeterProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value: number
  segments?: number
  showSegments?: boolean
}

const Meter = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  MeterProps
>(({ className, value, segments = 10, showSegments = true, ...props }, ref) => {
  
  // 🔹 Dynamic Logic: State-driven coloring using your system palette
  const getMeterColor = (val: number) => {
    if (val >= 90) return "bg-danger shadow-[0_0_15px_rgba(239,68,68,0.4)]"
    if (val >= 70) return "bg-warning"
    return "bg-primary" // Points to your --brand token
  }

  return (
    <div className="relative w-full">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-3 w-full overflow-hidden radius-md bg-primary/10 border border-primary/10",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all duration-700 ease-in-out",
            getMeterColor(value)
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>

      {/* 🔹 SYSTEM SEGMENTATION OVERLAY */}
      {showSegments && (
        <div className="absolute inset-0 flex pointer-events-none">
          {Array.from({ length: segments }).map((_, i) => (
            <div 
              key={i} 
              // Using black/40 to create the "etched" hardware look on the bar
              className="flex-1 border-r border-black/40 last:border-r-0" 
            />
          ))}
        </div>
      )}
    </div>
  )
})
Meter.displayName = "Meter"

export { Meter }