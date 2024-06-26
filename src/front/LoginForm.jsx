// Libraris, functions, etc
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorize } from "../security/authorize.jsx";
import { logIn } from "./functions/logIn.jsx";

// Styled Components
import {
  S_FormBox,
  S_Input,
  S_ButtonBox_Submit,
} from "./styledComponents/styledLoginSignup.jsx";
import { S_Button } from "./styledComponents/styledFront.jsx";

/**
 * When the account tries to log in, it has to enter its email and password. The account can also chose to go back to the parent component.
 *
 * States:
 * - 'email': The email that the account enters.
 * - 'password': The password that the account enters.
 * @param {boolean} setIsAuthorized - If the account sends in matching email and password, isAuthorized is set to true.
 */

export default function Login({ setIsAuthorized }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  /**
   * When trying to log in, an HTTP request with email and password is being sent to the backend to authenticate the account.
   *
   * On success:
   * - Logs a success message in the console.
   * - Stores the token locally in the browser.
   * - Sets isAuthorized to true, which enables the account to access different parts of the app.
   *
   * On failure:
   * - Logs an error to the console.
   *
   * @function
   * @async
   * @param {Event} e - Email and password from the input forms that used for authentication in backend.
   */

  console.log("Login, email", email);
  console.log("Login, password", password);

  // TODO - Change myPage to whatever is more suitable
  function handleAuthentication(token) {
    console.log("Login, handleAuthentication()");
    localStorage.setItem("headhunter-token", token);
    navigate("/myPage");
  }

  // TODO - This can probably be removed, instead just go directly for handleLogin and pass email and password instead of e.
  function handleClick(e) {
    e.preventDefault();
    console.log("Login, handleClick()");
    logIn(email, password, handleAuthentication, setIsAuthorized, authorize);
  }

  return (
    <>
      <S_FormBox>
        <form onSubmit={handleClick}>
          {/**
           * Input field for the account's email.
           */}
          <S_Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/**
           * Input field for the account's password
           */}
          <S_Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/**
           * If the account has entered non-empty values to email and password, the submit button appears.
           */}
          {email !== "" && password !== "" && (
            <S_ButtonBox_Submit>
              <S_Button
                type="submit"
                // onClick={() => handleClick()}
              >
                Submit
              </S_Button>
            </S_ButtonBox_Submit>
          )}
        </form>
      </S_FormBox>
    </>
  );
}
