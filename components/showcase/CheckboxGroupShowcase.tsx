"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ComponentWrapper } from "./../system/ComponentWrapper"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeVerticalGroup = `<div className="p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group w-full max-w-sm">
  <h4 className="text-label text-muted uppercase tracking-widest mb-2">Workspace Roles</h4>
  
  <div className="space-y-3">
    <div className="flex items-center gap-default">
      <Checkbox id="role-admin" defaultChecked />
      <label htmlFor="role-admin" className="text-body cursor-pointer font-bold">Administrator</label>
    </div>
    <div className="flex items-center gap-default">
      <Checkbox id="role-dev" defaultChecked />
      <label htmlFor="role-dev" className="text-body cursor-pointer font-bold">Developer</label>
    </div>
    <div className="flex items-center gap-default">
      <Checkbox id="role-billing" />
      <label htmlFor="role-billing" className="text-body cursor-pointer font-bold">Billing Manager</label>
    </div>
  </div>
</div>`

const codeGridGroup = `<div className="p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 w-full max-w-2xl space-group">
  <h4 className="text-label text-muted uppercase tracking-widest mb-2">Device Capabilities</h4>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-wide">
    <div className="flex items-center gap-default p-2 border border-primary/5 radius-md hover:bg-foreground/[0.02]">
      <Checkbox id="cap-wifi" defaultChecked />
      <label htmlFor="cap-wifi" className="text-body text-sm cursor-pointer full-width">Wi-Fi 6E</label>
    </div>
    <div className="flex items-center gap-default p-2 border border-primary/5 radius-md hover:bg-foreground/[0.02]">
      <Checkbox id="cap-ble" defaultChecked />
      <label htmlFor="cap-ble" className="text-body text-sm cursor-pointer full-width">Bluetooth 5.3</label>
    </div>
    <div className="flex items-center gap-default p-2 border border-primary/5 radius-md hover:bg-foreground/[0.02]">
      <Checkbox id="cap-cellular" />
      <label htmlFor="cap-cellular" className="text-body text-sm cursor-pointer full-width">5G NR Modem</label>
    </div>
    <div className="flex items-center gap-default p-2 border border-primary/5 radius-md hover:bg-foreground/[0.02]">
      <Checkbox id="cap-nfc" />
      <label htmlFor="cap-nfc" className="text-body text-sm cursor-pointer full-width">NFC Module</label>
    </div>
    <div className="flex items-center gap-default p-2 border border-primary/5 radius-md hover:bg-foreground/[0.02]">
      <Checkbox id="cap-gps" defaultChecked />
      <label htmlFor="cap-gps" className="text-body text-sm cursor-pointer full-width">GNSS / GPS</label>
    </div>
    <div className="flex items-center gap-default p-2 border border-primary/5 radius-md opacity-50">
      <Checkbox id="cap-mesh" disabled />
      <label htmlFor="cap-mesh" className="text-body text-sm cursor-not-allowed full-width">LoRa Mesh</label>
    </div>
  </div>
</div>`

const codeCardGroup = `<div className="grid grid-cols-1 sm:grid-cols-2 gap-wide w-full max-w-2xl">
  {/* Card 01 */}
  <label htmlFor="tier-pro" className="flex items-start gap-wide p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 cursor-pointer group hover:border-primary/40 transition-all duration-300">
    <Checkbox id="tier-pro" defaultChecked className="mt-1" />
    <div className="space-group">
      <span className="text-body font-bold block group-hover:text-primary transition-colors">Production Node</span>
      <p className="text-caption text-muted leading-relaxed">
        Enables isolated clustering, hardware watchdog resets, and 100ms hardware telemetry logging.
      </p>
    </div>
  </label>

  {/* Card 02 */}
  <label htmlFor="tier-staging" className="flex items-start gap-wide p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 cursor-pointer group hover:border-primary/40 transition-all duration-300">
    <Checkbox id="tier-staging" className="mt-1" />
    <div className="space-group">
      <span className="text-body font-bold block group-hover:text-primary transition-colors">Staging Node</span>
      <p className="text-caption text-muted leading-relaxed">
        Standard sandbox instance running basic diagnostic runtimes with throttling limitations.
      </p>
    </div>
  </label>
</div>`

/* 🔹 Refined Blueprint Section */
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

export function CheckboxGroupShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-label">
          Compound Inputs
        </div>
        
        <p className="text-body text-muted max-w-2xl text-lg mt-2">
          Structured checkbox collections compiled for multi-selection layout architectures, capability grouping, and high-density state matrices.
        </p>
      </header>

      {/* 🔹 Vertical Stack Group */}
      <Section 
        title="Vertical Stacks" 
        description="Standard configuration for simple stacked selections. Employs modular block structures with custom text-label system headers."
      >
        <ComponentWrapper title="CheckboxGroup // Vertical_List" code={codeVerticalGroup}>
          <div className="flex justify-center p-4 full-width">
            <div className="p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group w-full max-w-sm">
              <h4 className="text-label text-muted uppercase tracking-widest mb-3">Workspace Roles</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-default">
                  <Checkbox id="role-admin" defaultChecked />
                  <label htmlFor="role-admin" className="text-body cursor-pointer font-bold">Administrator</label>
                </div>
                <div className="flex items-center gap-default">
                  <Checkbox id="role-dev" defaultChecked />
                  <label htmlFor="role-dev" className="text-body cursor-pointer font-bold">Developer</label>
                </div>
                <div className="flex items-center gap-default">
                  <Checkbox id="role-billing" />
                  <label htmlFor="role-billing" className="text-body cursor-pointer font-bold">Billing Manager</label>
                </div>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Responsive Layout Matrix */}
      <Section 
        title="Responsive Grid Matrix" 
        description="High-density horizontal scaling layout utilizing compact grid structures for massive multi-attribute datasets."
      >
        <ComponentWrapper title="CheckboxGroup // Responsive_Grid" code={codeGridGroup}>
          <div className="flex justify-center p-4 full-width">
            <div className="p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 w-full max-w-2xl space-group">
              <h4 className="text-label text-muted uppercase tracking-widest mb-3">Device Capabilities</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-wide">
                <div className="flex items-center gap-default p-2 border border-primary/5 radius-md hover:bg-foreground/[0.02] transition-colors">
                  <Checkbox id="cap-wifi" defaultChecked />
                  <label htmlFor="cap-wifi" className="text-body text-sm cursor-pointer full-width">Wi-Fi 6E</label>
                </div>
                <div className="flex items-center gap-default p-2 border border-primary/5 radius-md hover:bg-foreground/[0.02] transition-colors">
                  <Checkbox id="cap-ble" defaultChecked />
                  <label htmlFor="cap-ble" className="text-body text-sm cursor-pointer full-width">Bluetooth 5.3</label>
                </div>
                <div className="flex items-center gap-default p-2 border border-primary/5 radius-md hover:bg-foreground/[0.02] transition-colors">
                  <Checkbox id="cap-cellular" />
                  <label htmlFor="cap-cellular" className="text-body text-sm cursor-pointer full-width">5G NR Modem</label>
                </div>
                <div className="flex items-center gap-default p-2 border border-primary/5 radius-md hover:bg-foreground/[0.02] transition-colors">
                  <Checkbox id="cap-nfc" />
                  <label htmlFor="cap-nfc" className="text-body text-sm cursor-pointer full-width">NFC Module</label>
                </div>
                <div className="flex items-center gap-default p-2 border border-primary/5 radius-md hover:bg-foreground/[0.02] transition-colors">
                  <Checkbox id="cap-gps" defaultChecked />
                  <label htmlFor="cap-gps" className="text-body text-sm cursor-pointer full-width">GNSS / GPS</label>
                </div>
                <div className="flex items-center gap-default p-2 border border-primary/5 radius-md opacity-50">
                  <Checkbox id="cap-mesh" disabled />
                  <label htmlFor="cap-mesh" className="text-body text-sm cursor-not-allowed full-width">LoRa Mesh</label>
                </div>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 High Fidelity Selector Cards */}
      <Section 
        title="Selectable Card Architecture" 
        description="Converts basic inputs into high-density click targets, shifting the active border color state dynamically on hover and active focus inputs."
      >
        <ComponentWrapper title="CheckboxGroup // Selection_Cards" code={codeCardGroup}>
          <div className="flex justify-center p-4 full-width">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-wide w-full max-w-2xl">
              
              {/* Card 01 */}
              <label htmlFor="tier-pro" className="flex items-start gap-wide p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 cursor-pointer group hover:border-primary/40 transition-all duration-300">
                <Checkbox id="tier-pro" defaultChecked className="mt-1" />
                <div className="space-group">
                  <span className="text-body font-bold block group-hover:text-primary transition-colors">Production Node</span>
                  <p className="text-caption text-muted leading-relaxed">
                    Enables isolated clustering, hardware watchdog resets, and 100ms hardware telemetry logging.
                  </p>
                </div>
              </label>

              {/* Card 02 */}
              <label htmlFor="tier-staging" className="flex items-start gap-wide p-5 border border-primary/10 radius-lg bg-background shadow-primary/20 cursor-pointer group hover:border-primary/40 transition-all duration-300">
                <Checkbox id="tier-staging" className="mt-1" />
                <div className="space-group">
                  <span className="text-body font-bold block group-hover:text-primary transition-colors">Staging Node</span>
                  <p className="text-caption text-muted leading-relaxed">
                    Standard sandbox instance running basic diagnostic runtimes with throttling limitations.
                  </p>
                </div>
              </label>

            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 pt-section border-t border-primary/10">
        <h4 className="system-footer-title text-h4 font-bold mb-8">Group Encapsulation Rules</h4>
        
        <div className="system-footer-grid grid grid-cols-1 md:grid-cols-3 gap-wide">
          
          {/* Item 01 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              01 Semantics
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Logical Headers</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Always introduce a checkbox group with an upper-case <code>text-label</code> block title to communicate the shared context of the underlying inputs clearly.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              02 Density
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Layout Selection</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Use standard vertical stacks for lists with variable or long label lengths. Limit responsive horizontal grids strictly to short, tight single-word metadata categories.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              03 Micro-Design
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Hit Area Expansion</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              When building selectable layout blocks, wrap the entire container in a semantic <code>&lt;label&gt;</code> element. This expands the input target across the entire surface area.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}