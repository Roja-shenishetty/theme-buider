import * as React from "react"
import { Loader2 } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "animate-spin",
  {
    variants: {
      variant: {
        default: "text-primary",
        muted: "text-muted-foreground",
        background: "text-background",
        success: "text-success", // Uses your custom success token
        danger: "text-danger",   // Uses your custom danger token
      },
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface SpinnerProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof spinnerVariants> {}

export function Spinner({ className, variant, size, ...props }: SpinnerProps) {
  return (
    <Loader2
      className={cn(spinnerVariants({ variant, size, className }))}
      {...props}
    />
  )
}