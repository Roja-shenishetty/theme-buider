"use client"

import * as React from "react"
import { Clock, ChevronDown } from "lucide-react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"

export interface TimeFieldProps {
  label?: string;
  description?: string;
  error?: string;
  /** Time string in "HH:mm" 24-hour format (e.g., "14:30") */
  value?: string;
  onChange?: (time: string) => void;
  placeholder?: string;
  disabled?: boolean;
  containerClassName?: string;
  className?: string;
  /** Uses 00-23 hours instead of 1-12 AM/PM */
  use24Hour?: boolean;
  /** Interval for minutes (e.g., 1, 5, 15) */
  minuteStep?: number;
}

const TimeField = React.forwardRef<HTMLButtonElement, TimeFieldProps>(
  ({ 
    label, 
    description, 
    error, 
    value, 
    onChange, 
    placeholder = "Select time", 
    disabled,
    containerClassName,
    className,
    use24Hour = false,
    minuteStep = 5
  }, ref) => {
    
    const [open, setOpen] = React.useState(false);
    const generatedId = React.useId();
    const descriptionId = `${generatedId}-description`;
    const errorId = `${generatedId}-error`;

    // Parse incoming "HH:mm" string
    const parsedHour = value ? parseInt(value.split(":")[0], 10) : null;
    const parsedMinute = value ? parseInt(value.split(":")[1], 10) : null;

    const currentHour24 = parsedHour !== null ? parsedHour : 12;
    const currentMinute = parsedMinute !== null ? parsedMinute : 0;
    
    // Internal state for the picker columns
    const isPM = currentHour24 >= 12;
    const displayHour12 = currentHour24 % 12 === 0 ? 12 : currentHour24 % 12;
    
    const selectedHour = use24Hour ? currentHour24 : displayHour12;
    const selectedPeriod = isPM ? "PM" : "AM";

    // Generate column options
    const hours = use24Hour 
      ? Array.from({ length: 24 }, (_, i) => i) 
      : Array.from({ length: 12 }, (_, i) => i + 1);
      
    const minutes = Array.from({ length: Math.ceil(60 / minuteStep) }, (_, i) => i * minuteStep);
    const periods = ["AM", "PM"];

    // Format display string for the trigger button
    const displayString = React.useMemo(() => {
      if (!value) return null;
      const h = selectedHour.toString().padStart(2, "0");
      const m = currentMinute.toString().padStart(2, "0");
      return use24Hour ? `${h}:${m}` : `${h}:${m} ${selectedPeriod}`;
    }, [value, selectedHour, currentMinute, selectedPeriod, use24Hour]);

    const handleTimeChange = (type: "hour" | "minute" | "period", val: number | string) => {
      let newHour24 = currentHour24;
      let newMinute = currentMinute;

      if (type === "hour") {
        const h = val as number;
        if (use24Hour) {
          newHour24 = h;
        } else {
          // 12-hour logic
          if (h === 12) {
            newHour24 = selectedPeriod === "AM" ? 0 : 12;
          } else {
            newHour24 = selectedPeriod === "PM" ? h + 12 : h;
          }
        }
      } else if (type === "minute") {
        newMinute = val as number;
      } else if (type === "period" && !use24Hour) {
        const p = val as string;
        if (p === "AM" && newHour24 >= 12) newHour24 -= 12;
        if (p === "PM" && newHour24 < 12) newHour24 += 12;
      }

      // Default to 12:00 / 00:00 if setting one part for the first time
      if (!value) {
        if (type === "minute") newHour24 = use24Hour ? 12 : 12; 
        if (type === "hour") newMinute = 0;
      }

      const formattedHour = newHour24.toString().padStart(2, "0");
      const formattedMinute = newMinute.toString().padStart(2, "0");
      onChange?.(`${formattedHour}:${formattedMinute}`);
    };

    // Helper component for rendering scrollable columns
    const ScrollColumn = ({ 
      options, 
      selectedValue, 
      onChangeVal, 
      formatOpt 
    }: { 
      options: (number | string)[], 
      selectedValue: number | string, 
      onChangeVal: (v: any) => void,
      formatOpt?: (v: any) => string 
    }) => (
      <div className="flex flex-col h-48 overflow-y-auto custom-scrollbar snap-y snap-mandatory p-1">
        {options.map((opt) => {
          const isSelected = opt === selectedValue;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChangeVal(opt)}
              className={cn(
                "w-12 h-8 shrink-0 flex items-center justify-center text-sm radius-sm transition-colors snap-center",
                isSelected 
                  ? "bg-primary text-primary-foreground font-bold shadow-sm" 
                  : "text-foreground hover:bg-muted/80 font-medium"
              )}
            >
              {formatOpt ? formatOpt(opt) : opt}
            </button>
          );
        })}
      </div>
    );

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
                error ? "border-danger focus:border-danger focus:ring-danger/20 text-danger bg-danger/5" : "border-primary/20 focus:border-primary",
                !value && "text-muted-foreground",
                className
              )}
            >
              <div className="flex items-center gap-2">
                <Clock className={cn("h-4 w-4 opacity-70", error && "text-danger")} />
                <span className="font-medium tracking-wide">
                  {displayString || placeholder}
                </span>
              </div>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </button>
          </PopoverPrimitive.Trigger>
          
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              align="start"
              sideOffset={4}
              className={cn(
                "z-50 radius-md border border-primary/10 bg-background p-1 text-foreground shadow-lg flex divide-x divide-primary/10",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
              )}
            >
              {/* Hours Column */}
              <ScrollColumn 
                options={hours} 
                selectedValue={selectedHour} 
                onChangeVal={(v) => handleTimeChange("hour", v)} 
                formatOpt={(v) => v.toString().padStart(2, "0")}
              />
              {/* Minutes Column */}
              <ScrollColumn 
                options={minutes} 
                selectedValue={currentMinute} 
                onChangeVal={(v) => handleTimeChange("minute", v)} 
                formatOpt={(v) => v.toString().padStart(2, "0")}
              />
              {/* AM/PM Column (hidden if 24h) */}
              {!use24Hour && (
                <ScrollColumn 
                  options={periods} 
                  selectedValue={selectedPeriod} 
                  onChangeVal={(v) => handleTimeChange("period", v)} 
                />
              )}
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
TimeField.displayName = "TimeField"

export { TimeField }