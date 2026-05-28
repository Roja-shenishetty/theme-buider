"use client"

import { Typography } from "@/components/ui/typography"
import { ComponentWrapper } from "./../system/ComponentWrapper"
import { Surface } from "@/components/ui/surface"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { TerminalSquare, Server, AlertCircle, CheckCircle2, ShieldAlert } from "lucide-react"

/* 🔹 TECHNICAL SOURCE CODE STRINGS */
const codeBasic = `<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
      control={form.control}
      name="nodeId"
      render={({ field }) => (
        <FormItem className="space-y-1.5">
          <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
            Node Identifier
          </FormLabel>
          <FormControl>
            <Input placeholder="core-alpha-01" className="h-9 radius-md text-sm bg-background border-primary/10" {...field} />
          </FormControl>
          <FormMessage className="text-[10px] text-danger" />
        </FormItem>
      )}
    />
    <Button type="submit" className="radius-md w-full">Deploy Node</Button>
  </form>
</Form>`;

const codeTuning = `<Surface variant="sunken" padding="lg" radius="md" className="space-y-6">
  <div className="space-y-1.5">
    <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Clock Speed (GHz)</Label>
    <div className="flex gap-2">
      <Input type="number" defaultValue={3.2} className="h-9 font-mono radius-md bg-background border-primary/10" />
      <Button variant="outline" className="h-9 radius-md border-primary/20">Apply</Button>
    </div>
  </div>

  <div className="space-y-1.5">
    <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Override Protocol</Label>
    <Textarea 
      placeholder="Enter sequence..." 
      className="min-h-[80px] radius-md font-mono text-xs bg-background border-primary/10 resize-none custom-scrollbar" 
    />
  </div>
</Surface>`;

const codeValidation = `<div className="space-y-4">
  {/* Error State */}
  <div className="space-y-1.5">
    <Label className="text-[10px] font-bold uppercase tracking-widest text-danger">Auth Token (Invalid)</Label>
    <div className="relative">
      <Input defaultValue="sk_test_892..." className="h-9 radius-md border-danger/50 focus-visible:ring-danger/30 pr-10 text-danger" />
      <AlertCircle className="w-4 h-4 text-danger absolute right-3 top-2.5" />
    </div>
    <p className="text-[10px] text-danger font-mono">ERR_401: Token expired at 08:00 UTC</p>
  </div>

  {/* Success State */}
  <div className="space-y-1.5">
    <Label className="text-[10px] font-bold uppercase tracking-widest text-success">Auth Token (Verified)</Label>
    <div className="relative">
      <Input defaultValue="sk_live_104..." className="h-9 radius-md border-success/50 focus-visible:ring-success/30 pr-10 text-success" />
      <CheckCircle2 className="w-4 h-4 text-success absolute right-3 top-2.5" />
    </div>
  </div>
</div>`;

/* 🔹 High-Density Section Wrapper */
function Section({ title, description, children }: any) {
  return (
    <section className="space-section animate-fade-up relative">
      <div className="absolute -top-3 right-0 text-[60px] font-black opacity-[0.02] pointer-events-none select-none">
        {title[0]}
      </div>
      
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

      <div className="relative radius-lg border border-primary/5 bg-background/50 backdrop-blur-sm p-4 hover:border-primary/20 transition-all duration-300">
        {children}
      </div>
    </section>
  )
}

export function FormShowcase() {
  return (
    <div className="page-container space-page">
      
      {/* 🔹 Header */}
      <header className="pb-10 border-b border-primary/10 mb-8 animate-fade-up">
         <div className="inline-flex items-center gap-2 px-3 py-1 radius-full bg-primary/10 text-primary mb-6">
          <TerminalSquare className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Data Entry & Mutation</span>
        </div>
        
        <Typography variant="h1" className="text-h3 font-bold mb-4 tracking-tight">
          Forms & Inputs
        </Typography>
        
        <div className="max-w-2xl bg-muted/30 p-4 radius-md border-l-4 border-primary">
           <Typography variant="body" className="text-sm opacity-70 leading-relaxed font-medium">
             High-density input architectures for configuring nodes, tuning system parameters, and executing authenticated commands.
           </Typography>
        </div>
      </header>

      {/* 🔹 Showcase Grids */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 1. Base Configuration Form */}
        <Section title="Initialization Form" description="Standard component instantiation">
          <ComponentWrapper title="Form // Node_Deploy" code={codeBasic}>
            <div className="p-4 w-full max-w-sm mx-auto">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                    Node Identifier
                  </Label>
                  <Input placeholder="e.g., core-alpha-01" className="h-9 radius-md text-sm bg-background border-primary/10 focus-visible:border-primary/30" />
                </div>
                
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                    Target Environment
                  </Label>
                  <select className="flex h-9 w-full radius-md border border-primary/10 bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 appearance-none">
                    <option>Production (Encrypted)</option>
                    <option>Staging (Sandbox)</option>
                  </select>
                </div>

                <Button className="w-full radius-md h-9 mt-2">
                  <Server className="w-4 h-4 mr-2" /> Deploy Node
                </Button>
              </div>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 2. Parameter Tuning (High Density) */}
        <Section title="Parameter Tuning" description="Nested inputs within sunken surfaces">
          <ComponentWrapper title="Form // Parameter_Tuning" code={codeTuning}>
            <div className="p-4 w-full">
              <Surface variant="sunken" padding="lg" radius="md" className="space-y-6">
                
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Base Clock Speed (GHz)</Label>
                  <div className="flex gap-2">
                    <Input type="number" defaultValue={3.2} className="h-9 font-mono radius-md bg-background border-primary/10 w-full" />
                    <Button variant="outline" className="h-9 radius-md border-primary/20 shrink-0">Apply</Button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Override Sequence</Label>
                  <Textarea 
                    placeholder="Enter bash execution script..." 
                    className="min-h-[80px] radius-md font-mono text-xs bg-background border-primary/10 resize-none custom-scrollbar focus-visible:border-primary/30" 
                  />
                </div>

              </Surface>
            </div>
          </ComponentWrapper>
        </Section>

        {/* 3. Validation States */}
        <Section title="Validation States" description="Explicit color mapping for success/danger">
          <ComponentWrapper title="Form // State_Feedback" code={codeValidation}>
            <div className="p-4 w-full max-w-sm mx-auto space-y-6">
              
              {/* Error State */}
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-danger">Auth Token (Invalid)</Label>
                <div className="relative">
                  <Input defaultValue="sk_test_892h4nf92n..." className="h-9 radius-md border-danger/50 focus-visible:ring-1 focus-visible:ring-danger/30 pr-10 text-danger" />
                  <AlertCircle className="w-4 h-4 text-danger absolute right-3 top-2.5" />
                </div>
                <p className="text-[10px] text-danger font-mono">ERR_401: Token expired at 08:00 UTC</p>
              </div>

              {/* Success State */}
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-success">Auth Token (Verified)</Label>
                <div className="relative">
                  <Input defaultValue="sk_live_104h8x02m..." className="h-9 radius-md border-success/50 focus-visible:ring-1 focus-visible:ring-success/30 pr-10 text-success" />
                  <CheckCircle2 className="w-4 h-4 text-success absolute right-3 top-2.5" />
                </div>
                <p className="text-[10px] text-success font-mono">Connection established securely.</p>
              </div>

            </div>
          </ComponentWrapper>
        </Section>

      </div>

      {/* 🔹 SYSTEM FOOTER */}
      <footer className="system-footer mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
             <ShieldAlert className="w-4 h-4 text-primary" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Form Guardrails</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-wide">
          {[
            { title: "Typography", heading: "Label Density", desc: "Use text-[10px] font-bold uppercase for Labels to create strict visual separation between the descriptor and the actual user input." },
            { title: "Validation", heading: "Inline Messaging", desc: "Never rely on a Toast notification for a form error. Always place the error message directly below the offending input field." },
            { title: "Nesting", heading: "Sunken Fields", desc: "If forms require deep technical tuning (like JSON injection or scripting), group them inside a 'Sunken' Surface to separate them from standard inputs." }
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