"use client"

import { useState } from "react"

export function PreviewTabs({
  preview,
  code,
}: {
  preview: React.ReactNode
  code: string
}) {
  const [tab, setTab] = useState<"preview" | "code">("preview")

  return (
    <div className="border rounded-lg">

      {/* Tabs */}
      <div className="flex border-b">
        <button onClick={() => setTab("preview")} className="px-4 py-2 text-sm">
          Preview
        </button>
        <button onClick={() => setTab("code")} className="px-4 py-2 text-sm">
          Code
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {tab === "preview" ? (
          preview
        ) : (
          <pre className="text-xs bg-muted p-4 rounded overflow-auto">
            {code}
          </pre>
        )}
      </div>
    </div>
  )
}