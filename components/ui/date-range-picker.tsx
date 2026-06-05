"use client"

import * as React from "react"
import { format, subDays, startOfMonth, endOfMonth } from "date-fns"
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react"
import { DateRange } from "react-day-picker"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calender"

export interface DateRangePickerProps {
  label?: string;
  description?: string;
  error?: string;
  date?: DateRange;
  onChange?: (date: DateRange | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  containerClassName?: string;
  /** If true, shows a sidebar with quick selection presets (e.g., "Last 7 Days") */
  showPresets?: boolean;
  className?: string;
}

const DateRangePicker = React.forwardRef<HTMLButtonElement, DateRangePickerProps>(
  ({ 
    label, 
    description, 
    error, 
    date, 
    onChange, 
    placeholder = "Pick a date range", 
    disabled,
    containerClassName,
    showPresets = false,
    className
  }, ref) => {
    
    const [open, setOpen] = React.useState(false);
    const generatedId = React.useId();
    const descriptionId = `${generatedId}-description`;
    const errorId = `${generatedId}-error`;

    const today = new Date();

    const presets = [
      { label: "Today", range: { from: today, to: today } },
      { label: "Last 7 Days", range: { from: subDays(today, 6), to: today } },
      { label: "Last 30 Days", range: { from: subDays(today, 29), to: today } },
      { label: "This Month", range: { from: startOfMonth(today), to: endOfMonth(today) } },
    ];

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
                "flex h-10 w-full items-center justify-between radius-md border bg-background px-3 py-2 text-sm text-foreground transition-colors duration-200 shadow-sm",
                "hover:border-primary/40",
                "focus:outline-none focus-ring focus:ring-2 focus:ring-primary/30",
                "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50",
                error ? "border-danger focus:border-danger focus:ring-danger/20 text-danger bg-danger/5" : "border-primary/20",
                !date && "text-muted-foreground",
                className
              )}
            >
              <div className="flex items-center gap-2">
                <CalendarIcon className={cn("h-4 w-4 opacity-70", error && "text-danger")} />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} <span className="text-muted-foreground mx-1">-</span> {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>{placeholder}</span>
                )}
              </div>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </button>
          </PopoverPrimitive.Trigger>
          
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              align="start"
              sideOffset={4}
              className={cn(
                "z-50 flex flex-col sm:flex-row radius-md border border-primary/10 bg-background p-0 text-foreground shadow-lg overflow-hidden",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
              )}
            >
              {/* Optional Preset Sidebar */}
              {showPresets && (
                <div className="flex sm:flex-col gap-1 p-3 border-b sm:border-b-0 sm:border-r border-primary/10 bg-muted/20 sm:w-40 overflow-x-auto custom-scrollbar">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 hidden sm:block px-2">
                    Quick Ranges
                  </span>
                  {presets.map((preset, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        onChange?.(preset.range);
                        setOpen(false);
                      }}
                      className="text-xs font-medium text-left px-3 py-2 radius-sm hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Main Calendar Engine */}
              <div className="p-1">
                <Calendar
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={onChange}
                  numberOfMonths={2} // Shows two months side-by-side
                  className="sm:p-3"
                />
              </div>
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
DateRangePicker.displayName = "DateRangePicker"

export { DateRangePicker }