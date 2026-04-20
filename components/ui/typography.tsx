import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      body: "text-body",
      muted: "text-body-muted",
      small: "text-small",
      label: "text-label",
      caption: "text-caption",
      code: "text-code",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}

export function Typography({
  as: Comp = "p",
  className,
  variant,
  ...props
}: TypographyProps) {
  return (
    <Comp
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  )
}