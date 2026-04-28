"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"
import { ChevronDown, Layers } from "lucide-react"
import { ComponentWrapper } from "./../../system/ComponentWrapper"

const items = [
  {
    title: "System Initialization",
    content: "Execute primary boot sequence, define global environment variables, and initialize the 4px base spacing engine.",
  },
  {
    title: "Kernel Architecture",
    content: "Manage high-level state distribution, compound component logic, and ARIA-compliant accessibility trees.",
  },
  {
    title: "Advanced Telemetry",
    content: "Stream real-time sensor data from ESP32 nodes into the dashboard using concurrent React 19 transitions.",
  },
  {
    title: "Protocol Optimization",
    content: "Apply tree-shaking and zero-runtime CSS strategies to ensure the system maintains sub-100ms latency.",
  },
]

// 🔹 Full source code string for the Terminal display
const multipleAccordionCode = `"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ChevronDown, Layers } from "lucide-react"

export function MultipleAccordion() {
  return (
    <div className="space-y-4">
      {/* type="multiple" allows parallel expansion */}
      <Accordion type="multiple" className="w-full bg-muted/5 radius-lg border border-primary/10">
        {items.map((item, i) => (
          <AccordionItem 
            key={i} 
            value={\`multi-\${i}\`}
            className="border-b border-primary/5 last:border-0 data-[state=open]:bg-primary/5"
          >
            <AccordionTrigger className="px-4 py-2.5 group hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-1 h-3 bg-primary/20 radius-full group-data-[state=open]:bg-primary group-data-[state=open]:h-4 transition-all" />
                <span className="text-xs font-bold uppercase group-data-[state=open]:text-primary">
                  {item.title}
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 group-data-[state=open]:rotate-180 transition-transform" />
            </AccordionTrigger>

            <AccordionContent className="px-8 pb-4">
              <div className="text-[11px] font-mono border-l border-primary/20 pl-4 py-1">
                <span className="text-primary/50 mr-2">LOG_INF:</span>
                {item.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`;

export function MultipleAccordion() {
  return (
    <ComponentWrapper title="Multiple Selection Accordion" code={multipleAccordionCode}>
      <div className="space-y-4">
        
        {/* 🔹 SEMANTIC HEADER */}
        <div className="flex items-center gap-2 border-l border-primary pl-3 mb-2">
          <Layers className="w-3 h-3 text-primary" />
          <Typography variant="label" className="text-[10px] uppercase tracking-[0.2em] font-black">
            Parallel Processing Modules
          </Typography>
        </div>

        <div className="bg-muted/5 radius-lg border border-primary/10 overflow-hidden">
          <Accordion type="multiple" className="w-full">
            {items.map((item, i) => (
              <AccordionItem 
                key={i} 
                value={`multi-${i}`}
                className="border-b border-primary/5 last:border-0 transition-colors data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="px-4 py-2.5 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-3 bg-primary/20 radius-full group-data-[state=open]:bg-primary group-data-[state=open]:h-4 transition-all" />
                    <span className="text-xs font-bold uppercase tracking-tight text-foreground group-data-[state=open]:text-primary">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary transition-transform duration-300" />
                </AccordionTrigger>

                <AccordionContent className="px-8 pb-4">
                  <div className="text-[11px] leading-relaxed text-muted-foreground/80 font-mono border-l border-primary/20 pl-4 py-1">
                    <span className="text-primary/50 mr-2">LOG_INF:</span>
                    {item.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </ComponentWrapper>
  )
}