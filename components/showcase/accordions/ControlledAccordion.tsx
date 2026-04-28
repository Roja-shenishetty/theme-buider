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
  ChevronDown,
  ChevronUp,
  BookOpen,
  Layers,
  Settings,
  Cpu,
} from "lucide-react"
import { ComponentWrapper } from "./../../system/ComponentWrapper"

const items = [
  {
    id: "getting-started",
    title: "System Init",
    content: "Learn the primary boot sequence and how to initialize your first interface node.",
    icon: BookOpen,
  },
  {
    id: "core-concepts",
    title: "Logic Architecture",
    content: "Master the fundamental patterns of hardware-integrated state management and styling.",
    icon: Layers,
  },
  {
    id: "advanced-usage",
    title: "Kernel Extension",
    content: "Deep-dive into custom driver themes and high-performance system integrations.",
    icon: Settings,
  },
]

// 🔹 Full source code string for the Terminal display
const controlledAccordionCode = `"use client"

import * as React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/ui/accordion"
import { ChevronDown, ChevronUp, Cpu } from "lucide-react"

export function ControlledAccordion() {
  const [openItem, setOpenItem] = React.useState("getting-started")
  const currentIndex = items.findIndex((i) => i.id === openItem)

  const goNext = () => {
    if (currentIndex < items.length - 1) setOpenItem(items[currentIndex + 1].id)
  }

  const goPrev = () => {
    if (currentIndex > 0) setOpenItem(items[currentIndex - 1].id)
  }

  return (
    <div className="space-y-4">
      {/* Technical Navigation Header */}
      <div className="flex items-center justify-between border-l border-primary pl-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-3 h-3 text-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase">
            Node: {currentIndex + 1} / {items.length}
          </span>
        </div>

        <div className="flex items-center gap-1 bg-muted/10 p-0.5 border border-primary/10 radius-md">
          <button onClick={goPrev} disabled={currentIndex === 0} className="p-1">
            <ChevronUp size={12} />
          </button>
          <button onClick={goNext} disabled={currentIndex === items.length - 1} className="p-1">
            <ChevronDown size={12} />
          </button>
        </div>
      </div>

      <Accordion type="single" value={openItem} onValueChange={setOpenItem}>
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="px-4 py-2.5">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="px-10 pb-3">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`;

export function ControlledAccordion() {
  const [openItem, setOpenItem] = React.useState<string>("getting-started")
  const currentIndex = items.findIndex((i) => i.id === openItem)

  const goNext = () => {
    if (currentIndex < items.length - 1) setOpenItem(items[currentIndex + 1].id)
  }

  const goPrev = () => {
    if (currentIndex > 0) setOpenItem(items[currentIndex - 1].id)
  }

  return (
    <ComponentWrapper title="Controlled Accordion" code={controlledAccordionCode}>
      <div className="space-y-4">
        
        {/* 🔹 TECHNICAL CONTROL HEADER */}
        <div className="flex items-center justify-between border-l border-primary pl-3 mb-2">
          <div className="flex items-center gap-2">
            <Cpu className="w-3 h-3 text-primary animate-pulse" />
            <Typography variant="label" className="text-[10px] uppercase tracking-[0.2em] font-black">
              Active_Node: <span className="text-foreground">{currentIndex + 1} / {items.length}</span>
            </Typography>
          </div>

          {/* 🔹 COMPACT NAVIGATION CONTROLS */}
          <div className="flex items-center gap-1 bg-muted/10 p-0.5 radius-md border border-primary/10">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="p-1 radius-sm hover:bg-primary/20 disabled:opacity-20 transition-all"
            >
              <ChevronUp size={12} className="text-primary" />
            </button>
            <div className="w-[1px] h-3 bg-primary/10" />
            <button
              onClick={goNext}
              disabled={currentIndex === items.length - 1}
              className="p-1 radius-sm hover:bg-primary/20 disabled:opacity-20 transition-all"
            >
              <ChevronDown size={12} className="text-primary" />
            </button>
          </div>
        </div>

        <div className="bg-muted/5 radius-lg border border-primary/10 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={(val) => setOpenItem(val || "")}
            className="w-full"
          >
            {items.map((item) => {
              const Icon = item.icon
              const isActive = openItem === item.id

              return (
                <AccordionItem 
                  key={item.id} 
                  value={item.id}
                  className="border-b border-primary/5 last:border-0"
                >
                  <AccordionTrigger className="px-4 py-2.5 hover:no-underline group">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      <span className={`text-xs font-bold uppercase tracking-tight transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-300 ${isActive ? "rotate-180 text-primary" : ""}`} />
                  </AccordionTrigger>

                  <AccordionContent className="px-10 pb-3">
                    <div className="text-[11px] leading-relaxed text-muted-foreground/80 font-mono border-l border-primary/20 pl-4 py-1">
                      <span className="text-primary/50 mr-1">DATA_READ:</span> {item.content}
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