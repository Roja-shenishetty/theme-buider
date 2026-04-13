import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ProjectForm() {
  return (
    
    <Card>
      <h3 className="text-lg font-semibold">Create Project</h3>

      <Input className="bg-input text-foreground border-border" placeholder="Project name" />
      <Input className="bg-input text-foreground border-border" variant="filled" placeholder="Description" />

      <div className="flex gap-3">
        <Button>Submit</Button>
<Button variant="outline" intent="secondary">
          Cancel
        </Button>
      </div>
    </Card>
   
  );
}