// Functions, libraries, etc
import { updateAccount } from "./adminFunctions/updateAccount";
import { getAccountDtoByEmail } from "./adminFunctions/getAccountDtoByEmail";

// Styled components
import {
  S_Form_FloatingDiv,
  S_Form_Input,
  S_Form_Select,
  S_Label_Container,
  S_FunctionalityButton_Box,
} from "./styledComponents/styledAdminForm";
import { S_UpdateSvg, S_CancelSvg } from "../utils/styledSVG";
import { S_Header } from "../utils/styledGlobal";
import { useEffect, useState } from "react";

/**
 * On mount, displays email and input forms for the account to be updated. If the save button is being pressed, updateAccount() is called. If the back-button is pressed, the component unmounts and the account is returned to the parent component.
 *
 * States:
 * - 'roles': The new roles for the account object. Sets in the input form for roles.
 * @param {function} setIsBlur - toggles isBlur.
 * @param {boolean} isBlur     - If true, sets background to blur.
 * @param {String} email       - The email for the account object being handled in this component.
 * @param {function} handleAccountCRUDSuccess  - Called when the object was successfully updated to update list of accounts in parent component.
 */

// Component
export default function AdminForm({
  setIsBlur,
  isBlur,
  email,
  handleAccountCRUDSuccess,
}) {
  const [roles, setRoles] = useState("");
  const [numberOfJobs, setNumberOfJobs] = useState("");

  /**
   * When the component mounts, getAccountDtoByEmail searches the account object and sets the roles.
   */

  useEffect(() => {
    getAccountDtoByEmail(email, setRoles, setNumberOfJobs);
  }, [email]);

  /**
   * When the save button is pressed, this function sends a request to the backend to save
   * the roles. Upon success, it triggers `handleAccountCRUDSuccess` to
   * refresh the account list in the parent component and toggles `setIsBlur` to false.
   *
   * @param {String} roles    - The new roles from the input form.
   */

  function handleUpdateAccount(roles) {
    updateAccount(email, roles, handleAccountCRUDSuccess, setIsBlur);
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
         * Shows the email of the account being updated. The email cannot be changed.
         */}
        <S_Header>Update Account</S_Header>
        <S_Label_Container>
          <strong>Email</strong>
          <S_Form_Input
            value={email}
            readOnly
            $readOnly={"true"}
          ></S_Form_Input>
        </S_Label_Container>
        {/**
         * Shows the roles of the account being updated. The roles can be changed.
         */}
        <S_Label_Container>
          <strong>Email</strong>
          <S_Form_Select
            name="roles"
            id="roles-select"
            value={roles}
            onChange={handleRoles}
          >
            <option value="admin">admin</option>
            <option value="user">user</option>
          </S_Form_Select>
        </S_Label_Container>
        <S_FunctionalityButton_Box>
          <S_UpdateSvg
            onClick={() => handleUpdateAccount(roles, email)}
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
