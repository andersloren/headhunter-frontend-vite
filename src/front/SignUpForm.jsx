// Libraris, functions, etc
import { useEffect, useState } from "react";
import { checkEmailUnique } from "./functions/checkEmailUnique.jsx";
import { signUp } from "./functions/signUp.jsx";

// Styled Components
import {
  S_FormBox,
  S_Input,
  S_Button,
  S_RegisterLabel,
} from "./styledComponents/styledLoginSignup.jsx";

/**
 * When a account tries to sign up, it has to enter a valid email and a valid password.
 *
 * States:
 * - 'email': The email that the account enters.
 * - 'password': The password that the account enters.
 * - 'isEmailOk': Becomes true if email meets regex criteria.
 * - 'isPasswordOk': Becomes true if password meets regex criteria.
 * @param {function} setLoginVisible - When the submit button below the registration form is clicked, setLoginVisible toggles the boolean value of loginVisible and the login form invisible.
 * @param {function} setSignUpVisible - When the submit button below the registration form is clicked, setSignUpVisible toggles the value of sinUpVisible and this component becomes invisible.
 */

export default function SignUpForm({ setLoginVisible, setSignUpVisible }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailRegex, setIsEmailRegex] = useState(false);
  const [isPasswordRegex, setIsPasswordRegex] = useState(false);
  const [isEmailUnique, setIsEmailUnique] = useState(false);
  const [isSubmitReady, setIsSubmitReady] = useState(false);

  /**
   * When the account enters an email in the input field, the value will be checked if it passes the regex criteria in this function.
   *
   * If the criteria is met, isEmailOk sets to true and a check sign turns visible on the right hand side of the input field.
   *
   * @function
   * @param {String} email - This is the value that the regex criteria checks.
   */

  function handleEmailRegex(email) {
    const newEmail = email;
    setEmail(newEmail);
    const matcher = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );
    setIsEmailRegex(matcher.test(newEmail));
  }

  /**
   * When the account enters a password in the input field, the value will be checked if it passes the regex criteria in this function.
   *
   * If the criteria is met, isPasswordOk sets to true and a check sign turns visible on the right hand side of the input field.
   *
   * @function
   * @param {String} password - This is the value that the regex criteria checks.
   */

  function handlePasswordRegex(password) {
    const newPassword = password;
    setPassword(newPassword);
    const matcher = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let boolean = matcher.test(newPassword);
    setIsPasswordRegex(boolean);
  }

  useEffect(() => {
    if (isEmailRegex) {
      console.log("SignUpForm isEmailRegex = True");
      checkEmailUnique(email, setIsEmailUnique);
    }
  }, [isEmailRegex, email]);

  useEffect(() => {
    isPasswordRegex && isEmailUnique
      ? setIsSubmitReady(true)
      : setIsSubmitReady(false);
  }, [isPasswordRegex, isEmailUnique]);

  function handleSignUp(e) {
    e.preventDefault();
    signUp(email, password);
    setLoginVisible(true);
    setSignUpVisible(false);
  }

  console.log("SignUpForm email:", email);
  console.log("SignUpForm isEmailRegex:", isEmailRegex);
  console.log("SignUpForm isEmailUnique?", isEmailUnique);
  console.log("SignupForm Password: ", password);
  console.log("SignUpForm isPasswordRegex ", isPasswordRegex);
  console.log("SignUpForm isSubmitReady?", isSubmitReady);

  return (
    <>
      <S_FormBox onSubmit={handleSignUp}>
        <S_RegisterLabel>Register New Account</S_RegisterLabel>
        {/**
         * Input field for email
         */}
        <S_Input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => handleEmailRegex(e.target.value)}
          $isInputValid={
            isEmailUnique && isEmailRegex === true ? "true" : "false"
          }
        />
        {/**
         * Input field for password
         */}
        <S_Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => handlePasswordRegex(e.target.value)}
          $isInputValid={isPasswordRegex === true ? "true" : "false"}
        />
        {/**
         * If both email and password meets the regex criteria, a button for submitting the registration turns visible.
         */}
        {isSubmitReady === true && (
          <S_Button
            type="submit"
            $active={isSubmitReady === true ? "true" : "false"}
          >
            Sign up
          </S_Button>
        )}
      </S_FormBox>
    </>
  );
}
