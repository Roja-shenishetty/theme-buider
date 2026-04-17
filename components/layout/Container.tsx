export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-[var(--spacing)]">
      {children}
    </div>
  )
}