export function lighten(color, percent) {
  const [h, s, l] = color.match(/\d+/g).map(Number); // Extract H, S, L values
  const newLightness = Math.min(l + l * percent, 100); // Increase lightness but not more than 100%
  return `hsl(${h}, ${s}%, ${newLightness}%)`;
}

export function darken(color, percent) {
  const [h, s, l] = color.match(/\d+/g).map(Number); // Extract H, S, L values
  const newLightness = Math.max(l - l * percent, 0); // Decrease lightness but not less than 0%
  return `hsl(${h}, ${s}%, ${newLightness}%)`;
}
