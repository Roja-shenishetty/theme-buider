"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { TextField } from "@/components/ui/textField"
import { Form, CheckCircle2 } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `<TextField 
  label="Full Name" 
  placeholder="Jane Doe" 
  required 
/>

<TextField 
  label="Email Address" 
  type="email"
  placeholder="jane@example.com"
  description="We will never share your email."
/>`;

const codeStates = `<TextField 
  label="Username" 
  defaultValue="admin_user"
  error="This username is already taken."
/>

<TextField 
  label="API Key" 
  type="password"
  defaultValue="sk_live_123456789"
  disabled
  description="Contact an admin to rotate your keys."
/>`;

/* 🔹 Section Wrapper */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up relative">
      <div className="flex items-center gap-3 mb-4 border-l-2 border-primary pl-4">
        <div className="space-y-0.5">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary/80">{title}</h3>
          {description && (
            <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-tighter opacity-70">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="relative radius-lg border border-primary/5 bg-background/50 backdrop-blur-sm p-6 hover:border-primary/20 transition-all duration-300">
        {children}
      </div>
    </section>
  )
}

export function TextFieldShowcase() {
  const [email, setEmail] = useState("bad-email-format");
  
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <Form className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Composite Elements</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          TextField
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             A smart wrapper around the standard Input component. It automatically wires up labels, descriptions, error states, and ARIA attributes for perfect accessibility with zero boilerplate.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Basic Layouts */}
        <Section title="Standard Layout" description="Labels, required props, and descriptions">
          <ComponentWrapper title="TextField // Standard" code={codeBasic}>
            <div className="w-full flex flex-col justify-center items-center py-8 gap-6">
              <div className="w-full max-w-sm">
                <TextField 
                  label="Full Name" 
                  placeholder="Jane Doe" 
                  required 
                />
              </div>

              <div className="w-full max-w-sm">
                <TextField 
                  label="Email Address" 
                  type="email"
                  placeholder="jane@example.com"
                  description="We will never share your email address with third parties."
                />
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Validation & Disabled States */}
        <Section title="System States" description="Error rendering and disabled fields">
          <ComponentWrapper title="TextField // States" code={codeStates}>
            <div className="w-full flex flex-col justify-center items-center py-8 gap-6">
              
              <div className="w-full max-w-sm">
                <TextField 
                  label="Username" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={email.includes("@") ? undefined : "Please enter a valid username format."}
                  description="You can change this later in your profile."
                />
              </div>

              <div className="w-full max-w-sm">
                <TextField 
                  label="API Key" 
                  type="password"
                  defaultValue="sk_live_123456789"
                  disabled
                  description="Contact a system administrator to rotate production keys."
                />
              </div>

            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <CheckCircle2 className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">TextField Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Accessibility", heading: "Auto ARIA-Linking", desc: "The component auto-generates a unique ID if one isn't provided. It uses this to perfectly link the <label> to the input, and ties the description/error text to aria-describedby." },
            { title: "Visual Hierarchy", heading: "Error Dominance", desc: "If an error string is passed, the component hides the description text to ensure the user's attention is solely on resolving the validation failure without UI clutter." },
            { title: "Composition", heading: "Extending Input", desc: "Because it extends InputProps, you can pass any native HTML input attribute (type, placeholder, onChange, onBlur) directly to the TextField and it will forward perfectly." }
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