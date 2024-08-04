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

/**
 * Box that creates margin for the child elements to S_Main
 */
export const S_Account_Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  margin-top: 50px;
  left: 100px;
`;

/**
 * Table for all users retrieved from the backend
 */
export const S_Accountlist_Table = styled.table`
  opacity: ${(props) => (props.$blur === "true" ? "0.3" : "1")};
  border-spacing: 0px 0rem;
  border-radius: 10px;
`;

export const S_th = styled.th`
  width: auto;
  padding-right: 100px;
  color: ${darkest};
  font-size: ${medium};
`;

export const S_HorizontalLine = styled.hr`
  width: 100%;
`;

export const S_AccountList_Row = styled.tr`
  /* background-color: ${(props) =>
    props.$even === "true" ? `${dark}` : `${bright}`};*/
  background-color: none;
  color: ${darkest};
`;

export const S_Accountlist_Data = styled.td`
  color: ${darkest};
  font-weight: bold;
  /* background-color: ${(props) =>
    props.$even === "true" ? `${neutral}` : `${bright}`}; */
  background-color: transparent;
`;
