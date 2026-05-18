"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ComponentWrapper } from "./../system/ComponentWrapper"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `<RadioGroup defaultValue="standard" className="space-y-3">
  <div className="flex items-center gap-default p-4 border border-primary/10 radius-md bg-background shadow-primary/20">
    <RadioGroupItem value="standard" id="r-standard" />
    <label htmlFor="r-standard" className="text-body font-bold cursor-pointer">
      Standard Delivery (3-5 days)
    </label>
  </div>
  <div className="flex items-center gap-default p-4 border border-primary/10 radius-md bg-background shadow-primary/20">
    <RadioGroupItem value="express" id="r-express" />
    <label htmlFor="r-express" className="text-body font-bold cursor-pointer">
      Express Delivery (Next Day)
    </label>
  </div>
</RadioGroup>`

const codeDensity = `<div className="p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 w-full max-w-md space-group">
  <h4 className="text-label text-muted uppercase tracking-widest mb-2">Telemetry Interval</h4>
  
  <RadioGroup defaultValue="1s" className="space-y-2">
    <div className="flex items-center justify-between p-2.5 border border-primary/5 radius-md hover:bg-foreground/[0.02]">
      <div className="flex items-center gap-default">
        <RadioGroupItem value="100ms" id="t-high" />
        <label htmlFor="t-high" className="text-body text-sm font-bold cursor-pointer">High Performance</label>
      </div>
      <span className="text-caption font-mono bg-primary/10 text-primary px-1.5 py-0.5 radius-sm">100ms</span>
    </div>

    <div className="flex items-center justify-between p-2.5 border border-primary/5 radius-md hover:bg-foreground/[0.02]">
      <div className="flex items-center gap-default">
        <RadioGroupItem value="1s" id="t-balanced" />
        <label htmlFor="t-balanced" className="text-body text-sm font-bold cursor-pointer">Balanced</label>
      </div>
      <span className="text-caption font-mono opacity-40">1.0s</span>
    </div>

    <div className="flex items-center justify-between p-2.5 border border-primary/5 radius-md opacity-50">
      <div className="flex items-center gap-default">
        <RadioGroupItem value="10s" id="t-low" disabled />
        <label htmlFor="t-low" className="text-body text-sm cursor-not-allowed">Eco Mode</label>
      </div>
      <span className="text-caption font-mono">10s</span>
    </div>
  </RadioGroup>
</div>`

const codeCards = `<RadioGroup defaultValue="gpu-cluster" className="grid grid-cols-1 sm:grid-cols-2 gap-wide w-full max-w-2xl">
  {/* Card 01 */}
  <label htmlFor="hw-gpu" className="flex items-start gap-wide p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 cursor-pointer group hover:border-primary/40 transition-all duration-300 data-[state=checked]:border-primary">
    <RadioGroupItem value="gpu-cluster" id="hw-gpu" className="mt-1" />
    <div className="space-group">
      <span className="text-body font-bold block group-hover:text-primary transition-colors">Dedicated GPU Node</span>
      <p className="text-caption text-muted leading-relaxed">
        Routes execution through an isolated hardware cluster. Recommended for intensive OpenCV tensor arrays.
      </p>
    </div>
  </label>

  {/* Card 02 */}
  <label htmlFor="hw-cpu" className="flex items-start gap-wide p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 cursor-pointer group hover:border-primary/40 transition-all duration-300">
    <RadioGroupItem value="cpu-shared" id="hw-cpu" className="mt-1" />
    <div className="space-group">
      <span className="text-body font-bold block group-hover:text-primary transition-colors">Shared Compute Node</span>
      <p className="text-caption text-muted leading-relaxed">
        Standard thread cycles on virtual cores. Optimal for basic configuration state management and logic routing.
      </p>
    </div>
  </label>
</RadioGroup>`

/* 🔹 Refined Blueprint Section Wrapper */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6 relative">
        <div className="absolute -top-6 right-0 p-3 opacity-[0.03] pointer-events-none select-none z-0">
          <span className="text-[120px] font-black uppercase leading-none tracking-tighter">
            {title[0]}
          </span>
        </div>
        <h3 className="text-h3 tracking-tight font-bold text-primary/90 relative z-10">
          {title}
        </h3>
        {description && (
          <p className="text-body text-muted text-sm max-w-2xl relative z-10">
            {description}
          </p>
        )}
      </div>
      <div className="w-full">
        {children}
      </div>
    </section>
  )
}

export function RadioGroupShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-label">
          Mutual Exclusion Inputs
        </div>
        
        <p className="text-body text-muted max-w-2xl text-lg mt-2">
          Single-selection controller rings built for configuration switching, explicit mode parameters, and performance cluster tier selectors.
        </p>
      </header>

      {/* 🔹 Standard Options */}
      <Section 
        title="Standard Selection" 
        description="The fallback structure for linear choice arrays. Root wrappers natively map keyboard arrow controls across nodes."
      >
        <ComponentWrapper title="RadioGroup // Standard_Stack" code={codeBasic}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-xl">
              <RadioGroup defaultValue="standard" className="space-y-3">
                
                <div className="flex items-center gap-default p-4 border border-primary/10 radius-md bg-background shadow-primary/20">
                  <RadioGroupItem value="standard" id="r-standard" />
                  <label htmlFor="r-standard" className="text-body font-bold cursor-pointer select-none">
                    Standard Delivery (3-5 days)
                  </label>
                </div>

                <div className="flex items-center gap-default p-4 border border-primary/10 radius-md bg-background shadow-primary/20">
                  <RadioGroupItem value="express" id="r-express" />
                  <label htmlFor="r-express" className="text-body font-bold cursor-pointer select-none text-primary">
                    Express Delivery (Next Day)
                  </label>
                </div>

              </RadioGroup>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Technical Matrix Selection */}
      <Section 
        title="High Density Metadata" 
        description="Compacted alignment layout featuring system-level descriptors alongside key/value telemetry strings."
      >
        <ComponentWrapper title="RadioGroup // Telemetry_Interval" code={codeDensity}>
          <div className="flex justify-center p-4 full-width">
            <div className="p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 w-full max-w-md space-group">
              <h4 className="text-label text-muted uppercase tracking-widest mb-2">Telemetry Interval</h4>
              
              <RadioGroup defaultValue="1s" className="space-y-2">
                <div className="flex items-center justify-between p-2.5 border border-primary/5 radius-md hover:bg-foreground/[0.02] transition-colors">
                  <div className="flex items-center gap-default">
                    <RadioGroupItem value="100ms" id="t-high" />
                    <label htmlFor="t-high" className="text-body text-sm font-bold cursor-pointer">High Performance</label>
                  </div>
                  <span className="text-caption font-mono bg-primary/10 text-primary px-1.5 py-0.5 radius-sm">100ms</span>
                </div>

                <div className="flex items-center justify-between p-2.5 border border-primary/5 radius-md hover:bg-foreground/[0.02] transition-colors">
                  <div className="flex items-center gap-default">
                    <RadioGroupItem value="1s" id="t-balanced" />
                    <label htmlFor="t-balanced" className="text-body text-sm font-bold cursor-pointer">Balanced</label>
                  </div>
                  <span className="text-caption font-mono opacity-40">1.0s</span>
                </div>

                <div className="flex items-center justify-between p-2.5 border border-primary/5 radius-md opacity-50">
                  <div className="flex items-center gap-default">
                    <RadioGroupItem value="10s" id="t-low" disabled />
                    <label htmlFor="t-low" className="text-body text-sm cursor-not-allowed">Eco Mode</label>
                  </div>
                  <span className="text-caption font-mono">10s</span>
                </div>
              </RadioGroup>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Card Layout Selection */}
      <Section 
        title="Selectable Card Structures" 
        description="Encapsulates descriptive paragraphs into larger viewport targets, updating focus state definitions seamlessly."
      >
        <ComponentWrapper title="RadioGroup // Architectural_Cards" code={codeCards}>
          <div className="flex justify-center p-4 full-width">
            <RadioGroup defaultValue="gpu-cluster" className="grid grid-cols-1 sm:grid-cols-2 gap-wide w-full max-w-2xl">
              
              {/* Card 01 */}
              <label htmlFor="hw-gpu" className="flex items-start gap-wide p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 cursor-pointer group hover:border-primary/40 transition-all duration-300">
                <RadioGroupItem value="gpu-cluster" id="hw-gpu" className="mt-1" />
                <div className="space-group">
                  <span className="text-body font-bold block group-hover:text-primary transition-colors">Dedicated GPU Node</span>
                  <p className="text-caption text-muted leading-relaxed">
                    Routes execution through an isolated hardware cluster. Recommended for intensive OpenCV tensor arrays.
                  </p>
                </div>
              </label>

              {/* Card 02 */}
              <label htmlFor="hw-cpu" className="flex items-start gap-wide p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 cursor-pointer group hover:border-primary/40 transition-all duration-300">
                <RadioGroupItem value="cpu-shared" id="hw-cpu" className="mt-1" />
                <div className="space-group">
                  <span className="text-body font-bold block group-hover:text-primary transition-colors">Shared Compute Node</span>
                  <p className="text-caption text-muted leading-relaxed">
                    Standard thread cycles on virtual cores. Optimal for basic configuration state management and logic routing.
                  </p>
                </div>
              </label>

            </RadioGroup>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 pt-section border-t border-primary/10">
        <h4 className="system-footer-title text-h4 font-bold mb-8">Radio Group Architecture Rules</h4>
        
        <div className="system-footer-grid grid grid-cols-1 md:grid-cols-3 gap-wide">
          
          {/* Item 01 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              01 Logic
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Mutual Exclusion</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Use Radio Groups exclusively when a user must pick exactly <strong>one</strong> option from a list. If multiple items can coexist simultaneously, replace the node layout with a <code>Checkbox Group</code>.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              02 Configuration
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Always Pre-select</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Radio groups should always feature a fallback <code>defaultValue</code> initialized. An empty radio cluster forces unnatural decision layouts and errors out keyboard focus traversal loops.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              03 Scaling
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Quantity Limits</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Limit radio rows to 5 choices max to preserve page layout density. For large structural datasets, transition your control pattern to a unified <code>Select / Dropdown</code> menu block.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}