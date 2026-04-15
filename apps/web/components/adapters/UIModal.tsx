"use client";

import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function UIModal({ open, onClose, children }: Props) {
  const [framework, setFramework] = useState("tailwind");

  useEffect(() => {
    const fw =
      document.documentElement.getAttribute("data-ui") || "tailwind";
      console.log("Rendering UIModal with:", fw); // 👈 ADD THIS
    setFramework(fw);
  }, []);

  if (!open) return null;

  // 🟦 MUI
  if (framework === "mui") {
    const { Dialog, DialogContent } = require("@mui/material");

    return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    );
  }

  // 🟪 SHADCN (SAFE CHECK)
  if (framework === "shadcn") {
    try {
      const {
        Dialog,
        DialogContent,
      } = require("@/components/ui/dialog");

      return (
        <Dialog open={open} onOpenChange={onClose}>
          <DialogContent>{children}</DialogContent>
        </Dialog>
      );
    } catch (e) {
      console.warn("shadcn dialog not installed → fallback");
    }
  }

  // 🟩 TAILWIND FALLBACK (ALWAYS WORKS)
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card p-6 rounded-lg shadow-lg w-[400px]">
        {children}
        <button
          onClick={onClose}
          className="mt-4 text-sm text-primary"
        >
          Close
        </button>
      </div>
    </div>
  );
}