"use client"

import { ChevronRight, Slash, MoreHorizontal, Home, Settings, Server, Folder, FileTerminal } from "lucide-react"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `<div className="w-full p-5 border border-primary/10 radius-lg bg-foreground/[0.01] shadow-primary/20">
  <Breadcrumb>
    <BreadcrumbList className="gap-default sm:gap-wide text-sm font-bold">
      <BreadcrumbItem>
        <BreadcrumbLink href="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
          <Home size={14} />
          <span>Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
          <Folder size={14} />
          <span>Components</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage className="text-foreground">Navigation</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>`

const codeCustomSep = `<div className="w-full p-5 border border-primary/10 radius-lg bg-foreground/[0.01] shadow-primary/20">
  <Breadcrumb>
    <BreadcrumbList className="gap-default sm:gap-wide text-sm font-bold">
      <BreadcrumbItem>
        <BreadcrumbLink href="/dashboard" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
          <Server size={14} />
          <span>Dashboard</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight className="w-4 h-4 text-primary/40" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/dashboard/settings" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
          <Settings size={14} />
          <span>Settings</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight className="w-4 h-4 text-primary/40" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage className="flex items-center gap-1.5 text-foreground">
          <span className="w-2 h-2 radius-full bg-primary animate-pulse" />
          Hardware Config
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>`

const codeTruncated = `<div className="w-full p-5 border border-primary/10 radius-lg bg-foreground/[0.01] shadow-primary/20">
  <Breadcrumb>
    <BreadcrumbList className="gap-default sm:gap-wide text-sm font-bold">
      <BreadcrumbItem>
        <BreadcrumbLink href="/" className="text-muted-foreground hover:text-primary transition-colors">
          Workspace
        </BreadcrumbLink>
      </BreadcrumbItem>
      
      <BreadcrumbSeparator />
      
      <BreadcrumbItem>
        {/* Wrapping ellipsis in a button indicates interactivity (e.g., opens a DropdownMenu) */}
        <button className="flex items-center justify-center w-6 h-6 bg-foreground/[0.04] radius-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors focus-ring">
          <MoreHorizontal size={14} />
        </button>
      </BreadcrumbItem>
      
      <BreadcrumbSeparator />
      
      <BreadcrumbItem>
        <BreadcrumbLink href="/projects" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
          <Folder size={14} />
          ESP32 Core
        </BreadcrumbLink>
      </BreadcrumbItem>
      
      <BreadcrumbSeparator />
      
      <BreadcrumbItem>
        <BreadcrumbPage className="flex items-center gap-1.5 text-foreground">
          <FileTerminal size={14} className="text-primary" />
          Telemetry Logs
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
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

export function BreadcrumbShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-label">
          Hierarchical Traversal
        </div>
      
      </header>

      {/* 🔹 Basic Structure */}
      <Section 
        title="Standard Pipeline" 
        description="The foundational breadcrumb model. Utilizes standard slashes or chevrons, contextual icons, and explicitly marks the current active page in a higher contrast text-foreground."
      >
        <ComponentWrapper title="Breadcrumb // Native_Path" code={codeBasic}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-2xl p-5 border border-primary/10 radius-lg bg-foreground/[0.01] shadow-primary/20">
              <Breadcrumb>
                <BreadcrumbList className="gap-default sm:gap-wide text-sm font-bold">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                      <Home size={14} />
                      <span>Home</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                      <Folder size={14} />
                      <span>Components</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-foreground">Navigation</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Custom Separators */}
      <Section 
        title="System Separators" 
        description="Injecting custom Lucide icons (like ChevronRight) as separators and pulsing status indicators to alter the visual hierarchy and match technical themes."
      >
        <ComponentWrapper title="Breadcrumb // Directed_Path" code={codeCustomSep}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-2xl p-5 border border-primary/10 radius-lg bg-foreground/[0.01] shadow-primary/20">
              <Breadcrumb>
                <BreadcrumbList className="gap-default sm:gap-wide text-sm font-bold">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                      <Server size={14} />
                      <span>Dashboard</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4 text-primary/40" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                      <Settings size={14} />
                      <span>Settings</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4 text-primary/40" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="flex items-center gap-1.5 text-foreground">
                      <span className="w-2 h-2 radius-full bg-primary animate-pulse" />
                      Hardware Config
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Truncated Ellipsis */}
      <Section 
        title="Deep Truncation" 
        description="When nested arrays run deeper than 3-4 levels, use the BreadcrumbEllipsis component wrapped in a button to collapse intermediary paths and prevent horizontal overflow."
      >
        <ComponentWrapper title="Breadcrumb // Ellipsis_Collapse" code={codeTruncated}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-2xl p-5 border border-primary/10 radius-lg bg-foreground/[0.01] shadow-primary/20">
              <Breadcrumb>
                <BreadcrumbList className="gap-default sm:gap-wide text-sm font-bold">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Workspace
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  
                  <BreadcrumbSeparator />
                  
                  <BreadcrumbItem>
                    {/* Wrapping ellipsis in a button indicates interactivity (e.g., opens a DropdownMenu) */}
                    <button className="flex items-center justify-center w-6 h-6 bg-foreground/[0.04] radius-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors focus-ring">
                      <MoreHorizontal size={14} />
                    </button>
                  </BreadcrumbItem>
                  
                  <BreadcrumbSeparator />
                  
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                      <Folder size={14} />
                      ESP32 Core
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  
                  <BreadcrumbSeparator />
                  
                  <BreadcrumbItem>
                    <BreadcrumbPage className="flex items-center gap-1.5 text-foreground">
                      <FileTerminal size={14} className="text-primary" />
                      Telemetry Logs
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 pt-section border-t border-primary/10">
        <h4 className="system-footer-title text-h4 font-bold mb-8">Traversal Architecture Rules</h4>
        
        <div className="system-footer-grid grid grid-cols-1 md:grid-cols-3 gap-wide">
          
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">01 Semantics</div>
            <span className="system-footer-item-heading text-lg font-bold block">Terminal State</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              The final node in a breadcrumb trail represents the current page. It must use the <code>&lt;BreadcrumbPage&gt;</code> wrapper instead of a link. Never make the current page clickable.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">02 Placement</div>
            <span className="system-footer-item-heading text-lg font-bold block">Structural Anchoring</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Breadcrumbs belong at the absolute top-left of the content bounding box, positioned above the main <code>&lt;h1&gt;</code> header. They act as the structural ceiling of your layout.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">03 Scaling</div>
            <span className="system-footer-item-heading text-lg font-bold block">Overflow Mitigation</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              On mobile viewports, long breadcrumbs can break layouts. Use <code>gap-default</code> initially and only scale up to <code>sm:gap-wide</code>, relying on the interactive <code>BreadcrumbEllipsis</code> when crossing 4 depth levels.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}