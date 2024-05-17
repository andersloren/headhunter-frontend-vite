import styled from "styled-components";

import {
  brightest,
  brighter,
  bright,
  neutral,
  dark,
  darker,
  darkest,
  big,
  medium,
  small,
} from "./styledComponentsConstants";

const margin_left_from_screen = "30px";

// Main
export const S_MainBase = styled.div`
  min-height: 100vh;
  /* background-color: ${neutral}; */
  background: linear-gradient(to right, ${bright}, ${brighter});
`;

export const S_Main = styled.div`
  min-height: 100vh;
  /* background-color: ${neutral}; */
  background: ${neutral};
`;

// All Heading
export const S_HeadingBox = styled.h1`
  margin-bottom: 40px;
`;

export const S_Title = styled.div`
  font-size: 35px;
  font-weight: 400;
  margin-left: ${margin_left_from_screen};
  letter-spacing: 4px;
  color: ${bright};
`;

export const S_OpenAI_Box = styled.div`
  width: auto;
  vertical-align: middle;
`;

export const S_OpenAI_Badge = styled.img`
  display: block;
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
  /* margin: 32px; */
  height: 32px;
`;
