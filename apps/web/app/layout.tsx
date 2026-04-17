import type { Metadata } from "next";
import "@/styles/globals.css";

import "@/styles/themes/dashboard/components.css";
import "@/styles/themes/dashboard/typography.css";

import "@/styles/themes/minimal/components.css";
import "@/styles/themes/minimal/typography.css";

import "@/styles/themes/glass/components.css";
import "@/styles/themes/glass/typography.css";

import "@/styles/modes/dark.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script"; // ✅ FIXED

export const metadata: Metadata = {
  title: "Theme Builder",
  description: "Advanced UI Theme System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        {/* ✅ RUN BEFORE UI RENDERS */}
        <Script id="ui-init" strategy="beforeInteractive">
          {`
(function () {
  try {
    const root = document.documentElement;

    // ✅ Framework
    const fw = localStorage.getItem("uiFramework") || "tailwind";
    root.setAttribute("data-ui", fw);

    // ✅ Style preset
    const style = localStorage.getItem("uiStyle") || "dashboard";
    root.setAttribute("data-style", style);

    // ✅ Dark mode
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      root.classList.add("dark");
    }

    // ✅ Apply tokens BEFORE paint
    const tokens = localStorage.getItem("themeTokens");

    if (tokens) {
      const parsed = JSON.parse(tokens);
      const active = parsed[mode || "light"];

      if (active && active.colors) {
        Object.entries(active.colors).forEach(([key, val]) => {
          if (typeof val === "object" && val["500"]) {
            root.style.setProperty("--" + key, val["500"]);
          } else {
            root.style.setProperty("--" + key, val);
          }
        });
      }
    }

  } catch (e) {
    console.error("Theme init error:", e);
  }
})();
          `}
        </Script>

        {/* ✅ Wrap once */}
        <ThemeProvider>
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}