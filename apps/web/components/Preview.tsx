"use client";

import { StatsCard } from "@/components/features/dashboard/StatsCard";
import { ProjectForm } from "@/components/features/dashboard/ProjectForm";
import { UISelect } from "@/components/adapters/UISelect";
import { UITable } from "@/components/adapters/UITable";

export default function Preview() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">

      {/* 🔹 STATS */}
      <div className="grid grid-cols-3 gap-6">
        <StatsCard title="Revenue" value="$12,450" />
        <StatsCard title="Users" value="1,240" />
        <StatsCard title="Growth" value="+18%" highlight />
      </div>

      {/* 🔹 ACTION BAR */}
      <div className="flex justify-between items-center">

        {/* FILTER */}
        <div className="w-64">
          <UISelect
            options={[
              { label: "All Projects", value: "all" },
              { label: "Active", value: "active" },
              { label: "Completed", value: "done" },
            ]}
          />
        </div>

        {/* ADD BUTTON */}
        <ProjectForm />
      </div>

      {/* 🔹 TABLE */}
      <UITable
        columns={["name", "status", "owner"]}
        data={[
          { name: "AI App", status: "Active", owner: "Ravi" },
          { name: "Dashboard", status: "Completed", owner: "John" },
          { name: "Website", status: "Active", owner: "Alice" },
        ]}
      />
    </div>
  );
}