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

// Border radius for small buttons.
const border_radius_functionality = "5px";

/**
 * Box that creates margin for the child elements to S_Main
 */
export const S_User_Box = styled.div`
  position: relative;
  margin-top: 50px;
  left: 100px;
`;

/**
 * Table for all users retrieved from the backend
 */
export const S_Userlist_Table = styled.table`
  opacity: ${(props) => (props.$blur === "true" ? "0.3" : "1")};
  left: 10%;
`;

export const S_UserList_Row = styled.tr`
  margin-top: 30px;
`;

export const S_th = styled.th`
  width: auto;
  padding-right: 100px;
`;

export const S_Userlist_Data = styled.td``;
export const S_Button_Box = styled.div``;

/**
 * Update and Delete buttons for the user table
 */
export const S_Table_Button = styled.button`
  font-size: ${small};
  color: ${bright};
  height: 35px;
  width: 35px;
  border-radius: ${border_radius_functionality};
  background-color: ${bright};
  &:hover {
    background: radial-gradient(at 50% 50%, ${bright}, ${dark});
  }
`;
