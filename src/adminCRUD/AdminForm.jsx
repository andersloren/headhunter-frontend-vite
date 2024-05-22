// Functions, libraries, etc
import { updateUser } from "./adminFunctions/updateUser";
import { findUserByEmail } from "./adminFunctions/findUserByEmail";

// Styled components
import {
  S_Form_FloatingDiv,
  S_Form_Header,
  S_Form_Button,
  S_Form_Input,
  S_Form_Button_Box,
} from "./styledComponents/styledAdminForm";
import { useEffect, useState } from "react";

/**
 * On mount, displays email and input forms for the user to be updated. If the save button is being pressed, updateUser() is called. If the back-button is pressed, the component unmounts and the user is returned to the parent component.
 *
 * States:
 * - 'username': The new username for the user object. Sets in the input form for username.
 * - 'roles': The new roles for the user object. Sets in the input form for roles.
 * @param {function} setIsBlur - toggles isBlur.
 * @param {boolean} isBlur     - If true, sets background to blur.
 * @param {String} email       - The email for the user object being handled in this component.
 * @param {function} handleUserCRUDSuccess  - Called when the object was successfully updated to update list of users in parent component.
 */

// Component
export default function AdminForm({
  setIsBlur,
  isBlur,
  email,
  handleUserCRUDSuccess,
}) {
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState("");

  /**
   * When the component mounts, findUserByEmail searches the user object and sets the current username and roles.
   */

  useEffect(() => {
    findUserByEmail(email, setUsername, setRoles);
  }, [email]);

  /**
   * When the save button is pressed, this function sends a request to the backend to save
   * the updated username and roles. Upon success, it triggers `handleUserCRUDSuccess` to
   * refresh the user list in the parent component and toggles `setIsBlur` to false.
   *
   * @param {String} username - The new username from the input form.
   * @param {String} roles    - The new roles from the input form.
   */

  function handleUpdateUser(username, roles) {
    updateUser(email, username, roles, handleUserCRUDSuccess, setIsBlur);
  }

  return (
    <>
      <S_Form_FloatingDiv
        $blur={isBlur === true ? "true" : "false"}
        type="email"
      >
        {/**
         * Shows the email of the user being updated. The email cannot be changed.
         */}
        <S_Form_Header>Update User</S_Form_Header>
        Email
        <S_Form_Input value={email} readOnly></S_Form_Input>
        {/**
         * Shows the username of the user being updated. The username can be changed.
         */}
        Username
        <S_Form_Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></S_Form_Input>
        {/**
         * Shows the roles of the user being updated. The roles can be changed.
         */}
        Roles
        <S_Form_Input
          type="text"
          value={roles}
          onChange={(e) => setRoles(e.target.value)}
        ></S_Form_Input>
        <S_Form_Button_Box>
          {/**
           * The save button for updating the user object.
           */}
          <S_Form_Button
            onClick={() => handleUpdateUser(username, roles, email)}
            $right={"true"}
          >
            💾
          </S_Form_Button>
          {/**
           * The back button for returning to the parent component without updating the user object.
           */}
          <S_Form_Button onClick={() => setIsBlur(false)} $left={"true"}>
            🔙
          </S_Form_Button>
        </S_Form_Button_Box>
      </S_Form_FloatingDiv>
    </>
  );
}
