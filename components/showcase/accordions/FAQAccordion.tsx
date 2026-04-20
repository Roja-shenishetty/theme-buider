import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

export function FAQAccordion() {
  const categories = [
    {
      title: "General",
      items: [
        {
          title: "How do I place an order?",
          content: "Browse products, add to cart, and checkout.",
        },
        {
          title: "Can I modify or cancel my order?",
          content: "Yes, before shipping.",
        },
      ],
    },
    {
      title: "Licensing",
      items: [
        {
          title: "How do I purchase a license?",
          content: "Purchase directly from our website.",
        },
        {
          title: "Standard vs Pro license?",
          content: "Pro includes commercial rights.",
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "How do I get support?",
          content: "Contact via email or support form.",
        },
      ],
    },
  ]

  return (
    <div className="faq-container">

      {/* HEADER */}
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">
        Everything you need to know about licensing and usage.
      </p>

      {/* CATEGORIES */}
      {categories.map((category, index) => (
        <div key={index} className="faq-category">

          <div className="faq-category-title">
            {category.title}
          </div>

          <div className="faq-accordion-box">

            <Accordion type="single" collapsible>

              {category.items.map((item, i) => (
                <AccordionItem key={i} value={`${index}-${i}`}>

                  <AccordionTrigger className="accordion-trigger group">
                    <div className="accordion-left">
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
              ))}

            </Accordion>

          </div>

        </div>
      ))}

    </div>
  )
}