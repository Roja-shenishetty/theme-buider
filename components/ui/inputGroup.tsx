"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-stretch w-full radius-md border border-primary/20 bg-background overflow-hidden transition-colors duration-200",
          "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30",
          "hover:border-primary/40",
          className
        )}
        {...props}
      />
    )
  }
)
InputGroup.displayName = "InputGroup"

const InputPrefix = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center px-3 text-sm text-muted-foreground bg-muted/30 border-r border-primary/10 select-none",
          className
        )}
        {...props}
      />
    )
  }
)
InputPrefix.displayName = "InputPrefix"

const InputSuffix = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center px-3 text-sm text-muted-foreground bg-muted/30 border-l border-primary/10 select-none",
          className
        )}
        {...props}
      />
    )
  }
)
InputSuffix.displayName = "InputSuffix"

/**
 * Helper class to remove default borders/rings from the standard Input 
 * when placed inside an InputGroup wrapper.
 */
const inputGroupItemClasses = "border-0 focus-visible:ring-0 focus:ring-0 shadow-none bg-transparent radius-none";

export { InputGroup, InputPrefix, InputSuffix, inputGroupItemClasses }