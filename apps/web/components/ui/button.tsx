import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-transparent border",
        ghost: "bg-transparent",
      },

      intent: {
        primary: "",
        secondary: "",
        destructive: "",
      },

      size: {
        sm: "px-3 py-1.5",
        md: "px-4 py-2",
        lg: "px-6 py-3",
      },
    },

    compoundVariants: [
      // 🔵 PRIMARY
      {
        variant: "default",
        intent: "primary",
        class: "bg-primary text-primary-foreground hover:opacity-90",
      },

      {
        variant: "outline",
        intent: "primary",
        class:
          "border-primary text-primary hover:bg-primary/10",
      },

      {
        variant: "ghost",
        intent: "primary",
        class: "text-primary hover:bg-primary/10",
      },

      // 🟢 SECONDARY
      {
        variant: "default",
        intent: "secondary",
        class:
          "bg-secondary text-secondary-foreground hover:opacity-90",
      },

      {
        variant: "outline",
        intent: "secondary",
        class:
          "border-secondary text-secondary hover:bg-secondary/10",
      },

      {
        variant: "ghost",
        intent: "secondary",
        class:
          "text-secondary hover:bg-secondary/10",
      },

      // 🔴 DESTRUCTIVE
      {
        variant: "default",
        intent: "destructive",
        class:
          "bg-destructive text-white hover:opacity-90",
      },

      {
        variant: "outline",
        intent: "destructive",
        class:
          "border-destructive text-destructive hover:bg-destructive/10",
      },

      {
        variant: "ghost",
        intent: "destructive",
        class:
          "text-destructive hover:bg-destructive/10",
      },
    ],

    defaultVariants: {
      variant: "default",
      intent: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  intent,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, intent, size }),   intent === "primary" && "btn-primary",
  intent === "secondary" && "btn-secondary",className)}
      {...props}
    />
  );
}