import PreviewContent from "./PreviewContent"

export default function PreviewLayout({
  type,
  activeComponent,
}: {
  type: "mobile" | "desktop"
  activeComponent: string // ✅ ADD THIS
}) {
  return (
    <div>
      <PreviewContent activeComponent={activeComponent} />
    </div>
  )
}