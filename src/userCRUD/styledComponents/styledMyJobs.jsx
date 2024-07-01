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

const compact_joblist = "auto";
const expanded_joblist = "auto";

export const S_HorizontalLine = styled.hr`
  width: 100%;
`;

export const S_CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const S_CheckboxOptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const S_Checkbox = styled.input`
  &:checkmark {
    background-color: ${dark};
  }
`;

export const S_CheckboxLabel = styled.div`
  font-size: ${small};
`;

export const S_JobList_Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const S_JobList = styled.div`
  font-size: ${medium};
  &:hover {
    cursor: pointer;
    background: ${brightest};
    color: ${darker};
  }
  padding: 5px;
  border-radius: ${border_radius};
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${bright}`};
  color: ${(props) => (props.$active === "true" ? `${darkest}` : `${darkest}`)};
  width: ${(props) =>
    props.$active === "true" ? `${expanded_joblist}` : `${compact_joblist}`};
`;

// All Preview
export const S_Preview = styled.div`
  /* /* margin-top: 10px; */
  display: flex;
  /* width: 80%; */
`;
