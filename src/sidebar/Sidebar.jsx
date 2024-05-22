// TODO: Add comments for each import type

import { useEffect, useState } from "react";
import { extractRolesFromToken } from "../security/token/extractRolesFromToken";
import {
  S_WindowSplit,
  S_SidebarBox,
  S_HeadhunterLogoBox,
  S_LogoutSvg,
  S_AdminSvg,
  S_AccountSvg,
  S_ListSvg,
  S_HeadhunterSvg,
} from "./styledComponents/styledSidebar";

import MyJobs from "../userCRUD/MyJobs";
import Admin from "../adminCRUD/Admin";
import Account from "../userInfo/Account";

// TODO: Add comments to this component

export default function Sidebar({ setIsAuthorized }) {
  const [isActive, setIsActive] = useState(null);
  const [isAccountVisible, setIsAccountVisible] = useState(false);
  const [isJobsVisible, setIsJobsVisible] = useState(false);
  const [isAdminVisible, setIsAdminVisible] = useState(false);
  const [roles, setRoles] = useState([""]);
  // const [isExpanded, setIsExpanded] = useState(false);

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
      <S_SidebarBox /*$isExpanded={isExpanded === true ? "true" : "false"}*/>
        <S_HeadhunterLogoBox>
          <S_HeadhunterSvg />
        </S_HeadhunterLogoBox>
        <S_AccountSvg
          $active={isActive === "1" ? "true" : "false"}
          onClick={() => {
            setIsActive("1");
            setIsAccountVisible(true);
            setIsAdminVisible(false);
            setIsJobsVisible(false);
          }}
        />
        {roles.includes("admin") && (
          <>
            <S_AdminSvg
              $active={isActive === "2" ? "true" : "false"}
              onClick={() => {
                setIsActive("2");
                setIsAccountVisible(false);
                setIsAdminVisible(true);
                setIsJobsVisible(false);
              }}
            />
            <S_ListSvg
              $active={isActive === "3" ? "true" : "false"}
              onClick={() => {
                setIsActive("3");
                setIsAccountVisible(false);
                setIsAdminVisible(false);
                setIsJobsVisible(true);
              }}
            />
          </>
        )}
        {roles.includes("user") && !roles.includes("admin") && (
          <S_ListSvg
            $active={isActive === "4" ? "true" : "false"}
            onClick={() => {
              setIsActive("4");
              setIsAccountVisible(false);
              setIsAdminVisible(false);
              setIsJobsVisible(true);
            }}
          />
        )}
        <S_LogoutSvg onClick={handleLogout} />
      </S_SidebarBox>
      {isAdminVisible && <Admin />}
      {isJobsVisible && <MyJobs />}
      {isAccountVisible && <Account />}
    </S_WindowSplit>
  );
}
