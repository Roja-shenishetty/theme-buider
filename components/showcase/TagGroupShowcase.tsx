"use client"

import { useState } from "react"
import { X, Filter, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge/badge"
import { ComponentWrapper } from "./../system/ComponentWrapper"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeStatic = `<div className="w-full max-w-md p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
  <h4 className="text-label text-muted uppercase tracking-widest mb-2">Technology Stack</h4>
  <div className="flex flex-wrap gap-default">
    <Badge variant="default" className="radius-sm">React 18</Badge>
    <Badge variant="secondary" className="radius-sm">Next.js</Badge>
    <Badge variant="outline" className="radius-sm text-muted-foreground border-primary/10">Tailwind CSS</Badge>
    <Badge variant="secondary" className="radius-sm">TypeScript</Badge>
    <Badge variant="outline" className="radius-sm text-muted-foreground border-primary/10">Framer Motion</Badge>
  </div>
</div>`

const codeFilter = `<div className="w-full max-w-lg p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
  <div className="flex items-center gap-2 mb-2">
    <Filter size={14} className="text-muted-foreground" />
    <h4 className="text-label text-muted uppercase tracking-widest">Filter Capabilities</h4>
  </div>
  <div className="flex flex-wrap gap-default">
    {filters.map((filter) => {
      const isActive = activeFilters.includes(filter)
      return (
        <button
          key={filter}
          onClick={() => toggleFilter(filter)}
          className={\`flex items-center gap-1.5 px-3 py-1 text-sm font-bold transition-all border radius-full focus-ring
            \${isActive 
              ? "bg-primary/10 border-primary/30 text-primary" 
              : "bg-transparent border-primary/10 text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }\`}
        >
          {isActive && <Check size={12} className="animate-in zoom-in" />}
          {filter}
        </button>
      )
    })}
  </div>
</div>`

const codeDismissible = `<div className="w-full max-w-md p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
  <h4 className="text-label text-muted uppercase tracking-widest mb-2">Assigned Nodes</h4>
  <div className="flex flex-wrap gap-default p-3 border border-primary/5 radius-md bg-foreground/[0.02] min-h-[48px]">
    {tags.map((tag) => (
      <span 
        key={tag} 
        className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-background border border-primary/10 radius-sm text-foreground shadow-sm animate-in fade-in zoom-in"
      >
        {tag}
        <button 
          onClick={() => removeTag(tag)}
          className="p-0.5 radius-full hover:bg-destructive/10 hover:text-destructive text-muted-foreground transition-colors focus-ring"
        >
          <X size={12} />
        </button>
      </span>
    ))}
    {tags.length === 0 && (
      <span className="text-caption text-muted flex items-center h-full">No nodes assigned.</span>
    )}
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

export function TagGroupShowcase() {
  // Logic for Filter Tags
  const [activeFilters, setActiveFilters] = useState<string[]>(["Hardware", "Sensors"])
  const availableFilters = ["Hardware", "Software", "Sensors", "Network", "Power", "Analytics"]
  
  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    )
  }

  // Logic for Dismissible Tags
  const [nodes, setNodes] = useState<string[]>(["Node_Alpha_01", "Node_Beta_02", "Gateway_Main"])
  
  const removeNode = (nodeToRemove: string) => {
    setNodes(nodes.filter(n => n !== nodeToRemove))
  }

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-label">
          Metadata Arrays
        </div>
        
      </header>

      {/* 🔹 Static Tag Groups */}
      <Section 
        title="Static Categorization" 
        description="Standard read-only arrays using base Badge components. Employs gap-default with flex-wrap to ensure safe overflow across variable screen sizes."
      >
        <ComponentWrapper title="TagGroup // Static_Readonly" code={codeStatic}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-md p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
              <h4 className="text-label text-muted uppercase tracking-widest mb-2">Technology Stack</h4>
              <div className="flex flex-wrap gap-default">
                <Badge variant="default" className="radius-sm">React 18</Badge>
                <Badge variant="secondary" className="radius-sm">Next.js</Badge>
                <Badge variant="outline" className="radius-sm text-muted-foreground border-primary/10">Tailwind CSS</Badge>
                <Badge variant="secondary" className="radius-sm">TypeScript</Badge>
                <Badge variant="outline" className="radius-sm text-muted-foreground border-primary/10">Framer Motion</Badge>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Interactive Filters */}
      <Section 
        title="Interactive Filters" 
        description="Clickable toggle arrays. Wraps the native styling inside standard <button> tags to inherit keyboard focus management and a11y states natively."
      >
        <ComponentWrapper title="TagGroup // Boolean_Filters" code={codeFilter}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-lg p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
              <div className="flex items-center gap-2 mb-2">
                <Filter size={14} className="text-muted-foreground" />
                <h4 className="text-label text-muted uppercase tracking-widest">Filter Capabilities</h4>
              </div>
              <div className="flex flex-wrap gap-default">
                {availableFilters.map((filter) => {
                  const isActive = activeFilters.includes(filter)
                  return (
                    <button
                      key={filter}
                      onClick={() => toggleFilter(filter)}
                      className={`flex items-center gap-1.5 px-3 py-1 text-sm font-bold transition-all border radius-full focus-ring
                        ${isActive 
                          ? "bg-primary/10 border-primary/30 text-primary" 
                          : "bg-transparent border-primary/10 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                        }`}
                    >
                      {isActive && <Check size={12} className="animate-in zoom-in" />}
                      {filter}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Dismissible Input Tags */}
      <Section 
        title="Dismissible Array Inputs" 
        description="Dynamic state representation for multi-select combo boxes or email/node assignment inputs. Integrates destructive hover states on the close action."
      >
        <ComponentWrapper title="TagGroup // Mutating_Arrays" code={codeDismissible}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-md p-6 border border-primary/10 radius-lg bg-background shadow-primary/20 space-group">
              <div className="flex justify-between items-end mb-2">
                <h4 className="text-label text-muted uppercase tracking-widest">Assigned Nodes</h4>
                <button 
                  onClick={() => setNodes(["Node_Alpha_01", "Node_Beta_02", "Gateway_Main"])}
                  className="text-caption text-primary hover:underline cursor-pointer"
                >
                  Reset
                </button>
              </div>
              
              <div className="flex flex-wrap gap-default p-3 border border-primary/5 radius-md bg-foreground/[0.02] min-h-[48px]">
                {nodes.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-background border border-primary/10 radius-sm text-foreground shadow-sm animate-in fade-in zoom-in"
                  >
                    {tag}
                    <button 
                      onClick={() => removeNode(tag)}
                      className="p-0.5 radius-full hover:bg-destructive/10 hover:text-destructive text-muted-foreground transition-colors focus-ring"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
                {nodes.length === 0 && (
                  <span className="text-caption text-muted flex items-center h-full">No nodes assigned.</span>
                )}
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 pt-section border-t border-primary/10">
        <h4 className="system-footer-title text-h4 font-bold mb-8">Tag Group Architecture Rules</h4>
        
        <div className="system-footer-grid grid grid-cols-1 md:grid-cols-3 gap-wide">
          
          {/* Item 01 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              01 Wrapping
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Safe Flex Bounds</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Always utilize <code>flex-wrap</code> paired with your <code>gap-default</code> variable on the parent container. Never assume a tag group will fit on a single line, especially on dense mobile layouts.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              02 Geometry
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Shape Semantics</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Use <code>radius-sm</code> for standard static tags that act as read-only labels. Reserve <code>radius-full</code> for interactive filter toggles to communicate clickability clearly to the user.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">
              03 Interaction
            </div>
            <span className="system-footer-item-heading text-lg font-bold block">Hit Area Separation</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              In dismissible tags, ensure the "X" button has its own independent hover state (usually mapped to <code>text-destructive</code>) separate from the parent tag to prevent accidental removals.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}