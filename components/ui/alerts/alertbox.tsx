"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { createPortal } from "react-dom"

type AlertDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: React.ReactNode

  confirmText?: string
  cancelText?: string
  onConfirm?: () => void

  variant?: "default" | "danger"
  placement?: "top" | "center" | "bottom"
  backdrop?: "opaque" | "blur" | "transparent"
  backdropClassName?: string
  size?: "xs" | "sm" | "md" | "lg" | "cover"
  icon?: React.ReactNode
  isDismissable?: boolean
  isKeyboardDismissDisabled?: boolean

  children?: React.ReactNode
  portalContainer?: HTMLElement | null
}

export function AlertDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  variant = "default",
  placement = "center",
  backdrop = "opaque",
  size = "md",
  icon,
  backdropClassName,
  isDismissable = false,
  isKeyboardDismissDisabled = true,
  children,
  portalContainer,
}: AlertDialogProps) {

  // ✅ Don't render when closed
  if (!open) return null

  // ✅ ESC handling
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isKeyboardDismissDisabled) {
        onOpenChange(false)
      }
    }

    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onOpenChange, isKeyboardDismissDisabled])

  // ✅ Dialog JSX
 const isPortal = !!portalContainer

const dialog = (
  <div
    className={cn(
      "alert-overlay",
      isPortal && "portal",
      placement === "top" && "alert-top",
      placement === "center" && "alert-center",
      placement === "bottom" && "alert-bottom"
    )}
  >
    {/* Backdrop */}
    <div
      className={cn(
        "alert-backdrop",
        backdrop
      )}
      onClick={() => {
        if (isDismissable) onOpenChange(false)
      }}
    />

    {/* Dialog */}
    <div
      className={cn(
        "alert-dialog",
        `alert-${size}`
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="alert-header">
        {icon && (
          <div className={cn("alert-icon", variant)}>
            {icon}
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      </div>

      {/* Body */}
      <div className="alert-body">{description}</div>

      {/* Footer */}
      {children ? (
        <div className="pt-4">{children}</div>
      ) : (
        <div className="alert-footer">
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            {cancelText}
          </Button>

          <Button
            variant={variant === "danger" ? "danger" : "default"}
            onClick={() => {
              onConfirm?.()
              onOpenChange(false)
            }}
          >
            {confirmText}
          </Button>
        </div>
      )}
    </div>
  </div>
)

  // ✅ Portal support
  return portalContainer
    ? createPortal(dialog, portalContainer)
    : dialog
}