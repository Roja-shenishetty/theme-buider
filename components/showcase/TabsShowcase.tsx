"use client"

import { Settings, Shield, Bell, Cpu, HardDrive, Network } from "lucide-react"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeSegmented = `<div className="w-full max-w-lg p-5 border border-primary/10 radius-lg bg-background shadow-primary/20">
  <Tabs defaultValue="cpu" className="w-full space-group">
    <TabsList className="inline-flex h-9 items-center justify-center radius-md bg-foreground/[0.04] p-1 text-muted-foreground w-full">
      <TabsTrigger value="cpu" className="inline-flex items-center justify-center whitespace-nowrap radius-sm px-3 py-1 text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm w-full">
        Core CPU
      </TabsTrigger>
      <TabsTrigger value="memory" className="inline-flex items-center justify-center whitespace-nowrap radius-sm px-3 py-1 text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm w-full">
        Memory Matrix
      </TabsTrigger>
    </TabsList>
    
    <TabsContent value="cpu" className="p-4 border border-primary/5 radius-md bg-foreground/[0.01] mt-2">
      <h4 className="text-body font-bold mb-1">Thread Allocation</h4>
      <p className="text-caption text-muted leading-relaxed">Manages hyper-threading protocols across 16 virtual cores. Current load is optimized at 42%.</p>
    </TabsContent>
    
    <TabsContent value="memory" className="p-4 border border-primary/5 radius-md bg-foreground/[0.01] mt-2">
      <h4 className="text-body font-bold mb-1">Heap Snapshot</h4>
      <p className="text-caption text-muted leading-relaxed">Garbage collection cycles run every 500ms. Active memory footprint isolated to 1.2GB.</p>
    </TabsContent>
  </Tabs>
</div>`

const codeMinimal = `<div className="w-full max-w-xl p-5 border border-primary/10 radius-lg bg-background shadow-primary/20">
  <Tabs defaultValue="network" className="w-full">
    <TabsList className="flex items-center w-full border-b border-primary/10 bg-transparent p-0 radius-none">
      <TabsTrigger 
        value="network" 
        className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-muted-foreground transition-all border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none radius-none hover:text-foreground"
      >
        <Network size={14} /> Localnet
      </TabsTrigger>
      <TabsTrigger 
        value="storage" 
        className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-muted-foreground transition-all border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none radius-none hover:text-foreground"
      >
        <HardDrive size={14} /> Persistent Volume
      </TabsTrigger>
    </TabsList>
    
    <TabsContent value="network" className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="space-group">
        <span className="text-body font-bold">Port Configurations</span>
        <p className="text-sm text-muted">Listening on 0.0.0.0:8080. Firewall protocols active.</p>
      </div>
    </TabsContent>
    
    <TabsContent value="storage" className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="space-group">
        <span className="text-body font-bold">Mount Points</span>
        <p className="text-sm text-muted">Volume attached at /var/lib/docker/volumes.</p>
      </div>
    </TabsContent>
  </Tabs>
</div>`

const codeVertical = `<div className="w-full max-w-3xl p-5 border border-primary/10 radius-lg bg-background shadow-primary/20">
  <Tabs defaultValue="general" orientation="vertical" className="flex flex-col md:flex-row gap-wide w-full">
    
    <TabsList className="flex flex-col h-auto w-full md:w-48 bg-transparent p-0 items-start justify-start gap-1">
      <TabsTrigger 
        value="general" 
        className="w-full flex justify-start items-center gap-2 px-3 py-2 text-sm font-bold radius-md transition-colors data-[state=active]:bg-primary/10 data-[state=active]:text-primary text-muted-foreground hover:bg-foreground/[0.02]"
      >
        <Settings size={14} /> General
      </TabsTrigger>
      <TabsTrigger 
        value="security" 
        className="w-full flex justify-start items-center gap-2 px-3 py-2 text-sm font-bold radius-md transition-colors data-[state=active]:bg-primary/10 data-[state=active]:text-primary text-muted-foreground hover:bg-foreground/[0.02]"
      >
        <Shield size={14} /> Security
      </TabsTrigger>
      <TabsTrigger 
        value="notifications" 
        className="w-full flex justify-start items-center gap-2 px-3 py-2 text-sm font-bold radius-md transition-colors data-[state=active]:bg-primary/10 data-[state=active]:text-primary text-muted-foreground hover:bg-foreground/[0.02]"
      >
        <Bell size={14} /> Alerts
      </TabsTrigger>
    </TabsList>
    
    <div className="flex-1 p-4 border border-primary/5 radius-md bg-foreground/[0.01]">
      <TabsContent value="general" className="mt-0">
        <h4 className="text-body font-bold mb-2">General Settings</h4>
        <p className="text-sm text-muted">Manage your workspace configuration and environment variables.</p>
      </TabsContent>
      <TabsContent value="security" className="mt-0">
        <h4 className="text-body font-bold mb-2">Security Protocols</h4>
        <p className="text-sm text-muted">Configure 2FA, OAuth providers, and session timeout thresholds.</p>
      </TabsContent>
      <TabsContent value="notifications" className="mt-0">
        <h4 className="text-body font-bold mb-2">Alert Webhooks</h4>
        <p className="text-sm text-muted">Set up Slack and email integrations for critical system failures.</p>
      </TabsContent>
    </div>
    
  </Tabs>
</div>`

/* 🔹 Refined Blueprint Section Wrapper */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up">
      <div className="space-group mb-6 relative">
        <div className="absolute -top-6 right-0 p-3 opacity-[0.03] pointer-events-none select-none z-0">
          <span className="text-[120px] font-black uppercase leading-none tracking-tighter">
            {title[0]}
          </span>
        </div>
        <h3 className="text-h3 tracking-tight font-bold text-primary/90 relative z-10">
          {title}
        </h3>
        {description && (
          <p className="text-body text-muted text-sm max-w-2xl relative z-10">
            {description}
          </p>
        )}
      </div>
      <div className="w-full">
        {children}
      </div>
    </section>
  )
}

export function TabsShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="space-group pb-10 border-b border-primary/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary text-label">
          Contextual Views
        </div>
       
      </header>

      {/* 🔹 Segmented Control */}
      <Section 
        title="Segmented Controls" 
        description="The default shadcn/ui aesthetic. Excellent for tight, binary toggle arrays or small sub-view switching within a unified card container."
      >
        <ComponentWrapper title="Tabs // Segmented_Block" code={codeSegmented}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-lg p-5 border border-primary/10 radius-lg bg-background shadow-primary/20">
              <Tabs defaultValue="cpu" className="w-full space-group">
                <TabsList className="inline-flex h-9 items-center justify-center radius-md bg-foreground/[0.04] p-1 text-muted-foreground w-full">
                  <TabsTrigger value="cpu" className="inline-flex items-center justify-center whitespace-nowrap radius-sm px-3 py-1 text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm w-full">
                    Core CPU
                  </TabsTrigger>
                  <TabsTrigger value="memory" className="inline-flex items-center justify-center whitespace-nowrap radius-sm px-3 py-1 text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm w-full">
                    Memory Matrix
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="cpu" className="p-4 border border-primary/5 radius-md bg-foreground/[0.01] mt-2">
                  <h4 className="text-body font-bold mb-1">Thread Allocation</h4>
                  <p className="text-caption text-muted leading-relaxed">Manages hyper-threading protocols across 16 virtual cores. Current load is optimized at 42%.</p>
                </TabsContent>
                
                <TabsContent value="memory" className="p-4 border border-primary/5 radius-md bg-foreground/[0.01] mt-2">
                  <h4 className="text-body font-bold mb-1">Heap Snapshot</h4>
                  <p className="text-caption text-muted leading-relaxed">Garbage collection cycles run every 500ms. Active memory footprint isolated to 1.2GB.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Minimal Underline */}
      <Section 
        title="Minimal Underline" 
        description="Overrides the default pill background in favor of a sleek, bottom-bordered active state. Ideal for wider page-level navigation."
      >
        <ComponentWrapper title="Tabs // Underline_Matrix" code={codeMinimal}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-xl p-5 border border-primary/10 radius-lg bg-background shadow-primary/20">
              <Tabs defaultValue="network" className="w-full">
                <TabsList className="flex items-center w-full border-b border-primary/10 bg-transparent p-0 radius-none">
                  <TabsTrigger 
                    value="network" 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-muted-foreground transition-all border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none radius-none hover:text-foreground"
                  >
                    <Network size={14} /> Localnet
                  </TabsTrigger>
                  <TabsTrigger 
                    value="storage" 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-muted-foreground transition-all border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none radius-none hover:text-foreground"
                  >
                    <HardDrive size={14} /> Persistent Volume
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="network" className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="space-group">
                    <span className="text-body font-bold">Port Configurations</span>
                    <p className="text-sm text-muted">Listening on 0.0.0.0:8080. Firewall protocols active.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="storage" className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="space-group">
                    <span className="text-body font-bold">Mount Points</span>
                    <p className="text-sm text-muted">Volume attached at /var/lib/docker/volumes.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Vertical Sidebar */}
      <Section 
        title="Vertical Architecture" 
        description="Rotates the tabs into a side-navigation menu. Essential for deeply nested dashboard settings or complex multi-step forms."
      >
        <ComponentWrapper title="Tabs // Vertical_Routing" code={codeVertical}>
          <div className="flex justify-center p-4 full-width">
            <div className="w-full max-w-3xl p-5 border border-primary/10 radius-lg bg-background shadow-primary/20">
              <Tabs defaultValue="general" orientation="vertical" className="flex flex-col md:flex-row gap-wide w-full">
                
                <TabsList className="flex flex-col h-auto w-full md:w-48 bg-transparent p-0 items-start justify-start gap-1">
                  <TabsTrigger 
                    value="general" 
                    className="w-full flex justify-start items-center gap-2 px-3 py-2 text-sm font-bold radius-md transition-colors data-[state=active]:bg-primary/10 data-[state=active]:text-primary text-muted-foreground hover:bg-foreground/[0.02]"
                  >
                    <Settings size={14} /> General
                  </TabsTrigger>
                  <TabsTrigger 
                    value="security" 
                    className="w-full flex justify-start items-center gap-2 px-3 py-2 text-sm font-bold radius-md transition-colors data-[state=active]:bg-primary/10 data-[state=active]:text-primary text-muted-foreground hover:bg-foreground/[0.02]"
                  >
                    <Shield size={14} /> Security
                  </TabsTrigger>
                  <TabsTrigger 
                    value="notifications" 
                    className="w-full flex justify-start items-center gap-2 px-3 py-2 text-sm font-bold radius-md transition-colors data-[state=active]:bg-primary/10 data-[state=active]:text-primary text-muted-foreground hover:bg-foreground/[0.02]"
                  >
                    <Bell size={14} /> Alerts
                  </TabsTrigger>
                </TabsList>
                
                <div className="flex-1 p-4 border border-primary/5 radius-md bg-foreground/[0.01]">
                  <TabsContent value="general" className="mt-0">
                    <h4 className="text-body font-bold mb-2">General Settings</h4>
                    <p className="text-sm text-muted">Manage your workspace configuration and environment variables.</p>
                  </TabsContent>
                  <TabsContent value="security" className="mt-0">
                    <h4 className="text-body font-bold mb-2">Security Protocols</h4>
                    <p className="text-sm text-muted">Configure 2FA, OAuth providers, and session timeout thresholds.</p>
                  </TabsContent>
                  <TabsContent value="notifications" className="mt-0">
                    <h4 className="text-body font-bold mb-2">Alert Webhooks</h4>
                    <p className="text-sm text-muted">Set up Slack and email integrations for critical system failures.</p>
                  </TabsContent>
                </div>
                
              </Tabs>
            </div>
          </div>
        </ComponentWrapper>
      </Section>

      {/* 🔹 Guidelines Footer */}
      <footer className="system-footer mt-16 pt-section border-t border-primary/10">
        <h4 className="system-footer-title text-h4 font-bold mb-8">View Management Rules</h4>
        
        <div className="system-footer-grid grid grid-cols-1 md:grid-cols-3 gap-wide">
          
          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">01 Layout Context</div>
            <span className="system-footer-item-heading text-lg font-bold block">When to Segment</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Use segmented tabs (the pill box) only for tight, closely related subsets of data within a card. If the tabs dictate the entire layout of the page, switch to the Underline or Vertical architectures.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">02 State Sync</div>
            <span className="system-footer-item-heading text-lg font-bold block">URL Parameters</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              For complex views, consider binding your active tab state to the URL search parameters (e.g., <code>?tab=security</code>). This ensures users can refresh the page or share links without losing their exact context.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-label opacity-50 text-primary">03 Performance</div>
            <span className="system-footer-item-heading text-lg font-bold block">Lazy Initialization</span>
            <p className="system-footer-item-text text-muted text-sm leading-relaxed">
              Because Radix UI unmounts hidden <code>TabsContent</code> nodes by default, placing heavy graphs or data fetch queries inside inactive tabs guarantees they will not penalize initial page load times.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}