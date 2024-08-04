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
  slightly_dark,
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
  background-color: ${neutral};
  left: 200px;
  top: 100px;
  padding: 20px;
  margin: 20px 200px 20px 0px;
`;

export const S_Label_Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const S_Label = styled.label`
  margin-left: 10px;
  font-weight: bold;
  color: ${darker};
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
    props.$readOnly === "true" ? `${slightly_dark}` : `${darkest}`};
  &:hover {
    cursor: ${(props) => (props.$readOnly === "true" ? "not-allowed" : "text")};
  }
`;

export const S_Form_Button_Box = styled.div`
  display: flex;
  justify-content: center;
`;
