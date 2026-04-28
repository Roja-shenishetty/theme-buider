"use client"

import { Avatar } from "@/components/ui/avatar"
import { BadgeWrapper } from "@/components/ui/badge/badge-wrapper"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { User, ShieldCheck, Zap, Mail, Plus } from "lucide-react"

const users = [
  { id: 1, image: "https://i.pravatar.cc/100?img=11", name: "John Doe" },
  { id: 2, image: "https://i.pravatar.cc/100?img=12", name: "Kate Wilson" },
  { id: 3, image: "https://i.pravatar.cc/100?img=13", name: "Emily Chen" },
  { id: 4, image: "https://i.pravatar.cc/100?img=14", name: "Michael Brown" },
  { id: 5, image: "https://i.pravatar.cc/100?img=15", name: "Olivia Davis" },
]

const colorOptions = ["default", "accent", "success", "warning", "danger"] as const

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeShapeScale = `<div className="flex items-end gap-wide">
  <Avatar size="sm" src={users[0].image} className="radius-full" />
  <Avatar size="md" src={users[1].image} className="radius-md" />
  <Avatar size="lg" src={users[2].image} className="radius-none border-2 border-primary/20 p-1" />
  <Avatar size="lg" src={users[3].image} className="radius-full shadow-lg shadow-primary/20 border-4 border-background" />
</div>`;

const codePresence = `<div className="flex gap-wide">
  <BadgeWrapper dot variant="success" placement="bottom-right">
    <Avatar src={users[0].image} className="radius-full" />
  </BadgeWrapper>
  
  <BadgeWrapper content={<ShieldCheck />} variant="accent" placement="top-right">
    <Avatar src={users[4].image} className="radius-full" />
  </BadgeWrapper>

  <BadgeWrapper content="99+" variant="danger" placement="top-right">
    <Avatar fallback="AG" color="danger" variant="soft" className="radius-md" />
  </BadgeWrapper>
  
  <BadgeWrapper content={<Zap />} variant="warning" placement="bottom-left">
    <Avatar src={users[2].image} className="radius-full" />
  </BadgeWrapper>
</div>`;

const codeGrouping = `<div className="flex -space-x-4">
  {users.slice(0, 4).map((user, i) => (
    <Avatar
      key={user.id}
      src={user.image}
      className={\`radius-full border-4 border-background shadow-sm hover:-translate-y-2 hover:z-10 \${
        i === 0 ? "z-40" : i === 1 ? "z-30" : i === 2 ? "z-20" : "z-10"
      }\`}
    />
  ))}
  <div className="w-12 h-12 radius-full bg-foreground text-background border-4 border-background flex items-center justify-center text-xs font-bold z-0">
    +12
  </div>
</div>`;

const codeTechnicalMatrix = `<table className="w-full text-left border-collapse">
  <tbody className="divide-y divide-primary/5">
    {[{ name: "Solid Fallback", variant: "solid" }, { name: "Soft Tint", variant: "soft" }].map((row) => (
      <tr key={row.name}>
        <td>{row.name}</td>
        {colorOptions.map(color => (
          <td key={color}>
            <Avatar fallback="A" color={color} variant={row.variant} className="radius-md" />
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>`;

const codeOverrides = `<div className="flex gap-wide items-center">
  {/* Gradient Border Style */}
  <div className="p-[2px] radius-full bg-gradient-to-tr from-primary via-accent to-danger animate-spin-slow">
    <div className="p-1 radius-full bg-background">
       <Avatar src={users[1].image} className="radius-full" />
    </div>
  </div>

  {/* Interactive Add Button */}
  <button className="w-12 h-12 radius-full border-2 border-dashed border-primary/30 flex items-center justify-center hover:border-primary hover:text-primary transition-all group">
    <Plus className="group-hover:rotate-90 transition-transform" />
  </button>

  {/* Square Brand Style */}
  <Avatar fallback={<Mail />} className="radius-lg bg-foreground text-background" />
</div>`;


/* 🔹 Contextual Section Wrapper */
function ShowcaseSection({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6">
        <h3 className="text-h3 font-bold tracking-tight text-primary/90">{title}</h3>
        {description && (
          <p className="text-body-muted text-sm max-w-2xl">{description}</p>
        )}
      </div>
      <div className="w-full">
        {children}
      </div>
    </section>
  )
}

export function AvatarShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header Section */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Identity Components
        </div>
        
        <p className="text-body-muted max-w-2xl text-lg">
          Representing individuals and entities with a focus on presence, status, and visual depth.
        </p>
      </header>

      {/* 🔹 Shape & Scale Architecture */}
      <ShowcaseSection 
        title="Shape & Scale" 
        description="Using radius tokens to distinguish between different entity types (e.g., users vs. companies)."
      >
        <ComponentWrapper title="Avatar_Nodes // Morphology" code={codeShapeScale}>
          <div className="flex items-end gap-wide">
            <div className="flex flex-col items-center gap-2">
              <Avatar size="sm" src={users[0].image} className="radius-full" />
              <span className="text-[10px] uppercase font-bold opacity-40">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="md" src={users[1].image} className="radius-md" />
              <span className="text-[10px] uppercase font-bold opacity-40">Medium</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="lg" src={users[2].image} className="radius-none border-2 border-primary/20 p-1" />
              <span className="text-[10px] uppercase font-bold opacity-40">Large Sharp</span>
            </div>
            <div className="flex flex-col items-center gap-2">
               <Avatar size="lg" src={users[3].image} className="radius-full shadow-lg shadow-primary/20 border-4 border-background" />
               <span className="text-[10px] uppercase font-bold opacity-40">Hero</span>
            </div>
          </div>
        </ComponentWrapper>
      </ShowcaseSection>

      {/* 🔹 Status Integration */}
      <ShowcaseSection 
        title="Presence Indicators" 
        description="Combining BadgeWrapper logic with avatars for live activity monitoring."
      >
        <ComponentWrapper title="Telemetry // Live_Status" code={codePresence}>
          <div className="flex gap-wide">
            <BadgeWrapper dot variant="success" placement="bottom-right">
              <Avatar src={users[0].image} className="radius-full" />
            </BadgeWrapper>
            
            <BadgeWrapper content={<ShieldCheck className="w-3 h-3" />} variant="accent" placement="top-right">
              <Avatar src={users[4].image} className="radius-full" />
            </BadgeWrapper>

            <BadgeWrapper content="99+" variant="danger" placement="top-right">
              <Avatar fallback="AG" color="danger" variant="soft" className="radius-md" />
            </BadgeWrapper>
            
            <BadgeWrapper content={<Zap className="w-3 h-3" />} variant="warning" placement="bottom-left">
              <Avatar src={users[2].image} className="radius-full" />
            </BadgeWrapper>
          </div>
        </ComponentWrapper>
      </ShowcaseSection>

      {/* 🔹 Modern Avatar Group */}
      <ShowcaseSection 
        title="Entity Grouping" 
        description="Overlapping avatars for team representation with a custom limit counter."
      >
        <ComponentWrapper title="Z_Index // Component_Stacking" code={codeGrouping}>
          <div className="flex -space-x-4">
            {users.slice(0, 4).map((user, i) => (
              <Avatar
                key={user.id}
                src={user.image}
                className={`
                  radius-full border-4 border-background shadow-sm transition-transform hover:-translate-y-2 hover:z-10
                  ${i === 0 ? "z-40" : i === 1 ? "z-30" : i === 2 ? "z-20" : "z-10"}
                `}
              />
            ))}
            <div className="w-12 h-12 radius-full bg-foreground text-background border-4 border-background flex items-center justify-center text-xs font-bold z-0">
              +12
            </div>
          </div>
        </ComponentWrapper>
      </ShowcaseSection>

      {/* 🔹 Technical Variant Grid */}
      <ShowcaseSection 
        title="Technical Matrix"
        description="Color variants mapping across fallbacks and structural types."
      >
        <ComponentWrapper title="Color_Mapping // Fallbacks" code={codeTechnicalMatrix}>
          <div className="overflow-x-auto p-0 border-primary/10 w-full">
            <table className="w-full text-left border-collapse">
              <thead className="bg-muted/50">
                <tr>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest opacity-50">Style</th>
                  {colorOptions.map(c => (
                    <th key={c} className="p-4 text-xs font-bold uppercase tracking-widest opacity-50 text-center">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {[
                  { name: "Solid Fallback", variant: "solid" },
                  { name: "Soft Tint", variant: "soft" }
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="p-4 text-sm font-medium">{row.name}</td>
                    {colorOptions.map(color => (
                      <td key={color} className="p-4">
                        <div className="flex justify-center">
                          <Avatar fallback="A" color={color} variant={row.variant as any} className="radius-md" />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentWrapper>
      </ShowcaseSection>

      {/* 🔹 Advanced Customizations */}
      <ShowcaseSection 
        title="Custom Overrides" 
        description="Leveraging global classes for unique brand moments."
      >
        <ComponentWrapper title="CSS_Overrides // Animation" code={codeOverrides}>
          <div className="flex gap-wide items-center">
            {/* Gradient Border Style */}
            <div className="p-[2px] radius-full bg-gradient-to-tr from-primary via-accent to-danger animate-spin-slow">
              <div className="p-1 radius-full bg-background">
                 <Avatar src={users[1].image} className="radius-full" />
              </div>
            </div>

            {/* Interactive Add Button */}
            <button className="w-12 h-12 radius-full border-2 border-dashed border-primary/30 flex items-center justify-center text-primary/50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all group">
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>

            {/* Square Brand Style */}
            <Avatar fallback={<Mail className="w-5 h-5" />} className="radius-lg bg-foreground text-background" />
          </div>
        </ComponentWrapper>
      </ShowcaseSection>

      {/* 🔹 Best Practices */}
      <footer className="system-footer mt-16">
        <h4 className="system-footer-title">Identity Protocol</h4>
        <div className="system-footer-grid">
          
          {/* Item 01 */}
          <div className="space-y-2">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">01 Hierarchy</div>
            <span className="system-footer-item-heading text-lg">Scale & Depth</span>
            <p className="system-footer-item-text">
              Use larger Avatars (lg/xl) for profile headers and smaller ones (sm/xs) for comment threads or metadata.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">02 Fallbacks</div>
            <span className="system-footer-item-heading text-lg">Empty States</span>
            <p className="system-footer-item-text">
              Always provide initials or a generic Icon as a fallback to prevent "empty circle" syndrome when images fail to load.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">03 Radius</div>
            <span className="system-footer-item-heading text-lg">Entity Logic</span>
            <p className="system-footer-item-text">
              Consistency is key. Use <code>radius-full</code> for humans and <code>radius-md</code> for organizations or automated bots.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}