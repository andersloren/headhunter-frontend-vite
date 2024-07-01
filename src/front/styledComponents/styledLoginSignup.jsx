import styled, { css, keyframes } from "styled-components";

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
  fadeInAnimation,
  fadeInDuration,
} from "../../utils/styledComponentsConstants";

const border_radius = "15px";
const inputfield_width = 300;
const button_border = "1px";

const fadeOut = keyframes`
0% {opacity: 1;}
100% {opacity: 0;}
`;

const pulsingLight = keyframes`
0% {box-shadow: 0 0 5px red;}
50% {box-shadow: 0 0 20px red; }
100% {box-shadow: 0 0 5px red;}
`;

export const S_FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${medium};
  position: relative;
  gap: 10px;
  animation: ${fadeInDuration} ${fadeInAnimation};
`;

export const S_FrontLabel = styled.div`
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
  animation: ${(props) =>
    props.$isInvalid === "true" ? css`3s ${pulsingLight} infinite` : "none"};
`;

export const S_WarningLabel = styled.div`
  font-size: ${small};

  justify-self: flex-start; /* Aligns items vertically to the top */
  color: ${bright};
  animation: ${(props) =>
    props.$isInvalid === "false"
      ? css`2s ${fadeOut} 1 forwards`
      : css`
          ${fadeInDuration} ${fadeInAnimation} 1 forwards
        `};
`;

export const S_ButtonBox_Submit = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const S_Button = styled.button`
  /* pointer-events: ${(props) =>
    props.$active === "true" ? "auto" : "none"}; */
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
