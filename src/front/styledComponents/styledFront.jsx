import { styled } from "styled-components";

import {
  brightest,
  brighter,
  bright,
  neutral,
  dark,
  darker,
  darkest,
  biggest,
  bigger,
  big,
  medium,
  small,
} from "../../utils/styledComponentsConstants";

const border_radius = "15px";

export const S_FrontContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const S_HeadingBox_Welcome = styled.div`
  font-family: Merriweather, sans-serif;
  text-transform: uppercase;
  color: ${dark};
`;

export const S_Title_Welcome = styled.h1`
  font-size: ${biggest};
  font-weight: 700;
  letter-spacing: 20px;
  margin-right: -20px;
  margin-bottom: 8px;
  text-align: justify;
  text-align: center;
  vertical-align: text-bottom;
`;

export const S_Subtitle_Welcome = styled.h2`
  font-size: ${big};
  font-weight: 400;
  letter-spacing: 5px;
  text-align: center;
  vertical-align: text-bottom;
`;

// export const S_ButtonBox_Welcome = styled.div`
//   display: flex;
//   gap: 40px;
// `;
