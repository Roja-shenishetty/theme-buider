"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?:
    | "default"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "success-soft"
    | "warning-soft"
    | "danger-soft"
    | "success-filled"
    | "warning-filled"
    | "danger-filled"

  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode

  action?: {
    label: string
    onClick: () => void
  }

  onClose?: () => void
  loading?: boolean
}

export function Alert({
  variant = "default",
  icon,
  title,
  description,
  action,
  onClose,
  loading,
  className,
  ...props
}: AlertProps) {

  const variantClass =
    variant === "default"
      ? "alert"
      : `alert alert-${variant}`

  return (
    <div className={cn("alert", variantClass, className)} {...props}>

      {/* ICON */}
      {(icon || loading) && (
        <div className="flex items-center justify-center">
          {loading ? (
            <span className="animate-spin">
              {icon}
            </span>
          ) : (
            icon
          )}
        </div>
      )}

      {/* CONTENT */}
      <div className="flex-1 space-group">

        {title && (
          <div className="alert-title">
            {title}
          </div>
        )}

        {description && (
          <div className="alert-description">
            {description}
          </div>
        )}

        {action && (
          <button
            onClick={action.onClick}
            className="mt-2 text-caption text-primary font-medium"
          >
            {action.label}
          </button>
        )}
      </div>

      {/* CLOSE */}
      {onClose && (
        <button onClick={onClose} className="alert-close">
          ✕
        </button>
      )}

    </div>
  )
}