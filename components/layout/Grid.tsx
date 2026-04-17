export default function Grid({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[calc(var(--spacing)*1.5)]">
      {children}
    </div>
  )
}