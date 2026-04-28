"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"
import {
  RotateCcw,
  Box,
  CreditCard,
  Globe,
  Receipt,
  ShoppingBag,
  ChevronDown,
  Database,
} from "lucide-react"
import { ComponentWrapper } from "./../../system/ComponentWrapper"

const items = [
  {
    title: "Order Initialization",
    content: "Initiate the procurement sequence by adding modules to the buffer and executing the checkout logic.",
    icon: ShoppingBag,
  },
  {
    title: "Packet Modification",
    content: "Data modification is permitted prior to the transmission stage. Post-processing restricts changes.",
    icon: Receipt,
  },
  {
    title: "Currency Protocol",
    content: "System accepts primary financial keys: Visa, Mastercard, and American Express.",
    icon: CreditCard,
  },
  {
    title: "Logistics Volume",
    content: "Standard logistics overhead is nullified for transactions exceeding $50.",
    icon: Box,
  },
  {
    title: "Global Mesh",
    content: "Distribution network extends across all international coordinates.",
    icon: Globe,
  },
  {
    title: "Rollback Procedure",
    content: "Transaction rollbacks can be initiated within a 30-day window via technical support.",
    icon: RotateCcw,
  },
]

// 🔹 Full source code string for the Terminal display
const surfaceAccordionCode = `"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/ui/accordion"
import { ShoppingBag, Receipt, CreditCard, Box, Globe, RotateCcw, ChevronDown } from "lucide-react"

export function SurfaceAccordion() {
  return (
    <div className="bg-muted/5 radius-lg border border-primary/10 overflow-hidden">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={i} value={\`surface-\${i}\`} className="border-b border-primary/5 last:border-0">
            <AccordionTrigger className="px-4 py-2 hover:bg-primary/5 group">
              <div className="flex items-center gap-3">
                <div className="p-1.5 radius-md bg-primary/5 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <item.icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold uppercase group-data-[state=open]:text-primary">{item.title}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-3">
              <div className="pl-9 text-[11px] font-mono border-l border-primary/10 py-1">
                <span className="text-primary/40 mr-2">DESC:</span>
                {item.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`;

export function SurfaceAccordion() {
  return (
    <ComponentWrapper title="Surface Data Accordion" code={surfaceAccordionCode}>
      <div className="space-y-3">
        
        {/* 🔹 SEMANTIC HEADER */}
        <div className="flex items-center gap-2 border-l border-primary pl-3 mb-2">
          <Database className="w-3 h-3 text-primary" />
          <Typography variant="label" className="text-[10px] uppercase tracking-[0.2em] font-black">
            Surface // Data_Store
          </Typography>
        </div>

        <div className="bg-muted/5 radius-lg border border-primary/10 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => {
              const Icon = item.icon

              return (
                <AccordionItem 
                  key={i} 
                  value={`surface-${i}`}
                  className="border-b border-primary/5 last:border-0"
                >
                  <AccordionTrigger className="px-4 py-2 hover:bg-primary/5 transition-all group hover:no-underline">
                    
                    {/* LEFT: Icon & Title */}
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 radius-md bg-primary/5 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-tight text-foreground group-data-[state=open]:text-primary">
                        {item.title}
                      </span>
                    </div>

                    {/* RIGHT: Chevron */}
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary transition-transform duration-300" />

                  </AccordionTrigger>

                  <AccordionContent className="px-4 pb-3">
                    <div className="pl-9 text-[11px] leading-relaxed text-muted-foreground/80 font-mono border-l border-primary/10 ml-1 py-1">
                      <span className="text-primary/40 mr-2">DESC:</span>
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