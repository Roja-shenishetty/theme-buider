"use client";

import { useState } from "react";
import { UIButton } from "@/components/adapters/UIButton";
import { UICard } from "@/components/adapters/UICard";
import { UIInput } from "@/components/adapters/UIInput";
import { UIModal } from "@/components/adapters/UIModal";

export function ProjectForm() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* OPEN BUTTON */}
      <UIButton onClick={() => setOpen(true)}>
        + Create Project
      </UIButton>

      {/* MODAL */}
      <UIModal open={open} onClose={() => setOpen(false)}>
        <UICard>
          <h3 className="text-lg font-semibold mb-4">
            Create Project
          </h3>

          <div className="space-y-4">
            <UIInput placeholder="Project name" />
            <UIInput placeholder="Description" />
          </div>

          <div className="flex gap-3 mt-6">
            <UIButton intent="primary">Submit</UIButton>
            <UIButton
              intent="secondary"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </UIButton>
          </div>
        </UICard>
      </UIModal>
    </>
  );
}