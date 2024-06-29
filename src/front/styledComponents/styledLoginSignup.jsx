import styled, { keyframes } from "styled-components";

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
  mediumSmall,
  small,
  verySmall,
} from "../../utils/styledComponentsConstants";

const border_radius = "15px";
const inputfield_width = 300;
const button_border = "1px";

const fadeIn = keyframes`
  0% {opacity: 0; }
  100% {opacity: 1;}
`;

export const S_FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${medium};
  position: relative;
  gap: 10px;
  animation-name: ${fadeIn};
  animation-duration: 1s;
`;

export const S_RegisterLabel = styled.div`
  padding: 15px;
  color: ${bright};
  font-family: Aptos, sans-serif;
  letter-spacing: 2px;
  font-size: ${mediumSmall};
  font-weight: lighter;
`;

export const S_Input = styled.input`
  display: flex;
  &::placeholder {
    color: ${dark};
  }
  color: ${(props) =>
    props.$isInputValid === "true" ? "hsl(100 200% 25%)" : `${dark}`};
  padding: 15px;
  background: ${brightest};
  border-radius: ${border_radius};
  border: 0;
  font-weight: 500;
  /* margin: 15px 0px 0px 0px; */
  width: ${inputfield_width} "px";
  &:focus {
    outline: none;
    box-shadow: 0 0 7px ${darkest};
  }
`;

export const S_WarningLabelBox = styled.div`
  display: flex;
  /* align-self: flex-start; */
`;

export const S_WarningLabel = styled.div`
  font-size: ${small};
  color: ${(props) => (props.$isValid === "true" ? "transparent" : "red")};
  justify-self: flex-start; /* Aligns items vertically to the top */
`;

export const S_ButtonBox_Submit = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const S_Button = styled.button`
  pointer-events: ${(props) => (props.$active === "true" ? "auto" : "none")};
  font-size: ${small};
  padding: 12px;
  background-color: transparent;
  color: ${bright};
  border: ${button_border} ${bright} solid;
  border-radius: ${border_radius};
  &:hover {
    cursor: pointer;
    background-color: ${neutral};
    color: ${dark};
  }
`;

export const S_SignUpLink = styled.div`
  font-size: 12px;
  margin-top: 10px;
  text-decoration-line: underline;
  font-family: Aptos, sans-serif;
  color: ${bright};
  &:hover {
    cursor: pointer;
  }
`;
