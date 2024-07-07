// Libraries, functions, etc.
import { useEffect, useState } from "react";
// import authorize from "./security/authorize.jsx";
import { extractRolesFromToken } from "./security/token/extractRolesFromToken.jsx";

// Front page
import Welcome from "./front/Welcome.jsx";

// Sidebar
import Sidebar from "./sidebar/Sidebar.jsx";
import { S_Main } from "./utils/styledGlobal.jsx";

/**
 * App deals with the router setup and prevents the navbar from loading in without their being a JWT stored locally.
 *
 * States:
 * - 'isAuthorized': Sets to true if there is a JWT, and that JWT has not expired.
 */

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [roles, setRoles] = useState("");

  /**
   * If isAuthorized changes, and if the value is false, it's being checked. If there is a JWT stored in the browser and it hasn't expired, isAuthorized is set to true. Otherwise, it remains false.
   */

  // useEffect(() => {
  //   if (!isAuthorized) {
  //     setIsAuthorized(authorize());
  //   }
  // }, [isAuthorized]);

  useEffect(() => {
    if (isAuthorized) {
      setRoles(extractRolesFromToken);
    }
  }, [isAuthorized, setRoles]);

  if (isAuthorized)
    return (
      <>
        <S_Main>
          <Sidebar roles={roles} setIsAuthorized={setIsAuthorized} />
        </S_Main>
      </>
    );

  return (
    <>
      <S_Main>
        <Welcome setIsAuthorized={setIsAuthorized} />
      </S_Main>
    </>
  );
}
