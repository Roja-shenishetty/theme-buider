"use client";

import { useEffect, useState } from "react";
import { getFramework } from "@/theme/framework";

export function UIButton({ children, ...props }: any) {
  const [framework, setFramework] = useState<null | string>(null);

  useEffect(() => {
    setFramework(getFramework());
  }, []);

  // 🚨 PREVENT HYDRATION MISMATCH
  if (!framework) {
    return (
      <button className="px-4 py-2 rounded bg-primary text-white">
        {children}
      </button>
    );
  }

  // 🟦 MUI
  if (framework === "mui") {
    const { Button } = require("@mui/material");

    return (
      <Button
        variant="contained"
        sx={{ backgroundColor: "var(--primary)", color: "#fff" }}
        {...props}
      >
        {children}
      </Button>
    );
  }

  // 🟪 SHADCN
  if (framework === "shadcn") {
    const { Button } = require("@/components/ui/button");

    return <Button {...props}>{children}</Button>;
  }

  // 🟩 TAILWIND
  return (
    <button
      className="px-4 py-2 rounded bg-primary text-white"
      {...props}
    >
      {children}
    </button>
  );
}