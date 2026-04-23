"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva("card", {
  variants: {
    variant: {
      default: "card-default",
      accent: "card-accent",
      subtle: "card-subtle",
      glass: "card-glass",
      outline: "card-outline",

      // 🔥 NEW
      "top-accent": "card-top-accent",
    },

    elevation: {
      none: "",
      sm: "card-elevation-sm",
      md: "card-elevation-md",
      lg: "card-elevation-lg",
    },

    interactive: {
      true: "card-interactive",
      false: "",
    },

    layout: {
      default: "",
      media: "card-layout-media",
      horizontal: "card-layout-horizontal",
      avatar: "card-layout-avatar",
    },
  },

  defaultVariants: {
    variant: "default",
    elevation: "sm",
    interactive: false,
    layout: "default",
  },
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, elevation, interactive, layout, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, elevation, interactive, layout }),
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

/* 🔹 Sub components */

export const CardHeader = ({ className, ...props }: any) => (
  <div className={cn("card-header", className)} {...props} />
)

export const CardTitle = ({ className, ...props }: any) => (
  <div className={cn("card-title", className)} {...props} />
)

export const CardDescription = ({ className, ...props }: any) => (
  <div className={cn("card-description", className)} {...props} />
)

export const CardContent = ({ className, ...props }: any) => (
  <div className={cn("card-content", className)} {...props} />
)

export const CardFooter = ({ className, ...props }: any) => (
  <div className={cn("card-footer", className)} {...props} />
)
