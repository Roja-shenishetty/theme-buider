"use client"

import React, { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { InputOTP } from "@/components/ui/inputOtp"
import { Smartphone, ShieldCheck, KeyRound, ArrowRight, Loader2 } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeStandard = `<div className="space-y-2 flex flex-col items-center">
  <label className="text-sm font-semibold">Enter verification code</label>
  <InputOTP maxLength={6} grouped={false} />
  <p className="text-xs text-muted-foreground mt-2">
    Check your SMS messages.
  </p>
</div>`;

const codeGrouped = `<div className="space-y-4 flex flex-col items-center">
  <div className="text-center space-y-1">
    <label className="text-sm font-semibold">Authenticator App</label>
    <p className="text-xs text-muted-foreground">Enter the 6-digit code from your app</p>
  </div>
  
  <InputOTP maxLength={6} grouped={true} />
  
  <button className="text-xs font-semibold text-primary hover:underline">
    Use a recovery code instead
  </button>
</div>`;

const codeValidation = `const [val, setVal] = useState("")
const isComplete = val.length === 4

<div className="space-y-4 flex flex-col items-center p-6 bg-muted/10 radius-lg border">
  <ShieldCheck className="w-8 h-8 text-primary opacity-80" />
  <div className="text-center">
    <h4 className="font-semibold">Security Pin</h4>
    <p className="text-xs text-muted-foreground">Enter your 4-digit PIN</p>
  </div>
  
  <InputOTP maxLength={4} value={val} onChange={setVal} />
  
  <button 
    disabled={!isComplete}
    className="w-full max-w-[180px] h-9 mt-2 text-xs font-semibold bg-primary text-primary-foreground radius-md disabled:opacity-50 transition-all flex items-center justify-center gap-2"
  >
    Verify Identity <ArrowRight className="w-3 h-3" />
  </button>
</div>`;

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

export function InputOtpShowcase() {
  const [pin, setPin] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Simulated auto-submit
  React.useEffect(() => {
    if (pin.length === 4) {
      setIsVerifying(true);
      const timer = setTimeout(() => setIsVerifying(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [pin]);

  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <KeyRound className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Authentication Tokens</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          One-Time Password (OTP)
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-80 leading-relaxed font-medium">
             Accessible, segment-based input fields designed specifically for security PINs, SMS verification codes, and Two-Factor Authentication (2FA). Fully supports clipboard pasting and keyboard navigation.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Standard Contiguous */}
        <Section title="Standard Block" description="Contiguous 6-digit input">
          <ComponentWrapper title="InputOTP // Default" code={codeStandard}>
            <div className="w-full flex flex-col justify-center items-center py-12">
              <div className="space-y-3 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="w-4 h-4 text-muted-foreground" />
                  <label className="text-sm font-semibold">Enter verification code</label>
                </div>
                <InputOTP maxLength={6} grouped={false} />
                <p className="text-xs text-muted-foreground mt-2">
                  We sent a code to +1 (555) 000-0000
                </p>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Grouped (Visual Separation) */}
        <Section title="Grouped Format" description="Split view for readability (3-3)">
          <ComponentWrapper title="InputOTP // Grouped" code={codeGrouped}>
            <div className="w-full flex justify-center py-12">
               <div className="space-y-5 flex flex-col items-center max-w-sm">
                <div className="text-center space-y-1">
                  <label className="text-sm font-semibold">Authenticator App</label>
                  <p className="text-xs text-muted-foreground">Enter the 6-digit code generated by your authentication app.</p>
                </div>
                
                <InputOTP maxLength={6} grouped={true} />
                
                <button className="text-xs font-semibold text-primary hover:underline underline-offset-4 transition-all">
                  Use a recovery code instead
                </button>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Auto-Submit & State */}
        <Section title="State & Auto-Submit" description="Triggering actions on completion">
          <ComponentWrapper title="InputOTP // Validation" code={codeValidation}>
            <div className="w-full flex justify-center py-8">
              <div className="space-y-5 flex flex-col items-center p-8 bg-black/5 dark:bg-white/5 radius-lg border border-primary/10 shadow-inner w-full max-w-sm relative overflow-hidden">
                
                {/* Decorative background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />

                <ShieldCheck className="w-8 h-8 text-primary relative z-10" />
                
                <div className="text-center relative z-10">
                  <h4 className="font-semibold">Security Pin</h4>
                  <p className="text-xs text-muted-foreground">Enter your 4-digit master PIN</p>
                </div>
                
                <div className="relative z-10">
                  <InputOTP maxLength={4} value={pin} onChange={setPin} disabled={isVerifying} />
                </div>
                
                <button 
                  disabled={pin.length < 4 || isVerifying}
                  className="w-full max-w-[180px] h-9 mt-2 text-xs font-semibold bg-primary text-primary-foreground radius-md disabled:opacity-50 transition-all flex items-center justify-center gap-2 relative z-10 hover:brightness-110 active:scale-95"
                >
                  {isVerifying ? (
                    <><Loader2 className="w-3 h-3 animate-spin" /> Verifying...</>
                  ) : (
                    <>Unlock Vault <ArrowRight className="w-3 h-3" /></>
                  )}
                </button>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <KeyRound className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">OTP Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "UX / Interaction", heading: "Paste Support", desc: "Users hate typing 6 digits manually. This component intercepts the native onPaste event, strips whitespace, and automatically distributes the string across all available slots." },
            { title: "Formatting", heading: "Visual Grouping", desc: "For 6-digit codes (like Google Authenticator), utilize the grouped={true} prop. Splitting numbers into chunks of 3 reduces cognitive load and reading errors." },
            { title: "Mobile Keyboards", heading: "Input Modes", desc: "The component forces inputMode='numeric' and autoComplete='one-time-code'. This ensures mobile browsers display the large numeric keypad and suggest codes directly from SMS." }
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