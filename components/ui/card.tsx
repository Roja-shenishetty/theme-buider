import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva("card", {
  variants: {
    variant: {
      default: "",
      accent: "card-accent",
      gradient: "card-gradient",
      glass: "card-glass",
      glow: "card-glow",
    },
    elevation: {
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
    interactive: {
      true: "card-hover card-clickable card-ripple",
      false: "",
    },

    /* 🔥 NEW: layout variants */
    layout: {
      default: "",
      avatar: "card-layout-avatar",
      horizontal: "card-layout-horizontal",
      image: "card-layout-image",
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

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, elevation, interactive, layout, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant, elevation, interactive, layout }),
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

/* ================= SUB COMPONENTS ================= */

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("card-header", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("card-title", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("card-description", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("card-content", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("card-footer", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

/* ================= EXPORT ================= */
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}