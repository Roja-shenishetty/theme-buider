"use client"

import React from "react"
import ComponentPageLayout from "@/components/layout/page/ComponentPageLayout"
import { TableShowcase } from "@/components/showcase/TableShowcase"

export default function TablePage() {
  return (
    <ComponentPageLayout
      title="Data Tables"
      description="High-density grids designed for monitoring system registries, hardware telemetry, and administrative logs."
      image="/images/table.jpg" 
    >
      
      <TableShowcase />
    </ComponentPageLayout>
  )
}