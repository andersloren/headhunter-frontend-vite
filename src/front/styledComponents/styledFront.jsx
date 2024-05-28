import { styled } from "styled-components";

import {
  brightest,
  brighter,
  bright,
  neutral,
  dark,
  darker,
  darkest,
  biggest,
  bigger,
  big,
  medium,
  small,
} from "../../utils/styledComponentsConstants";

const border_radius = "15px";

export const S_FrontContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const S_HeadingBox_Welcome = styled.div`
  font-family: Merriweather, sans-serif;
  text-transform: uppercase;
`;

export const S_Title_Welcome = styled.h1`
  font-size: ${biggest};
  font-weight: 700;
  letter-spacing: 20px;
  margin-right: -20px;
  margin-bottom: 8px;
  color: ${brightest};
  text-align: justify;
  text-align: center;
  vertical-align: text-bottom;
`;

export const S_Subtitle_Welcome = styled.h2`
  font-size: ${big};
  color: ${brightest};
  font-weight: 400;
  letter-spacing: 5px;
  text-align: center;
  vertical-align: text-bottom;
`;

export const S_ButtonBox_Welcome = styled.div`
  display: flex;
  gap: 40px;
`;

export const S_Button = styled.button`
  font-size: ${medium};
  width: 100px;
  padding: 12px;

  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${neutral}`};
  color: ${(props) =>
    props.$active === "true" ? `${darkest}` : `${brightest}`};

  border-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${brightest}`};
  border: ${(props) =>
    props.$active === "true"
      ? `2px ${darkest} solid`
      : `2px ${brightest} solid`};
  border-radius: ${border_radius};

  &:hover {
    background: ${brighter};
    cursor: pointer;
    color: ${darkest};
    border: 2px ${darkest} solid;
  }
`;
