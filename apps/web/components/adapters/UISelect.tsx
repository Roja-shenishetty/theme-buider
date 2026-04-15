"use client";

import { useEffect, useState } from "react";
import { getFramework } from "@/theme/framework";

/* ✅ DEFINE TYPES */
type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
};

export function UISelect({ options, value, onChange }: Props) {
  const [framework, setFramework] = useState<string | null>(null);

  useEffect(() => {
    setFramework(getFramework());
  }, []);

  const safeValue = value ?? ""; // ✅ prevents uncontrolled error

  // 🚨 SSR SAFE FALLBACK
  if (!framework) {
    return (
      <select
        value={safeValue}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full px-3 py-2 border border-border bg-input rounded-md"
      >
        <option value="" disabled>
          Select...
        </option>

        {options.map((opt: Option) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }

  // 🟦 MUI
  if (framework === "mui") {
    const { Select, MenuItem } = require("@mui/material");

    return (
      <Select
        fullWidth
        value={safeValue}
        onChange={(e: any) => onChange?.(e.target.value)}
      >
        {options.map((opt: Option) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    );
  }

  // 🟪 SHADCN
  if (framework === "shadcn") {
    const {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectItem,
    } = require("@/components/ui/select");

    return (
      <Select value={safeValue} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select..." />
        </SelectTrigger>

        <SelectContent>
          {options.map((opt: Option) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  // 🟩 TAILWIND
  return (
    <select
      value={safeValue}
      onChange={(e) => onChange?.(e.target.value)}
      className="w-full px-3 py-2 border border-border bg-input rounded-md"
    >
      <option value="" disabled>
        Select...
      </option>

      {options.map((opt: Option) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}