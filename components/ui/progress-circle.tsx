"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  size?: number
  stroke?: number
  variant?: "default" | "success" | "warning" | "danger" | "accent"
  showValue?: boolean
}

const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  ({ className, value, size = 48, stroke = 4, variant = "default", showValue = false, ...props }, ref) => {
    // 🔹 SVG math for the radial progress
    const radius = (size - stroke) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (value / 100) * circumference

    return (
      <div
        ref={ref}
        className={cn(
          "progress-circle-root", 
          `progress-circle-${variant}`, // 🔹 Points to CSS: .progress-circle-danger etc.
          className
        )}
        {...props}
      >
        <svg width={size} height={size} className="progress-circle-svg">
          {/* Background Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={stroke}
            fill="transparent"
            className="progress-circle-bg"
          />
          {/* Progress Path */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={stroke}
            fill="transparent"
            strokeDasharray={circumference}
            style={{ 
              strokeDashoffset: offset,
              // Uses HSL stroke from your CSS variants
            }}
            className="progress-circle-indicator"
          />
        </svg>
        {showValue && (
          <span className="absolute progress-circle-value text-[10px] font-black tabular-nums">
            {Math.round(value)}
          </span>
        )}
      </div>
    )
  }
)
ProgressCircle.displayName = "ProgressCircle"

export { ProgressCircle }