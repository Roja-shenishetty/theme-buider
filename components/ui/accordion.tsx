/* accordion.tsx */

"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"

/* ROOT */
const Accordion = AccordionPrimitive.Root

/* ITEM */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("accordion-item", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

/* TRIGGER */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn("accordion-trigger group", className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

/* CONTENT */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn("accordion-content", className)}
    {...props}
  >
    <div className="accordion-content-inner">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = "AccordionContent"

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
}