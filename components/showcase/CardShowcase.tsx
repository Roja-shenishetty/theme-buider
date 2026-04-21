"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PreviewTabs } from "../docs/preview-tabs"

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-5 animate-fade-up">
      <div className="space-y-1">
        <h3 className="text-base font-semibold tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </div>

      <div className="rounded-xl border bg-background p-5 shadow-sm transition-all hover:shadow-md">
        {children}
      </div>
    </section>
  )
}

export function CardShowcase() {
  return (
    <div className="max-w-5xl space-y-14">

      {/* 🔹 Header */}
      <section className="space-y-3 pb-6 border-b animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">
          Cards
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Cards group related content and actions into flexible containers.
        </p>
      </section>

      {/* 🔹 Basic */}
      <Section title="Basic Card">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground">
              Card content
            </p>
          </CardContent>

          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
      </Section>

      {/* 🔹 Avatar Cards */}
      <Section title="Avatar Cards">
        <PreviewTabs
          preview={
            <div className="flex gap-4 flex-wrap">
              {[1, 2].map((i) => (
                <Card key={i} className="w-[200px] gap-2 hover:scale-105 transition">
                  <img
                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
                    className="w-14 h-14 rounded-xl object-cover"
                  />

                  <CardHeader>
                    <CardTitle>Community {i}</CardTitle>
                    <CardDescription>Members</CardDescription>
                  </CardHeader>

                  <CardFooter className="flex items-center gap-2">
                    <img
                      src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                      className="w-5 h-5 rounded-full"
                    />
                    <span className="text-xs text-muted-foreground">
                      By User
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          }
          code={`<Card>Avatar card</Card>`}
        />
      </Section>

      {/* 🔹 Horizontal */}
      <Section title="Horizontal Card">
        <Card className="flex flex-row w-full max-w-[600px] overflow-hidden">
          <div className="w-[140px] h-[140px] shrink-0">
            <img
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col flex-1 p-4 gap-3">
            <CardHeader className="p-0">
              <CardTitle>Creator Program</CardTitle>
              <CardDescription>
                Join and build something amazing
              </CardDescription>
            </CardHeader>

            <CardFooter className="p-0 mt-auto flex justify-between">
              <span className="text-xs text-muted-foreground">
                Limited spots
              </span>
              <Button size="sm">Apply</Button>
            </CardFooter>
          </div>
        </Card>
      </Section>

      {/* 🔹 Grid */}
      <Section title="Grid Layout">
        <div className="flex gap-4 flex-wrap">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="w-[260px] hover:shadow-md transition">
              <CardHeader>
                <CardTitle>Card {i}</CardTitle>
                <CardDescription>Example</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Some content
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* 🔹 Elevated */}
      <Section title="Elevated">
        <Card className="w-[300px] shadow-lg hover:shadow-xl transition">
          <CardHeader>
            <CardTitle>Elevated Card</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground">
              Higher elevation example
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* 🔥 NEW VARIANTS */}

      {/* 🔹 Interactive Card */}
      <Section title="Interactive Card">
        <Card className="w-[280px] cursor-pointer hover:scale-105 hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Clickable Card</CardTitle>
            <CardDescription>Hover me</CardDescription>
          </CardHeader>
        </Card>
      </Section>

      {/* 🔹 Glass Card */}
      <Section title="Glass Card">
        <Card className="w-[280px] backdrop-blur bg-white/10 border border-white/20">
          <CardHeader>
            <CardTitle>Glass Effect</CardTitle>
            <CardDescription>Modern UI style</CardDescription>
          </CardHeader>
        </Card>
      </Section>

      {/* 🔹 Image Overlay Card */}
      <Section title="Image Overlay">
        <Card className="w-[300px] relative overflow-hidden text-white">
          <img
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo2.jpeg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 p-4 bg-black/40">
            <CardTitle>Overlay Card</CardTitle>
            <CardDescription className="text-white/80">
              Content over image
            </CardDescription>
          </div>
        </Card>
      </Section>

      {/* 🔹 Stats Card */}
      <Section title="Stats Card">
        <Card className="w-[240px]">
          <CardContent className="space-y-1">
            <p className="text-sm text-muted-foreground">Revenue</p>
            <p className="text-2xl font-bold">$12,340</p>
            <p className="text-xs text-green-500">+12%</p>
          </CardContent>
        </Card>
      </Section>

      {/* 🔹 Guidelines */}
      <Section title="Guidelines">
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Use cards to group related content</li>
          <li>Keep spacing consistent</li>
          <li>Avoid overcrowding</li>
          <li>Use elevation to indicate importance</li>
        </ul>
      </Section>

    </div>
  )
}