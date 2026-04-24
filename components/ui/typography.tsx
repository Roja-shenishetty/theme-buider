import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
   variant: {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4", 
  body: "text-body",
  muted: "text-body-muted",
  small: "text-small",
  label: "text-label",
  caption: "text-caption",
  code: "text-code",
}
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

const defaultTags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  muted: "p",
  small: "span",
  label: "span",
  caption: "span",
  code: "code",
}

export function Typography({
  as,
  className,
  variant,
  ...props
}: TypographyProps) {
  const resolvedVariant = variant ?? "body"

  const Component =
    as || defaultTags[resolvedVariant] || "p"

  return (
    <Component
      className={cn(
        typographyVariants({ variant: resolvedVariant }),
        className
      )}
      {...props}
    />
  )
}