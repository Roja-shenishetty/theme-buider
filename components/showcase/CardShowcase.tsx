"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge/badge"
import { Typography } from "@/components/ui/typography"
import { ArrowUpRight, Layers, Users, Zap, DollarSign, ExternalLink } from "lucide-react"

/* 🔹 Technical Section Wrapper */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6">
        <Typography variant="h3" className="tracking-tight font-bold text-primary/90">{title}</Typography>
        {description && (
          <Typography variant="body" className="text-body-muted text-sm max-w-2xl">{description}</Typography>
        )}
      </div>
      <div className="card bg-muted/5 border-dashed border-2 border-primary/10 p-10 flex flex-wrap items-center gap-wide overflow-hidden relative">
        {children}
      </div>
    </section>
  )
}

export function CardShowcase() {
  return (
    <div className="page-container space-page">

      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Spatial Engine
        </div>
        
        <Typography variant="body" className="text-body-muted max-w-2xl text-lg mt-2">
          Encapsulated content containers designed for modular information architecture.
        </Typography>
      </header>

      {/* 🔹 Core Profile Card */}
      <Section title="Identity Card" description="High-density profile card using radius-xl and soft primary light.">
        <Card className="w-[340px] radius-xl border-primary/10 bg-background overflow-hidden group hover:border-primary/40 transition-all duration-500">
          <div className="h-24 bg-gradient-to-r from-primary/20 via-accent/10 to-transparent" />
          <div className="-mt-12 px-6">
            <Avatar size="lg" src="https://i.pravatar.cc/100?img=12" className="border-4 border-background radius-full shadow-lg" />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Venkateshwarlu A.
              <Badge variant="outline" className="text-[10px] radius-full">Student</Badge>
            </CardTitle>
            <CardDescription>Software & Electronics Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <Typography variant="small" className="text-muted-foreground leading-relaxed">
              Specializing in OpenCV gesture control and modern React design systems.
            </Typography>
          </CardContent>
          <CardFooter className="border-t border-primary/5 pt-4">
            <Button fullWidth className="btn-primary radius-md group">
              View Profile
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </CardFooter>
        </Card>
      </Section>

      {/* 🔹 Modern Metrics */}
      <Section title="Data Visualization" description="Metric cards using primary glow shadows for high priority.">
        <div className="flex flex-wrap gap-wide">
          <Card className="w-[260px] radius-lg border-primary/10 shadow-lg shadow-primary/5 group">
            <CardContent className="p-6 space-group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 radius-md bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <DollarSign className="w-5 h-5" />
                </div>
                <Badge className="bg-green-500/10 text-green-500 radius-full border-none">+12.5%</Badge>
              </div>
              <div>
                <Typography variant="muted" className="uppercase text-[10px] font-bold tracking-widest">Revenue</Typography>
                <Typography variant="h2" className="text-primary tracking-tighter">$14,240</Typography>
              </div>
            </CardContent>
          </Card>

          <Card className="w-[260px] radius-lg border-primary/10">
            <CardContent className="p-6 space-group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 radius-md bg-accent/10 text-accent flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <Typography variant="caption" className="opacity-50">Live</Typography>
              </div>
              <div>
                <Typography variant="muted" className="uppercase text-[10px] font-bold tracking-widest">Active Users</Typography>
                <Typography variant="h2" className="tracking-tighter">1,284</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 🔹 Horizontal Project Card */}
      <Section title="Horizontal Feature" description="Optimized for list views and detailed content previews.">
        <Card className="w-full max-w-2xl flex flex-col md:flex-row radius-xl overflow-hidden border-primary/10 hover:shadow-xl transition-all">
          <div className="md:w-1/3 relative">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80" 
              className="h-full w-full object-cover"
              alt="Hardware"
            />
            <div className="absolute top-3 left-3">
              <Badge className="bg-background/80 backdrop-blur-md text-foreground">v2.4.0</Badge>
            </div>
          </div>
          <div className="flex-1 p-8 flex flex-col justify-center space-group">
            <div className="space-y-1">
              <CardTitle className="text-2xl font-bold">System Engine Pro</CardTitle>
              <CardDescription>Hardware integrated dashboard for creator coordination.</CardDescription>
            </div>
            <Typography variant="body" className="text-body-muted text-sm">
              Connect your ESP32 devices and monitor performance in real-time with our native C++ wrapper.
            </Typography>
            <div className="flex gap-default pt-4">
              <Button variant="secondary" className="radius-md">
                <ExternalLink className="w-4 h-4 mr-2" /> Docs
              </Button>
              <Button variant="ghost" className="radius-md">Learn More</Button>
            </div>
          </div>
        </Card>
      </Section>

      {/* 🔹 Glass-Morphism Architecture */}
      <Section title="Glass Overlays" description="Utilizing backdrop-blur and white/10 for modern overlay states.">
        <div className="relative w-full max-w-sm aspect-[4/3] radius-xl overflow-hidden flex items-end p-6">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px]"
          />
          <Card className="relative z-10 w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl radius-lg text-white">
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Cyber Interface</CardTitle>
              <CardDescription className="text-white/60">Glass UI Protocol</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-4">
               <div className="h-1 bg-white/20 radius-full w-full overflow-hidden">
                  <div className="h-full bg-primary w-2/3 shadow-[0_0_10px_#var(--primary)]" />
               </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 🔹 Guidelines */}
   <footer className="system-footer">
  {/* The Semantic Title */}
  <h4 className="system-footer-title">Encapsulation Rules</h4>
  
  <div className="system-footer-grid">
    
    {/* Item 01: Consistency */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        01 Consistency
      </div>
      <span className="system-footer-item-heading text-lg">Radius Hierarchy</span>
      <p className="system-footer-item-text">
        Use <code>radius-xl</code> for top-level layout cards and <code>radius-md</code> for nested content blocks to create a clear container-child relationship.
      </p>
    </div>

    {/* Item 02: Elevation */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        02 Elevation
      </div>
      <span className="system-footer-item-heading text-lg">Shadow Management</span>
      <p className="system-footer-item-text">
        Reserve <code>shadow-xl</code> only for interactive states or modal overlays to maintain a modern, flat rhythm across the main dashboard.
      </p>
    </div>

    {/* Item 03: Semantics */}
    <div className="space-y-2">
      <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">
        03 Semantics
      </div>
      <span className="system-footer-item-heading text-lg">Contrast Zones</span>
      <p className="system-footer-item-text">
        Ensure header and footer contrast using subtle background variations like <code>primary/5</code> to anchor the content blocks.
      </p>
    </div>

  </div>
</footer>

    </div>
  )
}