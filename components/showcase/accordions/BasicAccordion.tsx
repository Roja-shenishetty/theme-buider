"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"
import {
  ShoppingBag,
  Receipt,
  CreditCard,
  ChevronDown,
  Terminal,
} from "lucide-react"
import { ComponentWrapper } from "./../../system/ComponentWrapper"

const items = [
  {
    title: "Order Initialization",
    content: "Execute procurement sequence by adding units to the buffer and navigating to the checkout portal.",
    icon: ShoppingBag,
  },
  {
    title: "Request Modification",
    content: "Interrupt the shipping sequence prior to dispatch. Post-processing restricts all packet changes.",
    icon: Receipt,
  },
  {
    title: "Authentication Keys",
    content: "Secure transaction support for primary financial protocols: Visa, Mastercard, and Amex.",
    icon: CreditCard,
  },
]

// 🔹 This is the full code string that will be displayed in the terminal
const accordionCode = `"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ShoppingBag, Receipt, CreditCard, ChevronDown, Terminal } from "lucide-react"

export function BasicAccordion() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 border-l border-primary pl-3 mb-2">
        <Terminal className="w-3 h-3 text-primary" />
        <Typography variant="label">Base // Non_Separator_Logic</Typography>
      </div>

      <div className="bg-muted/5 radius-lg border border-primary/5 overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={\`no-sep-\${i}\`} className="border-none">
              <AccordionTrigger className="px-4 py-2 hover:bg-primary/5 transition-all group">
                <div className="flex items-center gap-3">
                  <item.icon className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold uppercase">{item.title}</span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 group-data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3">
                <div className="pl-6 text-[11px] font-mono border-l border-primary/10">
                  {item.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}`;

export function BasicAccordion() {
  return (
    <ComponentWrapper title="Basic Accordion" code={accordionCode}>
      <div className="space-y-3">
        {/* 🔹 SUB-HEADER */}
        <div className="flex items-center gap-2 border-l border-primary pl-3 mb-2">
          <Terminal className="w-3 h-3 text-primary" />
          <Typography variant="label" className="text-[10px] uppercase tracking-[0.2em] font-black">
            Base // Non_Separator_Logic
          </Typography>
        </div>

        <div className="bg-muted/5 radius-lg border border-primary/5 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => {
              const Icon = item.icon

              return (
                <AccordionItem 
                  key={i} 
                  value={`no-sep-${i}`}
                  className="border-none"
                >
                  <AccordionTrigger className="px-4 py-2 hover:bg-primary/5 transition-all group hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-xs font-bold uppercase tracking-tight text-foreground group-data-[state=open]:text-primary">
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary transition-transform duration-300" />
                  </AccordionTrigger>

                  <AccordionContent className="px-4 pb-3">
                    <div className="pl-6 text-[11px] leading-relaxed text-muted-foreground/80 font-mono border-l border-primary/10 ml-1.5 py-1">
                      <span className="text-primary/40 mr-2">VAL:</span>
                      {item.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </ComponentWrapper>
  )
}