"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex h-6 w-6 items-center justify-center radius-sm bg-transparent text-muted-foreground opacity-70 transition-all hover:bg-muted/50 hover:text-foreground hover:opacity-100 focus-ring focus:ring-2 disabled:pointer-events-none",
          className
        )}
        {...props}
      >
        <X className="h-3.5 w-3.5 stroke-[2.5]" />
        <span className="sr-only">Close</span>
      </button>
    )
  }
)
CloseButton.displayName = "CloseButton"

export { CloseButton }