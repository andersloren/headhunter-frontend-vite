// Styled components
import { useState } from "react";
import {
  S_UserDetailsBox,
  S_UserDetailsField,
  S_UserDetailsLabel,
} from "./styledComponents/styledAccount";

import { extractEmailFromToken } from "../security/token/extractEmailFromToken";
import { extractUsernameFromToken } from "../security/token/extractUsernameFromToken";

/**
 * When a user clicks the account icon in the sidebar, the user's username and email should appear.
 *
 * States:
 * - 'username': The username that the backend retrieves from the database.
 * - 'password': The password that the backend retrieves from the database.
 * @param {function} setUsername - When the component loads, the username should immediately be retrieved from the database.
 * @param {function} setPassword - When the component loads, the password should immediately be retrieved from the database.
 */

export default function Account() {
  const [username] = useState(extractUsernameFromToken);
  const [email] = useState(extractEmailFromToken);

  return (
    <>
      <S_UserDetailsBox>
        <S_UserDetailsLabel>Username</S_UserDetailsLabel>
        <S_UserDetailsField>{username}</S_UserDetailsField>

        <S_UserDetailsLabel>Email</S_UserDetailsLabel>
        <S_UserDetailsField>{email}</S_UserDetailsField>
      </S_UserDetailsBox>
    </>
  );
}
