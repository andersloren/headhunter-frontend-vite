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
const margin_between_buttons = "20px";
const border_radius_functionality = "5px";

/**
 * Box that centers puts itself cenetered horizontally when the update button is clicked in the parent component.
 *
 * This box is not showing unless the update button in the parent component is clicked, due to its opacity value.
 */
export const S_Form_FloatingDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 20%;
  font-size: ${medium};
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
  opacity: ${(props) => (props.$blur === "true" ? "1" : "0")};
  padding: 20px;
  border: 4px solid;
  border-color: ${neutral};
  border-radius: ${border_radius_form};
`;

export const S_Form_Header = styled.div`
  font-size: ${big};
  padding-bottom: 10px;
  font-weight: bold;
  text-align: center;
  color: ${bright};
`;

export const S_Form_Input = styled.input`
  padding: 15px;
  background: ${brighter};
  border-radius: ${border_radius_form};
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 12px;
`;

export const S_Form_Button_Box = styled.div`
  display: flex;
  justify-content: center;
`;

export const S_Form_Button = styled.button`
  margin-left: ${(props) =>
    props.$left === "true" ? margin_between_buttons : "0px"};
  margin-right: ${(props) => (props.$right ? margin_between_buttons : "0px")};
  background: ${(props) =>
    props.$active === "true"
      ? "radial-gradient(at 50% 50%, ${dark}, ${neutral})"
      : "rgba(0, 0, 0, 0.1)"};
  width: 50px;
  height: 50px;
  background-color: ${bright};
  border-radius: ${border_radius_functionality};
  &:hover {
    background: radial-gradient(at 50% 50%, ${dark}, ${neutral});
    cursor: pointer;
  }
`;
