"use client"

import React, { useState, useEffect } from "react"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Typography } from "../ui/typography"
import { Progress } from "@/components/ui/progress" 
import { 
  DownloadCloud, 
  RefreshCcw, 
  Database, 
  Zap, 
  CheckCircle2,
  ShieldCheck,
  ServerCrash
} from "lucide-react"

export function ProgressBarShowcase() {
  const [progress, setProgress] = useState(13)

  // 🔹 Simulation Logic: Syncing with Hardware Cycles
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 1500)
    const timer2 = setTimeout(() => setProgress(100), 3500)
    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="space-page max-w-4xl mx-auto py-10">
      
      {/* 🔹 VARIANT 01: SYSTEM UPDATE (Semantic Completion) */}
      <ComponentWrapper 
        title="Sync_Status // Active"
        code={`<Progress value={${progress}} variant="${progress === 100 ? 'success' : 'default'}" />`}
      >
        <div className="space-group p-6 bg-card/20 radius-xl border border-primary/10 transition-all duration-500">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
               <RefreshCcw 
                 size={16} 
                 className={progress < 100 ? "text-primary animate-spin" : "text-success"} 
               />
               <Typography variant="body" className="font-bold tracking-tight">
                 Kernel_Update_v4.2
               </Typography>
            </div>
            <Typography 
              className={`text-code text-[11px] tabular-nums font-black ${progress === 100 ? "text-success" : "text-primary"}`}
            >
              {progress}%
            </Typography>
          </div>

          {/* 🔹 Logic: Progress bar reacts to the success token at 100% */}
          <Progress 
            value={progress} 
            className={`h-1.5 bg-primary/10 ${progress === 100 ? "[&>div]:bg-success shadow-[0_0_10px_hsl(var(--success)/0.3)]" : ""}`} 
          />
          
          <div className="flex justify-between items-center">
            <Typography variant="caption" className="opacity-50 text-[10px] uppercase font-bold">
              {progress < 100 ? "Downloading_Packages..." : "Binary_Integrity_Verified"}
            </Typography>
            {progress === 100 && (
              <div className="flex items-center gap-1 text-success animate-fade-up">
                <Typography variant="caption" className="font-black text-[9px]">SECURE</Typography>
                <CheckCircle2 size={12} />
              </div>
            )}
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 02: DANGER THRESHOLD (Thermal/Resource Overflow) */}
      <ComponentWrapper 
        title="Memory_Leak // Critical"
        code={`<Progress value={94} className="[&>div]:bg-danger" />`}
      >
        <div className="space-y-4 p-4 border border-danger/20 bg-danger/5 radius-xl">
           <div className="flex justify-between items-center">
              <Typography variant="label" className="text-danger flex items-center gap-2">
                 <ServerCrash size={14} className="animate-pulse" /> Buffer_Overflow_Risk
              </Typography>
              <span className="text-code text-[10px] text-danger font-black">94%</span>
           </div>
           {/* Force the internal div to use your --danger HSL token */}
           <Progress value={94} className="h-1 bg-danger/10 [&>div]:bg-danger shadow-[0_0_15px_hsl(var(--danger)/0.4)]" />
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 03: MULTI-THREADED COMPARISON */}
      <ComponentWrapper 
  title="I/O_Streaming // Indeterminate"
  code={`<Progress value={undefined} className="h-1" />`} 
>
        <div className="grid gap-6 p-4">
          {[
            { label: "Thread_Alpha", val: 80, color: "bg-primary" },
            { label: "Thread_Delta", val: 45, color: "bg-warning" },
          ].map((thread, i) => (
            <div key={i} className="space-y-2">
               <div className="flex justify-between items-center text-[9px] uppercase font-black tracking-[0.2em] opacity-50">
                  <span>{thread.label}</span>
                  <span className="tabular-nums">{thread.val}%</span>
               </div>
               <Progress value={thread.val} className={`h-1 bg-primary/5 [&>div]:${thread.color}`} />
            </div>
          ))}
        </div>
      </ComponentWrapper>

      {/* 🔹 SYSTEM ENGINE: CONTROL DECK FOOTER */}
      <footer className="system-footer mt-16">
        <div className="system-footer-grid border-t border-primary/10 pt-8">
          
          <div className="space-group">
            <div className="system-footer-title">Linear_Engine</div>
            <h3 className="system-footer-item-heading">Semantic States</h3>
            <p className="system-footer-item-text text-small text-muted">
              Progress nodes utilize <code>--success</code> and <code>--danger</code> HSL tokens 
              to provide immediate cognitive feedback on system health.
            </p>
          </div>

          <div className="space-group">
            <div className="system-footer-title">Motion_Logic</div>
            <h3 className="system-footer-item-heading">Bezier Smoothing</h3>
            <p className="system-footer-item-text text-small text-muted">
              The internal <code>div</code> indicator follows a <code>transition-all 500ms</code> 
              curve to prevent erratic visual jumps during data spikes.
            </p>
          </div>

          <div className="space-group">
            <div className="system-footer-title">Registry_Sync</div>
            <h3 className="system-footer-item-heading">Live Telemetry</h3>
            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-3 text-caption tabular-nums">
                <Zap size={14} className="text-primary" />
                <span>Uplink: 1.2 GB/s</span>
              </div>
              <div className="flex items-center gap-3 text-caption">
                <ShieldCheck size={14} className="text-success" />
                <span>Node: US-EAST-01</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}