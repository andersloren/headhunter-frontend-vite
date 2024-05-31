import styled from "styled-components";

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
