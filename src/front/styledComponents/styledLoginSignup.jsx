import styled from "styled-components";
// import { CheckSvg } from "src/utils/icons/check.svg";
import CheckSvg from "../../utils/svg-components/CheckSvg";

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
const inputfield_width = 300;
// const inputfield_translateX = (inputfield_width / 2) * -1;

export const S_FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${medium};
  position: relative;
`;

export const S_Input = styled.input`
  display: flex;
  &::placeholder {
    color: ${dark};
  }
  padding: 15px;
  background: ${brightest};
  border-radius: ${border_radius};
  border: 0;
  font-weight: 500;
  margin: 0px 0px 15px 0px;
  width: ${inputfield_width} "px";
`;

export const S_ButtonBox_Submit = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 40px;
`;

export const S_LoginError = styled.div`
  color: #5c0606;
  font-weight: bold;
  justify-content: center;
`;

// export const S_InputFeedbackBox = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const S_InputFeedback = styled.div`
//   position: absolute;
//   height: 58px;
//   right: ${inputfield_width};
//   margin: 0px auto 15px 0px;
//   color: ${brightest};
// `;

// export const S_CheckSvg = styled(CheckSvg)`
//   width: 100%;
//   height: 100%;
//   /* margin: 0px auto 15px 0px; */
//   fill: ${brightest};
// `;

// export const S_EmailIsNotAvailable = styled.div`
//   display: flex;
//   align-items: center;
//   position: absolute;
//   height: 50px;
//   width: 400px;
//   transform: translateY(10%);
//   margin-left: 10px;
//   font-size: ${medium};
//   color: ${brightest};
// `;

// export const S_Check = styled.div`
//   display: flex;
//   position: absolute;
//   align-self: center;
//   transform: translateY(10%);
//   margin-left: 10px;
//   font-size: 40px;
//   color: ${brightest};
// `;
