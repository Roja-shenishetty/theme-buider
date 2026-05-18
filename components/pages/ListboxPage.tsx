"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { ListboxShowcase } from "@/components/showcase/ListboxShowcase"

export default function ListboxPage() {
  return (
    <ComponentPageLayout
      title="Listbox"
      description="Persistent inline selection containers mapped for clear contextual views, system module switching, and high-density runtime parameters."
      video="/videos/listbox-demo.mp4" 
    >
      <ListboxShowcase />
    </ComponentPageLayout>
  )
}