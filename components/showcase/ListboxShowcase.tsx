"use client"

import { useState } from "react"
import { Check, Layers, Cpu, Database, HardDrive, WifiOff } from "lucide-react"
import { ComponentWrapper } from "./../system/ComponentWrapper"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeInlineListbox = `<div className="w-full max-w-sm p-2 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
  <div className="flex items-center justify-between px-2 pt-1 mb-1">
    <h4 className="text-label text-muted uppercase tracking-widest">Active Core Engine</h4>
    <span className="text-caption font-mono bg-primary/10 text-primary px-1.5 py-0.5 radius-sm">Select 1</span>
  </div>
  
  <div role="listbox" aria-label="Active Core Engine Selection" className="space-y-1 max-h-[240px] overflow-y-auto custom-scrollbar pr-1">
    {engines.map((engine) => {
      const isSelected = selected === engine.id
      const Icon = engine.icon
      
      return (
        <button
          key={engine.id}
          role="option"
          aria-selected={isSelected}
          disabled={engine.disabled}
          onClick={() => setSelected(engine.id)}
          className={\`w-full flex items-center justify-between p-2 radius-md transition-all duration-200 text-left
            \${isSelected 
              ? "bg-primary/10 border-primary/20" 
              : "border-transparent hover:bg-foreground/[0.04]"
            }
            \${engine.disabled ? "opacity-40 cursor-not-allowed grayscale" : "cursor-pointer"}
          \`}
        >
          <div className="flex items-center gap-default">
            <div className={\`flex items-center justify-center w-8 h-8 radius-sm transition-colors
              \${isSelected ? "bg-primary/20 text-primary" : "bg-foreground/[0.02] text-muted-foreground"}
            \`}>
              <Icon size={16} />
            </div>
            <div className="flex flex-col">
              <span className={\`text-body text-sm font-bold \${isSelected ? "text-primary" : ""}\`}>
                {engine.name}
              </span>
              <span className="text-caption text-muted">{engine.meta}</span>
            </div>
          </div>
          
          {isSelected && (
            <Check size={16} className="text-primary animate-in fade-in zoom-in duration-200 mr-2" />
          )}
        </button>
      )
    })}
  </div>
</div>`

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

export function ListboxShowcase() {
  const [selectedEngine, setSelectedEngine] = useState("hardware")

  // Enriched dataset with metadata and disabled states
  const engines = [
    { id: "hardware", name: "Native C++ Core", meta: "0.1ms latency • Active", icon: Cpu, disabled: false },
    { id: "tensor", name: "OpenCV Tensor Matrix", meta: "GPU Accelerated", icon: Layers, disabled: false },
    { id: "database", name: "SQLite Buffer Pool", meta: "Disk-backed • Standby", icon: Database, disabled: false },
    { id: "storage", name: "Persistent Cache File", meta: "Cold storage only", icon: HardDrive, disabled: false },
    { id: "remote", name: "Remote Cloud Node", meta: "Network disconnected", icon: WifiOff, disabled: true },
  ]

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-label">
          Listbox Selections
        </div>
      </header>

      {/* 🔹 Inline Listbox Selection */}
      <Section 
        title="Inline Containers" 
        description="A rich listbox configuration embedded directly into layout workflows. Features disabled states, meta-descriptions, and custom scrollbar boundaries."
      >
        <ComponentWrapper title="Listbox // Rich_Process_Pool" code={codeInlineListbox}>
          <div className="flex justify-center p-4 full-width">
            
            <div className="w-full max-w-sm p-2 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
              <div className="flex items-center justify-between px-2 pt-1 mb-1">
                <h4 className="text-label text-muted uppercase tracking-widest">
                  Active Core Engine
                </h4>
                <span className="text-caption font-mono bg-primary/10 text-primary px-1.5 py-0.5 radius-sm">Select 1</span>
              </div>
              
              <div 
                role="listbox" 
                aria-label="Active Core Engine Selection"
                className="space-y-1 max-h-[240px] overflow-y-auto custom-scrollbar pr-1"
              >
                {engines.map((engine) => {
                  const isSelected = selectedEngine === engine.id
                  const Icon = engine.icon
                  
                  return (
                    <button
                      key={engine.id}
                      role="option"
                      aria-selected={isSelected}
                      disabled={engine.disabled}
                      onClick={() => setSelectedEngine(engine.id)}
                      className={`w-full flex items-center justify-between p-2 radius-md transition-all duration-200 text-left border border-transparent focus-ring focus:ring-2
                        ${isSelected 
                          ? "bg-primary/10 border-primary/20" 
                          : "hover:bg-foreground/[0.04]"
                        }
                        ${engine.disabled ? "opacity-40 cursor-not-allowed grayscale" : "cursor-pointer"}
                      `}
                    >
                      <div className="flex items-center gap-default">
                        <div className={`flex items-center justify-center w-8 h-8 radius-sm transition-colors
                          ${isSelected ? "bg-primary/20 text-primary" : "bg-foreground/[0.02] text-muted-foreground"}
                        `}>
                          <Icon size={16} />
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-body text-sm font-bold ${isSelected ? "text-primary" : ""}`}>
                            {engine.name}
                          </span>
                          <span className="text-caption text-muted">{engine.meta}</span>
                        </div>
                      </div>
                      
                      {isSelected && (
                        <Check size={16} className="text-primary animate-in fade-in zoom-in duration-200 mr-2" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 pt-section border-t border-primary/10">
        <h4 className="system-footer-title text-h4 font-bold mb-8">Listbox Architecture Rules</h4>
        
        <div className="system-footer-grid grid grid-cols-1 md:grid-cols-3 gap-wide">
          
          {/* Item 01 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              01 Layout
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Visibility Over Popovers</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Use persistent inline listboxes only when the selection radically transforms the rest of the layout viewport. If the selection is minor or tertiary, conserve space using a floating popover <code>Select</code> component instead.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              02 Geometry
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Scrolled Constraints</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Always bind your inline option arrays with a explicit height cap (such as <code>max-h-[240px]</code>) combined with an elegant custom scrollbar rule to prevent massive overflow array layouts on small mobile screen views.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              03 Interaction
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Semantic Roles</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Ensure your interactive items use the <code>&lt;button&gt;</code> tag natively to inherit keyboard focus, explicitly setting <code>role="option"</code> and matched with <code>aria-selected</code> flags for screen readers.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}