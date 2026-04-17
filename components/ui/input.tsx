import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-[var(--radius)] border border-border bg-background px-[var(--spacing)] py-[calc(var(--spacing)/2)] text-sm text-foreground outline-none transition-colors",
        "focus:ring-2 focus:ring-primary focus:border-primary",
        "placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
})

Input.displayName = "Input"

export { Input }