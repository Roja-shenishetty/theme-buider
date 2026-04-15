"use client";

import { getFramework } from "@/theme/framework";

export function UIInput(props: any) {
  const framework = getFramework();

  // 🟦 MUI
  if (framework === "mui") {
    const { TextField } = require("@mui/material");
    return <TextField fullWidth variant="outlined" {...props} />;
  }

  // 🟪 SHADCN
  if (framework === "shadcn") {
    const { Input } = require("@/components/ui/input");
    return <Input {...props} />;
  }

  // 🟩 TAILWIND
  return (
    <input
      className="w-full px-3 py-2 border border-border bg-input rounded-md"
      {...props}
    />
  );
}