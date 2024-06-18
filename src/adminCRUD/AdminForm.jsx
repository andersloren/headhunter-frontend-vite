// Functions, libraries, etc
import { updateUser } from "./adminFunctions/updateUser";
import { getUserByEmail } from "./adminFunctions/getUserByEmail";

// Styled components
import {
  S_Form_FloatingDiv,
  S_Form_Input,
  S_Form_Select,
} from "./styledComponents/styledAdminForm";
import { S_UpdateSvg, S_CancelSvg } from "../utils/styledSVG";
import { S_FunctionalityButton_Box, S_Header } from "../utils/styledGlobal";
import { useEffect, useState } from "react";

/**
 * On mount, displays email and input forms for the user to be updated. If the save button is being pressed, updateUser() is called. If the back-button is pressed, the component unmounts and the user is returned to the parent component.
 *
 * States:
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
  const [roles, setRoles] = useState("");
  const [numberOfJobs, setNumberOfJobs] = useState("");

  /**
   * When the component mounts, findUserByEmail searches the user object and sets the roles.
   */

  useEffect(() => {
    getUserByEmail(email, setRoles, setNumberOfJobs);
  }, [email]);

  console.log("AdminForm, email", email);
  console.log("AdminForm, roles", roles);
  console.log("AdminForm, number of jobs", numberOfJobs);

  /**
   * When the save button is pressed, this function sends a request to the backend to save
   * the roles. Upon success, it triggers `handleUserCRUDSuccess` to
   * refresh the user list in the parent component and toggles `setIsBlur` to false.
   *
   * @param {String} roles    - The new roles from the input form.
   */

  function handleUpdateUser(roles) {
    updateUser(email, roles, handleUserCRUDSuccess, setIsBlur);
  }

  const handleRoles = (e) => {
    setRoles(e.target.value);
  };

  return (
    <>
      <S_Form_FloatingDiv
        $blur={isBlur === true ? "true" : "false"}
        type="email"
      >
        {/**
         * Shows the email of the user being updated. The email cannot be changed.
         */}
        <S_Header>Update User</S_Header>
        <strong>Email</strong>
        <S_Form_Input value={email} readOnly $readOnly={"true"}></S_Form_Input>
        {/**
         * Shows the roles of the user being updated. The roles can be changed.
         */}
        <strong>Roles</strong>
        <S_Form_Select
          name="roles"
          id="roles-select"
          value={roles}
          onChange={handleRoles}
        >
          <option value="admin">admin</option>
          <option value="user">user</option>
        </S_Form_Select>

        <S_FunctionalityButton_Box>
          <S_UpdateSvg
            onClick={() => handleUpdateUser(roles, email)}
            $right={"true"}
          ></S_UpdateSvg>
          <S_CancelSvg
            onClick={() => setIsBlur(false)}
            $left={"true"}
          ></S_CancelSvg>
        </S_FunctionalityButton_Box>
      </S_Form_FloatingDiv>
    </>
  );
}
