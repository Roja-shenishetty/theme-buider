import { Button } from "../ui/button"

export function ButtonShowcase() {
  return (
    <div className="space-y-8">

      {/* 🔹 Variants */}
      <div>
        <h3 className="text-sm font-medium mb-2">Variants</h3>

        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="danger-soft">Danger Soft</Button>
        </div>
      </div>

      {/* 🔹 Sizes */}
      <div>
        <h3 className="text-sm font-medium mb-2">Sizes</h3>

        <div className="flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">⚙️</Button>
        </div>
      </div>

      {/* 🔹 With Icons */}
      <div>
        <h3 className="text-sm font-medium mb-2">With Icons</h3>

        <div className="flex flex-wrap gap-3">
          <Button>🌍 Search</Button>
          <Button variant="secondary">➕ Add</Button>
          <Button variant="danger">🗑 Delete</Button>
        </div>
      </div>

      {/* 🔹 Icon Only */}
      <div>
        <h3 className="text-sm font-medium mb-2">Icon Only</h3>

        <div className="flex gap-3">
          <Button size="icon">⚙️</Button>
          <Button size="icon" variant="secondary">⋯</Button>
          <Button size="icon" variant="danger">🗑</Button>
        </div>
      </div>

      {/* 🔹 Full Width */}
      <div>
        <h3 className="text-sm font-medium mb-2">Full Width</h3>

        <div className="w-[300px] space-y-2">
          <Button fullWidth>Primary</Button>
          <Button fullWidth variant="secondary">
            ➕ With Icon
          </Button>
        </div>
      </div>

      {/* 🔹 States */}
      <div>
        <h3 className="text-sm font-medium mb-2">States</h3>

        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </div>

    </div>
  )
}