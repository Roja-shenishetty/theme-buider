import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const toolbarVariants = cva(
  "inline-flex items-center gap-1 overflow-hidden transition-all",
  {
    variants: {
      variant: {
        default: "bg-background border border-primary/10 p-1",
        glass: "bg-background/60 backdrop-blur-md border border-primary/15 shadow-lg shadow-primary/5 p-1.5",
        sunken: "bg-black/5 dark:bg-white/5 border border-primary/5 p-1 shadow-inner",
      },
      radius: {
        sm: "radius-sm",
        md: "radius-md",
        lg: "radius-lg",
        full: "radius-full",
      },
    },
    defaultVariants: {
      variant: "default",
      radius: "md",
    },
  }
)

export interface ToolbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toolbarVariants> {}

export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ className, variant, radius, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="toolbar"
        className={cn(toolbarVariants({ variant, radius, className }))}
        {...props}
      />
    )
  }
)
Toolbar.displayName = "Toolbar"

// Helper for grouping items with a subtle background
export const ToolbarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-1 bg-black/5 dark:bg-white/5 p-0.5 radius-sm", className)} {...props} />
  )
)
ToolbarGroup.displayName = "ToolbarGroup"