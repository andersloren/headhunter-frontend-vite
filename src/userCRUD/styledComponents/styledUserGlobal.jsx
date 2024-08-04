import { styled } from "styled-components";

import AddSvg from "../../utils/svg-components/AddSvg.jsx";
import DeleteSvg from "../../utils/svg-components/DeleteSvg.jsx";
import UpdateSvg from "../../utils/svg-components/UpdateSvg.jsx";
import GenerateSvg from "../../utils/svg-components/GenerateSvg.jsx";
import PinSvg from "../../utils/icons/pin.svg";
import UnpinSvg from "../../utils/icons/unpin.svg";

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
  fadeInAnimation,
  fadeInDuration,
} from "../../utils/styledComponentsConstants";

const border_radius = "5px";

export const S_JobList_JobEdit_JobAd_Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 30px;
  animation: ${fadeInDuration} ${fadeInAnimation};
`;

export const S_Container_Template = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const S_MyJobs_Container = styled(S_Container_Template)`
  width: 250px;
`;
export const S_Job_Container = styled(S_Container_Template)``;
export const S_Ad_Container = styled(S_Container_Template)``;

export const S_HorizontalLine = styled.hr`
  width: 100%;
`;

export const S_FunctionalityButton_Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const S_AddSvg = styled(AddSvg)`
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

export const S_DeleteSvg = styled(DeleteSvg)`
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

export const S_UpdateSvg = styled(UpdateSvg)`
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
  opacity: ${(props) => (props.$blur === "true" ? "0.3" : "1")};
`;

export const S_GenerateSvg = styled(GenerateSvg)`
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
  opacity: ${(props) => (props.$blur === "true" ? "0.3" : "1")};
`;

export const S_PinSvg = styled(PinSvg)`
  fill: ${brighter};
  width: 30px;
  height: 25px;
  fill: ${brightest};
  &:hover {
    cursor: pointer;
    fill: ${brightest};
  }
`;

export const S_UnpinSvg = styled(UnpinSvg)`
  fill: ${brighter};
  width: 30px;
  height: 25px;
  fill: ${brightest};
  &:hover {
    cursor: pointer;
    fill: ${brightest};
  }
`;
