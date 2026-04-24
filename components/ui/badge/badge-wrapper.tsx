"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge/badge"

type Placement = "top-right" | "bottom-right" | "top-left" | "bottom-left"

type BadgeWrapperProps = {
  children: React.ReactNode
  content?: React.ReactNode
  placement?: Placement
  variant?: any
  tone?: "solid" | "soft"
  dot?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export function BadgeWrapper({
  children,
  content,
  placement = "top-right",
  variant = "default",
  tone = "solid",
  dot = false,
  size = "md",
  className,
}: BadgeWrapperProps) {
  const showBadge = dot || content

  return (
    <div className="relative inline-block">
      {children}

      {showBadge && (
        <div className={className}>
          <Badge
            variant={variant}
            size={size}
            placement={placement}
            dot={dot}
            tone={tone}
          >
            {content}
          </Badge>
        </div>
      )}
    </div>
  )
}