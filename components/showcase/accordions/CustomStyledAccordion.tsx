"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"
import { ChevronDown, Settings2 } from "lucide-react"
import { ComponentWrapper } from "./../../system/ComponentWrapper"

const items = [
  {
    title: "Notification Relay",
    subtitle: "Real-time hardware alerts",
    content: "Configure the ESP32 to push interrupt-driven notifications to the dashboard.",
    iconUrl: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/bell-small.png",
  },
  {
    title: "Terminal Extension",
    subtitle: "Direct CLI browser link",
    content: "Bridge your local terminal with the web dashboard via our low-latency extension.",
    iconUrl: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/compass-small.png",
  },
  {
    title: "Hash Minting",
    subtitle: "Generate hardware-bound tokens",
    content: "Securely mint unique hardware identifiers for device authentication.",
    iconUrl: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/mint-collective-small.png",
  },
]

// 🔹 Full source code string for the Terminal display
const customStyledCode = `"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/ui/accordion"
import { ChevronDown } from "lucide-react"

export function CustomStyledAccordion() {
  return (
    <div className="bg-muted/5 radius-xl border border-primary/10 overflow-hidden">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={i} value={\`custom-\${i}\`} className="border-b border-primary/5 last:border-0">
            <AccordionTrigger className="px-4 py-3 group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  {/* Active Glow Effect */}
                  <div className="absolute inset-0 bg-primary/20 blur-lg radius-full group-data-[state=open]:opacity-100 opacity-0 transition-opacity" />
                  <img src={item.iconUrl} className="w-10 h-10 relative z-10 group-hover:scale-110" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase">{item.title}</span>
                  <span className="text-[10px] text-muted-foreground">{item.subtitle}</span>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="pl-14 text-[11px] font-mono border-t border-primary/5 pt-3">
                {item.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`;

export function CustomStyledAccordion() {
  return (
    <ComponentWrapper title="Custom Styled Accordion" code={customStyledCode}>
      <div className="space-y-4">
        
        {/* 🔹 SUB-TITLE WRAPPER */}
        <div className="flex items-center gap-2 border-l border-primary pl-3 mb-2">
          <Settings2 className="w-3 h-3 text-primary" />
          <Typography variant="label" className="text-[10px] uppercase tracking-[0.2em] font-black">
            Configuration Nodes
          </Typography>
        </div>

        <div className="bg-muted/5 radius-xl border border-primary/10 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem 
                key={i} 
                value={`custom-${i}`} 
                className="border-b border-primary/5 last:border-0"
              >
                <AccordionTrigger className="px-4 py-3 hover:bg-primary/5 transition-all group hover:no-underline">
                  
                  {/* 🔹 ASSET & TEXT BLOCK */}
                  <div className="flex items-center gap-4 text-left">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 blur-lg radius-full group-data-[state=open]:opacity-100 opacity-0 transition-opacity" />
                      <img
                        src={item.iconUrl}
                        alt={item.title}
                        className="w-10 h-10 relative z-10 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex flex-col space-y-0.5">
                      <span className="text-xs font-black uppercase tracking-tight text-foreground">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <ChevronDown className="w-4 h-4 text-muted-foreground group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary transition-all duration-300" />
                </AccordionTrigger>

                <AccordionContent className="px-4 pb-4">
                  <div className="pl-14 text-[11px] leading-relaxed text-muted-foreground/80 font-mono border-t border-primary/5 pt-3">
                    <span className="text-primary mr-2">//</span>
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