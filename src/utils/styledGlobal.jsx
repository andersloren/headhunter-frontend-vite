import { styled } from "styled-components";

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

const width = "20px";
const admin_width = "10px";

export const S_Main = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, ${neutral}, ${dark});
  font-family: Aptos, sans-serif;
`;

export const S_Header = styled.div`
  font-size: ${big};
  color: ${darkest};
  text-align: center;
`;

export const S_SubHeader = styled.div`
  font-size: ${medium};
  color: ${darkest};
  text-align: center;
`;

export const S_FunctionalityButton_Box = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => (props.$admin === "true" ? `${admin_width}` : `${width}`)};
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
  color: ${dark};
`;
