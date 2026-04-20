export default function DocsLayout({
  sidebar,
  content,
}: {
  sidebar: React.ReactNode
  content: React.ReactNode
}) {
  return (
    <div className="flex">

      {/* Sidebar */}
      <aside className="w-64 border-r p-4">
        {sidebar}
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        {content}
      </main>

    </div>
  )
}