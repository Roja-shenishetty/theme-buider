"use client";

import { Bell, Sun, Moon, User } from "lucide-react";
import { useState, useEffect } from "react";
import { toggleDarkMode } from "@/theme/useTheme";
import { setTheme } from "@/theme/setTheme";
import { setStyle, type UIStyle } from "@/theme/style";

export function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [framework, setFrameworkState] = useState("tailwind");

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    setDark(mode === "dark");
  }, []);

  const handleToggle = () => {
    toggleDarkMode();
    const mode = localStorage.getItem("mode");
    setDark(mode === "dark");
  };

useEffect(() => {
  const fw =
    document.documentElement.getAttribute("data-ui") || "tailwind";
  setFrameworkState(fw);
}, []);

  return (
    <div className="header flex items-center justify-between mb-6">

      {/* LEFT */}
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* 🔍 SEARCH */}
        <input
          placeholder="Search..."
          className="input px-3 py-2"
        />
        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
  {framework.toUpperCase()}
</span>
        {/* 🎨 STYLE */}
        <select
          onChange={(e) =>
            setStyle(e.target.value as UIStyle)
          }
          className="input px-3 py-2"
        >
          <option value="dashboard">Dashboard</option>
          <option value="minimal">Minimal</option>
          <option value="glass">Glass</option>
        </select>

        {/* 🎯 THEME */}
        <select
          onChange={(e) => setTheme(e.target.value)}
          className="input px-3 py-2"
        >
          <option value="theme-dashboard">Theme 1</option>
          <option value="theme-minimal">Theme 2</option>
          <option value="theme-glass">Theme 3</option>
        </select>

        {/* 🔔 NOTIFICATIONS */}
        <button className="relative p-2 rounded-md hover:bg-mutedBg">
          <Bell size={18} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* 🌙 DARK MODE */}
        <button
          onClick={handleToggle}
          className="p-2 rounded-md hover:bg-mutedBg"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* 👤 PROFILE */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full border border-border"
          >
            <User size={18} />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 card p-3 space-y-2">
              <div className="cursor-pointer hover:text-primary">Profile</div>
              <div className="cursor-pointer hover:text-primary">Settings</div>
              <div className="cursor-pointer text-red-500">Logout</div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}