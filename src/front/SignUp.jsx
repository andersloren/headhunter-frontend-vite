// Libraris, functions, etc
import { useEffect, useState } from "react";
import axios from "axios";
import { findUserByEmail } from "./functions/findUserByEmail";

// Styled Components
import {
  S_FormBox,
  S_Input,
  S_ButtonBox_Submit,
  // S_Check,
  // S_EmailIsNotAvailable,
  // S_SignUpFeedbackBox,
  S_InputFeedbackBox,
  S_InputFeedback,
  S_CheckSvg,
} from "./styledComponents/styledLoginSignup.jsx";
import { S_Button } from "./styledComponents/styledFront.jsx";

/**
 * When a user tries to sign up, it has to enter a valid email, a username, and a valid password.
 *
 * States:
 * - 'email': The email that the user enters.
 * - 'username': The username that the user enters.
 * - 'password': The password that the user enters.
 * - 'isEmailOk': Becomes true if email meets regex criteria.
 * - 'isPasswordOk': Becomes true if password meets regex criteria.
 * @param {function} setLoginVisible - When the submit button below the registration form is clicked, setLoginVisible toggles the boolean value of loginVisible and the login form invisible.
 * @param {function} setSignUpVisible - When the submit button below the registration form is clicked, setSignUpVisible toggles the value of sinUpVisible and this component becomes invisible.
 */

export default function SignUp({
  setLoginVisible,
  setSignUpVisible,
  setHasSignedUp,
}) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailOk, setIsEmailOk] = useState(false);
  /**
   * emailStatus can take three values:
   *    1) show check
   *    0) show nothing
   *   -1) show message
   */
  const [emailStatus, setIsEmailStatus] = useState(0);
  const [isPasswordOk, setIsPasswordOk] = useState(false);

  /**
   * When clicking the submit button at the end of the sign up form, a HTTP request with a email, username, and password is being sent to the backend for registration.
   *
   * On success: Logs a success message in the console.
   * On failure: Logs a failure message in the console.
   *
   * @function
   * @async
   */

  async function handleSignUp() {
    const url = "http://localhost:8080/api/v1/users/register";

    try {
      const response = await axios.post(
        url,
        {
          email: email,
          username: username,
          password: password,
          roles: "user",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("New User Sign Up Success", response.data.data);
      setHasSignedUp((is) => !is);
    } catch (error) {
      console.error("Error signing up", error);
    }
  }

  /**
   * When the user enters an email in the input field, the value will be checked if it passes the regex criteria in this function.
   *
   * If the criteria is met, isEmailOk sets to true and a check sign turns visible on the right hand side of the input field.
   *
   * @function
   * @param {String} email - This is the value that the regex criteria checks.
   */

  function handleEmailChange(email) {
    const newEmail = email;
    setEmail(newEmail);
    const matcher = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );
    let boolean = matcher.test(newEmail);
    setIsEmailOk(boolean);
  }

  console.log("SignUp email:", email);
  console.log("SignUp isEmailOk:", isEmailOk);
  console.log("SignUp emailStatus:", emailStatus);
  console.log("Signup Username: ", username);
  console.log("SignUp isPasswordOk ", isPasswordOk);

  useEffect(() => {
    if (isEmailOk) {
      findUserByEmail(email, setIsEmailStatus);
    } else {
      setIsEmailStatus(0);
    }
  }, [email, isEmailOk]);

  /**
   * When the user enters a password in the input field, the value will be checked if it passes the regex criteria in this function.
   *
   * If the criteria is met, isPasswordOk sets to true and a check sign turns visible on the right hand side of the input field.
   *
   * @function
   * @param {String} password - This is the value that the regex criteria checks.
   */

  function handlePasswordChange(password) {
    const newPassword = password;
    setPassword(newPassword);
    const matcher = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let boolean = matcher.test(newPassword);
    setIsPasswordOk(boolean);
  }

  /**
   * Toggles the visibility of this component and its sibbling component for logging in.
   *
   * LoginVisible turns true and signUpVisible turns false, and the user now instead sees the logging in form.
   *
   * @function
   */

  // TODO - Skip this step, instead have handleSignUp deal with setLoginVisible and setSignUpVisible.
  function handleClick(e) {
    handleSignUp();
    setLoginVisible(true);
    setSignUpVisible(false);
  }

  return (
    <>
      <S_FormBox>
        <S_InputFeedbackBox>
          <S_InputFeedback>
            {emailStatus < 1 ? (
              emailStatus < 0 ? (
                "Email is already registered"
              ) : (
                ""
              )
            ) : (
              <S_CheckSvg src="/google-icons/check.svg" alt="check" />
            )}
          </S_InputFeedback>
          <S_InputFeedback>
            {username && (
              <S_CheckSvg src="/google-icons/check.svg" alt="check" />
            )}
          </S_InputFeedback>
          <S_InputFeedback>
            {isPasswordOk && (
              <S_CheckSvg src="/google-icons/check.svg" alt="check" />
            )}
          </S_InputFeedback>
        </S_InputFeedbackBox>
        <form onSubmit={handleClick}>
          {/**
           * Input field for email
           */}
          <S_Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          {/**
           * Input field for username
           */}
          <S_Input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/**
           * Input field for password
           */}
          <S_Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />

          {/**
           * Green check sign that appears if isPasswordOk is true, which it will be only if the password meets the regex criteria.
           */}
          {/**
           * If both email and password meets the regex criteria, a button for submitting the registration turns visible.
           */}
          {emailStatus === 1 && username !== "" && isPasswordOk && (
            <S_ButtonBox_Submit>
              <S_Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSignUp();
                }}
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
