"use client"

export default function Tabs({
  active,
  setActive,
}: {
  active: string
  setActive: (val: string) => void
}) {
  const tabs = ["colors", "typography", "spacing", "layout"]

  return (
    <div className="flex gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-3 py-1 rounded-md text-sm capitalize transition
            ${
              active === tab
                ? "bg-white text-black"
                : "bg-neutral-700 text-white hover:bg-neutral-600"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}