"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { PaginationShowcase } from "@/components/showcase/PaginationShowcase"

export default function PaginationPage() {
  return (
    <ComponentPageLayout
      title="Pagination"
      description="Controls for traversing large arrays of data, separated into distinct architectural patterns for page-level navigation and high-density data tables."
      video="/videos/pagination-demo.mp4" 
    >
      <PaginationShowcase />
    </ComponentPageLayout>
  )
}