import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/* 🔹 Base */
const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none disabled:opacity-50 rounded-[var(--button-radius)]"

/* 🔹 Variants */
const buttonVariants = cva(base, {
  variants: {
    variant: {
      default:
        "bg-primary text-primary-foreground hover:brightness-110",

      secondary:
        "bg-secondary text-secondary-foreground hover:brightness-110",

      tertiary:
        "bg-muted text-foreground hover:bg-muted/80",

      outline:
        "border border-border bg-transparent hover:bg-muted",

      ghost:
        "bg-transparent hover:bg-muted",

      link:
        "text-primary underline-offset-4 hover:underline",

      danger:
        "bg-red-600 text-white hover:bg-red-700",

      "danger-soft":
        "bg-red-100 text-red-600 hover:bg-red-200",
    },

    size: {
      default: "h-10 px-4 text-sm",
      sm: "h-9 px-3 text-sm",
      lg: "h-11 px-8 text-base",
      icon: "h-10 w-10 p-0",
    },

    fullWidth: {
      true: "w-full",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

/* 🔹 Types */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

/* 🔹 Component */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          className
        )}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && (
          <span className="animate-spin text-xs">⏳</span>
        )}
        {children}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }