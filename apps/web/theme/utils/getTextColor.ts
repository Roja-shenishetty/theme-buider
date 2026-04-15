export function getTextColor(bg: string) {
  const c = bg.substring(1); // remove #
  const rgb = parseInt(c, 16);

  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 125 ? "#000000" : "#ffffff";
}