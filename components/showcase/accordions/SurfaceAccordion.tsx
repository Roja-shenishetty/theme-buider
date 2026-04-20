"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

import {
  RotateCcw,
  Box,
  CreditCard,
  Globe,
  Receipt,
  ShoppingBag,
  ChevronDown,
} from "lucide-react"

const items = [
  {
    title: "How do I place an order?",
    content:
      "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information.",
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
  {
    title: "How much does shipping cost?",
    content: "Free shipping for orders above $50.",
    icon: Box,
  },
  {
    title: "Do you ship internationally?",
    content: "Yes, we ship worldwide.",
    icon: Globe,
  },
  {
    title: "How do I request a refund?",
    content: "Within 30 days via support.",
    icon: RotateCcw,
  },
]

export function SurfaceAccordion() {
  return (
    <div className="section-block">

      <div className="section-title">Surface</div>

      <div className="section-box">
        <div className="section-inner">

          <Accordion type="single" collapsible>

            {items.map((item, i) => {
              const Icon = item.icon

              return (
                <AccordionItem key={i} value={`surface-${i}`}>

                  <AccordionTrigger className="accordion-trigger group">

                    {/* LEFT */}
                    <div className="accordion-left">
                      <Icon className="accordion-icon" />
                      <span>{item.title}</span>
                    </div>

                    {/* RIGHT */}
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