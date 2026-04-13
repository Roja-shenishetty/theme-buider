"use client";

import { Home, Folder, Settings, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside
      className={cn(
        "sidebar h-screen border-r border-border bg-card/70 backdrop-blur-xl p-4 flex flex-col justify-between transition-all duration-300",
        collapsed ? "w-[80px]" : "w-[260px]"
      )}
    >
      <div>
        {/* Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mb-6 p-2 rounded-md hover:bg-mutedBg"
        >
          <Menu size={18} />
        </button>

        {/* Logo */}
        {!collapsed && (
          <h2 className="text-xl font-bold gradient-text mb-6">MyApp</h2>
        )}

        {/* Nav */}
        <nav className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActive(item.id)}
                className={cn(
                  "nav-item flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all",
                  isActive && "nav-active"
                )}
              >
                <Icon size={18} />
                {!collapsed && <span>{item.label}</span>}
              </div>
            );
          })}
        </nav>
      </div>

      {!collapsed && (
        <div className="text-xs text-muted">Theme System v2 🚀</div>
      )}
    </aside>
  );
}