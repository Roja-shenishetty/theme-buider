"use client"

import { Typography } from "@/components/ui/typography"
import { Layout, Terminal, Sparkles, Box } from "lucide-react"

type Props = {
  title: string
  description: string
  image?: string
  video?: string
  animation?: React.ReactNode
  children: React.ReactNode
  tags?: string[]
}

export default function ComponentPageLayout({
  title,
  description,
  image,
  video,
  animation,
  children,
  tags = ["UI Components", "System Engine", "v2.4.0"]
}: Props) {
  return (
    <div className="space-page relative min-h-screen overflow-hidden">
      
      {/* 🔹 AMBIENT SYSTEM DECORATION */}
      {/* Using your primary/10 blur pattern for depth */}
      <div className="absolute top-0 right-0 -z-10 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/10 radius-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 left-0 -z-10 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-accent/5 radius-full blur-[100px] -translate-x-1/2" />
      </div>

      {/* 🔹 HERO HEADER SECTION */}
      <header className="w-full max-w-[1500px] mx-auto px-6 py-12 md:py-20 border-b border-primary/10">
        <div className="grid gap-wide xl:grid-cols-2 xl:items-center">

          {/* LEFT CONTENT: Typographic Engine */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left space-group">
            
            {/* Component Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 mb-2">
              <Box className="w-3 h-3" />
              Technical Specification
            </div>

            <Typography variant="h1" className="text-h1 lg:text-7xl tracking-tighter leading-[0.9]">
              {title.split(" ").map((word, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-primary italic">{word} </span> : word + " "}
                </span>
              ))}
            </Typography>

            <Typography variant="body" className="max-w-md xl:max-w-lg text-body-muted text-lg leading-relaxed mt-4">
              {description}
            </Typography>

            {/* 🔹 DYNAMIC TAGS */}
            <div className="flex gap-default pt-6 flex-wrap justify-center xl:justify-start">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-1.5 radius-full bg-muted border border-primary/5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:border-primary/30 hover:text-primary transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT MEDIA: The Showcase Frame */}
          <div className="relative group mx-auto xl:mx-0 w-full max-w-2xl">
            {/* Decorative Blueprint Corner */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary/30 radius-tl-xl pointer-events-none z-10" />
            
            <div className="h-[240px] sm:h-[300px] md:h-[400px] xl:h-[520px] radius-xl overflow-hidden bg-[#0d0d0d] border-2 border-primary/10 flex items-center justify-center shadow-2xl shadow-primary/5 relative group-hover:border-primary/30 transition-all duration-500">
              
              {/* Media Content */}
              {video ? (
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
                  <source src={video} type="video/mp4" />
                </video>
              ) : animation ? (
                <div className="flex items-center justify-center w-full h-full scale-90 group-hover:scale-100 transition-transform duration-700">
                  {animation}
                </div>
              ) : (
                <img
                  src={image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"}
                  alt={title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              )}

              {/* Glass Overlay on Media */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">Live Preview Engine</span>
              </div>
            </div>

            {/* Background Decorative Icon */}
            <Terminal className="absolute -bottom-8 -right-8 w-32 h-32 text-primary/5 -rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          </div>

        </div>
      </header>

      {/* 🔹 MAIN CONTENT BODY */}
      <main className="w-full max-w-[1500px] mx-auto px-6 py-16">
        <div className="space-y-24">
          {children}
        </div>
      </main>

      {/* 🔹 FOOTER NAV PREVIEW (Optional detail) */}
      <footer className="w-full border-t border-primary/5 py-12 mt-20 opacity-40 hover:opacity-100 transition-opacity">
        <div className="max-w-[1500px] mx-auto px-6 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
          <span>System Engine Protocol // 2026</span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 radius-full bg-green-500 animate-pulse" /> 
            Status: All Systems Functional
          </span>
        </div>
      </footer>
    </div>
  )
}