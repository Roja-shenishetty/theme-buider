"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

import { ChevronDown } from "lucide-react"

const items = [
  {
    title: "Getting Started",
    content:
      "Learn the basics of the system, installation steps, and how to build your first component.",
  },
  {
    title: "Core Concepts",
    content:
      "Understand compound components, styling patterns, and accessibility fundamentals.",
  },
  {
    title: "Advanced Usage",
    content:
      "Explore customization, themes, and integration with other libraries.",
  },
  {
    title: "Best Practices",
    content:
      "Follow recommended patterns for scalable and maintainable applications.",
  },
]

export function MultipleAccordion() {
  return (
    <div className="section-block">

      <div className="section-title">Multiple</div>

      <div className="section-box">
        <div className="section-inner">

          <Accordion type="multiple">

            {items.map((item, i) => (
              <AccordionItem key={i} value={`multi-${i}`}>

                <AccordionTrigger className="accordion-trigger group">

                  <div className="accordion-left">
                    {item.title}
                  </div>

                  <ChevronDown className="accordion-chevron" />

                </AccordionTrigger>

                <AccordionContent className="accordion-content">
                  <div className="accordion-content-inner">
                    {item.content}
                  </div>
                </AccordionContent>

              </AccordionItem>
            ))}

          </Accordion>

        </div>
      </div>

    </div>
  )
}