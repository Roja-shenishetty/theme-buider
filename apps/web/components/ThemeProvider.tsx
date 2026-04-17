"use client";

import { useEffect, useState } from "react";
import { initTheme } from "@/theme/initTheme";
import { getFramework } from "@/theme/framework";
import { getMuiTheme } from "@/theme/muiTheme";

import { ThemeProvider as MuiProvider } from "@mui/material/styles";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [framework, setFramework] = useState("tailwind");

  useEffect(() => {
    initTheme();
    setFramework(getFramework());
  }, []);

  // 🟦 If MUI selected → wrap with MUI provider
  if (framework === "mui") {
    const tokens = JSON.parse(
      localStorage.getItem("themeTokens") || "{}"
    );

    const mode =
      localStorage.getItem("mode") === "dark" ? "dark" : "light";

    const active = tokens?.[mode] || {};

    const muiTheme = getMuiTheme(active.colors || {});

    return <MuiProvider theme={muiTheme}>{children}</MuiProvider>;
  }

  return <>{children}</>;
}