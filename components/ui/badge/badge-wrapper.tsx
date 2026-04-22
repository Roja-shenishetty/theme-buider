"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge/badge"

type BadgeWrapperProps = {
  children: React.ReactNode
  content?: React.ReactNode
  placement?: "top-right" | "bottom-right"

  variant?:
    | "default"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "danger"
    | "outline"
    | "destructive"

  tone?: "solid" | "soft"  

  dot?: boolean
  size?: "sm" | "md" | "lg"
}
export function BadgeWrapper({
  children,
  content,
  placement = "top-right",
  variant = "default",
  tone = "solid",   // ✅ default
  dot,
  size = "md",
}: BadgeWrapperProps) {
  return (
    <div className="badge-root">
      {children}

      <Badge
  variant={variant}
  size={size}
  placement={placement}
  dot={dot}
  tone={tone}   // ✅ pass it
>
  {content}
</Badge>
    </div>
  )
}