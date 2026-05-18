"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ComponentWrapper } from "./../system/ComponentWrapper"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `<div className="flex items-center gap-default p-4 border border-primary/10 radius-md bg-background shadow-primary/20">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-body font-bold cursor-pointer">
    Accept terms and conditions
  </label>
</div>`

const codeSettings = `<div className="flex items-start gap-default p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 w-full max-w-md">
  <Checkbox id="marketing" className="mt-1" />
  <div className="space-group">
    <label htmlFor="marketing" className="text-body font-bold cursor-pointer">
      Marketing emails
    </label>
    <p className="text-body text-muted text-sm leading-relaxed">
      Receive emails about new products, features, and system updates. You can opt out at any time.
    </p>
  </div>
</div>`

const codeGroup = `<div className="p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group w-full max-w-sm">
  <h4 className="text-label text-muted uppercase tracking-widest mb-2">Notification Preferences</h4>
  
  <div className="flex items-center gap-default">
    <Checkbox id="push" defaultChecked />
    <label htmlFor="push" className="text-body cursor-pointer">Push Notifications</label>
  </div>
  
  <div className="flex items-center gap-default">
    <Checkbox id="email" defaultChecked />
    <label htmlFor="email" className="text-body cursor-pointer">Email Digests</label>
  </div>
  
  <div className="flex items-center gap-default">
    <Checkbox id="sms" disabled />
    <label htmlFor="sms" className="text-body text-muted cursor-not-allowed">SMS Alerts (Pro Only)</label>
  </div>
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

export function CheckboxShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-label">
          Boolean Inputs
        </div>
        
        <p className="text-body text-muted max-w-2xl text-lg mt-2">
          Interactive binary toggles designed for multi-selection lists, agreement confirmations, and detailed configuration settings.
        </p>
      </header>

      {/* 🔹 Basic States */}
      <Section 
        title="Standard States" 
        description="The foundational boolean input. Always pair with an explicit `<label>` tied to the input's ID."
      >
        <ComponentWrapper title="Checkbox // Basic_Inline" code={codeBasic}>
          <div className="flex justify-center p-4 full-width">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-wide w-full max-w-2xl">
              
              {/* Default */}
              <div className="flex items-center gap-default p-4 border border-primary/10 radius-md bg-background shadow-primary/20">
                <Checkbox id="basic-default" />
                <label htmlFor="basic-default" className="text-body font-bold cursor-pointer">
                  Default Checkbox
                </label>
              </div>

              {/* Checked */}
              <div className="flex items-center gap-default p-4 border border-primary/10 radius-md bg-background shadow-primary/20">
                <Checkbox id="basic-checked" defaultChecked />
                <label htmlFor="basic-checked" className="text-body font-bold cursor-pointer text-primary">
                  Checked State
                </label>
              </div>

              {/* Disabled */}
              <div className="flex items-center gap-default p-4 border border-primary/10 radius-md bg-background opacity-60">
                <Checkbox id="basic-disabled" disabled />
                <label htmlFor="basic-disabled" className="text-body font-bold cursor-not-allowed">
                  Disabled Option
                </label>
              </div>

            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Meta / Settings Configuration */}
      <Section 
        title="Settings Configuration" 
        description="Expanded hit area configurations utilizing space-group structures for complex descriptions."
      >
        <ComponentWrapper title="Checkbox // With_Meta_Text" code={codeSettings}>
          <div className="flex justify-center p-4 full-width">
            <div className="flex items-start gap-default p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 w-full max-w-md transition-all hover:border-primary/30">
              {/* Note: mt-1 aligns the checkbox with the first line of text */}
              <Checkbox id="marketing-emails" className="mt-1" />
              <div className="space-group">
                <label htmlFor="marketing-emails" className="text-body font-bold cursor-pointer block">
                  Marketing emails
                </label>
                <p className="text-body text-muted text-sm leading-relaxed">
                  Receive emails about new products, features, and system updates. You can opt out at any time.
                </p>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Selection Groups */}
      <Section 
        title="Selection Groups" 
        description="Vertical stacking for multiple related options. Uses gap-default to maintain tight association."
      >
        <ComponentWrapper title="Checkbox // Group_List" code={codeGroup}>
          <div className="flex justify-center p-4 full-width">
            <div className="p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group w-full max-w-sm">
              <h4 className="text-label text-muted uppercase tracking-widest mb-4">Notification Preferences</h4>
              
              <div className="flex items-center gap-default">
                <Checkbox id="pref-push" defaultChecked />
                <label htmlFor="pref-push" className="text-body cursor-pointer">Push Notifications</label>
              </div>
              
              <div className="flex items-center gap-default">
                <Checkbox id="pref-email" defaultChecked />
                <label htmlFor="pref-email" className="text-body cursor-pointer">Email Digests</label>
              </div>
              
              <div className="flex items-center gap-default pt-2 border-t border-primary/5">
                <Checkbox id="pref-sms" disabled />
                <label htmlFor="pref-sms" className="text-body text-muted cursor-not-allowed flex justify-between full-width">
                  <span>SMS Alerts</span>
                  <span className="text-caption text-primary">Pro Only</span>
                </label>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 pt-section border-t border-primary/10">
        <h4 className="system-footer-title text-h4 font-bold mb-8">Input Encapsulation Rules</h4>
        
        <div className="system-footer-grid grid grid-cols-1 md:grid-cols-3 gap-wide">
          
          {/* Item 01 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              01 Accessibility
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Explicit Labeling</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Never use a checkbox without an associated <code>&lt;label&gt;</code>. Ensure the <code>htmlFor</code> attribute perfectly matches the Checkbox <code>id</code> so users can click the text to toggle the state.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              02 Alignment
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Baseline Matching</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              When pairing a checkbox with multi-line text (like descriptions), use <code>items-start</code> and apply a slight top margin (e.g., <code>mt-1</code>) to align the box with the first line of the label.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              03 Alternatives
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Checkbox vs. Switch</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Use checkboxes for multi-selection lists or forms requiring a "Submit" action. Use a toggle/switch for instantaneous system state changes (e.g., toggling dark mode).
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}