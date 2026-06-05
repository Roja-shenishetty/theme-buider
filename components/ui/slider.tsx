"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  // Radix Slider takes an array of numbers for values. 
  // We determine how many thumbs to render based on the length of the array.
  const values = props.value || props.defaultValue || [0];

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center cursor-pointer group",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden radius-full bg-primary/20 transition-colors group-hover:bg-primary/30">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      
      {values.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className={cn(
            "block h-4 w-4 radius-full border-2 border-primary bg-background shadow-sm transition-all duration-200",
            "hover:scale-110 hover:bg-primary/10",
            "focus:outline-none focus-ring focus:ring-2 focus:ring-primary/40 focus:border-primary",
            "disabled:pointer-events-none disabled:opacity-50",
            "cursor-grab active:cursor-grabbing active:scale-110"
          )}
        />
      ))}
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }