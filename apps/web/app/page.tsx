"use client";

// app/page.tsx
import ThemeBuilder from "@/components/ThemeBuilder";
import Preview from "@/components/Preview";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">

      {/* Sidebar */}
      <aside className="w-[320px] border-r border-border bg-white/70 backdrop-blur-xl p-6 flex flex-col justify-between">
        
        <div>
          <ThemeBuilder />
        </div>

        <p className="text-xs text-muted">
          Live design system editor
        </p>
      </aside>

      {/* Main Preview */}
      <main className="flex-1 p-10 overflow-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Preview />
        </motion.div>
      </main>

    </div>
  );
}