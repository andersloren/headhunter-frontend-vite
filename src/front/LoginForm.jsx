// Libraris, functions, etc
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorize } from "../security/authorize.jsx";
import { logIn } from "./functions/logIn.jsx";

// Styled Components
import {
  S_FormBox,
  S_Input,
  S_LoginError,
  S_ButtonBox_Submit,
  S_Button,
} from "./styledComponents/styledLoginSignup.jsx";

/**
 * When the user tries to log in, it has to enter its email and password. The user can also chose to go back to the parent component.
 *
 * States:
 * - 'email': The email that the user enters.
 * - 'password': The password that the user enters.
 * @param {boolean} setIsAuthorized - If the user sends in matching email and password, isAuthorized is set to true.
 */

export default function Login({ setIsAuthorized }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  /**
   * When trying to log in, an HTTP request with email and password is being sent to the backend to authenticate the user.
   *
   * On success:
   * - Logs a success message in the console.
   * - Stores the token locally in the browser.
   * - Sets isAuthorized to true, which enables the user to access different parts of the app.
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
  console.log("Login, loginError", loginError);

  useEffect(() => {
    if (loginError) setEmail("");
    setPassword("");
  }, [loginError]);

  useEffect(() => {
    if (email != "" || password != "") setLoginError(false);
  }, [email, password]);

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
           * Input field for the user's email.
           */}
          <S_Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/**
           * Input field for the user's password
           */}
          <S_Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/**
           * If the user has entered non-empty values to email and password, the submit button appears.
           */}
          <S_ButtonBox_Submit>
            <S_Button
              type="submit"
              $active={email == "" || password == "" ? "false" : "true"}
              // onClick={() => handleClick()}
            >
              Log in
            </S_Button>
          </S_ButtonBox_Submit>
        </form>
        {loginError && <S_LoginError>Invalid email or password</S_LoginError>}
      </S_FormBox>
    </>
  );
}
