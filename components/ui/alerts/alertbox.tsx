"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { createPortal } from "react-dom"

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
  isDismissable = false,
  isKeyboardDismissDisabled = true,
  children,
  portalContainer,
}: any) {

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // ESC handling
  React.useEffect(() => {
    if (!open) return

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isKeyboardDismissDisabled) {
        onOpenChange(false)
      }
    }

    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [open, onOpenChange, isKeyboardDismissDisabled])

  // ✅ FIX: mount only when needed
  if (!mounted || !open) return null

  const container = portalContainer ?? document.body

  const dialog = (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        placement === "top" && "items-start pt-20",
        placement === "bottom" && "items-end pb-20"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/50",
          backdrop === "blur" && "backdrop-blur-sm",
          backdrop === "transparent" && "bg-transparent"
        )}
        onClick={() => {
          if (isDismissable) onOpenChange(false)
        }}
      />

      {/* Dialog */}
      <div
        className={cn(
          "relative z-10 bg-white rounded-xl shadow-lg p-6 w-full max-w-md",
          `alert-${size}`
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        {description && (
          <p className="text-sm text-muted-foreground mb-4">
            {description}
          </p>
        )}

        {children ? (
          children
        ) : (
          <div className="flex justify-end gap-2">
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

  return createPortal(dialog, container)
}