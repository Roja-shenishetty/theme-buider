"use client";

type Props = {
  value: {
    heading: string;
    body: string;
  };
  onChange: (val: { heading: string; body: string }) => void;
};

const fonts = [
  "Inter, sans-serif",
  "Roboto, sans-serif",
  "Poppins, sans-serif",
  "Montserrat, sans-serif",
];

export default function FontSelector({ value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-sm font-medium">Typography</label>

      {/* Heading Font */}
      <div>
        <p className="text-xs mb-1">Heading Font</p>
        <select
          value={value.heading}
          onChange={(e) =>
            onChange({ ...value, heading: e.target.value })
          }
          className="border p-2 rounded w-full"
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      {/* Body Font */}
      <div>
        <p className="text-xs mb-1">Body Font</p>
        <select
          value={value.body}
          onChange={(e) =>
            onChange({ ...value, body: e.target.value })
          }
          className="border p-2 rounded w-full"
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}