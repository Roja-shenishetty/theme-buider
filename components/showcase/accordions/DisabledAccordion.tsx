"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"
import { ChevronDown, Lock } from "lucide-react"
import { ComponentWrapper } from "./../../system/ComponentWrapper"

// 🔹 Full source code string for the Terminal display
const disabledAccordionCode = `"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/ui/accordion"
import { Lock, ChevronDown } from "lucide-react"

export function DisabledAccordion() {
  return (
    <div className="space-y-6">
      {/* 🔹 FULL ACCORDION DISABLED */}
      <div className="opacity-50 pointer-events-none grayscale">
        <Accordion type="single" collapsible disabled className="bg-muted/10 radius-md border border-primary/5">
          <AccordionItem value="d1" className="border-b border-primary/5">
            <AccordionTrigger className="px-3 py-2 text-xs">
              Disabled Registry 01
              <ChevronDown className="w-3 h-3 opacity-20" />
            </AccordionTrigger>
            <AccordionContent className="px-3 text-[11px] opacity-60">
              Access Denied: Resource restricted.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* 🔹 SELECTIVE DISABLE */}
      <div className="bg-muted/5 radius-md border border-primary/10 p-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="a1" className="border-b border-primary/5">
            <AccordionTrigger className="px-3 py-2 text-xs">Active Node</AccordionTrigger>
            <AccordionContent className="px-3 pb-3 text-[11px] font-mono">[Status]: Operational</AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="a2" disabled className="opacity-30">
            <AccordionTrigger className="px-3 py-2 text-xs cursor-not-allowed">
              Restricted Node
              <Lock className="w-3 h-3 ml-auto opacity-40" />
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}`;

export function DisabledAccordion() {
  return (
    <ComponentWrapper title="Disabled State Accordion" code={disabledAccordionCode}>
      <div className="space-y-6">
        
        {/* 🔹 ENTIRE ACCORDION DISABLED */}
        <div className="space-y-2 opacity-50 pointer-events-none grayscale">
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-3 h-3 text-primary" />
            <Typography variant="label" className="text-[10px] uppercase tracking-widest">
              Full System Lockout
            </Typography>
          </div>

          <div className="bg-muted/10 radius-md border border-primary/5 p-2">
            <Accordion type="single" collapsible disabled>
              <AccordionItem value="d1" className="border-b border-primary/5">
                <AccordionTrigger className="px-3 py-2 text-xs font-semibold hover:no-underline">
                  Disabled Registry 01
                  <ChevronDown className="w-3 h-3 opacity-20" />
                </AccordionTrigger>
                <AccordionContent className="px-3 text-[11px] opacity-60">
                  Access Denied: Resource is currently restricted.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="d2" className="border-none">
                <AccordionTrigger className="px-3 py-2 text-xs font-semibold hover:no-underline">
                  Disabled Registry 02
                  <ChevronDown className="w-3 h-3 opacity-20" />
                </AccordionTrigger>
                <AccordionContent className="px-3 text-[11px] opacity-60">
                  Access Denied: Resource is currently restricted.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* 🔹 INDIVIDUAL ITEMS DISABLED */}
        <div className="space-y-2">
          <Typography variant="label" className="text-[10px] uppercase tracking-widest text-primary mb-2 block">
            Selective Node Access
          </Typography>

          <div className="bg-muted/5 radius-md border border-primary/10 p-2">
            <Accordion type="single" collapsible>
              
              {/* Active Item */}
              <AccordionItem value="a1" className="border-b border-primary/5">
                <AccordionTrigger className="px-3 py-2 text-xs font-semibold text-foreground group">
                  Active Uplink
                  <ChevronDown className="w-3 h-3 group-data-[state=open]:rotate-180 transition-transform" />
                </AccordionTrigger>
                <AccordionContent className="px-3 pb-3 text-[11px] font-mono text-muted-foreground">
                  [Status]: Operational. Data packets flowing normally.
                </AccordionContent>
              </AccordionItem>

              {/* DISABLED ITEM */}
              <AccordionItem value="a2" disabled className="border-b border-primary/5 opacity-30">
                <AccordionTrigger className="px-3 py-2 text-xs font-semibold cursor-not-allowed">
                  Offline Node (Restricted)
                  <Lock className="w-3 h-3 ml-auto opacity-40" />
                </AccordionTrigger>
                <AccordionContent className="px-3 text-[11px]">
                  Unauthorized access attempt logged.
                </AccordionContent>
              </AccordionItem>

              {/* Active Item */}
              <AccordionItem value="a3" className="border-none">
                <AccordionTrigger className="px-3 py-2 text-xs font-semibold text-foreground group">
                  Backup Channel
                  <ChevronDown className="w-3 h-3 group-data-[state=open]:rotate-180 transition-transform" />
                </AccordionTrigger>
                <AccordionContent className="px-3 pb-3 text-[11px] font-mono text-muted-foreground">
                  [Status]: Standby. Secondary link ready.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  )
}