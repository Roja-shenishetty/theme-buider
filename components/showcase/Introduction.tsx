"use client"

import {
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function Introduction() {
  return (
    <div className="intro">

      {/* 🔥 HERO */}
      <section className="intro-hero grid gap-10 xl:grid-cols-[1fr_1.2fr] xl:items-center">
        
        <div className="intro-hero-image h-[260px] sm:h-[300px] md:h-[320px] xl:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="UI preview"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="intro-hero-text flex flex-col gap-4 text-center xl:text-left items-center xl:items-start">
          <h1 className="intro-title">
            Build better interfaces <span>faster</span>
          </h1>

          <p className="intro-subtitle">
            A modern UI system built for speed, clarity, and scalability.
            Design once. Reuse everywhere. Ship with confidence.
          </p>

          <div className="intro-actions flex gap-3 mt-2 justify-center xl:justify-start">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Explore Components</button>
          </div>
        </div>

      </section>

      {/* 🔥 INFO SECTION */}
      <section className="intro-info grid gap-10 xl:grid-cols-2 xl:items-center">
        
        <div className="intro-info-text flex flex-col gap-3 text-center xl:text-left items-center xl:items-start">
          <h2>Designed for developers</h2>

          <p>
            Everything is built with real-world use in mind. Clean structure,
            scalable architecture, and a consistent design language.
          </p>

          <ul className="intro-list mt-3 flex flex-col gap-2 text-left">
            <li>✔ Consistent spacing & typography</li>
            <li>✔ Theme-based color system</li>
            <li>✔ Fully responsive layouts</li>
            <li>✔ Easy customization</li>
          </ul>
        </div>

        <div className="intro-info-image h-[240px] sm:h-[260px] md:h-[280px] xl:h-[320px]">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="code"
            className="w-full h-full object-cover"
          />
        </div>

      </section>

      {/* 🔥 FEATURES */}
      <section className="intro-section flex flex-col gap-6">
        <h2 className="intro-section-title text-center xl:text-left">
          Core Features
        </h2>

        <div className="intro-grid-3 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          
          <Card variant="top-accent" interactive className="feature-card">
            <div className="feature-icon simple-purple" />
            <CardTitle>Simple Components</CardTitle>
            <CardDescription>
              Clean building blocks designed for clarity, speed, and usability.
            </CardDescription>
          </Card>

          <Card variant="top-accent" interactive className="feature-card">
            <div className="feature-icon simple-blue" />
            <CardTitle>Reusable System</CardTitle>
            <CardDescription>
              Build once and scale effortlessly across multiple applications.
            </CardDescription>
          </Card>

          <Card variant="top-accent" interactive className="feature-card">
            <div className="feature-icon simple-orange" />
            <CardTitle>Flexible Layouts</CardTitle>
            <CardDescription>
              Fully responsive layouts that adapt beautifully to any screen.
            </CardDescription>
          </Card>

        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="intro-cta text-center p-6 sm:p-8 xl:p-10 flex flex-col gap-3">
        <h2>Start building something great today</h2>
        <p>No setup. No complexity. Just clean UI.</p>
        <button className="btn-primary mx-auto">Start Now</button>
      </section>

    </div>
  )
}