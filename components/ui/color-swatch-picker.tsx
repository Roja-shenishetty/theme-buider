"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ColorSwatchPickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** The currently selected color value */
  value?: string;
  /** Callback when a swatch is selected */
  onChange?: (value: string) => void;
  /** Pass the ColorSwatch components as children */
  children: React.ReactNode;
}

const ColorSwatchPicker = React.forwardRef<HTMLDivElement, ColorSwatchPickerProps>(
  ({ className, value, onChange, children, ...props }, ref) => {
    
    // Iterate over children to inject the `isSelected` and `onClick` props 
    // into each individual ColorSwatch automatically.
    const modifiedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          isSelected: child.props.value === value,
          onClick: (e: React.MouseEvent) => {
            // Preserve any custom onClick the user put on the swatch itself
            if (child.props.onClick) {
              child.props.onClick(e);
            }
            onChange?.(child.props.value);
          },
        });
      }
      return child;
    });

    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cn(
          "flex flex-wrap gap-1.5", // Default wrapping flex layout
          className
        )}
        {...props}
      >
        {modifiedChildren}
      </div>
    )
  }
)
ColorSwatchPicker.displayName = "ColorSwatchPicker"

export { ColorSwatchPicker }