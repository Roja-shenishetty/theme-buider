"use client"

import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"
import {
  Plus,
  Minus,
  ChevronDown,
  ChevronsDown,
  Activity,
} from "lucide-react"
import { ComponentWrapper } from "./../../system/ComponentWrapper"

type Item = {
  id: string
  title: string
  content: string
  type: "plus" | "caret" | "arrow"
}

const items: Item[] = [
  {
    id: "1",
    title: "Binary Toggle Indicator",
    content: "Uses a +/- state logic to indicate component expansion. Ideal for simple hardware switches.",
    type: "plus",
  },
  {
    id: "2",
    title: "Vector Rotation Caret",
    content: "Standard 180-degree rotation. Optimized for hierarchical navigation trees.",
    type: "caret",
  },
  {
    id: "3",
    title: "Double-Arrow Sequence",
    content: "Uses a ChevronsDown icon for high-visibility UI sections that require extra emphasis.",
    type: "arrow",
  },
]

// 🔹 Complete source code string for the Terminal display
const customIndicatorCode = `"use client"

import * as React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/ui/accordion"
import { Plus, Minus, ChevronDown, ChevronsDown } from "lucide-react"

export function CustomIndicatorAccordion() {
  const [openItem, setOpenItem] = React.useState("")

  const renderIcon = (type, isOpen) => {
    const base = "w-3.5 h-3.5 transition-all"
    if (type === "plus") return isOpen ? <Minus className={base} /> : <Plus className={base} />
    return <ChevronDown className={\`\${base} \${isOpen ? "rotate-180" : ""}\`} />
  }

  return (
    <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="px-4 py-2.5">
            <div className="flex items-center gap-3">
              <div className={\`w-1 h-1 radius-full \${openItem === item.id ? "bg-primary animate-pulse" : "bg-muted"}\`} />
              <span>{item.title}</span>
            </div>
            {renderIcon(item.type, openItem === item.id)}
          </AccordionTrigger>
          <AccordionContent className="px-8 pb-3 font-mono">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`;

export function CustomIndicatorAccordion() {
  const [openItem, setOpenItem] = React.useState<string>("")

  const renderIcon = (type: Item["type"], isOpen: boolean) => {
    const iconBase = "w-3.5 h-3.5 transition-all duration-300"
    
    if (type === "plus") {
      return isOpen
        ? <Minus className={`${iconBase} text-primary`} />
        : <Plus className={`${iconBase} text-muted-foreground`} />
    }

    if (type === "caret") {
      return (
        <ChevronDown 
          className={`${iconBase} ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} 
        />
      )
    }

    return (
      <ChevronsDown 
        className={`${iconBase} ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} 
      />
    )
  }

  return (
    <ComponentWrapper title="Custom Indicator Accordion" code={customIndicatorCode}>
      <div className="space-y-4">
        
        {/* 🔹 SUB-TITLE: Technical Signal Group */}
        <div className="flex items-center gap-2 border-l border-primary pl-3 mb-2">
          <Activity className="w-3 h-3 text-primary" />
          <Typography variant="label" className="text-[10px] uppercase tracking-[0.2em] font-black">
            Indicator // Signal_Types
          </Typography>
        </div>

        <div className="bg-muted/5 radius-lg border border-primary/10 overflow-hidden">
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={(val) => setOpenItem(val || "")}
            className="w-full"
          >
            {items.map((item) => {
              const isOpen = openItem === item.id

              return (
                <AccordionItem 
                  key={item.id} 
                  value={item.id}
                  className="border-b border-primary/5 last:border-0"
                >
                  <AccordionTrigger className="px-4 py-2.5 hover:bg-primary/5 transition-all group hover:no-underline">
                    
                    {/* LEFT: Title & Status LED */}
                    <div className="flex items-center gap-3">
                      <div className={`w-1 h-1 radius-full ${isOpen ? "bg-primary animate-pulse" : "bg-muted-foreground/30"}`} />
                      <span className={`text-xs font-bold uppercase tracking-tight transition-colors ${isOpen ? "text-primary" : "text-foreground"}`}>
                        {item.title}
                      </span>
                    </div>

                    {/* RIGHT: Dynamic Icon */}
                    <div className={`p-1.5 radius-md border transition-all ${isOpen ? "bg-primary/10 border-primary/20 shadow-[0_0_10px_rgba(var(--primary-rgb),0.1)]" : "border-transparent"}`}>
                      {renderIcon(item.type, isOpen)}
                    </div>

                  </AccordionTrigger>

                  <AccordionContent className="px-8 pb-3">
                    <div className="text-[11px] leading-relaxed text-muted-foreground/80 font-mono border-l border-primary/20 pl-4 py-1">
                      <span className="text-primary/50 mr-2">LOG_SIGNAL:</span>
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