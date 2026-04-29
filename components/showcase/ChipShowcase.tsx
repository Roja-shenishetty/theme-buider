"use client"

import React from "react"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Chip } from "@/components/ui/chip"
import { 
  Zap, 
  Shield, 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  Activity, 
  Database,
  Globe,
  Lock,
  Server
} from "lucide-react"
import { Typography } from "../ui/typography"

export function ChipShowcase() {
  return (
    <div className="space-page max-w-5xl mx-auto space-y-16 py-10">
      
      {/* 🔹 HEADER: Showcase Identity */}
      <header className="border-l-4 border-primary pl-6 space-y-2">
       
        <Typography variant="body" className="text-muted max-w-2xl">
          Compact visual nodes used for status signaling, metadata tagging, and 
          hierarchical categorization within the System Engine.
        </Typography>
      </header>

      {/* 🔹 VARIANT 01: SYSTEM STATES (High-Contrast Status) */}
      <ComponentWrapper 
        title="Status_Nodes // Semantic"
        code={`<Chip label="Online" variant="success" icon={<CheckCircle2 size={12} />} />
<Chip label="Warning" variant="warning" icon={<AlertCircle size={12} />} />`}
      >
        <div className="flex flex-wrap gap-default p-2">
          <Chip label="Online" variant="success" icon={<CheckCircle2 size={12} />} />
          <Chip label="Security_High" variant="accent" icon={<Shield size={12} />} />
          <Chip label="Critical_Failure" variant="danger" icon={<AlertCircle size={12} />} />
          <Chip label="System_Idle" variant="ghost" icon={<Activity size={12} />} />
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 02: NETWORK & CLOUD (Branded Telemetry) */}
      <ComponentWrapper 
        title="Telemetry // Branded"
        code={`<Chip label="Neural_Link" variant="primary" icon={<Zap size={12} />} />
<Chip label="Global_Sync" variant="outline" icon={<Globe size={12} />} />`}
      >
        <div className="flex flex-wrap gap-default p-2">
          <Chip label="Neural_Link" variant="primary" icon={<Zap size={12} />} />
          <Chip label="Global_Sync" variant="outline" icon={<Globe size={12} />} />
          <Chip label="Encrypted" variant="primary" icon={<Lock size={12} />} />
          <Chip label="Node_01" variant="ghost" icon={<Server size={12} />} />
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 03: INTERACTIVE MINI-BADGES (Meta Tags) */}
      <ComponentWrapper 
        title="UI_Metadata // Utility"
        code={`<div className="flex gap-2">
  <Chip label="v2.4.0" variant="outline" />
  <Chip label="Stable" variant="ghost" />
</div>`}
      >
        <div className="space-y-4 p-2">
          <Typography variant="label" className="text-label opacity-40">
            Resource Identifiers:
          </Typography>
          <div className="flex flex-wrap gap-2">
            {["React", "Typescript", "Next.js", "Vercel", "Tailwind"].map((tag) => (
              <Chip key={tag} label={tag} variant="outline" />
            ))}
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 SYSTEM ENGINE: CONTROL DECK FOOTER */}
      <footer className="system-footer">
        <div className="system-footer-grid">
          
          {/* Section 01: Node Architecture */}
          <div className="space-group">
            <div className="system-footer-title">Node_Architecture</div>
            <h3 className="system-footer-item-heading text-h4">Atomic Tokens</h3>
            <p className="system-footer-item-text text-small text-muted">
              Every chip variant utilizes <code>HSL_Alpha</code> mapping. 
              The <code>bg-primary/10</code> class ensures transparency remains 
              reactive to the global <code>--neutral-sat</code> configuration.
            </p>
          </div>

          {/* Section 02: Interface Logic */}
          <div className="space-group">
            <div className="system-footer-title">Interface_Logic</div>
            <h3 className="system-footer-item-heading text-h4">System Hierarchy</h3>
            <p className="system-footer-item-text text-small text-muted">
              Chips follow the <code>Label_Priority</code> rule. 
              Primary chips represent <code>Write_Actions</code>, while Ghost variants 
              are reserved for <code>Read_Only_Metadata</code>.
            </p>
          </div>

          {/* Section 03: Telemetry Data */}
          <div className="space-group">
            <div className="system-footer-title">Telemetry_Sync</div>
            <h3 className="system-footer-item-heading text-h4">Real-time Props</h3>
            <div className="space-y-3 mt-2">
              <div className="flex items-center gap-3 text-caption tabular-nums">
                <Activity size={14} className="text-primary" />
                <span>Sync Rate: 120ms</span>
              </div>
              <div className="flex items-center gap-3 text-caption">
                <Shield size={14} className="text-primary" />
                <span>Security: AES-256</span>
              </div>
              <div className="flex items-center gap-3 text-caption">
                <Database size={14} className="text-primary" />
                <span className="text-code">Registry: 0x4F2A</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}