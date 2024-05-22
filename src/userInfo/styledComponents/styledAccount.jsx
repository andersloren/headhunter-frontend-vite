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
} from "../../utils/styledComponentsConstants";

// Hard copied from styledLoginSignup.js. Make these values global?

const border_radius = "15px";
const margin_between_buttons = "20px";
const inputfield_width = 300;
const inputfield_translateX = (inputfield_width / 2) * -1;

export const S_UserDetailsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  align-self: center;
  column-gap: 10px;
  margin-left: 50px;
  width: 200px;
  height: 200px;
`;

export const S_UserDetailsLabel = styled.div`
  display: flex;
  &::placeholder {
    color: ${dark};
  }
  color: ${brightest};
  font-weight: 500;
`;

export const S_UserDetailsField = styled.div`
  display: flex;
  &::placeholder {
    color: ${dark};
  }
  color: ${darkest};
  padding: 15px;
  background: ${brightest};
  border-radius: ${border_radius};
  border: 0;
  font-weight: 500;
  width: ${inputfield_width} "px";
`;
