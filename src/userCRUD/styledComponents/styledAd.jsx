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

const border_radius = "5px";
const topButtonsHeight = "34px";

const border_preview_border = "2px solid";
const border_preview_border_radius = "5px 0px 0px 5px";

export const S_TopButtons_Box = styled.div`
  height: ${topButtonsHeight};
`;
export const S_Buttons_Edit = styled.button`
  height: ${topButtonsHeight};
  font-size: ${medium};
  width: auto;
  background-color: ${(props) =>
    // props.$active === "true" ? `${bright}` : `${dark}`};
    props.$active === "true" ? `${brighter}` : `${neutral}`};
  line-height: ${(props) => (props.$active === "true" ? "3rem" : "")};
  border-radius: ${border_radius};
  &:hover {
    background: radial-gradient(at 50% 50%, ${bright}, ${darker});
  }
`;

export const S_Iframe = styled.iframe`
  margin-bottom: 10px;
  min-width: 300px;
  min-height: 600px;
  border-radius: ${border_preview_border_radius};
  border: ${border_preview_border};
  background-color: white;
  resize: both;
  min-width: 600px;
`;
