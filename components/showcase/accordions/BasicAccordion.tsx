"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

import {
  ShoppingBag,
  Receipt,
  CreditCard,
  ChevronDown,
} from "lucide-react"

const items = [
  {
    title: "How do I place an order?",
    content:
      "Browse products, add items to your cart, and proceed to checkout.",
    icon: ShoppingBag,
  },
  {
    title: "Can I modify or cancel my order?",
    content:
      "Yes, before it's shipped. Once processed, changes are not possible.",
    icon: Receipt,
  },
  {
    title: "What payment methods do you accept?",
    content: "Visa, Mastercard, American Express.",
    icon: CreditCard,
  },
]

export function BasicAccordion() {
  return (
    <div className="section-block">

      <div className="section-title">Without Separator</div>

      <div className="section-box">
        <div className="section-inner no-separator">

          <Accordion type="single" collapsible>

            {items.map((item, i) => {
              const Icon = item.icon

              return (
                <AccordionItem key={i} value={`no-sep-${i}`}>

                  <AccordionTrigger className="accordion-trigger group">

                    <div className="accordion-left">
                      <Icon className="accordion-icon" />
                      <span>{item.title}</span>
                    </div>

                    <ChevronDown className="accordion-chevron" />

                  </AccordionTrigger>

                  <AccordionContent className="accordion-content">
                    <div className="accordion-content-inner">
                      {item.content}
                    </div>
                  </AccordionContent>

                </AccordionItem>
              )
            })}

          </Accordion>

        </div>
      </div>

    </div>
  )
}