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
    title: "Set Up Notifications",
    subtitle: "Receive account activity updates",
    content:
      "Stay informed about your account activity with real-time notifications.",
    iconUrl:
      "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/bell-small.png",
  },
  {
    title: "Set up Browser Extension",
    subtitle: "Connect your browser to your account",
    content:
      "Enhance your browsing experience by installing our official extension.",
    iconUrl:
      "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/compass-small.png",
  },
  {
    title: "Mint Collectible",
    subtitle: "Create your first collectible",
    content:
      "Begin your journey into the world of digital collectibles.",
    iconUrl:
      "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/mint-collective-small.png",
  },
]

export function CustomStyledAccordion() {
  return (
    <div className="section-block">

      <div className="section-title">Custom Styles</div>

      <div className="section-box">
        <div className="section-inner">

          <Accordion type="single" collapsible>

            {items.map((item, i) => (
              <AccordionItem key={i} value={`custom-${i}`}>

                <AccordionTrigger className="accordion-trigger group custom-trigger">

                  {/* LEFT */}
                  <div className="custom-left">

                    <img
                      src={item.iconUrl}
                      alt={item.title}
                      className="custom-icon"
                    />

                    <div className="custom-text">
                      <span className="custom-title">
                        {item.title}
                      </span>
                      <span className="custom-subtitle">
                        {item.subtitle}
                      </span>
                    </div>

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
            ))}

          </Accordion>

        </div>
      </div>

    </div>
  )
}