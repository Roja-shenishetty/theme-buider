import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const surfaceVariants = cva(
  "relative w-full transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-background border border-primary/10 text-foreground",
        sunken: "bg-black/5 dark:bg-white/5 border border-primary/5 shadow-inner text-muted-foreground",
        elevated: "bg-background border border-primary/10 shadow-xl shadow-primary/5 z-10",
        glass: "bg-background/60 backdrop-blur-md border border-primary/10",
        accent: "bg-primary/5 border border-primary/20 text-primary",
      },
      radius: {
        none: "radius-none",
        sm: "radius-sm",
        md: "radius-md",
        lg: "radius-lg",
        xl: "radius-xl",
        full: "radius-full",
      },
      padding: {
        none: "p-0",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
      }
    },
    defaultVariants: {
      variant: "default",
      radius: "md",
      padding: "md",
    },
  }
)

export interface SurfaceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceVariants> {
  as?: React.ElementType
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, variant, radius, padding, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(surfaceVariants({ variant, radius, padding, className }))}
        {...props}
      />
    )
  }
)

Surface.displayName = "Surface"