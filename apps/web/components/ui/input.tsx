import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full rounded-md text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring",
  {
    variants: {
      variant: {
        default:
          "border border-border bg-white text-foreground placeholder:text-muted",

        filled:
          "bg-mutedBg border border-transparent focus:bg-white",

        ghost:
          "bg-transparent border border-border",
      },

      size: {
        sm: "px-3 py-1.5",
        md: "px-4 py-2",
        lg: "px-5 py-3",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export function Input({ className, variant, size, ...props }: InputProps) {
  return (
    <input
      className={cn(inputVariants({ variant, size }), className)}
      {...props}
    />
  );
}