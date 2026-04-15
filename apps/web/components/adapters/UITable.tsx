"use client";

import { useEffect, useState } from "react";

type Props = {
  columns: string[];
  data: any[];
};

export function UITable({ columns, data }: Props) {
  const [framework, setFramework] = useState("tailwind");

  useEffect(() => {
    const fw =
      document.documentElement.getAttribute("data-ui") || "tailwind";
        console.log("Rendering UITable with:", fw); // 👈 ADD THIS
    setFramework(fw);
  }, []);

  // 🟦 MUI
  if (framework === "mui") {
    const {
      Table,
      TableHead,
      TableRow,
      TableCell,
      TableBody,
    } = require("@mui/material");

    return (
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              {columns.map((col) => (
                <TableCell key={col}>{row[col]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  // 🟩 Tailwind + shadcn fallback
  return (
    <table className="w-full border border-border">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="p-2 border-b text-left">
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col} className="p-2 border-b">
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}