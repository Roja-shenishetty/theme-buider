"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input, type InputProps } from "@/components/ui/input"
import { Loader2, Search } from "lucide-react"

export interface AutocompleteOption {
  label: string;
  value: string;
}

export interface AutocompleteProps extends Omit<InputProps, 'value' | 'onChange' | 'onSelect'> {
  options: AutocompleteOption[];
  value?: string;
  onChange?: (value: string) => void;
  onSelectOption?: (option: AutocompleteOption) => void;
  isLoading?: boolean;
  emptyText?: string;
  icon?: React.ReactNode;
}

const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  ({ 
    options, 
    value = "", 
    onChange, 
    onSelectOption, 
    isLoading = false, 
    emptyText = "No results found.", 
    icon,
    className, 
    ...props 
  }, ref) => {
    
    const [isOpen, setIsOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(value);
    const [activeIndex, setActiveIndex] = React.useState(-1);
    
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const listRef = React.useRef<HTMLUListElement>(null);

    // Sync external value
    React.useEffect(() => {
      setInputValue(value);
    }, [value]);

    // Filter options based on input
    const filteredOptions = React.useMemo(() => {
      if (!inputValue) return options;
      const lowercasedInput = inputValue.toLowerCase();
      return options.filter(option => 
        option.label.toLowerCase().includes(lowercasedInput) || 
        option.value.toLowerCase().includes(lowercasedInput)
      );
    }, [inputValue, options]);

    // Handle click outside to close dropdown
    React.useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Scroll active item into view
    React.useEffect(() => {
      if (isOpen && activeIndex >= 0 && listRef.current) {
        const activeElement = listRef.current.children[activeIndex] as HTMLElement;
        if (activeElement) {
          activeElement.scrollIntoView({ block: "nearest" });
        }
      }
    }, [activeIndex, isOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setInputValue(val);
      onChange?.(val);
      setIsOpen(true);
      setActiveIndex(-1); // Reset highlight on new input
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen && e.key !== "Escape") {
        setIsOpen(true);
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex(prev => (prev < filteredOptions.length - 1 ? prev + 1 : prev));
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex(prev => (prev > 0 ? prev - 1 : -1));
          break;
        case "Enter":
          if (isOpen && activeIndex >= 0 && filteredOptions[activeIndex]) {
            e.preventDefault();
            handleSelect(filteredOptions[activeIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          setActiveIndex(-1);
          break;
        case "Tab":
          setIsOpen(false);
          break;
      }
    };

    const handleSelect = (option: AutocompleteOption) => {
      setInputValue(option.label);
      onChange?.(option.label);
      onSelectOption?.(option);
      setIsOpen(false);
      setActiveIndex(-1);
    };

    return (
      <div ref={wrapperRef} className="relative w-full">
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {icon}
            </div>
          )}
          <Input
            ref={ref}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            onClick={() => setIsOpen(true)}
            className={cn(icon && "pl-9", className)}
            {...props}
          />
          {isLoading && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
          )}
        </div>

        {isOpen && (inputValue.length > 0 || options.length > 0) && (
          <div className="absolute top-full left-0 z-50 w-full mt-1 overflow-hidden radius-md border border-primary/10 bg-background text-foreground shadow-lg animate-in fade-in-0 zoom-in-95">
            <ul 
              ref={listRef}
              className="max-h-60 overflow-y-auto overflow-x-hidden p-1 custom-scrollbar"
              role="listbox"
            >
              {filteredOptions.length === 0 && !isLoading ? (
                <li className="py-6 text-center text-sm text-muted-foreground select-none">
                  {emptyText}
                </li>
              ) : (
                filteredOptions.map((option, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <li
                      key={option.value}
                      role="option"
                      aria-selected={isActive}
                      onMouseDown={(e) => {
                        // Prevent input blur before click registers
                        e.preventDefault(); 
                        handleSelect(option);
                      }}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={cn(
                        "relative flex w-full cursor-pointer select-none items-center radius-sm px-3 py-2 text-sm outline-none transition-colors",
                        isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted/50"
                      )}
                    >
                      {option.label}
                    </li>
                  )
                })
              )}
            </ul>
          </div>
        )}
      </div>
    )
  }
)
Autocomplete.displayName = "Autocomplete"

export { Autocomplete }