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

export const S_FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${medium};
  position: relative;
  gap: 5px;
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
`;

export const S_Button = styled.button`
  pointer-events: ${(props) => (props.$active === "true" ? "auto" : "none")};
  /* pointer-events: none; */
  font-size: ${medium};
  width: 100px;
  padding: 12px;
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${bright}`};
  color: ${(props) => (props.$active === "true" ? `${darkest}` : `${dark}`)};
  border: ${(props) =>
    props.$active === "true" ? `2px ${darkest} solid` : `2px ${dark} solid`};
  border-radius: ${border_radius};
  &:hover {
    cursor: pointer};
  }
`;

export const S_SignUpLink = styled.div`
  font-size: 12px;
  margin-top: 10px;
  text-decoration-line: underline;
  &:hover {
    cursor: pointer;
  }
`;
