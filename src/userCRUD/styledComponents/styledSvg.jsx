import AddSvg from "../../utils/svg-components/AddSvg.jsx";
import DeleteSvg from "../../utils/svg-components/DeleteSvg.jsx";
import UpdateSvg from "../../utils/svg-components/UpdateSvg.jsx";
import GenerateSvg from "../../utils/svg-components/GenerateSvg.jsx";

import HtmlSvg from "../../utils/svg-components/HtmlSvg.jsx";
import HourglassTopSvg from "../../utils/svg-components/HourglassTopSvg.jsx";
import HourglassBottomSvg from "../../utils/svg-components/HourglassBottomSvg.jsx";

import DownloadSvg from "../../utils/svg-components/DownloadSvg.jsx";

import PinSvg from "../../utils/icons/pin.svg";
import UnpinSvg from "../../utils/icons/unpin.svg";
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

const border = `1px solid ${brighter}`;
const fill = `${brightest}`;
const border_radius = "5px";
const hover_background_color = `${brightest}`;
const hover_fill = `${darker}`;
const width = "50px";
const height = "50px";
const hover_cursor = "pointer";

const decision_border_radius = "10px";
const decision_width = "75px";
const decision_height = "50px";

export const S_AddSvg = styled(AddSvg)`
  border: ${border};
  border-radius: ${border_radius};
  width: ${width};
  height: ${height};
  fill: ${fill};
  &:hover {
    background-color: ${brightest};
    fill: ${darker};
    cursor: ${hover_cursor};
  }
`;

export const S_DeleteSvg = styled(DeleteSvg)`
  border: ${border};
  border-radius: ${border_radius};
  width: ${width};
  height: ${height};
  fill: ${fill};
  &:hover {
    background-color: ${brightest};
    fill: ${darker};
    cursor: ${hover_cursor};
  }
`;

export const S_UpdateSvg = styled(UpdateSvg)`
  border: ${border};
  border-radius: ${border_radius};
  width: ${width};
  height: ${height};
  fill: ${fill};
  &:hover {
    background-color: ${brightest};
    fill: ${darker};
    cursor: ${hover_cursor};
  }
  opacity: ${(props) => (props.$blur === "true" ? "0.3" : "1")};
`;

export const S_GenerateSvg = styled(GenerateSvg)`
  border: ${border};
  border-radius: ${border_radius};
  width: ${width};
  height: ${height};
  fill: ${fill};
  &:hover {
    background-color: ${brightest};
    fill: ${darker};
    cursor: ${hover_cursor};
  }
  opacity: ${(props) => (props.$blur === "true" ? "0.3" : "1")};
`;

export const S_PinSvg = styled(PinSvg)`
  border: ${border};
  border-radius: ${border_radius};
  width: ${width};
  height: ${height};
  fill: ${fill};
  &:hover {
    background-color: ${brightest};
    fill: ${darker};
    cursor: ${hover_cursor};
  }
`;

export const S_UnpinSvg = styled(UnpinSvg)`
  border: ${border};
  border-radius: ${border_radius};
  width: ${width};
  height: ${height};
  fill: ${fill};
  &:hover {
    background-color: ${brightest};
    fill: ${darker};
    cursor: ${hover_cursor};
  }
`;

export const S_Decision_HtmlSvg = styled(HtmlSvg)`
  border: ${border};
  border-radius: ${decision_border_radius};
  width: ${decision_width};
  height: ${decision_height};
  fill: ${fill};
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${neutral}`};
  fill: ${(props) =>
    props.$active === "true" ? `${darkest}` : `${brightest}`};
  &:hover {
    background-color: ${hover_background_color};
    fill: ${hover_fill};
    cursor: ${hover_cursor};
  }
`;

export const S_DownloadSvg = styled(DownloadSvg)`
  border: ${border};
  border-radius: ${decision_border_radius};
  width: ${decision_width};
  height: ${decision_height};
  fill: ${fill};
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${neutral}`};
  fill: ${(props) =>
    props.$active === "true" ? `${darkest}` : `${brightest}`};
  &:hover {
    background-color: ${hover_background_color};
    fill: ${hover_fill};
    cursor: ${hover_cursor};
  }
`;
