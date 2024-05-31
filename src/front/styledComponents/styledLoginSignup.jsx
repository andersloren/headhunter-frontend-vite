import styled from "styled-components";

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
const inputfield_width = 300;

export const S_FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${medium};
  position: relative;
`;

export const S_Input = styled.input`
  display: flex;
  &::placeholder {
    color: ${dark};
  }
  padding: 15px;
  background: ${brightest};
  border-radius: ${border_radius};
  border: 0;
  font-weight: 500;
  margin: 0px 0px 15px 0px;
  width: ${inputfield_width} "px";
`;

export const S_ButtonBox_Submit = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 40px;
`;

export const S_LoginError = styled.div`
  color: #5c0606;
  font-weight: bold;
  justify-content: center;
`;
