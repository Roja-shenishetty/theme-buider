"use client"

import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

import {
  Plus,
  Minus,
  ChevronDown,
  ChevronsDown,
} from "lucide-react"

type Item = {
  id: string
  title: string
  content: string
  type: "plus" | "caret" | "arrow"
}

const items: Item[] = [
  {
    id: "1",
    title: "Using Plus / Minus Icon",
    content:
      "This accordion uses a plus icon that switches to minus when expanded.",
    type: "plus",
  },
  {
    id: "2",
    title: "Using Caret Icon",
    content:
      "This item uses a caret icon that rotates when expanded.",
    type: "caret",
  },
  {
    id: "3",
    title: "Using Arrow Icon",
    content:
      "This item uses a double arrow icon with rotation animation.",
    type: "arrow",
  },
]

export function CustomIndicatorAccordion() {
  const [openItem, setOpenItem] = React.useState<string>("")

  const renderIcon = (type: Item["type"], isOpen: boolean) => {
    if (type === "plus") {
      return isOpen
        ? <Minus className="accordion-icon" />
        : <Plus className="accordion-icon" />
    }

    if (type === "caret") {
      return <ChevronDown className="accordion-chevron" />
    }

    return <ChevronsDown className="accordion-chevron" />
  }

  return (
    <div className="section-block">

      <div className="section-title">Custom Indicator</div>

      <div className="section-box">
        <div className="section-inner">

          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={(val) => setOpenItem(val || "")}
          >
            {items.map((item) => {
              const isOpen = openItem === item.id

              return (
                <AccordionItem key={item.id} value={item.id}>

                  <AccordionTrigger className="accordion-trigger group">

                    {/* LEFT */}
                    <div className="accordion-left">
                      <span>{item.title}</span>
                    </div>

                    {/* RIGHT ICON */}
                    <span className="indicator-wrapper">
                      {renderIcon(item.type, isOpen)}
                    </span>

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