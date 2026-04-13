// components/modules/DashboardStats.tsx
import { Card } from "@/components/ui/card";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card>
        <p className="text-sm text-muted">Revenue</p>
        <h3 className="text-xl font-semibold mt-2">$12,450</h3>
      </Card>

      <Card>
        <p className="text-sm text-muted">Users</p>
        <h3 className="text-xl font-semibold mt-2">1,240</h3>
      </Card>

      <Card>
        <p className="text-sm text-muted">Growth</p>
        <h3 className="text-xl font-semibold mt-2 text-primary">
          +18%
        </h3>
      </Card>
    </div>
  );
}