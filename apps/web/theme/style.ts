export type UIStyle = "glass" | "minimal" | "dashboard";

export function setStyle(style: UIStyle) {
  const root = document.documentElement;

  root.setAttribute("data-style", style);
  localStorage.setItem("uiStyle", style);
}

export function getStyle(): UIStyle {
  if (typeof document === "undefined") return "dashboard";

  return (
    (document.documentElement.getAttribute("data-style") as UIStyle) ||
    "dashboard"
  );
}