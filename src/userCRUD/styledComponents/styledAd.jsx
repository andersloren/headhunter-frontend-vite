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
  mediumSmall,
} from "../../utils/styledComponentsConstants";

const border_radius = "5px";
const topButtonsHeight = "34px";

const border_preview_border = "2px solid";
const border_preview_border_radius = "5px 0px 0px 5px";

export const S_IframeAndButtons_Container = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
`;

export const S_TopButtons_Box = styled.div`
  display: flex;
  gap: 6px;
`;

export const S_Ad_Tab = styled.div`
  font-size: ${mediumSmall};
  /* width: auto; */
  padding: 5px;
  border: solid 1px;
  border-radius: ${border_radius};
  color: ${(props) => (props.$active === "true" ? `${darkest}` : `${darkest}`)};
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${neutral}`};
  box-shadow: ${(props) =>
    props.$active === "true" ? `3px 5px 3px ${dark}` : "none"};
  &:hover {
    cursor: pointer;
    box-shadow: ${(props) =>
      props.$active === "true"
        ? `3px 5px 3px ${darker}`
        : `3px 5px 3px ${dark}`};
  }
`;

export const S_Iframe = styled.iframe`
  margin-bottom: 10px;
  min-width: 300px;
  min-height: 600px;
  border-radius: ${border_preview_border_radius};
  /* border: ${border_preview_border};  */
  background-color: white;
  resize: both;
  min-width: 600px;
  outline: none;
`;
