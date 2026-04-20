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

export function CardShowcase() {
  
  return (
    <div className="space-y-10">

      {/* 🔹 Basic Card */}
      <div>
        <h3 className="text-sm font-medium mb-2">Basic</h3>

        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Desc</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground">
              Card content
            </p>
          </CardContent>

          <CardFooter>
            <Button size="sm">Card Footer</Button>
          </CardFooter>
        </Card>
      </div>

      {/* 🔥 Avatar Cards */}
      <PreviewTabs
        preview={
          <div className="flex gap-4 flex-wrap">

            <Card className="w-[200px] gap-2">
              <img
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
                className="w-14 h-14 rounded-xl object-cover"
              />

              <CardHeader>
                <CardTitle>Indie Hackers</CardTitle>
                <CardDescription>148 members</CardDescription>
              </CardHeader>

              <CardFooter className="flex items-center gap-2">
                <img
                  src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-xs text-muted-foreground">
                  By Martha
                </span>
              </CardFooter>
            </Card>

            <Card className="w-[200px] gap-2">
              <img
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg"
                className="w-14 h-14 rounded-xl object-cover"
              />

              <CardHeader>
                <CardTitle>AI Builders</CardTitle>
                <CardDescription>362 members</CardDescription>
              </CardHeader>

              <CardFooter className="flex items-center gap-2">
                <img
                  src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-xs text-muted-foreground">
                  By John
                </span>
              </CardFooter>
            </Card>

          </div>
        }
        code={`<Card>Avatar card example</Card>`}
      />

      {/* 🔹 Horizontal Card */}
      <div>
        <h3 className="text-sm font-medium mb-2">Horizontal</h3>

        <Card className="flex flex-row w-full max-w-[600px] overflow-hidden">

          {/* Image */}
          <div className="w-[140px] h-[140px] shrink-0">
            <img
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-4 gap-3 relative">

            <CardHeader className="p-0">
              <CardTitle>Become an ACME Creator!</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>

            <CardFooter className="p-0 mt-auto flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Only 10 spots</p>
                <p className="text-xs text-muted-foreground">
                  Submission ends Oct 10
                </p>
              </div>

              <Button size="sm">Apply</Button>
            </CardFooter>

          </div>
        </Card>
      </div>

      {/* 🔹 Grid */}
      <div>
        <h3 className="text-sm font-medium mb-2">Grid</h3>

        <div className="flex gap-4 flex-wrap">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="w-[260px]">
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
      </div>

      {/* 🔹 Elevated */}
      <div>
        <h3 className="text-sm font-medium mb-2">Elevated</h3>

        <Card className="card-elevated w-[300px]">
          <CardHeader>
            <CardTitle>Elevated Card</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground">
              Higher elevation example
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 🔥 Advanced Layout Cards (Converted from HeroUI) */}
<div>
  <h3 className="text-sm font-medium mb-4">Advanced Layout</h3>

  <div className="grid grid-cols-12 gap-4 max-w-5xl">

    {/* 🔹 Row 1 - Horizontal Banner */}
    <Card className="col-span-12 flex flex-col sm:flex-row overflow-hidden">

      <div className="w-full sm:w-[120px] h-[120px] overflow-hidden">
        <img
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 p-4 gap-3">

        <CardHeader className="p-0">
          <CardTitle>Become an ACME Creator!</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-0 mt-auto flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">Only 10 spots</p>
            <p className="text-xs text-muted-foreground">
              Submission ends Oct 10
            </p>
          </div>

          <Button size="sm">Apply Now</Button>
        </CardFooter>

      </div>
    </Card>

    {/* 🔹 Row 2 LEFT */}
    <div className="col-span-12 lg:col-span-6 grid gap-4">

      {/* Notification Card */}
      <Card>
        <CardHeader className="flex gap-3 items-start">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            💰
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase">
              Payment
            </p>
            <CardTitle className="text-sm">
              Withdraw via crypto
            </CardTitle>
            <CardDescription className="text-xs">
              Add your wallet in settings
            </CardDescription>
          </div>
        </CardHeader>

        <CardFooter>
          <a className="text-sm underline cursor-pointer">
            Go to settings →
          </a>
        </CardFooter>
      </Card>

      {/* Small Cards Grid */}
      <div className="grid grid-cols-2 gap-4">

        <Card>
          <CardHeader>
            <img
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
              className="w-14 h-14 rounded-xl object-cover"
            />
          </CardHeader>

          <CardContent>
            <p className="text-sm font-medium">Indie Hackers</p>
            <p className="text-xs text-muted-foreground">
              148 members
            </p>
          </CardContent>

          <CardFooter className="flex items-center gap-2">
            <img
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
              className="w-4 h-4 rounded-full"
            />
            <p className="text-xs text-muted-foreground">
              By John
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg"
              className="w-14 h-14 rounded-xl object-cover"
            />
          </CardHeader>

          <CardContent>
            <p className="text-sm font-medium">AI Builders</p>
            <p className="text-xs text-muted-foreground">
              362 members
            </p>
          </CardContent>

          <CardFooter className="flex items-center gap-2">
            <img
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
              className="w-4 h-4 rounded-full"
            />
            <p className="text-xs text-muted-foreground">
              By Martha
            </p>
          </CardFooter>
        </Card>

      </div>
    </div>

    {/* 🔹 Row 2 RIGHT (Image Card) */}
    <Card className="col-span-12 lg:col-span-6 relative overflow-hidden">

      <img
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo2.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 p-4 text-black">
        <CardTitle className="text-sm">NEO</CardTitle>
        <CardDescription>Home Robot</CardDescription>
      </div>

      <CardFooter className="relative z-10 mt-auto flex justify-between items-center p-4">
        <div>
          <p className="text-sm font-medium">Available soon</p>
          <p className="text-xs text-muted-foreground">
            Get notified
          </p>
        </div>

        <Button size="sm">Notify</Button>
      </CardFooter>

    </Card>

    {/* 🔹 Row 3 */}
    <div className="col-span-12 grid grid-cols-12 gap-4">

      {/* Large Image Card */}
      <Card className="col-span-12 md:col-span-8 relative overflow-hidden">

        <img
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo1.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <CardFooter className="relative z-10 mt-auto flex justify-between p-4">
          <div>
            <p className="font-medium">NEO</p>
            <p className="text-xs">$499/m</p>
          </div>

          <Button size="sm">Get Now</Button>
        </CardFooter>

      </Card>

      {/* Side List Cards */}
      <div className="col-span-12 md:col-span-4 flex flex-col gap-2">

        {["robot1.jpeg", "avocado.jpeg", "oranges.jpeg"].map((img, i) => (
          <Card key={i} className="flex flex-row items-center gap-3 p-2">

            <img
              src={`https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/${img}`}
              className="w-16 h-16 rounded-xl object-cover"
            />

            <div>
              <p className="text-sm font-medium">
                Event {i + 1}
              </p>
              <p className="text-xs text-muted-foreground">
                Today
              </p>
            </div>

          </Card>
        ))}

      </div>

    </div>

  </div>
</div>

    </div>
  )
}