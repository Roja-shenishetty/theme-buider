"use client"

import React from "react"
import { Typography } from "@/components/ui/typography"
import { Scale, Zap, PackageX, Box, MousePointerClick, TextCursorInput, Layers, ToggleLeft, AlertTriangle } from "lucide-react"

// 🔹 Reusable Comparison Block
function ComponentComparison({ title, icon: Icon, muiMock, ourMock, muiCode, ourCode, muiText, ourText }: any) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-muted-foreground border-b border-primary/10 pb-2">
        <Icon className="w-5 h-5 text-primary" />
        <span className="text-sm font-bold uppercase tracking-widest text-primary">{title}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* MUI Column */}
        <div className="card p-0 flex flex-col border-danger/20 overflow-hidden">
          <div className="bg-danger/10 px-4 py-2 text-xs font-mono text-danger font-bold">
            {muiText}
          </div>
          {/* UI Render Preview */}
          <div className="p-6 bg-white/5 flex items-center justify-center border-b border-danger/20 min-h-[120px]">
            {muiMock}
          </div>
          {/* Code Block - Now Black Background & Primary Text */}
          <div className="p-6 bg-black flex-1">
            <pre className="text-[11px] font-mono overflow-x-auto text-primary whitespace-pre-wrap">
              <code>{muiCode}</code>
            </pre>
          </div>
        </div>

        {/* Our System Column */}
        <div className="card p-0 flex flex-col border-success/20 overflow-hidden mt-6 md:mt-0">
          <div className="bg-success/10 px-4 py-2 text-xs font-mono text-success font-bold">
            {ourText}
          </div>
          {/* UI Render Preview */}
          <div className="p-6 bg-primary/5 flex items-center justify-center border-b border-success/20 min-h-[120px] relative">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50 pointer-events-none" />
            <div className="relative z-10 w-full flex justify-center">{ourMock}</div>
          </div>
          {/* Code Block - Now Black Background & Primary Text */}
          <div className="p-6 bg-black flex-1">
            <pre className="text-[11px] font-mono overflow-x-auto text-primary whitespace-pre-wrap">
              <code>{ourCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ArchitectureShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Scale className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">ADR-001</span>
        </div>
        
        <Typography variant="h1" className="text-h2 font-bold mb-4 tracking-tight">
          UI Render Differences
        </Typography>
        
        <div className="max-w-3xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
          <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
            Visual and structural comparisons of Material UI (MUI) versus our native zero-runtime architecture. Notice the heavy DOM pollution in MUI compared to our semantic HTML5 approach.
          </Typography>
        </div>
      </header>

      {/* 🔹 Component Level Code Comparisons */}
      <section className="space-section animate-fade-up">
        <div className="space-y-16">
          
          <ComponentComparison 
            title="Buttons"
            icon={MousePointerClick}
            muiText="MUI: Material Shadows & Uppercase"
            ourText="Ours: Clean Geometry & Alpha Transitions"
            muiMock={
              <button style={{ backgroundColor: '#1976d2', color: 'white', padding: '6px 16px', borderRadius: '4px', textTransform: 'uppercase', fontWeight: 500, border: 'none', boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)', cursor: 'pointer', fontFamily: 'Roboto, sans-serif' }}>
                Join GetAlong
              </button>
            }
            ourMock={
              <button className="bg-primary text-background radius-full px-6 py-2 font-bold hover:bg-primary/90 transition-colors shadow-sm">
                Join GetAlong
              </button>
            }
            muiCode={`<Button variant="contained" color="primary">\n  Join GetAlong\n</Button>\n\n// Renders as a heavy button with\n// built-in ripple spans and shadows.`}
            ourCode={`<button \n  className="bg-primary text-background radius-full px-6 py-2 font-bold hover:opacity-90"\n>\n  Join GetAlong\n</button>`}
          />

          <ComponentComparison 
            title="Inputs & Forms"
            icon={TextCursorInput}
            muiText="MUI: 4 DOM Nodes for 1 Input"
            ourText="Ours: 1 Native Element"
            muiMock={
              <div style={{ position: 'relative', width: '200px', display: 'inline-flex', flexDirection: 'column' }}>
                <label style={{ position: 'absolute', top: '-8px', left: '10px', fontSize: '12px', color: '#1976d2', backgroundColor: '#1e1e1e', padding: '0 4px', zIndex: 1, fontFamily: 'Roboto' }}>Email</label>
                <div style={{ borderRadius: '4px', border: '2px solid #1976d2', padding: '12.5px 14px', backgroundColor: 'transparent' }}>
                  <span style={{ color: '#fff', fontSize: '16px', fontFamily: 'Roboto' }}>user@test.com</span>
                </div>
              </div>
            }
            ourMock={
              <div className="w-full max-w-[200px] space-y-1">
                <label className="text-label text-primary">Email</label>
                <div className="border border-primary/20 radius-md px-4 py-2 bg-background shadow-sm text-sm text-foreground">user@test.com</div>
              </div>
            }
            muiCode={`<TextField label="Email" variant="outlined" />\n\n// Browser DOM:\n<div class="MuiFormControl-root">\n  <label class="MuiInputLabel-root">Email</label>\n  <div class="MuiOutlinedInput-root">\n    <input class="MuiOutlinedInput-input" />\n    <fieldset class="MuiOutlinedInput-notchedOutline">\n      <legend><span>Email</span></legend>\n    </fieldset>\n  </div>\n</div>`}
            ourCode={`<div className="space-y-1">\n  <label className="text-label text-primary">Email</label>\n  <input className="border border-primary/20 radius-md px-4 py-2 focus:ring-2" />\n</div>`}
          />

          <ComponentComparison 
            title="Switches / Toggles"
            icon={ToggleLeft}
            muiText="MUI: Absolute Positioned Spans"
            ourText="Ours: Radix Primitives / Native Buttons"
            muiMock={
              <div style={{ display: 'inline-flex', width: '58px', height: '38px', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ position: 'absolute', width: '34px', height: '14px', borderRadius: '7px', backgroundColor: 'rgba(25, 118, 210, 0.5)', zIndex: 0 }} />
                <span style={{ position: 'absolute', left: '20px', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#1976d2', boxShadow: '0 2px 1px -1px rgba(0,0,0,0.2)', zIndex: 1 }} />
              </div>
            }
            ourMock={
              <button className="w-11 h-6 radius-full bg-primary relative inline-flex items-center px-0.5 border-2 border-transparent transition-colors">
                <span className="w-4 h-4 radius-full bg-background translate-x-5 transition-transform shadow-sm" />
              </button>
            }
            muiCode={`<Switch color="primary" defaultChecked />\n\n// Browser DOM:\n<span class="MuiSwitch-root">\n  <span class="MuiSwitch-switchBase">\n    <input type="checkbox" />\n    <span class="MuiSwitch-thumb" />\n    <span class="MuiTouchRipple-root" />\n  </span>\n  <span class="MuiSwitch-track" />\n</span>`}
            ourCode={`<button role="switch" aria-checked="true"\n  className="w-11 h-6 radius-full bg-primary relative"\n>\n  <span className="w-4 h-4 radius-full bg-background translate-x-5" />\n</button>`}
          />

          <ComponentComparison 
            title="Alerts & Callouts"
            icon={AlertTriangle}
            muiText="MUI: Paper Component Overrides"
            ourText="Ours: Semantic Colors & Borders"
            muiMock={
              <div style={{ backgroundColor: 'rgb(22, 11, 11)', color: '#f44336', borderRadius: '4px', display: 'flex', padding: '6px 16px', alignItems: 'center', fontFamily: 'Roboto', width: '100%', fontSize: '14px' }}>
                <svg style={{ width: '22px', height: '22px', marginRight: '12px' }} focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                Connection failed
              </div>
            }
            ourMock={
              <div className="w-full card border-danger/30 bg-danger/5 flex items-center gap-3 p-4">
                <AlertTriangle className="w-5 h-5 text-danger" />
                <span className="text-sm font-medium text-danger">Connection failed</span>
              </div>
            }
            muiCode={`<Alert severity="error">\n  Connection failed\n</Alert>\n\n// Locks you into MUI's specific SVG icons \n// and Paper elevation models.`}
            ourCode={`<div className="card border-danger/30 bg-danger/5 p-4 flex gap-3">\n  <AlertTriangle className="w-5 h-5 text-danger" />\n  <span className="text-danger">Connection failed</span>\n</div>`}
          />

          <ComponentComparison 
            title="Glass Surfaces"
            icon={Layers}
            muiText="MUI: Sx Prop Soup"
            ourText="Ours: Single Utility Class"
            muiMock={
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', width: '100%' }}>
                <div style={{ color: '#fff', fontSize: '18px', marginBottom: '8px', fontFamily: 'Roboto' }}>Dashboard</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontFamily: 'Roboto' }}>Metrics</div>
              </div>
            }
            ourMock={
              <div className="w-full card card-glass p-6">
                <h3 className="card-title">Dashboard</h3>
                <p className="card-description">Metrics</p>
              </div>
            }
            muiCode={`<Card sx={{\n  bgcolor: 'rgba(255,255,255,0.05)',\n  backdropFilter: 'blur(10px)',\n  borderRadius: 4,\n  border: '1px solid rgba(255,255,255,0.1)'\n}}>\n  <CardContent>...</CardContent>\n</Card>`}
            ourCode={`<div className="card card-glass p-6">\n  <h3 className="card-title">Dashboard</h3>\n  <p className="card-description">Metrics</p>\n</div>`}
          />

        </div>
      </section>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Summary</h4>
        </div>
        
        <div className="system-footer-grid">
          <div className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
            <span className="system-footer-item-heading">Performance Wins</span>
            <p className="system-footer-item-text">
              By removing the nested DOM wrappers that component libraries inject, our pages render faster, use less memory, and provide much cleaner trees in React DevTools.
            </p>
          </div>
          <div className="space-y-2 p-6 radius-lg bg-black/5 dark:bg-white/5 border border-primary/5">
            <span className="system-footer-item-heading">Accessible by Default</span>
            <p className="system-footer-item-text">
              Relying on Radix primitives (via shadcn) ensures that complex components like Switches and Modals still have full ARIA support without the stylistic baggage of Material Design.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}