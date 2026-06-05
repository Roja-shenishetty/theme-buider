"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-2 pb-3 relative items-center w-full",
        caption_label: "text-sm font-bold tracking-tight text-foreground",
        nav: "space-x-1 flex items-center",
        
        // Premium Nav Buttons
        nav_button: cn(
          "h-7 w-7 bg-transparent p-0 flex items-center justify-center radius-sm border border-primary/10 transition-all duration-200",
          "hover:bg-primary/10 hover:text-primary hover:border-primary/20",
          "focus:outline-none focus-ring focus:ring-2 focus:ring-primary/40 focus:border-primary",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        
        table: "w-full border-collapse space-y-1",
        head_row: "flex mb-2",
        
        // Upgraded Weekday Headers
        head_cell: "text-muted-foreground radius-md w-9 font-bold text-[10px] uppercase tracking-widest",
        row: "flex w-full mt-1",
        
        // Cells with better focus/active tracking
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          "[&:has([aria-selected])]:bg-primary/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
        ),
        
        // The Days Themselves
        day: cn(
          "h-9 w-9 p-0 font-medium radius-sm transition-all duration-200",
          "hover:bg-muted/80 hover:text-foreground",
          "focus:outline-none focus-ring focus:ring-2 focus:ring-primary/40 focus:border-primary",
          "aria-selected:opacity-100"
        ),
        
        // 🔹 Highlight: Selected State gets a deep glow and bold text
        day_selected: cn(
          "bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20",
          "hover:bg-primary hover:text-primary-foreground hover:shadow-primary/40",
          "focus:bg-primary focus:text-primary-foreground"
        ),
        
        // 🔹 Highlight: "Today" gets a crisp outline instead of a muddy gray background
        day_today: "bg-transparent text-primary font-bold border border-primary/30",
        
        day_outside: "text-muted-foreground opacity-30 font-normal hover:opacity-70",
        day_disabled: "text-muted-foreground opacity-30 cursor-not-allowed hover:bg-transparent hover:text-muted-foreground",
        
        // Range Selection overrides
        day_range_middle: "aria-selected:bg-transparent aria-selected:text-foreground aria-selected:shadow-none aria-selected:font-normal",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4 stroke-[2.5]" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4 stroke-[2.5]" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }