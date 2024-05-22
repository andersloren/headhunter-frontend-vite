import { styled, keyframes } from "styled-components";

import HtmlSvg from "../../utils/icons/html.svg";
import PdfSvg from "../../utils/icons/pdf.svg";
import DocxSvg from "../../utils/icons/docx.svg";
import HourglassTopSvg from "../../utils/icons/hourglass-top.svg";
import HourglassBottomSvg from "../../utils/icons/hourglass-bottom.svg";

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
  width: 100%;
  background-color: ${brightest};
  font-size: ${medium};
`;

/**
 * Decision button constants
 */

const decision_border = `1px solid ${brighter}`;
const decision_border_radius = "10px";
const decision_width = "75px";
const decision_height = "50px";
const decision_fill = `${brightest}`;
const decision_hover_background_color = `${brightest}`;
const decision_hover_fill = `${darker}`;
const decision_hover_cursor = "pointer";

export const S_Decision_HtmlSvg = styled(HtmlSvg)`
  border: ${decision_border};
  border-radius: ${decision_border_radius};
  width: ${decision_width};
  height: ${decision_height};
  fill: ${decision_fill};
  &:hover {
    background-color: ${decision_hover_background_color};
    fill: ${decision_hover_fill};
    cursor: ${decision_hover_cursor};
  }
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${neutral}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
`;

export const S_Decision_PdfSvg = styled(PdfSvg)`
  border: ${decision_border};
  border-radius: ${decision_border_radius};
  width: ${decision_width};
  height: ${decision_height};
  fill: ${decision_fill};
  &:hover {
    background-color: ${decision_hover_background_color};
    fill: ${decision_hover_fill};
    cursor: ${decision_hover_cursor};
  }
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${neutral}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
`;

export const S_Decision_DocxSvg = styled(DocxSvg)`
  border: ${decision_border};
  border-radius: ${decision_border_radius};
  width: ${decision_width};
  height: ${decision_height};
  fill: ${decision_fill};
  &:hover {
    background-color: ${decision_hover_background_color};
    fill: ${decision_hover_fill};
    cursor: ${decision_hover_cursor};
  }
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${neutral}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const S_Animation_Rotate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  right: 50%;
  font-size: 50px;
`;

export const S_HourglassBottom = styled(HourglassBottomSvg)`
  animation: ${rotate} 5s linear infinite;
  height: 70px;
  width: 70px;
  fill: ${brightest};
`;

export const S_HourglassTop = styled(HourglassTopSvg)`
  border: 1px solid ${brighter};
  border-radius: 5px;
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background-color: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
`;
