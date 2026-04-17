export type UIFramework = "tailwind" | "shadcn" | "mui";

// ✅ SET
export function setFramework(framework: UIFramework) {
  const root = document.documentElement;

  root.setAttribute("data-ui", framework);
  localStorage.setItem("uiFramework", framework);
}

// ✅ GET
export function getFramework(): UIFramework {
  if (typeof document === "undefined") return "tailwind";

  return (document.documentElement.getAttribute("data-ui") as UIFramework) || "tailwind";
}