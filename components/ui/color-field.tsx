"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input, type InputProps } from "@/components/ui/input"

export interface ColorFieldProps extends Omit<InputProps, "type"> {
  label?: string;
  description?: string;
  error?: string;
  containerClassName?: string;
}

const ColorField = React.forwardRef<HTMLInputElement, ColorFieldProps>(
  ({ className, containerClassName, label, description, error, id, value, defaultValue, onChange, required, ...props }, ref) => {
    
    const [internalValue, setInternalValue] = React.useState(value || defaultValue || "");
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const descriptionId = `${inputId}-description`;
    const errorId = `${inputId}-error`;

    // Sync external value
    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      onChange?.(e);
    };

    // A simple check to see if the string might be a valid color. 
    // If it's invalid, the inline style will safely fail and render transparent.
    const displayColor = typeof internalValue === "string" && internalValue.length > 2 
      ? internalValue 
      : "transparent";

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
        
        <div className="relative flex items-center">
          {/* Dynamic Color Swatch */}
          <div 
            className="absolute left-2.5 w-5 h-5 radius-sm border shadow-inner transition-colors duration-200 pointer-events-none"
            style={{ 
              backgroundColor: displayColor,
              borderColor: 'rgba(0,0,0,0.1)' 
            }}
          />
          
          <Input
            id={inputId}
            ref={ref}
            type="text"
            required={required}
            value={internalValue}
            onChange={handleChange}
            placeholder="#000000"
            className={cn(
              "pl-10 font-mono text-sm tracking-wide uppercase", // Extra padding for the swatch, mono font for hex
              error && "border-danger/50 focus:border-danger focus:ring-danger/20 text-danger bg-danger/5", 
              className
            )}
            aria-describedby={
              [description ? descriptionId : null, error ? errorId : null]
                .filter(Boolean)
                .join(" ") || undefined
            }
            aria-invalid={!!error}
            {...props}
          />
        </div>
        
        {description && !error && (
          <p id={descriptionId} className="text-[11px] text-muted-foreground">
            {description}
          </p>
        )}
        
        {error && (
          <p id={errorId} className="text-xs text-danger font-medium opacity-90 flex items-center gap-1.5 mt-1">
            {error}
          </p>
        )}
      </div>
    )
  }
)
ColorField.displayName = "ColorField"

export { ColorField }