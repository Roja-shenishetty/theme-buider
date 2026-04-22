"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type AvatarProps = {
  src?: string
  alt?: string
  fallback?: React.ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant?: "soft" | "solid"
  color?: "default" | "accent" | "success" | "warning" | "danger"
  status?: "online" | "offline" | "busy"
  className?: string
  delayMs?: number
  fallbackClassName?: string
}

export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  variant = "soft",
  color,
  status,
  className,
  delayMs,
}: AvatarProps) {
  const [error, setError] = React.useState(false)
  const [showFallback, setShowFallback] = React.useState(!src)

  React.useEffect(() => {
    if (!src || error) {
      if (delayMs) {
        const t = setTimeout(() => setShowFallback(true), delayMs)
        return () => clearTimeout(t)
      } else {
        setShowFallback(true)
      }
    } else {
      setShowFallback(false)
    }
  }, [src, error, delayMs])

  return (
    <div
      className={cn(
        "avatar",
        `avatar-${size}`,
        color ? `avatar-${color}` : `avatar-${variant}`,
        className
      )}
    >
      {/* Image */}
      {src && !error && !showFallback ? (
        <img
          src={src}
          alt={alt}
          className="avatar-img"
          onError={() => setError(true)}
        />
      ) : (
        <span className="avatar-fallback">
          {fallback || "?"}
        </span>
      )}

      {/* Status */}
      {status && (
        <span className={cn("avatar-status", `avatar-${status}`)} />
      )}
    </div>
  )
}