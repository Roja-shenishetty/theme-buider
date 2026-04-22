"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const alertVariants = cva("alert", {
  variants: {
    variant: {
      default: "alert-default",
      success: "alert-success",
      warning: "alert-warning",
      danger: "alert-danger",
      info: "alert-info",

      "success-soft": "alert-success-soft",
      "warning-soft": "alert-warning-soft",
      "danger-soft": "alert-danger-soft",

      "success-filled": "alert-success-filled",
      "warning-filled": "alert-warning-filled",
      "danger-filled": "alert-danger-filled",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants> & {
    title?: string
    description?: string
    loading?: boolean
    action?: {
      label: string
      onClick?: () => void
    }
    onClose?: () => void
  }

export function Alert({
  className,
  variant,
  title,
  description,
  loading,
  action,
  onClose,
  children,
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {/* Spinner */}
      {loading && <span className="alert-spinner" />}

      {/* Content */}
      <div className="alert-content">
        {title && <p className="alert-title">{title}</p>}

        {description && (
          <p className="alert-description">{description}</p>
        )}

        {children}

        {/* Action */}
        {action && (
          <div className="alert-action">
            <Button
              size="sm"
              variant="secondary"
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          </div>
        )}
      </div>

      {/* Close */}
      {onClose && (
        <button onClick={onClose} className="alert-close">
          ✕
        </button>
      )}
    </div>
  )
}