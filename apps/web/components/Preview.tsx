import { StatsCard } from "@/components/features/dashboard/StatsCard";
import { ProjectForm } from "@/components/features/dashboard/ProjectForm";

export default function Preview() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      <div className="flex justify-between items-center">
      </div>

      <div className="grid grid-cols-3 gap-6">
        <StatsCard title="Revenue" value="$12,450" />
        <StatsCard title="Users" value="1,240" />
        <StatsCard title="Growth" value="+18%" highlight />
      </div>

      <ProjectForm />
    </div>
  );
}