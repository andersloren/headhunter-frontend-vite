import styled from "styled-components";
// import { ReactComponent as LogoutSvg } from "../../utils/icons/logout.svg";
// import { ReactComponent as AdminSvg } from "../../utils/icons/admin.svg";
// import { ReactComponent as AccountSvg } from "../../utils/icons/account.svg";
// import { ReactComponent as ListSvg } from "../../utils/icons/list.svg";
// import { ReactComponent as ExpandedSvg } from "../../utils/icons/expanded.svg";
// import { ReactComponent as CollapsedSvg } from "../../utils/icons/collapsed.svg";
// import { ReactComponent as HeadhunterSvg } from "../../utils/icons/headhunter.svg";

// import LogoutPng from "../../utils/icons-png/logout.png";
// import AdminPng from "../../utils/icons-png/admin.png";
// import AccountPng from "../../utils/icons-png/account.png";
// import ListPng from "../../utils/icons-png/list.png";
// import ExpandedPng from "../../utils/icons-png/open.png";
// import CollapsedPng from "../../utils/icons-png/collapsed.png";
// import HeadhunterPng from "../../utils/icons-png/headhunter.png";

import CollapsedSvg from "../../utils/svg-components/CollapsedSvg.jsx";
import LogoutSvg from "../../utils/svg-components/LogoutSvg.jsx";
import ListSvg from "../../utils/svg-components/ListSvg.jsx";
import ExpandedSvg from "../../utils/svg-components/ExpandedSvg.jsx";
import AccountSvg from "../../utils/svg-components/AccountSvg.jsx";
import AdminSvg from "../../utils/svg-components/AdminSvg.jsx";
import HeadhunterSvg from "../../utils/svg-components/HeadhunterSvg.jsx";

import {
  brightest,
  brighter,
  bright,
  neutral,
  dark,
  darker,
  darkest,
} from "../../utils/styledComponentsConstants";

const border_radius = "15px";
const sidebar_expanded = "150px";
const sidebar_collapsed = "80px";

export const S_WindowSplit = styled.div`
  display: flex;
`;

export const S_SidebarBox = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$isExpanded === "true" ? "" : "center")};
  width: ${(props) =>
    props.$isExpanded === "true"
      ? `${sidebar_expanded}`
      : `${sidebar_collapsed}`};
  background-color: ${bright};
  transition: width 0.5s ease-in-out;
`;

export const S_HeadhunterLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin: 20px;
`;

export const S_CollapsedSvg = styled(CollapsedSvg)`
  width: 30px;
  height: 30px;
  position: relative;
  right: 15px;
  background: ${neutral};
  fill: ${brightest};
  &:hover {
    fill: ${darkest};
    cursor: pointer;
  }
  border-radius: 50%;
`;

export const S_ExpandedSvg = styled(ExpandedSvg)`
  width: 30px;
  height: 30px;
  position: relative;
  right: 15px;
  fill: ${brightest};
  background: ${neutral};
  &:hover {
    fill: ${darkest};
    cursor: pointer;
  }
  border-radius: 50%;
`;

export const S_AccountSvg = styled(AccountSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${bright}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
`;

export const S_AdminSvg = styled(AdminSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${bright}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
`;

export const S_ListSvg = styled(ListSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${bright}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
`;

export const S_LogoutSvg = styled(LogoutSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
`;

export const S_HeadhunterSvg = styled(HeadhunterSvg)`
  width: 60px;
  transition: width 0.5s ease-in-out;
`;

// export const S_CollapsedSvg = styled(CollapsedSvg)`
//   width: 30px;
//   height: 30px;
//   position: relative;
//   right: 15px;
//   background: ${neutral};
//   fill: ${brightest};
//   &:hover {
//     fill: ${darkest};
//     cursor: pointer;
//   }
//   border-radius: 50%;
// `;

// export const S_ExpandedSvg = styled(ExpandedSvg)`
//   width: 30px;
//   height: 30px;
//   position: relative;
//   right: 15px;
//   fill: ${brightest};
//   background: ${neutral};
//   &:hover {
//     fill: ${darkest};
//     cursor: pointer;
//   }
//   border-radius: 50%;
// `;

// export const S_AccountSvg = styled(AccountSvg)`
//   width: 50px;
//   height: 50px;
//   fill: ${brightest};
//   &:hover {
//     background: ${brightest};
//     fill: ${darker};
//     cursor: pointer;
//   }
//   border-radius: ${border_radius};
//   padding: 10px;
//   margin: 10px;
//   background-color: ${(props) =>
//     props.$active === "true" ? `${brightest}` : `${bright}`};
//   fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
// `;

// export const S_AdminSvg = styled(AdminSvg)`
//   width: 50px;
//   height: 50px;
//   fill: ${brightest};
//   &:hover {
//     background: ${brightest};
//     fill: ${darker};
//     cursor: pointer;
//   }
//   border-radius: ${border_radius};
//   padding: 10px;
//   margin: 10px;
//   background-color: ${(props) =>
//     props.$active === "true" ? `${brightest}` : `${bright}`};
//   fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
// `;

// export const S_ListSvg = styled(ListSvg)`
//   width: 50px;
//   height: 50px;
//   fill: ${brightest};
//   &:hover {
//     background: ${brightest};
//     fill: ${darker};
//     cursor: pointer;
//   }
//   border-radius: ${border_radius};
//   padding: 10px;
//   margin: 10px;
//   background-color: ${(props) =>
//     props.$active === "true" ? `${brightest}` : `${bright}`};
//   fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
// `;

// export const S_LogoutSvg = styled(LogoutSvg)`
//   width: 50px;
//   height: 50px;
//   fill: ${brightest};
//   &:hover {
//     background: ${brightest};
//     fill: ${darker};
//     cursor: pointer;
//   }
//   border-radius: ${border_radius};
//   padding: 10px;
//   margin: 10px;
// `;

// export const S_HeadhunterSvg = styled(HeadhunterSvg)`
//   width: 60px;
//   transition: width 0.5s ease-in-out;
// `;

// export const S_CollapsedPng = styled(CollapsedPng)`
//   width: 30px;
//   height: 30px;
//   position: relative;
//   right: 15px;
//   background: ${neutral};
//   fill: ${brightest};
//   &:hover {
//     fill: ${darkest};
//     cursor: pointer;
//   }
//   border-radius: 50%;
// `;

// export const S_ExpandedPng = styled(ExpandedPng)`
//   width: 30px;
//   height: 30px;
//   position: relative;
//   right: 15px;
//   fill: ${brightest};
//   background: ${neutral};
//   &:hover {
//     fill: ${darkest};
//     cursor: pointer;
//   }
//   border-radius: 50%;
// `;

// export const S_AccountPng = styled(AccountPng)`
//   width: 50px;
//   height: 50px;
//   fill: ${brightest};
//   &:hover {
//     background: ${brightest};
//     fill: ${darker};
//     cursor: pointer;
//   }
//   border-radius: ${border_radius};
//   padding: 10px;
//   margin: 10px;
//   background-color: ${(props) =>
//     props.$active === "true" ? `${brightest}` : `${bright}`};
//   fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
// `;

// export const S_AdminPng = styled(AdminPng)`
//   width: 50px;
//   height: 50px;
//   fill: ${brightest};
//   &:hover {
//     background: ${brightest};
//     fill: ${darker};
//     cursor: pointer;
//   }
//   border-radius: ${border_radius};
//   padding: 10px;
//   margin: 10px;
//   background-color: ${(props) =>
//     props.$active === "true" ? `${brightest}` : `${bright}`};
//   fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
// `;

// export const S_ListPng = styled(ListPng)`
//   width: 50px;
//   height: 50px;
//   fill: ${brightest};
//   &:hover {
//     background: ${brightest};
//     fill: ${darker};
//     cursor: pointer;
//   }
//   border-radius: ${border_radius};
//   padding: 10px;
//   margin: 10px;
//   background-color: ${(props) =>
//     props.$active === "true" ? `${brightest}` : `${bright}`};
//   fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
// `;

// export const S_LogoutPng = styled(LogoutPng)`
//   width: 50px;
//   height: 50px;
//   fill: ${brightest};
//   &:hover {
//     background: ${brightest};
//     fill: ${darker};
//     cursor: pointer;
//   }
//   border-radius: ${border_radius};
//   padding: 10px;
//   margin: 10px;
// `;

// export const S_HeadhunterPng = styled(HeadhunterPng)`
//   width: 60px;
//   transition: width 0.5s ease-in-out;
// `;

export const S_IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
`;

export const S_IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: containg;
`;
