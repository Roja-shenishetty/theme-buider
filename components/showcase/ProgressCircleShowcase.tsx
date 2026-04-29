"use client"

import React, { useState, useEffect } from "react"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Typography } from "../ui/typography"
import { ProgressCircle } from "@/components/ui/progress-circle" 
import { 
  Cpu, 
  Activity, 
  Zap, 
  HardDrive,
  CheckCircle2,
  ArrowUp,
  Check,
  Upload,
  Wifi
} from "lucide-react"

export function ProgressCircleShowcase() {
  const [val, setVal] = useState(0)

  // 🔹 Simulation: Hardware "Heartbeat" jitter
  useEffect(() => {
    const interval = setInterval(() => {
      setVal(prev => (prev >= 100 ? 0 : prev + Math.floor(Math.random() * 20)))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-page max-w-4xl mx-auto space-y-16 py-10">
      
      {/* 🔹 VARIANT 01: HARDWARE MONITORING (Dials) */}
      <ComponentWrapper 
        title="Dial_Telemetry // Core_Metrics"
        code={`<ProgressCircle value={${val}} size={80} stroke={8} />`}
      >
        <div className="flex flex-wrap justify-around items-center gap-wide p-6 bg-card/20 radius-xl border border-primary/10">
          <div className="flex flex-col items-center gap-3">
             <ProgressCircle value={val} size={100} stroke={10} />
             <div className="text-center">
               <Typography variant="label" className="flex items-center gap-1">
                 <Cpu size={12} /> CPU_0
               </Typography>
               <Typography className="text-code text-[10px] tabular-nums text-primary">{val}%</Typography>
             </div>
          </div>

          <div className="flex flex-col items-center gap-3">
             <ProgressCircle value={val * 0.7} size={100} stroke={10} />
             <div className="text-center">
               <Typography variant="label" className="flex items-center gap-1">
                 <Activity size={12} /> MEM_0
               </Typography>
               <Typography className="text-code text-[10px] tabular-nums text-primary">{Math.round(val * 0.7)}%</Typography>
             </div>
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 02: SYSTEM STATUS INDICATORS (Micro) */}
      <ComponentWrapper 
        title="Micro_Indicators // Status"
        code={`<div className="flex gap-4">
  <ProgressCircle value={100} size={24} stroke={3} />
  <ProgressCircle value={45} size={24} stroke={3} />
</div>`}
      >
        <div className="flex gap-12 p-4 justify-center">
          <div className="flex items-center gap-3">
            <ProgressCircle value={100} size={32} stroke={4} />
            <Typography variant="body" className="font-bold text-small">Uplink_Secure</Typography>
          </div>
          <div className="flex items-center gap-3">
            <ProgressCircle value={35} size={32} stroke={4} />
            <Typography variant="body" className="font-bold text-small opacity-50">Sync_Progress</Typography>
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 03: INTERACTIVE UPLOAD (State-Aware) */}
      <ComponentWrapper 
        title="File_Upload // Binary_Sync"
        code={`<div className="relative">
  <ProgressCircle value={65} size={120} stroke={6} />
  <Upload className="absolute" />
</div>`}
      >
        <div className="flex flex-col items-center justify-center p-8 bg-black/20 radius-2xl border border-primary/10">
          <div className="relative flex items-center justify-center">
            {/* The outer progress ring */}
            <ProgressCircle 
              value={65} 
              size={140} 
              stroke={6} 
              className="text-primary drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.3)]"
            />
            
            {/* The centered status icon */}
            <div className="absolute flex flex-col items-center gap-1">
              <Upload size={24} className="text-primary animate-bounce" />
              <Typography className="text-code text-xs font-black">65%</Typography>
            </div>
          </div>
          
          <div className="mt-6 text-center space-y-1">
            <Typography variant="body" className="font-bold uppercase tracking-widest text-[10px]">
              Uploading: asset_core_v4.bin
            </Typography>
            <Typography variant="caption" className="opacity-50">
              4.2MB of 6.8MB • 1.2 MB/s
            </Typography>
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 04: SYSTEM STORAGE (Metric Hub) */}
      <ComponentWrapper 
        title="Storage_Metrics // Capacity"
        code={`<ProgressCircle value={88} size={60} stroke={4} />`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4">
          {[
            { label: "NVMe_01", val: 88, icon: <HardDrive />, color: "text-red-500" },
            { label: "Sata_Disk", val: 42, icon: <HardDrive />, color: "text-primary" },
            { label: "Cloud_Sync", val: 12, icon: <Wifi />, color: "text-accent" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group">
              <div className="relative flex items-center justify-center">
                <ProgressCircle 
                  value={item.val} 
                  size={70} 
                  stroke={5} 
                  className={item.val > 80 ? "text-red-500" : item.color}
                />
                <div className="absolute opacity-30 group-hover:opacity-100 transition-opacity">
                 {React.isValidElement(item.icon) && 
    React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { 
      size: 14 
    })
  }
                </div>
              </div>
              <div className="text-center">
                <Typography className="text-[10px] font-bold uppercase">{item.label}</Typography>
                <Typography className="text-code text-[9px] opacity-40">{item.val}% USED</Typography>
              </div>
            </div>
          ))}
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 05: THROUGHPUT DIAL (Network IO) */}
      <ComponentWrapper 
        title="IO_Throughput // Bitrate"
        code={`<ProgressCircle value={30} size={50} stroke={12} /> // Bold Stroke`}
      >
        <div className="flex items-center gap-12 p-6 bg-primary/5 radius-xl border border-primary/10 justify-center">
          <div className="flex items-center gap-6">
            <ProgressCircle 
              value={30} 
              size={56} 
              stroke={14} // High-density bold stroke
              className="text-primary"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ArrowUp size={12} className="text-primary" />
                <Typography variant="label" className="text-[10px]">Uplink_Speed</Typography>
              </div>
              <Typography className="text-h4 font-black tabular-nums tracking-tighter">
                420 <span className="text-xs opacity-50 font-normal">Mbps</span>
              </Typography>
            </div>
          </div>
          
          <div className="h-10 w-[1px] bg-primary/10" />

          <div className="flex items-center gap-4">
             <div className="space-y-1 text-right">
                <Typography variant="label" className="text-[10px]">Status</Typography>
                <Typography className="text-success text-[10px] font-bold">OPTIMIZED</Typography>
             </div>
             <Check size={16} className="text-success" />
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 SYSTEM ENGINE: CONTROL DECK FOOTER */}
      <footer className="system-footer">
        <div className="system-footer-grid">
          
          <div className="space-group">
            <div className="system-footer-title">Radial_Engine</div>
            <h3 className="system-footer-item-heading">SVG Integration</h3>
            <p className="system-footer-item-text text-small text-muted">
              Circles utilize <code>stroke-dasharray</code> math to ensure 
              the radial progress is independent of the DOM layout engine.
            </p>
          </div>

          <div className="space-group">
            <div className="system-footer-title">Interface_Logic</div>
            <h3 className="system-footer-item-heading">Visual Balance</h3>
            <p className="system-footer-item-text text-small text-muted">
              Stroke weights are dynamically calculated to maintain a 
              <code>1:10 ratio</code> with the component's diameter.
            </p>
          </div>

          <div className="space-group">
            <div className="system-footer-title">Telemetry_Sync</div>
            <h3 className="system-footer-item-heading">Clock Cycles</h3>
            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-3 text-caption tabular-nums">
                <Zap size={14} className="text-primary" />
                <span>Rotation: -90deg</span>
              </div>
              <div className="flex items-center gap-3 text-caption">
                <HardDrive size={14} className="text-primary" />
                <span>Format: Vector_Primitive</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}