"use client"

import { BadgeWrapper } from "@/components/ui/badge/badge-wrapper"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge/badge"
import { Typography } from "@/components/ui/typography"
import { Bell, Mail, ShieldCheck, Activity, Info } from "lucide-react"

type SectionProps = {
  title: string
  description?: string
  children: React.ReactNode
}

/* 🔹 Refined Blueprint Section */
function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6">
        <Typography variant="h3" className="tracking-tight font-bold text-primary/90">
          {title}
        </Typography>
        {description && (
          <Typography variant="body" className="text-body-muted text-sm max-w-2xl">
            {description}
          </Typography>
        )}
      </div>

      <div className="card bg-muted/5 border-dashed border-2 border-primary/10 p-10 flex flex-wrap items-center gap-wide overflow-hidden relative">
        {/* Subtle background identifier */}
        <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none select-none">
          <Typography variant="h1" className="text-6xl uppercase">{title[0]}</Typography>
        </div>
        {children}
      </div>
    </section>
  )
}

export function BadgeShowcase() {
  return (
    <div className="page-container space-page">

      {/* 🔹 Technical Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Annotation Engine
        </div>
        
        <Typography variant="body" className="text-body-muted max-w-2xl text-lg mt-2">
          Precision indicators for signaling status, counts, and metadata across the interface.
        </Typography>
      </header>

      {/* 🔹 Semantic Variants */}
      <Section 
        title="Visual Variants" 
        description="High-contrast labels for categorization and priority signaling."
      >
        <div className="flex flex-wrap items-center gap-default">
          <Badge className="radius-sm bg-primary text-primary-foreground px-3 py-1">Featured</Badge>
          <Badge variant="secondary" className="radius-sm border-primary/10">Beta v2.4</Badge>
          <Badge variant="outline" className="radius-sm border-primary/30 text-primary">Documentation</Badge>
          <Badge variant="destructive" className="radius-sm shadow-lg shadow-destructive/20">Critical</Badge>
          <div className="bg-primary/10 text-primary px-3 py-1 radius-full text-[10px] font-bold uppercase tracking-wider">
            Soft Tint
          </div>
        </div>
      </Section>

      {/* 🔹 Dynamic BadgeWrapper (Overlays) */}
      <Section 
        title="Presence Overlays" 
        description="Attach counts or status dots to parent components like Avatars or Icons."
      >
        <div className="flex gap-wide items-center">
          <BadgeWrapper content="12" variant="destructive" className="shadow-lg">
            <Avatar src="https://i.pravatar.cc/100?img=3" className="radius-md" />
          </BadgeWrapper>

          <BadgeWrapper content={<ShieldCheck className="w-2.5 h-2.5" />} variant="accent" placement="top-right">
            <Avatar src="https://i.pravatar.cc/100?img=5" className="radius-full border-2 border-background" />
          </BadgeWrapper>

          <BadgeWrapper dot variant="success" placement="bottom-right" className="animate-pulse">
            <div className="w-12 h-12 radius-lg bg-muted flex items-center justify-center border">
              <Mail className="w-5 h-5 text-muted-foreground" />
            </div>
          </BadgeWrapper>

          <BadgeWrapper content="NEW" variant="warning" tone="soft" className="text-[8px] font-black">
             <div className="px-6 py-3 radius-md bg-foreground text-background font-bold text-sm">
                System Log
             </div>
          </BadgeWrapper>
        </div>
      </Section>

      {/* 🔹 Adaptive Scaling */}
      <Section title="Scale & Density" description="Badges that adapt to the scale of their host component.">
        <div className="flex items-end gap-wide">
          <BadgeWrapper content="5" variant="destructive">
            <Avatar size="sm" fallback="SM" className="radius-full" />
          </BadgeWrapper>

          <BadgeWrapper content="99+" variant="destructive" className="px-1.5 py-0.5 text-[10px]">
            <Avatar size="md" fallback="MD" className="radius-full" />
          </BadgeWrapper>

          <BadgeWrapper content="UNREAD" variant="destructive" className="text-[8px] tracking-tighter">
            <Avatar size="lg" fallback="LG" className="radius-full border-4 border-background" />
          </BadgeWrapper>
        </div>
      </Section>

      {/* 🔹 Matrix of Status Colors */}
      <Section title="Semantic Matrix" description="Universal status colors for consistent user comprehension.">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-wide w-full">
          {[
            { label: "Online", color: "success", icon: <Activity /> },
            { label: "Away", color: "warning", icon: <Bell /> },
            { label: "Error", color: "danger", icon: <Info /> },
            { label: "Sync", color: "accent", icon: <Bell /> },
            { label: "Locked", color: "default", icon: <ShieldCheck /> },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 p-4 radius-lg bg-muted/20 border border-primary/5">
              <BadgeWrapper dot variant={item.color as any} placement="bottom-right">
                <div className="w-10 h-10 radius-md bg-background border flex items-center justify-center text-primary/50">
                  {item.icon}
                </div>
              </BadgeWrapper>
              <Typography variant="label" className="text-[10px] uppercase tracking-widest">{item.label}</Typography>
            </div>
          ))}
        </div>
      </Section>

      {/* 🔹 Real Usage Layouts */}
      <Section title="Integrated Patterns" description="Common interface patterns using badge components.">
        <div className="grid gap-default w-full max-w-md">
          <div className="flex items-center justify-between p-4 radius-md bg-muted/30 border border-primary/5 hover:bg-primary/5 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <Typography variant="body" className="font-medium">Direct Messages</Typography>
            </div>
            <Badge className="bg-primary text-primary-foreground radius-full px-2 font-bold group-hover:scale-110 transition-transform">24</Badge>
          </div>

          <div className="flex items-center justify-between p-4 radius-md bg-muted/30 border border-primary/5">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-success" />
              <Typography variant="body" className="font-medium">Security Clearance</Typography>
            </div>
            <Badge variant="outline" className="text-success border-success/30 bg-success/5 radius-sm">Verified</Badge>
          </div>
        </div>
      </Section>

      {/* 🔹 Best Practices */}
    <footer className="system-footer">
  {/* The Semantic Title */}
  <h4 className="system-footer-title">System Architecture</h4>
  
  <div className="system-footer-grid">
    
    {/* Item 01: Precision */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        01 Precision
      </div>
      <span className="system-footer-item-heading text-lg">Indicator Intent</span>
      <p className="system-footer-item-text">
        Use <strong>dot variants</strong> for real-time presence/status and <strong>content variants</strong> for specific numerical data or counts.
      </p>
    </div>

    {/* Item 02: Visibility */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        02 Visibility
      </div>
      <span className="system-footer-item-heading text-lg">Spatial Balance</span>
      <p className="system-footer-item-text">
        Badges should never exceed <strong>25%</strong> of the parent component's surface area to maintain visual balance and prevent occlusion.
      </p>
    </div>

    {/* Item 03: Logic */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        03 Logic
      </div>
      <span className="system-footer-item-heading text-lg">Boundary Handling</span>
      <p className="system-footer-item-text">
        Always cap numerical badges at <code>'99+'</code> to avoid layout breakage in high-density dashboard areas.
      </p>
    </div>

  </div>
</footer>

    </div>
  )
}