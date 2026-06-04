"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input, type InputProps } from "@/components/ui/input"

export interface TextFieldProps extends InputProps {
  label?: string;
  description?: string;
  error?: string;
  containerClassName?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, containerClassName, label, description, error, id, required, ...props }, ref) => {
    // Auto-generate IDs for accessibility linking if one isn't provided
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const descriptionId = `${inputId}-description`;
    const errorId = `${inputId}-error`;

    return (
      <div className={cn("space-y-1.5 w-full", containerClassName)}>
        {label && (
          <label 
            htmlFor={inputId} 
            className={cn(
              "text-sm font-semibold transition-colors",
              error ? "text-danger" : "text-foreground"
            )}
          >
            {label}
            {required && <span className="text-danger ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        
        <Input
          id={inputId}
          ref={ref}
          required={required}
          className={cn(
            error && "border-danger/50 focus:border-danger focus:ring-danger/20 text-danger bg-danger/5", 
            className
          )}
          // Automatically link description and error messages for screen readers
          aria-describedby={
            [description ? descriptionId : null, error ? errorId : null]
              .filter(Boolean)
              .join(" ") || undefined
          }
          aria-invalid={!!error}
          {...props}
        />
        
        {/* Helper Text - Hides if there is an error to prevent visual clutter */}
        {description && !error && (
          <p id={descriptionId} className="text-[11px] text-muted-foreground">
            {description}
          </p>
        )}
        
        {/* Error Text */}
        {error && (
          <p id={errorId} className="text-xs text-danger font-medium opacity-90 flex items-center gap-1.5 mt-1">
            {error}
          </p>
        )}
      </div>
    )
  }
)
TextField.displayName = "TextField"

export { TextField }