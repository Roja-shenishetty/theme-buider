"use client"

import React from "react"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Meter } from "@/components/ui/meter"
import { Typography } from "../ui/typography"
import { 
  Cpu, 
  Activity, 
  Zap, 
  Thermometer, 
  ShieldCheck, 
  Loader2
} from "lucide-react"

export function MeterShowcase() {
  return (
    <div className="space-page max-w-4xl mx-auto space-y-16 py-10">
      
      {/* 🔹 VARIANT 01: HARDWARE MONITORING */}
      <ComponentWrapper 
        title="Hardware_Telemetry // Live"
        code={`<div className="space-y-4">
  <Meter value={92} segments={12} />
  <Meter value={45} segments={12} />
</div>`}
      >
        <div className="space-group p-4 bg-muted/5 radius-xl border border-primary/5">
          {/* CPU Usage (Danger State) */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Typography variant="label" className="flex items-center gap-2">
                <Cpu size={14} className="text-red-500 animate-pulse" /> 
                Core_Node_Utilization
              </Typography>
              <span className="text-code text-[10px] tabular-nums text-red-500 font-black">92%</span>
            </div>
            <Meter value={92} segments={12} />
            <Typography variant="caption" className="text-red-500 font-bold uppercase text-[9px] tracking-widest">
              Critical: Thermal threshold exceeded
            </Typography>
          </div>

          <hr className="border-primary/5 my-2" />

          {/* Memory Usage (Stable State) */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Typography variant="label" className="flex items-center gap-2">
                <Activity size={14} className="text-primary" /> 
                Memory_Allocation
              </Typography>
              <span className="text-code text-[10px] tabular-nums">45%</span>
            </div>
            <Meter value={45} segments={12} />
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 02: SEGMENT DENSITY VARIATIONS */}
      <ComponentWrapper 
        title="Density_Nodes // Logic"
        code={`<Meter value={75} segments={20} /> // High Density
<Meter value={75} segments={5} />  // Low Density`}
      >
        <div className="grid gap-8 p-4">
          <div className="space-y-2">
            <Typography variant="caption" className="opacity-50">High_Density_Array (24 Segments)</Typography>
            <Meter value={75} segments={24} />
          </div>
          <div className="space-y-2">
            <Typography variant="caption" className="opacity-50">Standard_Array (8 Segments)</Typography>
            <Meter value={60} segments={8} />
          </div>
        </div>
      </ComponentWrapper>
      {/* 🔹 VARIANT 03: SYSTEM BOOT LOADER (Indeterminate / Loading) */}
      <ComponentWrapper 
        title="Boot_Sequence // Indeterminate"
        code={`<div className="relative overflow-hidden h-2 bg-primary/10 radius-md">
  <div className="absolute h-full w-1/3 bg-primary animate-infinite-slide" />
</div>`}
      >
        <div className="space-group p-4 bg-black/40 radius-xl border border-primary/10">
          <div className="flex items-center justify-between mb-2">
            <Typography variant="label" className="flex items-center gap-2">
              <Loader2 size={12} className="animate-spin text-primary" /> 
              Initializing_Core_Kernel...
            </Typography>
            <Typography className="text-[10px] font-mono opacity-50 italic">SECURE_BOOT</Typography>
          </div>
          
          {/* Custom Indeterminate Loader using your tokens */}
          <div className="relative h-1.5 w-full bg-primary/10 radius-full overflow-hidden">
            <div className="absolute inset-y-0 w-1/2 bg-primary radius-full animate-progress-slide shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
          </div>
          
          <Typography variant="caption" className="text-[9px] opacity-40 uppercase tracking-widest mt-2">
            Loading Modules: 0x88 / 0xFF
          </Typography>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 04: MULTI-STAGE SYNC (Stacked Data) */}
      <ComponentWrapper 
        title="Resource_Matrix // Multi-Point"
        code={`<div className="flex h-3 radius-md overflow-hidden bg-primary/5">
  <div style={{ width: '40%' }} className="bg-primary" />
  <div style={{ width: '25%' }} className="bg-accent" />
</div>`}
      >
        <div className="space-y-6 p-4">
          <div className="space-y-2">
             <div className="flex justify-between">
                <Typography variant="label">Memory_Distribution</Typography>
                <div className="flex gap-3">
                   <div className="flex items-center gap-1"><div className="w-2 h-2 radius-full bg-primary" /><span className="text-[9px] opacity-60">System</span></div>
                   <div className="flex items-center gap-1"><div className="w-2 h-2 radius-full bg-accent" /><span className="text-[9px] opacity-60">Apps</span></div>
                </div>
             </div>
             {/* Stacked Meter Logic */}
             <div className="flex h-3 w-full bg-primary/10 radius-md overflow-hidden border border-primary/5">
                <div className="h-full bg-primary border-r border-black/20" style={{ width: '45%' }} />
                <div className="h-full bg-accent border-r border-black/20" style={{ width: '30%' }} />
                <div className="h-full bg-primary/20" style={{ width: '10%' }} />
             </div>
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 05: PULSE TELEMETRY (Heartbeat) */}
      <ComponentWrapper 
        title="Bio_Link // Pulse_Logic"
        code={`<div className="flex items-end gap-1 h-8">
  <div className="w-1 bg-primary animate-pulse" style={{ height: '40%' }} />
</div>`}
      >
        <div className="flex flex-col gap-4 p-4 bg-muted/5 radius-xl border border-primary/5">
          <div className="flex justify-between items-center">
             <Typography variant="label" className="flex items-center gap-2">
               <Activity size={12} className="text-primary" /> Signal_Integrity
             </Typography>
             <span className="text-code text-[10px] tabular-nums">98.2%</span>
          </div>
          
          {/* Animated Heartbeat Strip */}
          <div className="flex items-center gap-[2px] h-10 w-full overflow-hidden">
             {[40, 60, 30, 90, 20, 50, 80, 40, 70, 30, 60, 40, 80, 20, 50].map((h, i) => (
               <div 
                 key={i} 
                 className="flex-1 bg-primary radius-full opacity-40 animate-pulse" 
                 style={{ 
                   height: `${h}%`,
                   animationDelay: `${i * 0.1}s` 
                 }} 
               />
             ))}
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 SYSTEM ENGINE: CONTROL DECK FOOTER */}
      <footer className="system-footer">
        <div className="system-footer-grid">
          
          {/* Architecture Section */}
          <div className="space-group">
            <div className="system-footer-title">Meter_Architecture</div>
            <h3 className="system-footer-item-heading">Fragmented Indicators</h3>
            <p className="system-footer-item-text text-small text-muted">
              Meters utilize <code>absolute_overlays</code> to create hardware-style segmentation 
              without disrupting the <code>ARIA-Progress</code> accessibility tree.
            </p>
          </div>

          {/* Logic Section */}
          <div className="space-group">
            <div className="system-footer-title">Interface_Logic</div>
            <h3 className="system-footer-item-heading">Thermal Triggers</h3>
            <p className="system-footer-item-text text-small text-muted">
              Visual states are tied to <code>--danger</code> and <code>--warning</code> tokens 
              automatically when the value exceeds the 70% and 90% logical boundaries.
            </p>
          </div>

          {/* Telemetry Section */}
          <div className="space-group">
            <div className="system-footer-title">Sync_Telemetry</div>
            <h3 className="system-footer-item-heading">Real-time IO</h3>
            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-3 text-caption tabular-nums">
                <Zap size={14} className="text-primary" />
                <span>Response: 0.4ms</span>
              </div>
              <div className="flex items-center gap-3 text-caption">
                <ShieldCheck size={14} className="text-primary" />
                <span>Status: Encrypted_IO</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}