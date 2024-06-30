// Libraris, functions, etc
import { useEffect, useState } from "react";
import { validateEmailAvailable } from "./functions/validateEmailAvailable.jsx";

import { validateEmailRegex } from "./functions/validateEmailRegex.jsx";
import { validatePasswordRegex } from "./functions/validatePasswordRegex.jsx";
import { signUp } from "./functions/signUp.jsx";

// Styled Components
import {
  S_FormBox,
  S_Input,
  S_Button,
  S_RegisterLabel,
  S_SignUpLink,
  S_WarningLabel,
  S_WarningLabelBox,
} from "./styledComponents/styledLoginSignup.jsx";

/**
 * When a account tries to sign up, it has to enter a valid email and a valid password.
 *
 * States:
 * - 'email': The email that the account enters.
 * - 'password': The password that the account enters.
 criteria.
 * @param {function} setLoginVisible - When the submit button below the registration form is clicked, setLoginVisible toggles the boolean value of loginVisible and the login form invisible.
 * @param {function} setSignUpVisible - When the submit button below the registration form is clicked, setSignUpVisible toggles the value of sinUpVisible and this component becomes invisible.
 */

export default function SignUpForm({ setLoginVisible, setSignUpVisible }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  useEffect(() => {
    setIsEmailInvalid(false);
    setIsEmailRegistered(false);
  }, [email]);

  useEffect(() => {
    setIsPasswordInvalid(false);
  }, [password]);

  function handleValidation() {
    if (!validateEmailRegex(email)) {
      setIsEmailInvalid(true);
      // Invalid Email
      console.log("Invalid Email");
    }
    if (validateEmailAvailable(email)) {
      setIsEmailRegistered(true);
      // Email address already registered
      console.log("Email already registered");
    }
    if (!validatePasswordRegex(password) || password.length == 0) {
      setIsPasswordInvalid(true);
      // Password is invalid
      console.log("Invalid Password");
    } else {
      // Sign up process begins
      setIsEmailInvalid(false);
      setIsEmailUnique(false);
      setIsPasswordInvalid(false);
      console.log("SignUp Process Begins");
      signUp(email, password, setLoginVisible, setSignUpVisible);
    }
  }

  console.log("SignUpForm email:", email);
  console.log("SignupForm Password: ", password);

  return (
    <>
      <S_FormBox
        onSubmit={(e) => {
          e.preventDefault();
          handleValidation();
        }}
      >
        <S_RegisterLabel>Register New Account</S_RegisterLabel>
        {/**
         * Input field for email
         */}
        <S_Input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          $isInvalid={
            isEmailInvalid || isEmailRegistered === true ? "true" : "false"
          }
        />
        <S_WarningLabelBox>
          <S_WarningLabel
            $isInvalid={
              isEmailInvalid || isEmailRegistered === true ? "true" : "false"
            }
          >
            {isEmailRegistered === true
              ? "Email is already registered"
              : "Email is invalid"}
          </S_WarningLabel>
        </S_WarningLabelBox>

        {/**
         * Input field for password
         */}
        <S_Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          $isInvalid={isPasswordInvalid === true ? "true" : "false"}
        />
        <S_WarningLabelBox>
          <S_WarningLabel
            $isInvalid={isPasswordInvalid === true ? "true" : "false"}
          >
            Password is invalid
          </S_WarningLabel>
        </S_WarningLabelBox>
        {/**
         * If both email and password meets the regex criteria, a button for submitting the registration turns visible.
         */}
        <S_Button type="submit">Sign up</S_Button>
        <S_SignUpLink
          onClick={() => {
            setLoginVisible(true);
            setSignUpVisible(false);
          }}
        >
          Go back to log in
        </S_SignUpLink>
      </S_FormBox>
    </>
  );
}
