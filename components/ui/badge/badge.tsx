"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "secondary" | "accent" | "success" | "warning" | "danger" | "destructive" | "outline"

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: BadgeVariant
  tone?: "solid" | "soft"
  dot?: boolean
  placement?: "top-right" | "bottom-right" | "top-left" | "bottom-left"
  className?: string
}

export function Badge({
  className,
  variant = "default",
  tone = "solid",
  dot,
  placement,
  children,
  ...props
}: BadgeProps) {
  // Map 'destructive' to 'danger' to match your CSS semantic naming
  const normalizedVariant = variant === "destructive" ? "danger" : variant

  return (
    <div
      className={cn(
        "badge",
        `badge-${normalizedVariant}`,
        // If placement is provided, it's an overlay; otherwise, it's a standalone chip
        placement ? "badge-overlay" : "px-2.5 py-0.5 rounded-full text-[10px]",
        placement && `badge-${placement}`,
        tone === "soft" && "badge-soft",
        dot && "badge-dot",
        className
      )}
      {...props}
    >
      {!dot && children}
    </div>
  )
}