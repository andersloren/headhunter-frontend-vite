import AddSvg from "../../utils/svg-components/AddSvg.jsx";
import DeleteSvg from "../../utils/svg-components/DeleteSvg.jsx";
import UpdateSvg from "../../utils/svg-components/UpdateSvg.jsx";
import GenerateSvg from "../../utils/svg-components/GenerateSvg.jsx";

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

const border_radius = "5px";

export const S_FunctionalityButton_Box = styled.div`
  display: flex;
  gap: 20px;
`;

export const S_FunctionalityButton = styled.button`
  margin-top: 15px;
  height: 50px;
  width: 50px;
  border-radius: ${border_radius};
  background-color: ${neutral};
  &:hover {
    background-color: ${neutral};
  }
  opacity: ${(props) => (props.$blur === "true" ? "0.3" : "1")};
`;

export const S_JobEdit_And_Ad_Box = styled.div`
  margin-left: 20px;
`;

export const S_PreviewBox = styled.div`
  display: flex;
`;

export const S_Header = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: ${big};
  color: ${brightest};
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
