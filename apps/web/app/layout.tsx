import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/themes/dashboard/tokens.css";
import "@/styles/themes/dashboard/components.css";
import "@/styles/themes/dashboard/typography.css"

import "@/styles/themes/minimal/tokens.css";
import "@/styles/themes/minimal/components.css";
import "@/styles/themes/minimal/typography.css";

import "@/styles/themes/glass/tokens.css";
import "@/styles/themes/glass/components.css";
import "@/styles/themes/glass/typography.css";

import "@/styles/modes/dark.css";

import { ThemeProvider } from "@/components/ThemeProvider";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const root = document.documentElement;

                const theme = localStorage.getItem("themeName");
                const dark = localStorage.getItem("dark");

                if (theme) root.classList.add(theme);
                else root.classList.add("theme-dashboard");

                if (dark === "true") root.classList.add("dark");
              })();
            `,
          }}
        />

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}