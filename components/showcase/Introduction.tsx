export default function Introduction() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Introduction</h1>

      <p className="text-sm text-muted-foreground">
        Welcome to your theme builder. Select components from the sidebar to preview and customize them.
      </p>

      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
        <li>Customize colors, spacing, and typography</li>
        <li>Preview components in real-time</li>
        <li>Build your own design system</li>
      </ul>
    </div>
  )
}