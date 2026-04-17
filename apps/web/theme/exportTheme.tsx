// theme/exportTheme.ts
export function exportTheme(theme: any) {
  // JSON
  const json = JSON.stringify(theme, null, 2);

  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "theme.json";
  a.click();
}