"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calender"

export interface DateFieldProps {
  label?: string;
  description?: string;
  error?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  containerClassName?: string;
  /** Pass standard react-day-picker props (like min/max dates) */
  calendarProps?: Omit<React.ComponentProps<typeof Calendar>, "mode" | "selected" | "onSelect">;
}

const DateField = React.forwardRef<HTMLButtonElement, DateFieldProps>(
  ({ 
    label, 
    description, 
    error, 
    value, 
    onChange, 
    placeholder = "Pick a date", 
    disabled,
    containerClassName,
    calendarProps
  }, ref) => {
    
    const [open, setOpen] = React.useState(false);
    const generatedId = React.useId();
    const descriptionId = `${generatedId}-description`;
    const errorId = `${generatedId}-error`;

    return (
      <div className={cn("space-y-1.5 w-full", containerClassName)}>
        {label && (
          <label className={cn("text-sm font-semibold transition-colors", error ? "text-danger" : "text-foreground")}>
            {label}
          </label>
        )}

        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
          <PopoverPrimitive.Trigger asChild>
            <button
              ref={ref}
              type="button"
              disabled={disabled}
              aria-invalid={!!error}
              aria-describedby={[description ? descriptionId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined}
              className={cn(
                "flex h-10 w-full items-center justify-between radius-md border bg-background px-3 py-2 text-sm text-foreground transition-colors duration-200",
                "hover:border-primary/40",
                "focus:outline-none focus-ring focus:ring-2 focus:ring-primary/30",
                "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50",
                error ? "border-danger focus:border-danger focus:ring-danger/20 text-danger bg-danger/5" : "border-primary/20",
                !value && "text-muted-foreground",
              )}
            >
              {value ? format(value, "PPP") : <span>{placeholder}</span>}
              <CalendarIcon className={cn("h-4 w-4 opacity-50", error && "text-danger opacity-70")} />
            </button>
          </PopoverPrimitive.Trigger>
          
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              align="start"
              sideOffset={4}
              className={cn(
                "z-50 w-auto radius-md border border-primary/10 bg-background p-0 text-foreground shadow-lg",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
              )}
            >
              <Calendar
                mode="single"
                selected={value}
                onSelect={(date: Date | undefined) => {
                  onChange?.(date);
                  setOpen(false);
                }}
                initialFocus
                {...calendarProps}
              />
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>

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
DateField.displayName = "DateField"

export { DateField }