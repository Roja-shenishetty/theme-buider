"use client";

import { useEffect } from "react";
import { initTheme } from "@/theme/initTheme";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initTheme();
  }, []);

  return <>{children}</>;
}