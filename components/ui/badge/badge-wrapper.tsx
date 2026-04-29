"use client"

import * as React from "react"
import { Badge } from "./badge"

type BadgeWrapperProps = {
  children: React.ReactNode
  content?: React.ReactNode
  placement?: "top-right" | "bottom-right" | "top-left" | "bottom-left"
  variant?: any
  tone?: "solid" | "soft"
  dot?: boolean
  className?: string // This applies to the Badge itself
}

export function BadgeWrapper({
  children,
  content,
  placement = "top-right",
  variant = "default",
  tone = "solid",
  dot = false,
  className,
}: BadgeWrapperProps) {
  return (
    <div className="relative inline-flex align-middle">
      {children}
      {(dot || content) && (
        <Badge
          variant={variant}
          placement={placement}
          dot={dot}
          tone={tone}
          className={className}
        >
          {content}
        </Badge>
      )}
    </div>
  )
}