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

export const S_MyJobs = styled.div`
  width: 250px;
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
  gap: 10px;
`;

export const S_JobCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: ${medium};
  border: solid 1px;
  padding: 5px;
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

export const S_JobTitle = styled.div``;

export const S_JobDetails = styled.div`
  font-size: ${small};
`;

// All Preview
export const S_Preview = styled.div`
  /* /* margin-top: 10px; */
  display: flex;
  /* width: 80%; */
`;
