// components/ColorPicker.tsx
"use client";

type Props = {
  label: string;
  value: string;
  onChange: (val: string) => void;
};

export default function ColorPicker({ label, value, onChange }: Props) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm">{label}</span>

      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 border rounded cursor-pointer"
        />

        <span className="text-xs text-muted-foreground">{value}</span>
      </div>
    </div>
  );
}