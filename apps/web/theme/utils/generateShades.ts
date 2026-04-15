// utils/generateShades.ts

export function generateShades(baseColor: string) {
  const shades: Record<number, string> = {};

  const lighten = (hex: string, percent: number) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);

    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x0000ff) + amt;

    return `#${(
      0x1000000 +
      (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 0 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)}`;
  };

  shades[50] = lighten(baseColor, 45);
  shades[100] = lighten(baseColor, 35);
  shades[200] = lighten(baseColor, 25);
  shades[300] = lighten(baseColor, 15);
  shades[400] = lighten(baseColor, 5);
  shades[500] = baseColor;
  shades[600] = lighten(baseColor, -5);
  shades[700] = lighten(baseColor, -10);
  shades[800] = lighten(baseColor, -15);
  shades[900] = lighten(baseColor, -20);

  return shades;
}