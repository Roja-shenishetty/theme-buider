"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type BadgeVariant =
  | "default"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "destructive"
  | "outline"

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: BadgeVariant
  size?: "sm" | "md" | "lg"
  placement?: "top-right" | "bottom-right" | "top-left" | "bottom-left"
  dot?: boolean
    tone?: "solid" | "soft"  
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  placement = "top-right",
  dot,
  children,
  tone = "solid",
  ...props
}: BadgeProps) {
  const normalizedVariant =
    variant === "destructive" ? "danger" : variant
    const toneClass =
  tone === "soft" ? "badge-soft" : "badge-solid"

  return (
    <div
   className={cn(
  "badge",
  `badge-${normalizedVariant}`,
  `badge-${size}`,
  `badge-${placement}`,
  toneClass,
  dot && "badge-dot",
  className
)}
      {...props}
    >
      {!dot && children}
    </div>
  )
}