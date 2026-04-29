"use client"

import React from "react"

interface ChipProps {
  label: string
  variant?: "primary" | "accent" | "success" | "danger" | "outline" | "ghost"
  icon?: React.ReactNode
}

export function Chip({ label, variant = "primary", icon }: ChipProps) {
  // Logic mapping for dynamic variants using your globals.css variables
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/10",
    accent: "bg-accent/10 text-accent border-accent/10",
    success: "bg-green-500/10 text-green-500 border-green-500/10",
    danger: "bg-red-500/10 text-red-500 border-red-500/10",
    outline: "bg-transparent text-foreground border-primary/20",
    ghost: "bg-muted/30 text-muted-foreground border-transparent",
  }

  return (
    <div className={`
      inline-flex items-center gap-2 px-3 py-1 border rounded-full transition-all duration-300
      hover:scale-105 hover:shadow-sm cursor-default
      ${variants[variant]}
    `}>
      {icon && <span className="opacity-80">{icon}</span>}
      <span className="text-[10px] font-black uppercase tracking-widest leading-none">
        {label}
      </span>
    </div>
  )
}