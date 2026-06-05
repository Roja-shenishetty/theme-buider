"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Switch } from "@/components/ui/switch"
import { 
  ToggleLeft, BellRing, ShieldCheck, 
  Plane, Fingerprint, Activity 
} from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeStandard = `<div className="flex items-center space-x-3 w-full max-w-sm p-4 border border-primary/10 radius-md bg-background shadow-sm">
  <Switch id="airplane-mode" />
  <label htmlFor="airplane-mode" className="text-sm font-semibold cursor-pointer">
    Airplane Mode
  </label>
</div>`;

const codeCard = `<div className="flex flex-row items-center justify-between p-5 border border-primary/10 radius-md bg-background shadow-sm w-full max-w-sm">
  <div className="space-y-1">
    <label className="text-sm font-semibold">Push Notifications</label>
    <p className="text-[11px] text-muted-foreground">
      Receive alerts for mentions and direct messages.
    </p>
  </div>
  <Switch 
    checked={pushEnabled} 
    onCheckedChange={setPushEnabled} 
  />
</div>`;

const codeValidation = `<div className="flex flex-row items-start space-x-3 p-5 border border-danger/20 radius-md bg-danger/5 w-full max-w-sm">
  <Switch 
    id="mfa-enforce"
    className="data-[state=checked]:bg-danger mt-0.5"
  />
  <div className="space-y-1">
    <label htmlFor="mfa-enforce" className="text-sm font-semibold text-danger">
      Enforce 2FA Organization-wide
    </label>
    <p className="text-[11px] text-danger opacity-80 leading-relaxed">
      Warning: Users without an authenticator app configured will be immediately locked out of their accounts.
    </p>
  </div>
</div>`;

/* 🔹 Section Wrapper */
function Section({ title, description, children, className }: any) {
  return (
    <section className={`space-section animate-fade-up relative ${className}`}>
      <div className="absolute -top-3 right-0 text-[60px] font-black opacity-[0.02] pointer-events-none select-none">
        {title[0]}
      </div>
      <div className="flex items-center gap-3 mb-4 border-l-2 border-primary pl-4 relative z-10">
        <div className="space-y-0.5">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary/80">{title}</h3>
          {description && (
            <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-tighter opacity-70">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="relative radius-lg border border-primary/5 bg-background/50 backdrop-blur-sm p-4 hover:border-primary/20 transition-all duration-300">
        {children}
      </div>
    </section>
  )
}

export function SwitchShowcase() {
  const [airplane, setAirplane] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [enforceMfa, setEnforceMfa] = useState(false);

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <ToggleLeft className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Binary Controls</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Switch
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A control that allows the user to toggle between checked and not checked. Best used for settings that take effect immediately without requiring a form submission.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Inline */}
        <Section title="Inline Label" description="Standard tight coupling">
          <ComponentWrapper title="Switch // Standard" code={codeStandard}>
            <div className="w-full flex justify-center py-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
              
              <div className="flex items-center space-x-3 w-full max-w-[240px] p-4 border border-primary/10 radius-md bg-background/80 backdrop-blur-md shadow-sm">
                <Switch 
                  id="airplane-mode" 
                  checked={airplane} 
                  onCheckedChange={setAirplane} 
                />
                <label 
                  htmlFor="airplane-mode" 
                  className="text-sm font-semibold cursor-pointer select-none flex items-center gap-2"
                >
                  <Plane className={`w-4 h-4 transition-colors ${airplane ? "text-primary" : "text-muted-foreground"}`} />
                  Airplane Mode
                </label>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Card Style Settings */}
        <Section title="Card Layout" description="Separating control from context">
          <ComponentWrapper title="Switch // Settings_Card" code={codeCard}>
            <div className="w-full flex justify-center py-12 bg-black/5 dark:bg-white/5 radius-md">
              
              <div className="flex flex-row items-center justify-between p-5 border border-primary/10 radius-md bg-background shadow-sm w-full max-w-sm group hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 radius-sm bg-primary/10 mt-0.5">
                    <BellRing className="w-4 h-4 text-primary" />
                  </div>
                  <div className="space-y-1 cursor-pointer select-none" onClick={() => setNotifications(!notifications)}>
                    <label className="text-sm font-semibold pointer-events-none">Push Notifications</label>
                    <p className="text-[11px] text-muted-foreground pr-4">
                      Receive instant alerts for system outages and direct messages.
                    </p>
                  </div>
                </div>
                <Switch 
                  checked={notifications} 
                  onCheckedChange={setNotifications} 
                />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Danger/Validation Context */}
        <Section title="Contextual Styling" description="Danger zones and warnings" className="lg:col-span-2">
          <ComponentWrapper title="Switch // Danger_Zone" code={codeValidation}>
            <div className="w-full flex flex-col md:flex-row items-center justify-center py-12 gap-8 px-6 bg-black/5 dark:bg-white/5 radius-md">
              
              {/* Context Panel */}
              <div className="flex-1 w-full max-w-sm space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 radius-md bg-danger/10 text-danger">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold">Destructive Actions</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You can easily override the active state color by appending classes directly to the Switch component. In this case, passing <code>data-[state=checked]:bg-danger</code> instantly themes it for security contexts.
                </p>
              </div>

              {/* Interactive Component */}
              <div className="flex-1 w-full max-w-sm p-5 border border-danger/20 radius-md bg-danger/5 shadow-sm">
                <div className="flex flex-row items-start space-x-4">
                  {/* Notice the custom background override here */}
                  <Switch 
                    id="mfa-enforce"
                    checked={enforceMfa}
                    onCheckedChange={setEnforceMfa}
                    className="data-[state=checked]:bg-danger mt-1"
                  />
                  <div className="space-y-1.5">
                    <label htmlFor="mfa-enforce" className="text-sm font-bold text-danger flex items-center gap-2 cursor-pointer select-none">
                      <Fingerprint className="w-3.5 h-3.5" /> Enforce 2FA Access
                    </label>
                    <p className="text-[11px] text-danger opacity-80 leading-relaxed select-none">
                      Warning: Administrators and users without an authenticator app configured will be immediately locked out of their accounts until provisioned.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <Activity className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Switch Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Behavior", heading: "Immediate Action", desc: "Switches should trigger a state change immediately (e.g., turning on Bluetooth). If the user needs to press a 'Save' or 'Submit' button afterward, use a Checkbox instead." },
            { title: "Accessibility", heading: "Explicit Labels", desc: "Never render a Switch on its own. It must always be accompanied by a <label> that uses the htmlFor prop to tie to the Switch's ID, ensuring screen readers announce it correctly." },
            { title: "Interaction", heading: "Click Targets", desc: "Notice how clicking the text label in the examples automatically toggles the switch. This is a critical accessibility feature that drastically increases the tap target size on mobile devices." }
          ].map((item, i) => (
            <div key={i} className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
              <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-primary">{item.title}</div>
              <span className="font-bold text-lg block">{item.heading}</span>
              <p className="text-xs opacity-70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}