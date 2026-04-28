"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { Copy, Check, Code, Terminal, UploadCloud, Loader2 } from "lucide-react"

interface WrapperProps {
  title: string
  code: string
  children: React.ReactNode
}

export function ComponentWrapper({ title, code, children }: WrapperProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleUpload = () => {
    setIsUploading(true)
    // Simulate a system upload/flash sequence
    setTimeout(() => {
      setIsUploading(false)
      alert("System Update: Configuration pushed to node successfully.")
    }, 1500)
  }

  return (
    <section className="w-full animate-fade-up">
      {/* 🔹 HEADER: Integrated Triple-Action Controls */}
      <div className="flex items-center justify-between mb-2 border-l-2 border-primary pl-3">
        <Typography variant="h4" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
          {title} // Logic_Node
        </Typography>
        
        <div className="flex items-center gap-1">
          {/* Code Toggle */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-1.5 radius-md border transition-all ${
              isExpanded ? 'bg-primary/20 border-primary/30 text-primary' : 'bg-muted/10 border-primary/5 text-muted-foreground'
            }`}
          >
            <Code className="w-3 h-3" />
          </button>
          
          {/* Copy Button */}
          <button onClick={handleCopy} className="p-1.5 radius-md bg-muted/10 border border-primary/5">
            {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 text-muted-foreground" />}
          </button>

          {/* 🔹 UPLOAD BUTTON */}
          <button 
            onClick={handleUpload}
            disabled={isUploading}
            className="p-1.5 radius-md bg-primary/10 border border-primary/20 hover:bg-primary hover:text-background transition-all disabled:opacity-50"
          >
            {isUploading ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <UploadCloud className="w-3 h-3" />
            )}
          </button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="card bg-muted/5 border-primary/5 p-6 radius-xl overflow-hidden">
        {children}
      </div>

      {/* Terminal Output */}
      {isExpanded && (
        <div className="mt-2 radius-lg border border-primary/10 bg-[#080808] overflow-hidden animate-in slide-in-from-top-1">
          <div className="flex items-center px-3 py-1.5 bg-white/5 border-b border-white/5">
             <Terminal className="w-3 h-3 text-primary mr-2" />
             <span className="text-[9px] font-mono text-primary/80 uppercase">Console.Source_Output</span>
          </div>
          <pre className="p-4 overflow-x-auto custom-scrollbar">
            <code className="text-[10px] md:text-[11px] font-mono text-white block whitespace-pre-wrap">
              {code}
            </code>
          </pre>
        </div>
      )}
    </section>
  )
}