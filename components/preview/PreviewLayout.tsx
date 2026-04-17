import PreviewContent from "./PreviewContent"

export default function PreviewLayout({ type }: { type: "mobile" | "desktop" }) {

  return (
    <div className="w-full max-w-[1100px] h-[650px] mx-auto rounded-xl overflow-hidden border shadow-xl bg-background">

      {/* Header */}
      <div className="bg-primary text-primary-foreground px-[var(--spacing)] py-[calc(var(--spacing)/1.5)] font-semibold">
        My App (Desktop)
      </div>

      {/* Content */}
      <div className="p-[var(--spacing)] text-[var(--font-size)] leading-[var(--line-height)]">
        <PreviewContent />
      </div>

    </div>
  )
}