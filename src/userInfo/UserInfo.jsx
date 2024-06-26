// Styled components
import { useEffect, useState } from "react";
import { getAccountDtoByEmail } from "../adminCRUD/adminFunctions/getAccountDtoByEmail";
import {
  S_UserInfo_Column,
  S_UserInfo_Input,
  S_Label,
} from "./styledComponents/styledUserInfo";
import { S_Header } from "../utils/styledGlobal";

import { extractEmailFromToken } from "../security/token/extractEmailFromToken";

/**
 * When an account clicks the account icon in the sidebar, the account's username and email should appear.
 *
 * States:
 * - 'username': The username that the backend retrieves from the database.
 * - 'password': The password that the backend retrieves from the database.
 * @param {function} setUsername - When the component loads, the username should immediately be retrieved from the database.
 * @param {function} setPassword - When the component loads, the password should immediately be retrieved from the database.
 */

export default function UserInfo() {
  const [email] = useState(extractEmailFromToken);
  const [roles, setRoles] = useState("");
  const [numberOfJobs, setNumberOfJobs] = useState("");

  useEffect(() => {
    getAccountDtoByEmail(email, setRoles, setNumberOfJobs);
  }, [email]);

  return (
    <>
      <S_UserInfo_Column>
        <S_Header>Account Details</S_Header>
        <S_Label>Email</S_Label>
        <S_UserInfo_Input
          value={email}
          disabled="true"
          readOnly
          $readOnly={"true"}
        />
        <S_Label>Roles</S_Label>
        <S_UserInfo_Input
          value={roles}
          disabled="true"
          readOnly
          $readOnly={"true"}
        />
        <S_Label>Number of jobs</S_Label>
        <S_UserInfo_Input
          value={numberOfJobs}
          disabled="true"
          readOnly
          $readOnly={"true"}
        />
      </S_UserInfo_Column>
    </>
  );
}
