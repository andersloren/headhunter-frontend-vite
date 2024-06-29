// Libraris, functions, etc.
import { useState } from "react";

// Styled components
import {
  S_FrontContainer,
  S_HeadingBox_Welcome,
  S_Title_Welcome,
  S_Subtitle_Welcome,
} from "./styledComponents/styledFront.jsx";
import { S_OpenAI_Badge, S_OpenAI_Box } from "../utils/styledGlobal.jsx";

// Components
import SignUpForm from "./SignUpForm.jsx";
import LoginForm from "./LoginForm.jsx";

/**
 * This is the first component visible to a user. From here, the user can decide to sign up or login.
 *
 * States:
 * - 'signUpVisible': If true, child component shows below where user can sign up.
 * - 'loginVisible': If true, child component shows below where user can login.
 * @param {boolean} setIsAuthorized - If the user sends in matching email and password, isAuthorized is set to true.
 */

const Welcome = ({ setIsAuthorized }) => {
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(true);

  /**
   * If the user clicks the button for signing up, loginVisible becomes true and forms for logging in becomes visible.
   *
   * @function
   */

  console.log("Welcome, mounted");
  console.log("Welcome, signup", signUpVisible);
  console.log("Welcome, login", loginVisible);

  return (
    <>
      {/**
       * App title
       */}
      <S_FrontContainer>
        <S_HeadingBox_Welcome>
          <S_Title_Welcome>Headhunter</S_Title_Welcome>
          <S_Subtitle_Welcome>Intelligent recruiting</S_Subtitle_Welcome>
          {/**
           * Open AI badge, must follow brand guidelines. Read more here: https://openai.com/brand
           */}
          <S_OpenAI_Box>
            <S_OpenAI_Badge
              src="../static/powered-by-openai-badge-outlined-on-light.svg"
              alt="Open AI Logo"
            />
          </S_OpenAI_Box>
        </S_HeadingBox_Welcome>
        {/**
         * Sign up component
         */}
        {signUpVisible && (
          <SignUpForm
            setLoginVisible={setLoginVisible}
            setSignUpVisible={setSignUpVisible}
          />
        )}
        {/**
         * Login component
         */}
        {loginVisible && (
          <LoginForm
            setIsAuthorized={setIsAuthorized}
            setLoginVisible={setLoginVisible}
            setSignUpVisible={setSignUpVisible}
          />
        )}
      </S_FrontContainer>
    </>
  );
};

export default Welcome;
