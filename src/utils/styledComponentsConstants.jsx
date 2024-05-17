import { lighten, darken } from "./colors/colorPalette";

const baseColor = "hsl(200, 70%, 60%)"; // Example: a shade of blue

// Generate shades
export const brightest = lighten(baseColor, 0.75); // 75% lighter
export const brighter = lighten(baseColor, 0.5); // 50% lighter
export const bright = lighten(baseColor, 0.25); // 25% lighter
export const neutral = baseColor; // Example: a shade of blue
export const dark = darken(baseColor, 0.25); // 25% darker
export const darker = darken(baseColor, 0.5); // 50% darker
export const darkest = darken(baseColor, 0.75); // 75% darker

export const biggest = "70px"; // Used for Title on Welcome, be cautious before you change this value
export const bigger = "35px"; // Used for subtitle on Welcome, be cautious before you change this value
export const big = "35px";
export const medium = "20px";
export const small = "12px";
