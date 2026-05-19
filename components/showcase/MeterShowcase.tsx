"use client"

import React from "react"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Meter } from "@/components/ui/meter"
import { Typography } from "@/components/ui/typography"
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
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest">
          Telemetry Dashboard
        </div>
        <Typography variant="body" className="text-body-muted max-w-2xl text-lg mt-2">
          Real-time hardware monitoring modules utilizing fragmented segment indicators.
        </Typography>
      </header>

      <div className="space-section flex flex-col gap-wide">
        {/* 🔹 VARIANT 01: HARDWARE MONITORING */}
        <ComponentWrapper 
          title="Hardware_Telemetry // Live"
          code={`<div className="space-group">
  <Meter value={92} segments={12} />
  <Meter value={45} segments={12} />
</div>`}
        >
          <div className="space-group p-6 bg-primary/5 radius-xl border border-primary/10">
            {/* CPU Usage (Danger State) */}
            <div className="space-group">
              <div className="flex justify-between items-center">
                <Typography variant="label" className="flex items-center gap-2">
                  <Cpu size={14} className="text-danger animate-pulse" /> 
                  Core_Node_Utilization
                </Typography>
                <span className="text-code text-[10px] tabular-nums text-danger font-black">92%</span>
              </div>
              <Meter value={92} segments={12} />
              <Typography variant="caption" className="text-danger font-bold uppercase text-[9px] tracking-widest">
                Critical: Thermal threshold exceeded
              </Typography>
            </div>

            <hr className="border-primary/10 my-2" />

            {/* Memory Usage (Stable State) */}
            <div className="space-group">
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
          <div className="flex flex-col gap-wide p-6 radius-xl border border-primary/5">
            <div className="space-group">
              <Typography variant="caption" className="opacity-50">High_Density_Array (24 Segments)</Typography>
              <Meter value={75} segments={24} />
            </div>
            <div className="space-group">
              <Typography variant="caption" className="opacity-50">Standard_Array (8 Segments)</Typography>
              <Meter value={60} segments={8} />
            </div>
          </div>
        </ComponentWrapper>

        {/* 🔹 VARIANT 03: SYSTEM BOOT LOADER (Indeterminate / Loading) */}
        <ComponentWrapper 
          title="Boot_Sequence // Indeterminate"
          code={`<div className="relative overflow-hidden h-2 bg-primary/10 radius-md">
  <div className="absolute h-full w-1/3 bg-primary animate-progress-slide" />
</div>`}
        >
          <div className="space-group p-6 bg-black/40 radius-xl border border-primary/10 shadow-2xl">
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
          <div className="space-group p-6 radius-xl border border-primary/5 bg-primary/5">
            <div className="flex justify-between items-center mb-1">
              <Typography variant="label">Memory_Distribution</Typography>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 radius-full bg-primary" />
                  <span className="text-[9px] opacity-60 font-bold uppercase tracking-widest">System</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 radius-full bg-accent" />
                  <span className="text-[9px] opacity-60 font-bold uppercase tracking-widest">Apps</span>
                </div>
              </div>
            </div>
            {/* Stacked Meter Logic */}
            <div className="flex h-3 w-full bg-primary/10 radius-md overflow-hidden border border-primary/10">
              <div className="h-full bg-primary border-r border-black/20" style={{ width: '45%' }} />
              <div className="h-full bg-accent border-r border-black/20" style={{ width: '30%' }} />
              <div className="h-full bg-primary/20" style={{ width: '10%' }} />
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
          <div className="flex flex-col gap-4 p-6 bg-primary/5 radius-xl border border-primary/10">
            <div className="flex justify-between items-center">
              <Typography variant="label" className="flex items-center gap-2">
                <Activity size={12} className="text-primary" /> Signal_Integrity
              </Typography>
              <span className="text-code text-[10px] tabular-nums">98.2%</span>
            </div>
            
            {/* Animated Heartbeat Strip */}
            <div className="flex items-end gap-[2px] h-10 w-full overflow-hidden">
              {[40, 60, 30, 90, 20, 50, 80, 40, 70, 30, 60, 40, 80, 20, 50].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-primary radius-full opacity-60 animate-pulse" 
                  style={{ 
                    height: `${h}%`,
                    animationDelay: `${i * 0.1}s` 
                  }} 
                />
              ))}
            </div>
          </div>
        </ComponentWrapper>
      </div>

      {/* 🔹 SYSTEM ENGINE: CONTROL DECK FOOTER */}
      <footer className="system-footer mt-16 border-t border-primary/10 pt-8">
        <h4 className="text-h4 font-bold text-primary/90 mb-6 flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-primary" /> Telemetry Specs
        </h4>

        <div className="system-footer-grid grid grid-cols-1 md:grid-cols-3 gap-wide">
          
          {/* Architecture Section */}
          <div className="space-group p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">01 Architecture</div>
            <h3 className="font-semibold text-body text-sm block">Fragmented Indicators</h3>
            <p className="text-caption text-xs leading-relaxed">
              Meters utilize <code>absolute_overlays</code> to create hardware-style segmentation 
              without disrupting the <code>ARIA-Progress</code> accessibility tree.
            </p>
          </div>

          {/* Logic Section */}
          <div className="space-group p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">02 Interface</div>
            <h3 className="font-semibold text-body text-sm block">Thermal Triggers</h3>
            <p className="text-caption text-xs leading-relaxed">
              Visual states are tied to <code>--danger</code> and <code>--warning</code> tokens 
              automatically when the value exceeds the 70% and 90% logical boundaries.
            </p>
          </div>

          {/* Telemetry Section */}
          <div className="space-group p-4 radius-md bg-primary/5 border border-primary/5">
            <div className="text-caption font-bold opacity-50 uppercase tracking-widest text-primary">03 Data Sync</div>
            <h3 className="font-semibold text-body text-sm block">Real-time IO</h3>
            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-3 text-caption tabular-nums">
                <Zap size={14} className="text-primary" />
                <span className="text-xs">Response: 0.4ms</span>
              </div>
              <div className="flex items-center gap-3 text-caption">
                <ShieldCheck size={14} className="text-primary" />
                <span className="text-xs">Status: Encrypted_IO</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}