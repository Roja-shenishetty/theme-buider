"use client"

import React from "react"
import { ComponentWrapper } from "../system/ComponentWrapper"
import { Typography } from "../ui/typography"
import { Chip } from "@/components/ui/chip"
import { Badge } from "@/components/ui/badge/badge"
import { Button } from "@/components/ui/button"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { 
  User, 
  Mail, 
  HardDrive, 
  FileCode, 
  FileText, 
  Image as ImageIcon,
  ChevronRight,
  MoreVertical,
  Circle,
  Activity,
  Database,
  CreditCard,
  Globe,
  Hash,
  ShieldAlert,
  MoreHorizontal,
  RefreshCcw,
  Terminal,
  History
} from "lucide-react"
import { Card } from "../ui/card"

export function TableShowcase() {
  return (
    <div className="space-page max-w-6xl mx-auto space-y-16">
      
     {/* 🔹 VARIANT 01: SYSTEM LOG STREAM (Real-time Feed) */}
      <ComponentWrapper 
        title="Live_Log_Stream // Analytics"
        code={`<Table className="font-mono text-[10px]">
  <TableRow className="border-l-2 border-success bg-success/5">
    <TableCell className="opacity-50">14:20:01</TableCell>
    <TableCell>EVENT_AUTH_SUCCESS</TableCell>
  </TableRow>
</Table>`}
      >
        <div className="radius-lg border border-primary/10 bg-black/40 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2 bg-primary/5 border-b border-primary/10">
            <Typography variant="label" className="text-[9px] flex items-center gap-2 opacity-70">
              <Terminal size={12} /> Console_Output
            </Typography>
            <div className="flex items-center gap-2">
               <span className="text-[8px] font-mono text-success uppercase tracking-widest">Live_Feed</span>
               <Badge variant="success" dot tone="soft" className="animate-pulse" />
            </div>
          </div>
          <Table>
            <TableBody>
              {[
                { time: "16:42:01", event: "HANDSHAKE_INIT", status: "accent", node: "CORE_01" },
                { time: "16:42:02", event: "SSL_CERT_VERIFIED", status: "success", node: "CORE_01" },
                { time: "16:42:05", event: "THREAT_DETECTED", status: "danger", node: "UPLINK_B" },
              ].map((log, i) => (
                <TableRow key={i} className={`border-transparent hover:bg-white/5 border-l-2 transition-all ${
                  log.status === 'danger' ? 'border-red-500 bg-red-500/5' : 'border-primary/20'
                }`}>
                  <TableCell className="font-mono text-[10px] opacity-40 tabular-nums py-2.5">{log.time}</TableCell>
                  <TableCell className="font-mono text-[10px] font-bold tracking-tight py-2.5 text-foreground/90">
                    {log.event}
                  </TableCell>
                  <TableCell className="text-right py-2.5">
                    <code className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-muted italic">
                      {log.node}
                    </code>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 02: MODULE COMPARISON (Feature Audit) */}
      <ComponentWrapper 
        title="Capability_Matrix // Audit"
        code={`<TableHead className="text-center">Version_Alpha</TableHead>
<TableCell className="text-center"><Badge variant="success" dot /></TableCell>`}
      >
        <div className="radius-xl border border-primary/10 bg-card/30 overflow-hidden">
          <Table>
            <TableHeader className="bg-primary/5">
              <TableRow className="border-primary/10">
                <TableHead className="text-label w-[250px] pl-6 py-4">System_Module</TableHead>
                <TableHead className="text-label text-center">Standard_Node</TableHead>
                <TableHead className="text-label text-center">Enterprise_Node</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { feat: "Neural_Compute", v1: true, v2: true },
                { feat: "Edge_Caching", v1: false, v2: true },
                { feat: "Biometric_Auth", v1: true, v2: true },
                { feat: "Auto_Scaling", v1: false, v2: false },
              ].map((row) => (
                <TableRow key={row.feat} className="border-primary/5 group">
                  <TableCell className="font-bold pl-6 text-small group-hover:text-primary transition-colors">
                    {row.feat}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.v1 ? <Badge variant="success" dot tone="soft" /> : <Typography className="opacity-10">—</Typography>}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.v2 ? <Badge variant="success" dot tone="soft" /> : <Typography className="opacity-10">—</Typography>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 03: ADMIN_CONTROL_MATRIX (Management Hub) */}
      <ComponentWrapper 
        title="Admin_Session_Manager"
        code={`<Button variant="outline" size="sm">
  <RefreshCcw size={12} /> Sync
</Button>`}
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-3">
              <Typography variant="label" className="opacity-50">Active_Sessions</Typography>
              <Chip label="14 Nodes" variant="primary" />
            </div>
            <div className="flex gap-2">
               <Button variant="outline" size="sm" className="h-8 text-[10px] uppercase font-black tracking-widest border-primary/20">
                 <History className="mr-2 h-3 w-3" /> Logs
               </Button>
               <Button variant="default" size="sm" className="h-8 text-[10px] uppercase font-black tracking-widest">
                 <RefreshCcw className="mr-2 h-3 w-3" /> Re-Sync
               </Button>
            </div>
          </div>
          
          <div className="radius-xl border border-primary/10 overflow-hidden bg-card/10 shadow-lg">
            <Table>
              <TableBody>
                {[1, 2, 3].map((i) => (
                  <TableRow key={i} className="border-primary/5 group hover:bg-primary/5 transition-all">
                    <TableCell className="pl-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="h-9 w-9 radius-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xs shadow-inner">
                          U{i}
                        </div>
                        <div className="flex flex-col">
                          <Typography className="font-bold text-small leading-none mb-1">Session_Node_0x{i}F</Typography>
                          <Typography variant="caption" className="text-[9px] opacity-50 uppercase font-mono">Last_Access: 0.2ms ago</Typography>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Chip label="Authorized" variant="outline" />
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <Button variant="ghost" size="icon" className="radius-full hover:bg-primary/10 opacity-40 group-hover:opacity-100 transition-all">
                        <MoreHorizontal size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 04: TEAM_MEMBER_DIRECTORY (Employee Details) */}
      <ComponentWrapper 
        title="Personnel_Index"
        code={`<TableRow>
  <TableCell className="flex items-center gap-3">
    <Avatar src="..." />
    <div className="flex flex-col">
      <span className="font-bold">Name</span>
      <span className="text-xs opacity-50">Role</span>
    </div>
  </TableCell>
</TableRow>`}
      >
        <div className="radius-xl border border-primary/10 overflow-hidden bg-card/30">
          <Table>
            <TableHeader className="bg-primary/5">
              <TableRow className="border-primary/10">
                <TableHead className="text-label pl-6 py-4">Employee_Entity</TableHead>
                <TableHead className="text-label">Department</TableHead>
                <TableHead className="text-label">Access_Level</TableHead>
                <TableHead className="text-label text-right pr-6">Activity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "Alex Rivet", role: "Lead Systems Eng", dept: "Architecture", level: "L-09", active: true },
                { name: "Sarah Chen", role: "UI/UX Architect", dept: "Design", level: "L-07", active: true },
                { name: "Marcus Vane", role: "Security Auditor", dept: "Compliance", level: "L-08", active: false },
              ].map((emp, i) => (
                <TableRow key={i} className="border-primary/5 hover:bg-primary/5 transition-all">
                  <TableCell className="pl-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 radius-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <User className="text-primary w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <Typography className="font-bold text-small">{emp.name}</Typography>
                        <div className="flex items-center gap-1.5 text-muted text-[10px]">
                           <Mail size={10} /> {emp.name.toLowerCase().replace(' ', '.')}@system.node
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Typography className="text-small opacity-80">{emp.dept}</Typography>
                  </TableCell>
                  <TableCell>
                    <code className="text-code text-[10px]">{emp.level}</code>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <div className="flex items-center justify-end gap-2">
                       <Circle size={8} className={emp.active ? "fill-green-500 text-green-500" : "fill-muted text-muted"} />
                       <Typography variant="caption" className="text-[10px] tabular-nums">12m ago</Typography>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 05: ASSET_REPOSITORY (Files & Storage) */}
      <ComponentWrapper 
        title="Asset_Registry // Binary_Data"
        code={`<TableCell>
  <FileCode className="text-primary" />
  <span>main.py</span>
</TableCell>`}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3 px-4 py-2 radius-md bg-primary/5 border border-primary/10 w-fit">
            <HardDrive size={14} className="text-primary" />
            <Typography variant="label" className="text-[10px]">Vault_Status: 84% Capacity</Typography>
          </div>

          <div className="radius-lg border border-primary/10 bg-card/10">
            <Table>
              <TableHeader>
                <TableRow className="border-primary/20">
                  <TableHead className="text-label pl-6">Source_File</TableHead>
                  <TableHead className="text-label">Format</TableHead>
                  <TableHead className="text-label">Size</TableHead>
                  <TableHead className="text-label text-right pr-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: "core_engine.py", icon: <FileCode />, format: "Python", size: "1.2 MB", date: "Apr 24" },
                  { name: "system_blueprint.pdf", icon: <FileText />, format: "PDF", size: "14.5 MB", date: "Apr 22" },
                  { name: "hardware_render.png", icon: <ImageIcon />, format: "Image", size: "8.2 MB", date: "Apr 20" },
                ].map((file, i) => (
                  <TableRow key={i} className="group border-primary/5">
                    <TableCell className="pl-6 py-3">
                      <div className="flex items-center gap-3">
                        <span className="text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                          {React.cloneElement(file.icon as React.ReactElement<{ size?: number }>, { 
            size: 16 
          })}
                        </span>
                        <Typography className="text-small font-mono tracking-tight group-hover:text-primary transition-colors">
                          {file.name}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Chip label={file.format} variant="outline" />
                    </TableCell>
                    <TableCell className="text-muted tabular-nums text-xs italic">
                      {file.size}
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <Button variant="ghost" size="icon" className="h-8 w-8 radius-md hover:bg-primary/10">
                        <ChevronRight size={14} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 06: GLOBAL_NETWORK_NODES (Geographic Distribution) */}
      <ComponentWrapper 
        title="Geospatial_Nodes // Network"
        code={`<TableRow>
  <TableCell><Badge dot variant="success" /> Frankfurt_DE</TableCell>
  <TableCell className="tabular-nums">24ms</TableCell>
</TableRow>`}
      >
        <div className="radius-xl border border-primary/10 overflow-hidden bg-card/20 backdrop-blur-sm">
          <Table>
            <TableHeader className="bg-primary/5">
              <TableRow className="border-primary/10">
                <TableHead className="text-label pl-6">Region_Entity</TableHead>
                <TableHead className="text-label">IP_Address</TableHead>
                <TableHead className="text-label">Load</TableHead>
                <TableHead className="text-label text-right pr-6">Ping</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { region: "Frankfurt, DE", ip: "192.168.2.1", load: 42, ping: "24ms" },
                { region: "Mumbai, IN", ip: "103.12.4.88", load: 89, ping: "12ms" },
                { region: "Virginia, US", ip: "54.21.0.12", load: 15, ping: "84ms" },
              ].map((node, i) => (
                <TableRow key={i} className="border-primary/5 hover:bg-primary/5">
                  <TableCell className="pl-6 font-bold flex items-center gap-3">
                    <Globe size={14} className="text-primary" />
                    {node.region}
                  </TableCell>
                  <TableCell><code className="text-code text-[10px]">{node.ip}</code></TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                       <div className="w-20 h-1.5 bg-primary/10 rounded-full overflow-hidden">
                          <div className={`h-full ${node.load > 80 ? 'bg-red-500' : 'bg-primary'}`} style={{ width: `${node.load}%` }} />
                       </div>
                       <span className="text-[10px] tabular-nums">{node.load}%</span>
                    </div>
                  </TableCell>
                  <td className="text-right pr-6 font-mono text-primary text-xs italic">{node.ping}</td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 07: SECURITY_AUDIT_LOG (Cryptographic Events) */}
      <ComponentWrapper 
        title="Audit_Trail // Cryptography"
        code={`<Chip label="SHA-256" variant="ghost" />`}
      >
        <div className="space-y-4">
          <div className="radius-lg border border-red-500/20 bg-red-500/5 p-4 flex items-center justify-between">
             <div className="flex items-center gap-3">
                <ShieldAlert className="text-red-500" size={18} />
                <Typography className="text-small font-bold">Unauthorized Access Blocked: 0xCC01</Typography>
             </div>
             <Button size="sm" variant="outline" className="h-7 text-[9px] border-red-500/30 text-red-500 hover:bg-red-500/10 uppercase">
               Investigate
             </Button>
          </div>

          <div className="radius-lg border border-primary/10 bg-black/20">
            <Table>
              <TableHeader>
                <TableRow className="border-primary/10">
                  <TableHead className="text-label pl-6">Hash_Signature</TableHead>
                  <TableHead className="text-label">Method</TableHead>
                  <TableHead className="text-label">Time_UTC</TableHead>
                  <TableHead className="text-label text-right pr-6">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { hash: "8f3e..1a2b", method: "Key_Rotate", time: "12:00:04", status: "success" },
                  { hash: "2d9c..ff41", method: "Force_Sign_Out", time: "11:58:22", status: "danger" },
                  { hash: "1a0b..99c2", method: "Token_Refresh", time: "11:45:10", status: "success" },
                ].map((audit, i) => (
                  <TableRow key={i} className="border-primary/5 hover:bg-primary/5 group">
                    <TableCell className="pl-6 font-mono text-[10px] text-muted group-hover:text-primary transition-colors">
                      <Hash size={10} className="inline mr-1" /> {audit.hash}
                    </TableCell>
                    <TableCell><Chip label={audit.method} variant="outline" /></TableCell>
                    <TableCell className="text-xs tabular-nums opacity-60 italic">{audit.time}</TableCell>
                    <TableCell className="text-right pr-6">
                      <Badge variant={audit.status as any} dot tone="soft" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </ComponentWrapper>

      {/* 🔹 VARIANT 08: BILLING_USAGE_MATRIX (Resource Costs) */}
      <ComponentWrapper 
        title="Resource_Billing // Credits"
        code={`<TableCell className="tabular-nums font-black">$ 42.00</TableCell>`}
      >
        <Card className="border-primary/10 bg-primary/5 radius-2xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-primary/10">
                <TableHead className="text-label pl-6 py-5">Service_Node</TableHead>
                <TableHead className="text-label">Cycle_Usage</TableHead>
                <TableHead className="text-label">Base_Rate</TableHead>
                <TableHead className="text-label text-right pr-6">Accrued_Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { node: "GPU_Cluster_A", usage: "124 hrs", rate: "$1.20/h", cost: "$148.80" },
                { node: "API_Uplink_X", usage: "4.2M req", rate: "$0.05/k", cost: "$210.00" },
                { node: "S3_Storage_Y", usage: "1.2 TB", rate: "$0.02/G", cost: "$24.00" },
              ].map((item, i) => (
                <TableRow key={i} className="border-primary/5 hover:bg-white/5 transition-colors">
                  <TableCell className="pl-6 font-bold py-4">
                    <div className="flex items-center gap-3">
                       <CreditCard size={14} className="text-primary opacity-50" />
                       {item.node}
                    </div>
                  </TableCell>
                  <TableCell className="text-small tabular-nums italic">{item.usage}</TableCell>
                  <TableCell className="text-muted text-xs font-mono">{item.rate}</TableCell>
                  <TableCell className="text-right pr-6">
                    <span className="text-primary font-black tabular-nums">{item.cost}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="bg-primary/10 p-4 flex justify-between items-center border-t border-primary/10">
             <Typography variant="label" className="opacity-60 uppercase text-[10px]">Total_Cycle_Estimate</Typography>
             <Typography className="text-h4 font-black tracking-tighter tabular-nums">$ 382.80</Typography>
          </div>
        </Card>
      </ComponentWrapper>

      {/* 🔹 SYSTEM ENGINE: CONTROL DECK FOOTER */}
      <footer className="system-footer">
        <div className="system-footer-grid">
          
          <div className="space-group">
            <div className="system-footer-title">Data_Architecture</div>
            <h3 className="system-footer-item-heading">Semantic Grids</h3>
            <p className="system-footer-item-text">
              Tables utilize <code>border-collapse</code> and <code>divide-y</code> for 
              structural integrity. Headers are locked to <code>text-label</code> for 
              maximum information density.
            </p>
          </div>

          <div className="space-group">
            <div className="system-footer-title">Visual_Logic</div>
            <h3 className="system-footer-item-heading">State Feedback</h3>
            <p className="system-footer-item-text">
              Hover states use <code>bg-primary/5</code> to highlight row 
              selection without obscuring <code>text-muted</code> metadata.
            </p>
          </div>

          <div className="space-group">
            <div className="system-footer-title">Global_Sync</div>
            <h3 className="system-footer-item-heading">Real-time IO</h3>
            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-3 text-caption">
                <Activity size={14} className="text-primary" />
                <span className="tabular-nums">Uptime: 99.99%</span>
              </div>
              <div className="flex items-center gap-3 text-caption">
                <Database size={14} className="text-primary" />
                <span className="text-code">Query: 0.002ms</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}