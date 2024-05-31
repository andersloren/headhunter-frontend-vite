import { styled, keyframes } from "styled-components";

import HourglassTopSvg from "../../utils/svg-components/HourglassTopSvg.jsx";
import HourglassBottomSvg from "../../utils/svg-components/HourglassBottomSvg.jsx";
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
const border_preview_border = "2px solid";
const border_preview_border_radius = "5px 0px 0px 5px";

export const S_Title_Input = styled.input`
  border-radius: ${border_radius};
  padding: 9px;
  width: auto;
  background-color: ${brightest};
  font-size: ${medium};
`;

export const S_TextArea = styled.textarea`
  margin-bottom: 10px;
  background-color: ${brightest};
  color: ${darkest};
  font-size: ${medium};
  border-radius: ${border_preview_border_radius};
  border: ${border_preview_border};
  min-width: 400px;
  min-height: 350px;
`;

export const S_Tooltip_FunctionalityButton = styled.div`
  margin-left: ${(props) =>
    props.$activeButton !== "3"
      ? props.$activeButton !== "2"
        ? "0px"
        : "70px"
      : "140px"};
  padding: 20px;
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${border_radius};
  border: 2px solid;
  background-color: ${bright};
`;

export const S_Animation_Text = styled.div`
  position: relative;
  text-align: center;
  font-size: ${big};
  color: ${brightest};
`;

export const S_Animation_Rotate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  right: 50%;
  font-size: 50px;
`;
