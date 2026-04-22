"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Introduction() {
  return (
    <div className="space-y-16">

      {/* 🔥 HERO */}
      <section className="grid md:grid-cols-2 gap-8 items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            Build modern UI systems faster
          </h1>

          <p className="text-muted-foreground text-base md:text-lg">
            Create scalable, consistent, and beautiful interfaces with a flexible design system.
          </p>

          <div className="flex gap-3">
            <Button>Get Started</Button>
            <Button variant="secondary">Explore</Button>
          </div>
        </motion.div>

        {/* 🖼 IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border"
        >
          <Image
            src="/images/ui-preview.jpg"
            alt="UI preview"
            width={800}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>

      </section>

      {/* 🔥 FEATURES */}
      <section className="grid md:grid-cols-3 gap-4">

        {[
          {
            title: "🎨 Theme Engine",
            desc: "Control colors, typography, and spacing globally.",
          },
          {
            title: "⚡ Live Preview",
            desc: "See instant updates across all components.",
          },
          {
            title: "🧩 Modular System",
            desc: "Reusable components for scalable apps.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-4 space-y-2">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}

      </section>

      {/* 🔥 SHOWCASE IMAGE */}
      <section className="space-y-4">

        <h2 className="text-xl font-semibold">Design in action</h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="rounded-2xl overflow-hidden border"
        >
          <Image
            src="/images/dashboard.jpg"
            alt="Dashboard"
            width={1200}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>

      </section>

      {/* 🔥 HOW IT WORKS */}
      <section className="grid md:grid-cols-3 gap-4">

        {[
          "Select components",
          "Customize theme",
          "Build your UI",
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card>
              <CardContent className="p-4 space-y-2">
                <h4 className="font-medium">Step {i + 1}</h4>
                <p className="text-sm text-muted-foreground">
                  {step}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}

      </section>

      {/* 🔥 CTA */}
      <section className="text-center space-y-4">

        <h2 className="text-2xl font-semibold">
          Start building your design system today
        </h2>

        <p className="text-muted-foreground">
          Create consistent UI faster with powerful customization tools.
        </p>

        <Button size="lg">Get Started</Button>

      </section>

    </div>
  )
}