import { lighten, darken } from "./colors/colorPalette";
import { keyframes } from "styled-components";

const baseColor = "hsl(200 20% 90%)"; // Example: a shade of blue

// Generate shades
export const brightest = lighten(baseColor, 0.75);
export const brighter = lighten(baseColor, 0.6);
export const bright = lighten(baseColor, 0.6);
export const neutral = baseColor;
export const dark = darken(baseColor, 0.5);
export const darker = darken(baseColor, 0.6);
export const darkest = darken(baseColor, 0.75);

export const biggest = "70px"; // Used for Title on Welcome, be cautious before you change this value
export const bigger = "35px"; // Used for subtitle on Welcome, be cautious before you change this value
export const big = "30px";
export const medium = "20px";
export const mediumSmall = "16px";
export const small = "12px";
export const verySmall = "6px";

export const fadeInAnimation = keyframes`
  0% {opacity: 0; }
  100% {opacity: 1;}
`;

export const fadeInDuration = "1s";
