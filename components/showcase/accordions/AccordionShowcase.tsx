import { BasicAccordion } from "./BasicAccordion";
import { ControlledAccordion } from "./ControlledAccordion";
import { CustomIndicatorAccordion } from "./CustomindicatorAccordion";
import { CustomStyledAccordion } from "./CustomStyledAccordion";
import { DisabledAccordion } from "./DisabledAccordion";
import { FAQAccordion } from "./FAQAccordion";
import { MultipleAccordion } from "./MultipleAccordion";
import { SurfaceAccordion } from "./SurfaceAccordion";

export function AccordionShowcase() {
  return (
  

      <div className="section">

        <BasicAccordion />


        <SurfaceAccordion />

        <MultipleAccordion />

        <ControlledAccordion />

        <CustomIndicatorAccordion/>

        <CustomStyledAccordion/>

        <DisabledAccordion/>

        <FAQAccordion/>


      </div>

   
  )
}

