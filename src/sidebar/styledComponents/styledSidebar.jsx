import styled from "styled-components";

import CollapsedSvg from "../../utils/svg-components/CollapsedSvg.jsx";
import LogoutSvg from "../../utils/svg-components/LogoutSvg.jsx";
import ListSvg from "../../utils/svg-components/ListSvg.jsx";
import ExpandedSvg from "../../utils/svg-components/ExpandedSvg.jsx";
import AccountSvg from "../../utils/svg-components/AccountSvg.jsx";
import AdminSvg from "../../utils/svg-components/AdminSvg.jsx";
import HeadhunterSvg from "../../utils/svg-components/HeadhunterSvg.jsx";

import {
  brightest,
  brighter,
  bright,
  neutral,
  dark,
  darker,
  darkest,
} from "../../utils/styledComponentsConstants";

const border_radius = "15px";
const sidebar_expanded = "150px";
const sidebar_collapsed = "80px";

export const S_WindowSplit = styled.div`
  display: flex;
  gap: 20px;
`;

export const S_SidebarBox = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$isExpanded === "true" ? "" : "center")};
  width: ${(props) =>
    props.$isExpanded === "true"
      ? `${sidebar_expanded}`
      : `${sidebar_collapsed}`};
  background-color: ${bright};
  transition: width 0.5s ease-in-out;
`;

export const S_HeadhunterLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin: 20px;
`;

export const S_CollapsedSvg = styled(CollapsedSvg)`
  width: 30px;
  height: 30px;
  position: relative;
  right: 15px;
  background: ${neutral};
  fill: ${brightest};
  &:hover {
    fill: ${darkest};
    cursor: pointer;
  }
  border-radius: 50%;
`;

export const S_ExpandedSvg = styled(ExpandedSvg)`
  width: 30px;
  height: 30px;
  position: relative;
  right: 15px;
  fill: ${brightest};
  background: ${neutral};
  &:hover {
    fill: ${darkest};
    cursor: pointer;
  }
  border-radius: 50%;
`;

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
