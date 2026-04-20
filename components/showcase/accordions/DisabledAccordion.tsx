"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

import { ChevronDown } from "lucide-react"

export function DisabledAccordion() {
  return (
    <div className="section-block">

      <div className="section-title">Disabled</div>

      <div className="section-box">
        <div className="section-inner">

          {/* ===== Entire Accordion Disabled ===== */}
          <div className="disabled-group">

            <div className="disabled-title">
              Entire accordion disabled
            </div>

            <Accordion type="single" collapsible disabled>

              <AccordionItem value="d1">
                <AccordionTrigger className="accordion-trigger group">
                  Disabled Item 1
                  <ChevronDown className="accordion-chevron" />
                </AccordionTrigger>

                <AccordionContent className="accordion-content">
                  <div className="accordion-content-inner">
                    This content cannot be accessed.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="d2">
                <AccordionTrigger className="accordion-trigger group">
                  Disabled Item 2
                  <ChevronDown className="accordion-chevron" />
                </AccordionTrigger>

                <AccordionContent className="accordion-content">
                  <div className="accordion-content-inner">
                    This content cannot be accessed.
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>

          </div>

          {/* ===== Individual Items Disabled ===== */}
          <div className="disabled-group">

            <div className="disabled-title">
              Individual items disabled
            </div>

            <Accordion type="single" collapsible>

              <AccordionItem value="a1">
                <AccordionTrigger className="accordion-trigger group">
                  Active Item
                  <ChevronDown className="accordion-chevron" />
                </AccordionTrigger>

                <AccordionContent className="accordion-content">
                  <div className="accordion-content-inner">
                    This item works normally.
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* DISABLED ITEM */}
              <AccordionItem value="a2" disabled>
                <AccordionTrigger className="accordion-trigger group">
                  Disabled Item
                  <ChevronDown className="accordion-chevron" />
                </AccordionTrigger>

                <AccordionContent className="accordion-content">
                  <div className="accordion-content-inner">
                    This content is not accessible.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="a3">
                <AccordionTrigger className="accordion-trigger group">
                  Another Active Item
                  <ChevronDown className="accordion-chevron" />
                </AccordionTrigger>

                <AccordionContent className="accordion-content">
                  <div className="accordion-content-inner">
                    This item is also active.
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>

          </div>

        </div>
      </div>

    </div>
  )
}