"use client"

import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  Layers,
  Settings,
} from "lucide-react"

const items = [
  {
    id: "getting-started",
    title: "Getting Started",
    content:
      "Learn the basics of the system and how to build your first component.",
    icon: BookOpen,
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    content:
      "Understand patterns, styling, and accessibility fundamentals.",
    icon: Layers,
  },
  {
    id: "advanced-usage",
    title: "Advanced Usage",
    content:
      "Explore customization, themes, and integrations.",
    icon: Settings,
  },
]

export function ControlledAccordion() {
  const [openItem, setOpenItem] = React.useState<string>("getting-started")

  const currentIndex = items.findIndex((i) => i.id === openItem)

  const goNext = () => {
    if (currentIndex < items.length - 1) {
      setOpenItem(items[currentIndex + 1].id)
    }
  }

  const goPrev = () => {
    if (currentIndex > 0) {
      setOpenItem(items[currentIndex - 1].id)
    }
  }

  return (
    <div className="section-block">

      <div className="section-title">Controlled</div>

      <div className="section-box">
        <div className="section-inner">

          {/* HEADER CONTROLS */}
          <div className="accordion-controls">

            <p className="accordion-status">
              Expanded: <strong>{openItem}</strong>
            </p>

            <div className="accordion-buttons">
              <button
                onClick={goPrev}
                disabled={currentIndex === 0}
                className="accordion-btn"
              >
                <ChevronUp size={16} />
              </button>

              <button
                onClick={goNext}
                disabled={currentIndex === items.length - 1}
                className="accordion-btn"
              >
                <ChevronDown size={16} />
              </button>
            </div>

          </div>

          {/* ACCORDION */}
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={(val) => setOpenItem(val || "")}
          >
            {items.map((item) => {
              const Icon = item.icon

              return (
                <AccordionItem key={item.id} value={item.id}>

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