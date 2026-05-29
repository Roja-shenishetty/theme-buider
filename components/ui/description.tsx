import * as React from "react"
import { cn } from "@/lib/utils"

export interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "muted" | "technical" | "inline"
}

export const Description = React.forwardRef<HTMLParagraphElement, DescriptionProps>(
  ({ className, variant = "muted", ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "text-[11px] leading-relaxed",
          variant === "muted" && "text-muted-foreground",
          variant === "technical" && "font-mono text-[10px] uppercase opacity-70",
          variant === "inline" && "text-muted-foreground/80 italic",
          className
        )}
        {...props}
      />
    )
  }
)
Description.displayName = "Description"