export function SpacingShowcase() {
  return (
    <div className="space-y-6">

      <div>
        <h3 className="text-sm font-medium mb-2">Padding</h3>
        <div className="flex gap-2">
          <div className="p-1 bg-muted">p-1</div>
          <div className="p-2 bg-muted">p-2</div>
          <div className="p-3 bg-muted">p-3</div>
          <div className="p-4 bg-muted">p-4</div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Gap</h3>
        <div className="flex gap-1">
          <div className="bg-muted p-2">1</div>
          <div className="bg-muted p-2">2</div>
          <div className="bg-muted p-2">3</div>
        </div>
      </div>

    </div>
  )
}