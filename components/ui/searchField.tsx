"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { CloseButton } from "@/components/ui/closeButton"
import { Kbd } from "@/components/ui/kbd"

export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional keyboard shortcut hint to display when empty (e.g., "⌘K") */
  shortcut?: string;
  /** Callback fired when the clear button is clicked */
  onClear?: () => void;
  /** Wrapper class for layout adjustments */
  containerClassName?: string;
}

const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ className, containerClassName, shortcut, onClear, value, defaultValue, onChange, ...props }, ref) => {
    
    // Manage internal state to determine if the clear button should be visible
    const [internalValue, setInternalValue] = React.useState(value || defaultValue || "");
    const inputRef = React.useRef<HTMLInputElement | null>(null);

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

    const handleClear = () => {
      setInternalValue("");
      // Trigger onChange with an empty value to notify parents
      if (onChange) {
        const event = {
          target: { value: "" }
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
      onClear?.();
      inputRef.current?.focus();
    };

    const hasValue = String(internalValue).length > 0;

    return (
      <div className={cn("relative flex items-center w-full group", containerClassName)}>
        <Search className="absolute left-3 w-4 h-4 text-muted-foreground pointer-events-none opacity-70 group-focus-within:text-primary group-focus-within:opacity-100 transition-colors" />
        
        <input
          ref={(node) => {
            inputRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          type="search"
          value={internalValue}
          onChange={handleChange}
          className={cn(
            "flex h-10 w-full radius-md border border-primary/20 bg-background pl-9 pr-10 py-2 text-sm text-foreground",
            "placeholder:text-muted-foreground",
            "transition-colors duration-200",
            "hover:border-primary/40",
            "focus-ring focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50",
            // Hide native webkit search clear button to use our custom one
            "[&::-webkit-search-cancel-button]:appearance-none",
            className
          )}
          {...props}
        />

        <div className="absolute right-2 flex items-center h-full">
          {hasValue ? (
            <CloseButton 
              onClick={handleClear} 
              aria-label="Clear search"
              className="opacity-70 hover:opacity-100 focus:opacity-100"
            />
          ) : shortcut ? (
            <Kbd className="bg-muted shadow-none border-primary/10 text-muted-foreground/70">
              {shortcut}
            </Kbd>
          ) : null}
        </div>
      </div>
    )
  }
)
SearchField.displayName = "SearchField"

export { SearchField }