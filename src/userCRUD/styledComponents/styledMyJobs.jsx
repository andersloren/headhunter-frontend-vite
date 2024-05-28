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

const compact_joblist = "150px";
const expanded_joblist = "auto";

export const S_JobList_Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// export const S_JobList_Heading_MyJobs = styled.div`
//   font-size: 30px;
//   padding-bottom: 10px;
//   font-weight: bold;
// `;

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
    props.$active === "true" ? `${brighter}` : `${neutral}`};
  color: ${(props) => (props.$active === "true" ? `${darkest}` : `${darkest}`)};
  width: ${(props) =>
    props.$active === "true" ? `${expanded_joblist}` : `${compact_joblist}`};
`;

// All Preview
export const S_Preview = styled.div`
  /* /* margin-top: 10px; */
  display: flex; */
  /* width: 80%; */
`;
