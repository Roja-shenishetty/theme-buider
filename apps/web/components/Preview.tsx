import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Preview() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">
          Dashboard
        </h2>

        <Button size="lg">Create</Button>
      </div>

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

      <Card className="space-y-4">
        <h3 className="text-lg font-semibold">Create Project</h3>

        <Input placeholder="Project name" />
        <Input variant="filled" placeholder="Description" />

        <div className="flex gap-3">
          <Button>Submit</Button>
          <Button variant="outline" intent="secondary">
            Cancel
          </Button>
        </div>
      </Card>

    </div>
  );
}