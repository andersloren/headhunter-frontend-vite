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

// Border radius for input fields.
const border_radius_form = "15px";

const border = `1px solid ${brighter}`;
const border_radius = "15px";

export const S_UserInfo_Column = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 20px;
  border: ${border};
  border-radius: ${border_radius};
  background-color: ${dark};
  left: 10%;
  top: 5%;
  padding: 20px;
  margin: 20px 0px 20px 0px;
`;

export const S_Label = styled.label`
  margin-left: 5px;
  font-weight: bold;
`;

export const S_UserInfo_Input = styled.input`
  padding: 15px;
  background: ${brighter};
  border-radius: ${border_radius_form};
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 12px;
  font-weight: bold;
  color: ${(props) =>
    props.$readOnly === "true" ? `${neutral}` : `${darkest}`};
  &:hover {
    cursor: ${(props) => (props.$readOnly === "true" ? "not-allowed" : "text")};
  }
`;

export const S_Form_Button_Box = styled.div`
  display: flex;
  justify-content: center;
`;
