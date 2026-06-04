"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Minus, Plus } from "lucide-react"

export interface NumberFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: number | "";
  defaultValue?: number | "";
  onChange?: (value: number | "") => void;
  min?: number;
  max?: number;
  step?: number;
}

const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(
  ({ className, value, defaultValue, onChange, min, max, step = 1, disabled, ...props }, ref) => {
    
    // Manage internal state if not fully controlled
    const [internalValue, setInternalValue] = React.useState<number | "">(
      value !== undefined ? value : (defaultValue !== undefined ? defaultValue : "")
    );

    // Sync external value
    React.useEffect(() => {
      if (value !== undefined) setInternalValue(value);
    }, [value]);

    const triggerChange = (newValue: number | "") => {
      setInternalValue(newValue);
      onChange?.(newValue);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val === "") {
        triggerChange("");
      } else {
        const parsed = parseFloat(val);
        if (!isNaN(parsed)) triggerChange(parsed);
      }
    };

    const handleStep = (direction: 1 | -1) => {
      const currentValue = internalValue === "" ? 0 : Number(internalValue);
      let newValue = currentValue + (step * direction);

      // Clamp to min/max
      if (min !== undefined && newValue < min) newValue = min;
      if (max !== undefined && newValue > max) newValue = max;

      // Fix floating point math issues (e.g., 0.1 + 0.2)
      const precision = Math.max(
        (step.toString().split('.')[1] || '').length,
        (currentValue.toString().split('.')[1] || '').length
      );
      
      const fixedValue = parseFloat(newValue.toFixed(precision));
      triggerChange(fixedValue);
    };

    const isMinDisabled = disabled || (min !== undefined && internalValue !== "" && Number(internalValue) <= min);
    const isMaxDisabled = disabled || (max !== undefined && internalValue !== "" && Number(internalValue) >= max);

    return (
      <div 
        className={cn(
          "flex items-center h-10 w-full radius-md border border-primary/20 bg-background overflow-hidden transition-colors duration-200",
          "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30",
          "hover:border-primary/40",
          disabled && "opacity-50 cursor-not-allowed bg-muted/50",
          className
        )}
      >
        <button
          type="button"
          aria-label="Decrease value"
          disabled={isMinDisabled}
          onClick={() => handleStep(-1)}
          className="flex h-full w-10 shrink-0 items-center justify-center text-muted-foreground bg-muted/20 hover:bg-muted/50 hover:text-foreground active:bg-muted transition-colors disabled:opacity-50 disabled:pointer-events-none border-r border-primary/10 select-none"
        >
          <Minus className="w-4 h-4" />
        </button>
        
        <input
          ref={ref}
          type="number"
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          value={internalValue}
          onChange={handleInput}
          className="flex h-full w-full min-w-0 flex-1 items-center justify-center bg-transparent px-2 text-center text-sm font-semibold tabular-nums text-foreground focus:outline-none disabled:pointer-events-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
          {...props}
        />

        <button
          type="button"
          aria-label="Increase value"
          disabled={isMaxDisabled}
          onClick={() => handleStep(1)}
          className="flex h-full w-10 shrink-0 items-center justify-center text-muted-foreground bg-muted/20 hover:bg-muted/50 hover:text-foreground active:bg-muted transition-colors disabled:opacity-50 disabled:pointer-events-none border-l border-primary/10 select-none"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    )
  }
)
NumberField.displayName = "NumberField"

export { NumberField }