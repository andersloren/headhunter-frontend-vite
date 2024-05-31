import { styled, keyframes } from "styled-components";

/**
 * Sidebar SVG
 */

import HeadhunterSvg from "./svg-components/HeadhunterSvg.jsx";
import AdminSvg from "./svg-components/AdminSvg.jsx";
import AccountSvg from "./svg-components/AccountSvg.jsx";
import ListSvg from "./svg-components/ListSvg.jsx";
import LogoutSvg from "./svg-components/LogoutSvg.jsx";

/**
 * adminCRUD SVG
 */

import EditSvg from "./svg-components/EditSvg.jsx";
import ReturnSvg from "./svg-components/ReturnSvg.jsx";
import CancelSvg from "./svg-components/CancelSvg.jsx";

/**
 * userCRUD SVG
 */

import AddSvg from "./svg-components/AddSvg.jsx";
import DeleteSvg from "./svg-components/DeleteSvg.jsx";
import UpdateSvg from "./svg-components/UpdateSvg.jsx";
import GenerateSvg from "./svg-components/GenerateSvg.jsx";
import HtmlSvg from "./svg-components/HtmlSvg.jsx";
import HourglassTopSvg from "./svg-components/HourglassTopSvg.jsx";
import HourglassBottomSvg from "./svg-components/HourglassBottomSvg.jsx";
import DownloadSvg from "./svg-components/DownloadSvg.jsx";

import {
  brightest,
  brighter,
  bright,
  neutral,
  dark,
  darker,
  darkest,
} from "./styledComponentsConstants.jsx";

const border = `1px solid ${brighter}`;
const fill = `${brightest}`;
const border_radius = "5px";
const hover_background_color = `${brightest}`;
const hover_fill = `${darker}`;
const width = "50px";
const height = "50px";
const hover_cursor = "pointer";

const admin_border = `1px solid ${darker}`;
const admin_width = "30px";
const admin_height = "30px";

const decision_border_radius = "10px";
const decision_width = "75px";
const decision_height = "50px";

/**
 * CRUD SVG
 */

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
  border-radius: ${border_radius};
  width: ${(props) =>
    props.$admin === "true" ? `${admin_width}` : `${width}`};
  height: ${(props) =>
    props.$admin === "true" ? `${admin_height}` : `${height}`};
  fill: ${(props) => (props.$even === "true" ? `${brightest}` : `${darkest}`)};
  border: ${(props) =>
    props.$even === "true" ? `${border}` : `${admin_border}`};
  margin: ${(props) => (props.$admin === "true" ? "10px" : "")};
  background-color: ${(props) =>
    props.$even === "true" ? `${darkest}` : `${brighter}`};
  &:hover {
    background-color: ${brightest};
    fill: ${darker};
    cursor: ${hover_cursor};
  }
`;

export const S_EditSvg = styled(EditSvg)`
  border-radius: ${border_radius};
  width: ${(props) =>
    props.$admin === "true" ? `${admin_width}` : `${width}`};
  height: ${(props) =>
    props.$admin === "true" ? `${admin_height}` : `${height}`};
  fill: ${(props) => (props.$even === "true" ? `${brightest}` : `${darkest}`)};
  border: ${(props) =>
    props.$even === "true" ? `${border}` : `${admin_border}`};
  margin: ${(props) => (props.$admin === "true" ? "10px" : "")};
  background-color: ${(props) =>
    props.$even === "true" ? `${darkest}` : `${brighter}`};
  &:hover {
    background-color: ${brightest};
    fill: ${darker};
    cursor: ${hover_cursor};
  }
  opacity: ${(props) => (props.$blur === "true" ? "0.3" : "1")};
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

/**
 * other SVG
 */

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

/**
 * Hourglass animation SVG
 */

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

/**
 * Sidebar SVG components
 */

export const S_AccountSvg = styled(AccountSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${bright}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
`;

export const S_AdminSvg = styled(AdminSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${bright}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
`;

export const S_ListSvg = styled(ListSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${bright}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
`;

export const S_LogoutSvg = styled(LogoutSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
`;

export const S_HeadhunterSvg = styled(HeadhunterSvg)`
  width: 60px;
  transition: width 0.5s ease-in-out;
`;

/**
 * Other SVG
 */

export const S_ReturnSvg = styled(ReturnSvg)`
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

export const S_CancelSvg = styled(CancelSvg)`
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
