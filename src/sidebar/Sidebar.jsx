// TODO: Add comments for each import type

import { useEffect, useState } from "react";
import { extractRolesFromToken } from "../security/token/extractRolesFromToken";

import {
  S_HeadhunterLogoBox,
  S_WindowSplit,
  S_SidebarBox,
} from "./styledComponents/styledSidebar.jsx";
import {
  S_LogoutSvg,
  S_AdminSvg,
  S_AccountSvg,
  S_ListSvg,
  S_HeadhunterSvg,
} from "../utils/styledSVG.jsx";

import MyJobs from "../userCRUD/MyJobs";
import Admin from "../adminCRUD/Admin";
import UserInfo from "../userInfo/UserInfo.jsx";

// TODO: Add comments to this component

export default function Sidebar({ setIsAuthorized }) {
  const [isActive, setIsActive] = useState(null);
  const [isAccountVisible, setIsAccountVisible] = useState(false);
  const [isJobsVisible, setIsJobsVisible] = useState(false);
  const [isAdminVisible, setIsAdminVisible] = useState(false);
  const [roles, setRoles] = useState([""]);
  const [isExpanded, setIsExpanded] = useState(false);

  function handleLogout() {
    localStorage.removeItem("headhunter-token");
    setIsAuthorized(false);
  }

  useEffect(() => {
    setRoles(extractRolesFromToken());
  }, []);

  console.log("Sidebar.js: isActive:", isActive);

  return (
    <S_WindowSplit>
      <S_SidebarBox $isExpanded={isExpanded === true ? "true" : "false"}>
        <S_HeadhunterLogoBox>
          <S_HeadhunterSvg />
        </S_HeadhunterLogoBox>
        {roles.includes("admin") && (
          <>
            <S_AdminSvg
              $active={isActive === "2" ? "true" : "false"}
              onClick={() => {
                setIsActive("2");
                setIsAccountVisible(false);
                setIsAdminVisible(true);
              }}
            />
          </>
        )}
        {roles.includes("user") && (
          <>
            <S_AccountSvg
              $active={isActive === "1" ? "true" : "false"}
              onClick={() => {
                setIsActive("1");
                setIsAccountVisible(true);
                setIsAdminVisible(false);
                setIsJobsVisible(false);
              }}
            />
            <S_ListSvg
              $active={isActive === "4" ? "true" : "false"}
              onClick={() => {
                setIsActive("4");
                setIsAccountVisible(false);
                setIsAdminVisible(false);
                setIsJobsVisible(true);
              }}
            />
          </>
        )}
        <S_LogoutSvg onClick={handleLogout} />
      </S_SidebarBox>
      {isAdminVisible && <Admin />}
      {isJobsVisible && <MyJobs />}
      {isAccountVisible && <UserInfo />}
    </S_WindowSplit>
  );
}
