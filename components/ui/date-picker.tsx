"use client"

import * as React from "react"
import { format, addDays } from "date-fns"
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calender"

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  /** If true, shows a sidebar with quick selection presets */
  showPresets?: boolean;
  /** Pass standard react-day-picker props (like min/max dates) */
  calendarProps?: Omit<React.ComponentProps<typeof Calendar>, "mode" | "selected" | "onSelect">;
}

const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ 
    value, 
    onChange, 
    placeholder = "Pick a date", 
    disabled,
    className,
    showPresets = false,
    calendarProps
  }, ref) => {
    
    const [open, setOpen] = React.useState(false);
    const today = new Date();

    const presets = [
      { label: "Today", date: today },
      { label: "Tomorrow", date: addDays(today, 1) },
      { label: "In 3 days", date: addDays(today, 3) },
      { label: "In a week", date: addDays(today, 7) },
    ];

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            className={cn(
              "flex h-10 w-full items-center justify-between radius-md border bg-background px-3 py-2 text-sm text-foreground transition-colors duration-200 shadow-sm",
              "hover:border-primary/40",
              "focus:outline-none focus-ring focus:ring-2 focus:ring-primary/30 focus:border-primary",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50",
              "border-primary/20",
              !value && "text-muted-foreground",
              className
            )}
          >
            <div className="flex items-center gap-2 truncate">
              <CalendarIcon className="h-4 w-4 shrink-0 opacity-70" />
              <span className="truncate">
                {value ? format(value, "PPP") : placeholder}
              </span>
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-50 ml-2" />
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
            {/* Quick Presets Sidebar */}
            {showPresets && (
              <div className="flex sm:flex-col gap-1 p-2 border-b sm:border-b-0 sm:border-r border-primary/10 bg-muted/20 sm:w-36 overflow-x-auto custom-scrollbar">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 hidden sm:block px-2 pt-1">
                  Quick Select
                </span>
                {presets.map((preset, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      onChange?.(preset.date);
                      setOpen(false);
                    }}
                    className="text-xs font-medium text-left px-3 py-2 radius-sm hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            )}

            <div className="p-1">
              <Calendar
                mode="single"
                selected={value}
                onSelect={(date) => {
                  onChange?.(date);
                  setOpen(false);
                }}
                initialFocus
                {...calendarProps}
              />
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    )
  }
)
DatePicker.displayName = "DatePicker"

export { DatePicker }