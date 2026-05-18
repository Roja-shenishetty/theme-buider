"use client"

import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Command, ArrowRight, ArrowLeft } from "lucide-react"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeStandard = `<div className="w-full p-6 border border-primary/10 radius-lg bg-foreground/[0.01] shadow-primary/20">
  <Pagination>
    <PaginationContent className="gap-1 sm:gap-2">
      <PaginationItem>
        {/* Overriding default icons to add keyboard shortcut hints for power users */}
        <PaginationPrevious href="#" className="gap-2 pl-2.5 pr-4 radius-md hover:bg-primary/10 hover:text-primary transition-colors focus-ring">
          <div className="flex items-center gap-1 opacity-60 mr-1 hidden sm:flex">
            <Command size={12} /> <ArrowLeft size={12} />
          </div>
          <span>Previous</span>
        </PaginationPrevious>
      </PaginationItem>
      
      <PaginationItem className="hidden sm:inline-block">
        <PaginationLink href="#" className="radius-md hover:bg-foreground/[0.04] transition-colors focus-ring">1</PaginationLink>
      </PaginationItem>
      
      <PaginationItem>
        <PaginationLink href="#" isActive className="radius-md bg-primary/10 text-primary border-primary/20 transition-colors focus-ring font-bold shadow-sm">
          2
        </PaginationLink>
      </PaginationItem>
      
      <PaginationItem>
        <PaginationLink href="#" className="radius-md hover:bg-foreground/[0.04] transition-colors focus-ring">3</PaginationLink>
      </PaginationItem>
      
      <PaginationItem>
        <PaginationEllipsis className="text-muted-foreground bg-foreground/[0.02] radius-sm w-9 h-9 flex items-center justify-center" />
      </PaginationItem>
      
      <PaginationItem className="hidden sm:inline-block">
        <PaginationLink href="#" className="radius-md hover:bg-foreground/[0.04] transition-colors focus-ring">10</PaginationLink>
      </PaginationItem>
      
      <PaginationItem>
        <PaginationNext href="#" className="gap-2 pl-4 pr-2.5 radius-md hover:bg-primary/10 hover:text-primary transition-colors focus-ring">
          <span>Next</span>
          <div className="flex items-center gap-1 opacity-60 ml-1 hidden sm:flex">
            <Command size={12} /> <ArrowRight size={12} />
          </div>
        </PaginationNext>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>`

const codeDense = `<div className="w-full max-w-sm p-4 border border-primary/10 radius-lg bg-foreground/[0.01] shadow-primary/20 flex justify-center">
  <Pagination>
    <PaginationContent className="gap-0.5 bg-background border border-primary/10 radius-md p-1 shadow-sm">
      {/* Extreme jump to first */}
      <PaginationItem>
        <PaginationLink href="#" size="icon" aria-label="Go to first page" className="w-8 h-8 radius-sm hover:bg-primary/10 hover:text-primary transition-colors">
          <ChevronsLeft size={16} />
        </PaginationLink>
      </PaginationItem>
      
      {/* Standard Previous - Using PaginationLink directly to avoid text overlap */}
      <PaginationItem>
        <PaginationLink href="#" size="icon" aria-label="Go to previous page" className="w-8 h-8 radius-sm hover:bg-primary/10 hover:text-primary transition-colors">
          <ChevronLeft size={16} />
        </PaginationLink>
      </PaginationItem>
      
      <PaginationItem>
        <PaginationLink href="#" isActive className="w-8 h-8 radius-sm bg-primary/10 text-primary font-bold shadow-sm border border-primary/20">
          4
        </PaginationLink>
      </PaginationItem>
      
      {/* Standard Next - Using PaginationLink directly to avoid text overlap */}
      <PaginationItem>
        <PaginationLink href="#" size="icon" aria-label="Go to next page" className="w-8 h-8 radius-sm hover:bg-primary/10 hover:text-primary transition-colors">
          <ChevronRight size={16} />
        </PaginationLink>
      </PaginationItem>

      {/* Extreme jump to last */}
      <PaginationItem>
        <PaginationLink href="#" size="icon" aria-label="Go to last page" className="w-8 h-8 radius-sm hover:bg-primary/10 hover:text-primary transition-colors">
          <ChevronsRight size={16} />
        </PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>`

const codeTableFooter = `<div className="w-full p-4 border border-primary/10 radius-lg bg-background shadow-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
  
  {/* Left Side: Data Context & Rows Per Page */}
  <div className="flex items-center gap-6 text-sm text-muted">
    <div className="flex items-center gap-2">
      <span className="text-caption font-bold uppercase tracking-widest">Rows per page</span>
      <button className="flex items-center gap-1.5 px-2.5 py-1 bg-foreground/[0.02] border border-primary/10 radius-sm hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors focus-ring">
        <span className="font-mono font-bold text-foreground">10</span>
        <ChevronDown size={14} className="opacity-50" />
      </button>
    </div>
    
    <div className="hidden md:flex items-center gap-1.5">
      <span>Showing</span>
      <span className="font-mono text-foreground font-bold">21-30</span>
      <span>of</span>
      <span className="font-mono text-foreground font-bold">256</span>
    </div>
  </div>

  {/* Right Side: Functional Controls */}
  <Pagination className="mx-0 w-auto">
    <PaginationContent className="gap-1">
      <PaginationItem>
        <PaginationPrevious href="#" className="h-8 px-3 text-xs radius-sm hover:bg-primary/10 hover:text-primary transition-colors border border-transparent hover:border-primary/20" />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" className="h-8 px-3 text-xs radius-sm hover:bg-primary/10 hover:text-primary transition-colors border border-transparent hover:border-primary/20" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
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

export function PaginationShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-label">
          Dataset Navigation
        </div>
      
      </header>

      {/* 🔹 Standard Series */}
      <Section 
        title="Standard Sequence" 
        description="The primary layout for full-page lists. Upgraded with explicit keyboard shortcut hints (⌘ + Arrow) to cater to power-user navigation flows."
      >
        <ComponentWrapper title="Pagination // Page_Series" code={codeStandard}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-2xl p-6 border border-primary/10 radius-lg bg-foreground/[0.01] shadow-primary/20">
              <Pagination>
                <PaginationContent className="gap-1 sm:gap-2">
                  <PaginationItem>
                    <PaginationPrevious href="#" className="gap-2 pl-2.5 pr-4 radius-md hover:bg-primary/10 hover:text-primary transition-colors focus-ring">
                      <div className="flex items-center gap-1 opacity-60 mr-1 hidden sm:flex">
                        <Command size={12} /> <ArrowLeft size={12} />
                      </div>
                      <span>Previous</span>
                    </PaginationPrevious>
                  </PaginationItem>
                  
                  <PaginationItem className="hidden sm:inline-block">
                    <PaginationLink href="#" className="radius-md hover:bg-foreground/[0.04] transition-colors focus-ring">1</PaginationLink>
                  </PaginationItem>
                  
                  <PaginationItem>
                    <PaginationLink href="#" isActive className="radius-md bg-primary/10 text-primary border-primary/20 transition-colors focus-ring font-bold shadow-sm">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  
                  <PaginationItem>
                    <PaginationLink href="#" className="radius-md hover:bg-foreground/[0.04] transition-colors focus-ring">3</PaginationLink>
                  </PaginationItem>
                  
                  <PaginationItem>
                    <PaginationEllipsis className="text-muted-foreground bg-foreground/[0.02] radius-sm w-9 h-9 flex items-center justify-center" />
                  </PaginationItem>
                  
                  <PaginationItem className="hidden sm:inline-block">
                    <PaginationLink href="#" className="radius-md hover:bg-foreground/[0.04] transition-colors focus-ring">10</PaginationLink>
                  </PaginationItem>
                  
                  <PaginationItem>
                    <PaginationNext href="#" className="gap-2 pl-4 pr-2.5 radius-md hover:bg-primary/10 hover:text-primary transition-colors focus-ring">
                      <span>Next</span>
                      <div className="flex items-center gap-1 opacity-60 ml-1 hidden sm:flex">
                        <Command size={12} /> <ArrowRight size={12} />
                      </div>
                    </PaginationNext>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Dense Variant */}
      <Section 
        title="Micro Array" 
        description="A hyper-dense structure mapping all controls into a single bounded background plate. Introduces double-chevron limits for immediate jumps to the first or last index."
      >
        <ComponentWrapper title="Pagination // Dense_Controller" code={codeDense}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-sm p-4 border border-primary/10 radius-lg bg-foreground/[0.01] shadow-primary/20 flex justify-center">
              <Pagination>
                <PaginationContent className="gap-0.5 bg-background border border-primary/10 radius-md p-1 shadow-sm">
                  
                  {/* Extreme jump to first */}
                  <PaginationItem>
                    <PaginationLink href="#" size="icon" aria-label="Go to first page" className="w-8 h-8 flex items-center justify-center radius-sm hover:bg-primary/10 hover:text-primary transition-colors focus-ring">
                      <ChevronsLeft size={16} />
                    </PaginationLink>
                  </PaginationItem>
                  
                  {/* Standard Previous - Replaced PaginationPrevious with PaginationLink to kill text overlap */}
                  <PaginationItem>
                    <PaginationLink href="#" size="icon" aria-label="Go to previous page" className="w-8 h-8 flex items-center justify-center radius-sm hover:bg-primary/10 hover:text-primary transition-colors focus-ring">
                      <ChevronLeft size={16} />
                    </PaginationLink>
                  </PaginationItem>

                  {/* Context Node */}
                  <PaginationItem>
                    <PaginationLink href="#" className="w-8 h-8 flex items-center justify-center radius-sm hover:bg-foreground/[0.04] text-muted-foreground transition-colors focus-ring">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  
                  {/* Active Node */}
                  <PaginationItem>
                    <PaginationLink href="#" isActive className="w-8 h-8 flex items-center justify-center radius-sm bg-primary/10 text-primary font-bold shadow-sm border border-primary/20 focus-ring">
                      4
                    </PaginationLink>
                  </PaginationItem>

                  {/* Context Node */}
                  <PaginationItem>
                    <PaginationLink href="#" className="w-8 h-8 flex items-center justify-center radius-sm hover:bg-foreground/[0.04] text-muted-foreground transition-colors focus-ring">
                      5
                    </PaginationLink>
                  </PaginationItem>
                  
                  {/* Standard Next - Replaced PaginationNext with PaginationLink to kill text overlap */}
                  <PaginationItem>
                    <PaginationLink href="#" size="icon" aria-label="Go to next page" className="w-8 h-8 flex items-center justify-center radius-sm hover:bg-primary/10 hover:text-primary transition-colors focus-ring">
                      <ChevronRight size={16} />
                    </PaginationLink>
                  </PaginationItem>

                  {/* Extreme jump to last */}
                  <PaginationItem>
                    <PaginationLink href="#" size="icon" aria-label="Go to last page" className="w-8 h-8 flex items-center justify-center radius-sm hover:bg-primary/10 hover:text-primary transition-colors focus-ring">
                      <ChevronsRight size={16} />
                    </PaginationLink>
                  </PaginationItem>
                  
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Table Footer Layout */}
      <Section 
        title="Enterprise Data Table" 
        description="The gold standard for grid footers. Balances a functional 'Rows per page' configuration block on the left with terminal increment controllers on the right."
      >
        <ComponentWrapper title="Pagination // Table_Footer" code={codeTableFooter}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-3xl p-4 border border-primary/10 radius-lg bg-background shadow-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Context String */}
              <div className="flex items-center gap-6 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <span className="text-caption font-bold uppercase tracking-widest">Rows per page</span>
                  <button className="flex items-center gap-1.5 px-2.5 py-1 bg-foreground/[0.02] border border-primary/10 radius-sm hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors focus-ring">
                    <span className="font-mono font-bold text-foreground">10</span>
                    <ChevronDown size={14} className="opacity-50" />
                  </button>
                </div>
                
                <div className="hidden md:flex items-center gap-1.5">
                  <span>Showing</span>
                  <span className="font-mono text-foreground font-bold">21-30</span>
                  <span>of</span>
                  <span className="font-mono text-foreground font-bold">256</span>
                </div>
              </div>

              {/* Functional Controls */}
              <Pagination className="mx-0 w-auto">
                <PaginationContent className="gap-1">
                  <PaginationItem>
                    <PaginationPrevious href="#" className="h-8 px-3 text-xs radius-sm hover:bg-primary/10 hover:text-primary transition-colors border border-transparent hover:border-primary/20" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" className="h-8 px-3 text-xs radius-sm hover:bg-primary/10 hover:text-primary transition-colors border border-transparent hover:border-primary/20" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>

            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 pt-section border-t border-primary/10">
        <h4 className="system-footer-title text-h4 font-bold mb-8">Pagination Architecture Rules</h4>
        
        <div className="system-footer-grid grid grid-cols-1 md:grid-cols-3 gap-wide">
          
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">01 Semantics</div>
            <span className="system-footer-item-heading text-lg font-bold block">Links vs Buttons</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              If pagination changes the URL (e.g., <code>?page=2</code>), always use <code>href</code> props so they render as <code>&lt;a&gt;</code> tags for SEO. If it purely filters client-side state without changing the URL, replace <code>href</code> with <code>onClick</code> so they render as <code>&lt;button&gt;</code> tags.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">02 Geometry</div>
            <span className="system-footer-item-heading text-lg font-bold block">Touch Target Safety</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Never reduce pagination items below a <code>32px</code> (w-8/h-8) bounding box. Because these are clustered click targets, shrinking them further will cause severe misclicks on mobile touch screens.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">03 State</div>
            <span className="system-footer-item-heading text-lg font-bold block">The Active Indicator</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              The <code>isActive</code> prop on a PaginationLink automatically flags it with <code>aria-current="page"</code> for screen readers. Ensure you style this state uniquely (e.g., <code>bg-primary/10</code>) so users instantly know their position in the dataset.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}