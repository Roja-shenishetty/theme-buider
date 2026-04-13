"use client";

import { Bell, Sun, Moon, User } from "lucide-react";
import { useState, useEffect } from "react";
import { toggleDarkMode, isDarkMode } from "@/theme/useTheme";
import { setTheme } from "@/theme/setTheme";

export function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDark(isDarkMode());
  }, []);

  return (
    <div className="header flex items-center justify-between mb-6 text-foreground">

      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">

        {/* Theme Switch */}
        <select
          onChange={(e) => setTheme(e.target.value)}
          className="input px-3 py-2"
        >
          <option value="theme-dashboard">Dashboard</option>
          <option value="theme-minimal">Minimal</option>
          <option value="theme-glass">Glass</option>
        </select>

        {/* Notifications */}
        <button className="relative p-2 rounded-md hover:bg-mutedBg">
          <Bell size={18} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Dark Mode */}
        <button
          onClick={() => {
            toggleDarkMode();
            setDark(!dark);
          }}
          className="p-2 rounded-md hover:bg-mutedBg"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Profile */}
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