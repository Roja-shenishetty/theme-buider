import * as React from "react"
import { cn } from "@/lib/utils"

export const Fieldset = React.forwardRef<HTMLFieldSetElement, React.FieldsetHTMLAttributes<HTMLFieldSetElement>>(
  ({ className, ...props }, ref) => (
    <fieldset
      ref={ref}
      className={cn(
        "relative w-full space-y-4 rounded-md border border-primary/20 p-4 transition-all focus-within:border-primary/40",
        className
      )}
      {...props}
    />
  )
)
Fieldset.displayName = "Fieldset"

export const Legend = React.forwardRef<HTMLLegendElement, React.HTMLAttributes<HTMLLegendElement>>(
  ({ className, ...props }, ref) => (
    <legend
      ref={ref}
      className={cn(
        "-ml-1 px-1 text-[10px] font-bold uppercase tracking-widest text-primary/80",
        className
      )}
      {...props}
    />
  )
)
Legend.displayName = "Legend"