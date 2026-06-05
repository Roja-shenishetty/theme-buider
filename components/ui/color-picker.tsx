"use client"

import * as React from "react"
import { Paintbrush, Check } from "lucide-react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"

export interface ColorPickerProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  description?: string;
  error?: string;
  presets?: string[];
  disabled?: boolean;
  className?: string;
  containerClassName?: string;
}

const DEFAULT_PRESETS = [
  "#ef4444", "#f97316", "#f59e0b", "#84cc16", "#22c55e",
  "#14b8a6", "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6",
  "#d946ef", "#f43f5e", "#000000", "#52525b", "#ffffff"
];

const ColorPicker = React.forwardRef<HTMLButtonElement, ColorPickerProps>(
  ({ 
    value = "#000000", 
    onChange, 
    label,
    description,
    error,
    presets = DEFAULT_PRESETS,
    disabled,
    className,
    containerClassName
  }, ref) => {
    
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(value);
    
    const generatedId = React.useId();
    const descriptionId = `${generatedId}-description`;
    const errorId = `${generatedId}-error`;

    // Sync external value
    React.useEffect(() => {
      setInputValue(value);
    }, [value]);

    const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newHex = e.target.value;
      setInputValue(newHex);
      
      // Only fire onChange if it's a valid hex length
      if (/^#[0-9A-F]{6}$/i.test(newHex) || /^#[0-9A-F]{3}$/i.test(newHex)) {
        onChange?.(newHex);
      }
    };

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
              className={cn(
                "flex h-10 w-full items-center gap-2 radius-md border bg-background px-3 py-2 text-sm text-foreground transition-colors duration-200 shadow-sm",
                "hover:border-primary/40",
                "focus:outline-none focus-ring focus:ring-2 focus:ring-primary/30",
                "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50",
                error ? "border-danger focus:border-danger focus:ring-danger/20 text-danger bg-danger/5" : "border-primary/20",
                className
              )}
            >
              <div 
                className="w-4 h-4 radius-sm border shadow-sm shrink-0 transition-colors"
                style={{ backgroundColor: value, borderColor: 'rgba(0,0,0,0.1)' }}
              />
              <span className="truncate font-mono tracking-wide flex-1 text-left uppercase">
                {value}
              </span>
            </button>
          </PopoverPrimitive.Trigger>
          
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              align="start"
              sideOffset={4}
              className={cn(
                "z-50 w-64 radius-md border border-primary/10 bg-background p-3 text-foreground shadow-lg overflow-hidden",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
              )}
            >
              {/* Hex Text Input */}
              <div className="flex items-center gap-2 mb-4">
                <div 
                  className="w-8 h-8 radius-sm border shadow-inner shrink-0"
                  style={{ backgroundColor: value, borderColor: 'rgba(0,0,0,0.1)' }}
                />
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleHexChange}
                  className="flex h-8 w-full radius-sm border border-primary/20 bg-background px-2 text-sm font-mono uppercase focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="#000000"
                  maxLength={7}
                />
              </div>

              {/* Preset Swatches */}
              {presets.length > 0 && (
                <div className="mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Brand Presets
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {presets.map((preset) => {
                      const isActive = preset.toLowerCase() === value.toLowerCase();
                      return (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => onChange?.(preset)}
                          title={preset}
                          className={cn(
                            "w-6 h-6 radius-sm border shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-1",
                            isActive ? "ring-2 ring-primary ring-offset-1" : "border-primary/10"
                          )}
                          style={{ backgroundColor: preset }}
                        >
                          {isActive && (
                            <Check className={cn(
                              "w-3.5 h-3.5 mx-auto",
                              // Simple contrast check to ensure checkmark is visible
                              parseInt(preset.replace('#', ''), 16) > 0xffffff / 2 ? 'text-black' : 'text-white'
                            )} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Custom Native Picker Wrapper */}
              <div className="relative w-full h-8 overflow-hidden radius-sm border border-primary/20 bg-muted/30 hover:bg-muted/50 transition-colors flex items-center justify-center cursor-pointer group">
                <Paintbrush className="w-3.5 h-3.5 text-muted-foreground mr-2 group-hover:text-foreground transition-colors" />
                <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  Custom Color
                </span>
                {/* Secret overlay mapping clicks to OS color wheel */}
                <input
                  type="color"
                  value={value}
                  onChange={(e) => onChange?.(e.target.value)}
                  className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 opacity-0 cursor-pointer"
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
ColorPicker.displayName = "ColorPicker"

export { ColorPicker }