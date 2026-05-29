import * as React from "react"
import { cn } from "@/lib/utils"
import { AlertCircle } from "lucide-react"

export interface FieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** The error message to display. If omitted, it renders the children. */
  error?: string | React.ReactNode
  /** Whether to show the leading alert icon. Defaults to true. */
  showIcon?: boolean
}

export const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, error, children, showIcon = true, ...props }, ref) => {
    const content = error || children

    // If there is no error, do not render the DOM element to prevent layout spacing issues
    if (!content) return null

    return (
      <p
        ref={ref}
        role="alert"
        aria-live="polite"
        className={cn(
          "flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-danger animate-fade-up",
          className
        )}
        {...props}
      >
        {showIcon && <AlertCircle className="w-3 h-3 shrink-0" />}
        <span>{content}</span>
      </p>
    )
  }
)

FieldError.displayName = "FieldError"