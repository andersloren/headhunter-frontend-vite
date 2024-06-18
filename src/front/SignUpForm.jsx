// Libraris, functions, etc
import { useEffect, useState } from "react";
import { findUserByEmail } from "./functions/findUserByEmail.jsx";
import { signUp } from "./functions/signUp.jsx";

// Styled Components
import {
  S_FormBox,
  S_Input,
  S_Button,
} from "./styledComponents/styledLoginSignup.jsx";

/**
 * When a user tries to sign up, it has to enter a valid email and a valid password.
 *
 * States:
 * - 'email': The email that the user enters.
 * - 'password': The password that the user enters.
 * - 'isEmailOk': Becomes true if email meets regex criteria.
 * - 'isPasswordOk': Becomes true if password meets regex criteria.
 * @param {function} setLoginVisible - When the submit button below the registration form is clicked, setLoginVisible toggles the boolean value of loginVisible and the login form invisible.
 * @param {function} setSignUpVisible - When the submit button below the registration form is clicked, setSignUpVisible toggles the value of sinUpVisible and this component becomes invisible.
 */

export default function SignUpForm({ setLoginVisible, setSignUpVisible }) {
  const [email, setEmail] = useState("");
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

  console.log("SignUpForm email:", email);
  console.log("SignUpForm isEmailOk:", isEmailOk);
  console.log("SignUpForm emailStatus:", emailStatus);
  console.log("SignupForm Password: ", password);
  console.log("SignUpForm isPasswordOk ", isPasswordOk);

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

  function handleSignUp(e) {
    e.preventDefault();
    signUp(email, password);
    setLoginVisible(true);
    setSignUpVisible(false);
  }

  return (
    <>
      <S_FormBox onSubmit={handleSignUp}>
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
         * Input field for password
         */}
        <S_Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        {/**
         * If both email and password meets the regex criteria, a button for submitting the registration turns visible.
         */}
        <S_Button
          type="submit"
          $active={emailStatus === 1 && isPasswordOk ? "true" : "false"}
        >
          Sign Up
        </S_Button>
      </S_FormBox>
    </>
  );
}
