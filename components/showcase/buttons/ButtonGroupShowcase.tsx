"use client"

import { useState } from "react"
import { Button } from "../../ui/button"
import { Typography } from "@/components/ui/typography"
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Pencil, 
  Paperclip, 
  Trash2, 
  Plus, 
  LayoutGrid, 
  List, 
  Check 
} from "lucide-react"

/* 🔹 Refined Section Wrapper */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-y-2 mb-6">
        <Typography variant="h3" className="tracking-tight">{title}</Typography>
        {description && (
          <Typography variant="body" className="text-body-muted text-sm max-w-2xl">
            {description}
          </Typography>
        )}
      </div>
      {/* Added dash border and subtle bg for better contrast */}
      <div className="card bg-muted/5 border-dashed border-2 p-8 flex flex-wrap items-center gap-wide">
        {children}
      </div>
    </section>
  )
}

export function ButtonGroupShowcase() {
  const [active, setActive] = useState("center")
  const [view, setView] = useState("grid")

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header Section */}
      <header className="space-group pb-12 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Components
        </div>
       
        <Typography variant="body" className="text-body-muted max-w-xl">
          Polished interface patterns for organizing related actions, toggles, and toolbars.
        </Typography>
      </header>

      {/* 🔹 Connected Group (Basic) */}
      <Section 
        title="Connected Action Group" 
        description="Buttons are merged into a single unit using radius-none and negative margins to prevent double borders."
      >
        <div className="flex -space-x-px">
          <Button variant="outline" className="radius-r-none border-primary/20 hover:z-10 hover:border-primary">Left</Button>
          <Button variant="outline" className="radius-none border-primary/20 hover:z-10 hover:border-primary">Middle</Button>
          <Button variant="outline" className="radius-l-none border-primary/20 hover:z-10 hover:border-primary">Right</Button>
        </div>

        <div className="flex -space-x-px ml-auto">
          <Button className="radius-r-none border-white/10 hover:z-10">Publish</Button>
          <Button size="icon" className="radius-l-none border-l border-white/20 hover:z-10">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* 🔹 Segmented Control */}
      <Section 
        title="Segmented Control" 
        description="Perfect for switching views or filter states. Uses your radius-full and muted tokens."
      >
        <div className="flex bg-muted/50 p-1 radius-full border w-fit backdrop-blur-sm">
          {["grid", "list"].map((type) => (
            <button
              key={type}
              onClick={() => setView(type)}
              className={`flex items-center gap-2 px-6 py-2 radius-full text-small font-medium transition-all ${
                view === type 
                ? "bg-background text-primary shadow-sm ring-1 ring-black/5" 
                : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {type === "grid" ? <LayoutGrid className="w-4 h-4" /> : <List className="w-4 h-4" />}
              <span className="capitalize">{type}</span>
            </button>
          ))}
        </div>
      </Section>

      {/* 🔹 Modern Toolbar */}
      <Section 
        title="Creator Toolbar" 
        description="Ghost variants paired with a solid container for document or asset editing."
      >
        <div className="flex items-center gap-1 bg-foreground text-background pad-1 radius-lg shadow-xl">
          <Button size="icon" variant="ghost" className="hover:bg-white/10 text-background">
            <Pencil className="w-4 h-4" />
          </Button>
          <div className="w-px h-4 bg-white/20 mx-1" />
          <Button size="icon" variant="ghost" className="hover:bg-white/10 text-background">
            <Paperclip className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" className="hover:bg-red-500/20 hover:text-red-400 text-background">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* 🔹 State-Driven Group */}
      <Section 
        title="Active States" 
        description="Using data-attributes to drive styling for selection-heavy interfaces."
      >
        <div className="flex -space-x-px bg-muted radius-md p-1 border">
          {["left", "center", "right"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              onClick={() => setActive(item)}
              className={`
                capitalize px-8 radius-sm transition-all
                ${active === item ? "bg-background text-primary shadow-sm" : "text-muted-foreground"}
              `}
            >
              {item}
            </Button>
          ))}
        </div>
      </Section>

      {/* 🔹 Indicators & Badges */}
      <Section 
        title="Status Indicators" 
        description="Buttons that carry live data or notifications using your primary color tokens."
      >
        <div className="flex gap-default">
          <Button variant="outline" className="group relative border-primary/20">
            Inbox
            <span className="ml-3 flex h-5 w-5 items-center justify-center radius-full bg-primary text-[10px] text-primary-foreground font-bold group-hover:scale-110 transition-transform">
              12
            </span>
          </Button>

          <Button variant="secondary" className="radius-full px-6">
            <span className="w-2 h-2 radius-full bg-green-500 animate-pulse mr-2" />
            Live Server
          </Button>
        </div>
      </Section>

      {/* 🔹 Guidelines Footer */}
    <footer className="system-footer shadow-sm">
  <h4 className="system-footer-title">Best Practices</h4>
  
  <div className="system-footer-grid">
    <div className="space-y-1">
      <span className="system-footer-item-heading">Contextual</span>
      <p className="system-footer-item-text">
        Only group actions that perform similar logic (e.g., Align Left, Center, Right).
      </p>
    </div>

    <div className="space-y-1">
      <span className="system-footer-item-heading">Visual Weight</span>
      <p className="system-footer-item-text">
        Avoid grouping multiple high-intensity 'Primary' buttons together.
      </p>
    </div>

    <div className="space-y-1">
      <span className="system-footer-item-heading">Edge Cases</span>
      <p className="system-footer-item-text">
        Ensure your radius-none logic accounts for border-radius on the outer edges.
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}