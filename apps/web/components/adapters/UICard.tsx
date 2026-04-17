"use client";

import { getFramework } from "@/theme/framework";

export function UICard({ children }: any) {
  const framework = getFramework();

  // 🟦 MUI
  if (framework === "mui") {
    const { Card, CardContent } = require("@mui/material");

    return (
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    );
  }

  // 🟪 SHADCN
  if (framework === "shadcn") {
    const { Card, CardContent } = require("@/components/ui/card");

    return (
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    );
  }

  // 🟩 TAILWIND
  return (
    <div className="card p-4 rounded-lg border border-border">
      {children}
    </div>
  );
}