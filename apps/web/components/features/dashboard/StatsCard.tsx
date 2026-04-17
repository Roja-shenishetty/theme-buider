import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  value: string;
  highlight?: boolean;
  className?: string; // ✅ ADD THIS
};

export function StatsCard({ title, value, highlight }: Props) {
  return (
    <Card className="p-5">
      <p className="text-sm text-muted">{title}</p>

     <h3 className={cn(
  "text-xl font-semibold mt-2",
  highlight && "dashboard-stat-highlight"
)}>
        {value}
      </h3>
    </Card>
  );
}