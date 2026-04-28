"use client"

import React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown, HelpCircle, ShieldCheck, Headphones } from "lucide-react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../../system/ComponentWrapper"

const categories = [
  {
    title: "General",
    icon: <HelpCircle className="w-4 h-4" />,
    items: [
      { title: "Order Placement", content: "Navigate to the hardware module, select components, and initiate the checkout sequence." },
      { title: "Modification", content: "Orders can be intercepted and modified prior to the 'Shipping' status update." },
    ],
  },
  {
    title: "Licensing",
    icon: <ShieldCheck className="w-4 h-4" />,
    items: [
      { title: "Acquisition", content: "Licenses are issued digitally upon verification of the transaction." },
      { title: "Standard vs Pro", content: "Pro tiers include commercial distribution rights and advanced ESP32 library access." },
    ],
  },
  {
    title: "Support",
    icon: <Headphones className="w-4 h-4" />,
    items: [
      { title: "Protocol", content: "Technical support is available via the encrypted support form or direct dev-mail." },
    ],
  },
]

// 🔹 Full source code string for the Terminal display
const faqAccordionCode = `"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown, HelpCircle, ShieldCheck, Headphones } from "lucide-react"

export function FAQAccordion() {
  return (
    <div className="faq-engine-layout space-y-6">
      {categories.map((category, index) => (
        <div key={index} className="grid md:grid-cols-4 gap-4 border-b border-primary/5 pb-6">
          {/* Category Sidebar */}
          <div className="md:col-span-1 flex gap-2">
            <span className="text-primary">{category.icon}</span>
            <span className="text-[11px] font-bold uppercase">{category.title}</span>
          </div>

          {/* Accordion Block */}
          <div className="md:col-span-3">
            <AccordionPrimitive.Root type="single" collapsible className="space-y-2">
              {category.items.map((item, i) => (
                <AccordionPrimitive.Item key={i} value={\`\${index}-\${i}\`} className="bg-muted/5 border border-primary/5 radius-md">
                  <AccordionPrimitive.Trigger className="flex items-center justify-between w-full px-4 py-3 group">
                    <span className="text-xs font-semibold group-data-[state=open]:text-primary">{item.title}</span>
                    <ChevronDown className="w-3.5 h-3.5 group-data-[state=open]:rotate-180" />
                  </AccordionPrimitive.Trigger>
                  <AccordionPrimitive.Content className="overflow-hidden animate-accordion-down">
                    <div className="px-4 pb-4 pt-3 text-[11px] font-mono border-t border-primary/5">
                      {item.content}
                    </div>
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              ))}
            </AccordionPrimitive.Root>
          </div>
        </div>
      ))}
    </div>
  )
}`;

export function FAQAccordion() {
  return (
    <ComponentWrapper title="FAQ Engine" code={faqAccordionCode}>
      <div className="faq-engine-layout space-y-6">
        
        {/* 🔹 SUB-HEADER */}
        <div className="border-l-2 border-primary pl-4 mb-8">
          <Typography variant="h3" className="text-xl font-black uppercase tracking-tighter">
            System <span className="text-primary italic">FAQ</span>
          </Typography>
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            Knowledge_Base // Version_2.4.0
          </p>
        </div>

        {/* 🔹 CATEGORY LOOP */}
        {categories.map((category, index) => (
          <div key={index} className="grid md:grid-cols-4 gap-4 border-b border-primary/5 pb-6 last:border-0">
            
            {/* Category Sidebar */}
            <div className="md:col-span-1 flex items-center md:items-start gap-2 pt-1">
              <span className="text-primary opacity-80">{category.icon}</span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">
                {category.title}
              </span>
            </div>

            {/* Accordion Block */}
            <div className="md:col-span-3">
              <AccordionPrimitive.Root type="single" collapsible className="space-y-2">
                {category.items.map((item, i) => (
                  <AccordionPrimitive.Item 
                    key={i} 
                    value={`${index}-${i}`}
                    className="bg-muted/5 border border-primary/5 radius-md overflow-hidden transition-all hover:border-primary/20"
                  >
                    <AccordionPrimitive.Trigger className="flex items-center justify-between w-full px-4 py-3 group">
                      <span className="text-xs font-semibold text-muted-foreground group-data-[state=open]:text-primary transition-colors">
                        {item.title}
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform duration-300" />
                    </AccordionPrimitive.Trigger>

                    <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="px-4 pb-4 pt-0 text-[11px] leading-relaxed text-muted-foreground/80 border-t border-primary/5 mt-2 pt-3 font-mono">
                        {item.content}
                      </div>
                    </AccordionPrimitive.Content>
                  </AccordionPrimitive.Item>
                ))}
              </AccordionPrimitive.Root>
            </div>
            
          </div>
        ))}
      </div>
    </ComponentWrapper>
  )
}