"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import {
  ArrowRight,
  Terminal,
  Zap,
  Layers,
  Cpu,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react"

export default function Introduction() {
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npx system-init@latest")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="page-container space-page relative overflow-x-hidden">
      
      {/* 🔹 AMBIENT BACKGROUND */}
      {/* Using your primary/10 blur for that glass-morphism feel */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 radius-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 radius-full blur-[100px]" />
      </div>

      {/* 🔹 HERO SECTION */}
      <header className="space-section flex flex-col items-center text-center animate-fade-up">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-default px-4 py-1.5 radius-full border bg-muted/50 text-caption backdrop-blur-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="font-medium tracking-wide uppercase">System Engine v2.4.0</span>
        </div>

        {/* Dynamic Title */}
        <Typography variant="h1" className="text-h1 leading-tight tracking-tighter max-w-4xl">
          Design <span className="text-primary italic font-serif">Systems</span>
          <br />
          Built for <span className="relative inline-block">
            Creators.
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span>
        </Typography>

        <Typography variant="body" className="max-w-2xl mx-auto text-body-muted mt-6 mb-10 text-lg">
          A high-performance toolkit for building polished, accessible, 
          and production-ready interfaces without the boilerplate fatigue.
        </Typography>

        <div className="flex flex-wrap justify-center gap-wide">
          <button className="btn-primary px-8 py-4 radius-lg flex items-center gap-2 group shadow-lg shadow-primary/20">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="btn-secondary px-8 py-4 radius-lg border-primary/20 hover:bg-primary/5">
            View Documentation
          </button>
        </div>
      </header>

      {/* 🔹 FEATURE GRID */}
      <section className="grid-3 gap-wide">
        <FeatureCard 
          icon={<Zap className="w-6 h-6" />} 
          title="Runtime Velocity" 
          desc="Optimized tree-shaking and zero-runtime CSS variables for peak performance." 
        />
        <FeatureCard 
          icon={<Layers className="w-6 h-6" />} 
          title="Atomic Scaling" 
          desc="Modular architecture designed to scale from side projects to enterprise apps." 
        />
        <FeatureCard 
          icon={<Cpu className="w-6 h-6" />} 
          title="React Native Ready" 
          desc="Full support for Server Components and the latest React 19 concurrent features." 
        />
      </section>

      {/* 🔹 INTERACTIVE CODE PLAYGROUND */}
      <section className="card bg-muted/30 border-primary/10 grid lg:grid-cols-5 gap-wide overflow-hidden p-1">
        
        {/* Content Side */}
        <div className="lg:col-span-2 p-8 flex flex-col justify-center space-group">
          <Typography variant="h2" className="tracking-tight">
            Build at the <br/><span className="text-primary">speed of thought.</span>
          </Typography>
          
          <Typography variant="body" className="text-body-muted">
            Our headless components provide the logic, while your classes provide the soul. 
            Toggle between the source and result.
          </Typography>

          <div className="flex p-1 bg-muted radius-md w-fit border">
            <button
              onClick={() => setActiveTab("code")}
              className={`px-6 py-2 radius-sm transition-all ${
                activeTab === "code" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Code
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-6 py-2 radius-sm transition-all ${
                activeTab === "preview" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Preview
            </button>
          </div>
        </div>

        {/* Mock Editor Side */}
        <div className="lg:col-span-3 bg-[#0d0d0d] radius-lg relative min-h-[300px] flex items-center justify-center border-l border-white/5">
          <div className="absolute top-4 left-4 flex gap-1.5">
            <div className="w-3 h-3 radius-full bg-red-500/20 border border-red-500/40" />
            <div className="w-3 h-3 radius-full bg-yellow-500/20 border border-yellow-500/40" />
            <div className="w-3 h-3 radius-full bg-green-500/20 border border-green-500/40" />
          </div>

          {activeTab === "code" ? (
            <pre className="p-8 w-full overflow-x-auto">
              <code className="text-code text-primary/90 leading-relaxed">
{`// Your dynamic components
import { Button, Card } from "@/ui"

export default function Hero() {
  return (
    <Card variant="glass">
      <Button intent="shiny">
        Deploy to Edge
      </Button>
    </Card>
  )
}`}
              </code>
            </pre>
          ) : (
            <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-300">
               <div className="btn-primary px-8 py-3 radius-full shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                  Deploy to Edge
               </div>
               <div className="w-48 h-2 bg-white/10 radius-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3 animate-shimmer" />
               </div>
            </div>
          )}
        </div>
      </section>

      {/* 🔹 FINAL CTA */}
     <footer className="system-footer system-footer-hero">
  {/* The texture overlay is now managed by the CSS class */}
  
  <div className="relative z-10 flex flex-col items-center text-center space-y-8">
    <Typography variant="h2" className="text-4xl md:text-6xl font-black tracking-tighter">
      Ready to <span className="text-primary italic">ship?</span>
    </Typography>
    
    <div className="flex flex-col items-center gap-6">
      {/* Interactive Terminal Command */}
      <div 
        onClick={copyToClipboard}
        className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 px-8 py-5 radius-xl border border-white/10 cursor-pointer transition-all shadow-2xl"
      >
        <Terminal className="w-5 h-5 text-primary" />
        <code className="text-xl font-mono tracking-tight text-white/90">
          npx system-init@latest
        </code>
        {copied ? (
          <Check className="w-5 h-5 text-green-400" />
        ) : (
          <Copy className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
        )}
      </div>

      <button className="btn-primary bg-white text-black hover:bg-white/90 px-12 py-5 radius-full font-black text-xl shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
        Get Unlimited Access
      </button>
    </div>
  </div>
</footer>

    </div>
  )
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="card group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 bg-muted/20 backdrop-blur-sm">
      <div className="w-12 h-12 radius-md bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all">
        {icon}
      </div>
      <Typography variant="h4" className="mb-2 uppercase tracking-wider font-bold">{title}</Typography>
      <Typography variant="muted" className="leading-relaxed">
        {desc}
      </Typography>
    </div>
  )
}