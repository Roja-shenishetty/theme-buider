"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Search } from "lucide-react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { Command } from "cmdk"
import { cn } from "@/lib/utils"

export interface ComboboxOption {
  value: string
  label: string
}

export interface ComboboxProps {
  options: ComboboxOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  className?: string
  disabled?: boolean
  error?: boolean
}

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  ({ 
    options, 
    value, 
    onChange, 
    placeholder = "Select option...", 
    searchPlaceholder = "Search...", 
    emptyText = "No results found.",
    className,
    disabled = false,
    error = false,
  }, ref) => {
    const [open, setOpen] = React.useState(false)

    // Find the currently selected label to display in the trigger
    const selectedLabel = React.useMemo(() => {
      return options.find((opt) => opt.value === value)?.label
    }, [value, options])

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <button
            ref={ref}
            type="button"
            role="combobox"
            aria-expanded={open}
            aria-invalid={error}
            disabled={disabled}
            className={cn(
              "flex h-10 w-full items-center justify-between radius-md border bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors duration-200",
              "hover:border-primary/40",
              "focus:outline-none focus-ring focus:ring-2 focus:ring-primary/30",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50",
              error ? "border-danger focus:border-danger focus:ring-danger/20 text-danger bg-danger/5" : "border-primary/20 focus:border-primary",
              className
            )}
          >
            <span className={cn("truncate", !selectedLabel && "text-muted-foreground")}>
              {selectedLabel || placeholder}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </button>
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            sideOffset={4}
            className={cn(
              "z-50 w-[var(--radix-popover-trigger-width)] overflow-hidden radius-md border border-primary/10 bg-background text-foreground shadow-lg",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            )}
          >
            {/* Using cmdk Command component natively */}
            <Command className="flex h-full w-full flex-col overflow-hidden bg-transparent">
              <div className="flex items-center border-b border-primary/10 px-3" cmdk-input-wrapper="">
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 text-muted-foreground" />
                <Command.Input 
                  placeholder={searchPlaceholder} 
                  className="flex h-10 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              
              <Command.List className="max-h-60 overflow-y-auto overflow-x-hidden p-1 custom-scrollbar">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  {emptyText}
                </Command.Empty>
                
                {options.map((option) => {
                  const isSelected = value === option.value;
                  return (
                    <Command.Item
                      key={option.value}
                      value={option.label} // cmdk filters by the string value passed here
                      onSelect={() => {
                        onChange?.(isSelected ? "" : option.value)
                        setOpen(false)
                      }}
                      className={cn(
                        "relative flex w-full cursor-pointer select-none items-center radius-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
                        "aria-selected:bg-primary/10 aria-selected:text-primary",
                        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      )}
                    >
                      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                        {isSelected && <Check className="h-4 w-4 text-primary" />}
                      </span>
                      {option.label}
                    </Command.Item>
                  )
                })}
              </Command.List>
            </Command>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    )
  }
)
Combobox.displayName = "Combobox"

export { Combobox }