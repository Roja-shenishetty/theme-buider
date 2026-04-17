import PreviewContext from "./PreviewContent"

export default function MobilePreview() {
  return (
    <div className="w-[320px] h-[640px] rounded-[32px] overflow-hidden border shadow-2xl bg-background">

      <div className="bg-primary text-primary-foreground px-4 py-3 font-semibold">
        My App
      </div>

      <PreviewContext />

    </div>
  )
}