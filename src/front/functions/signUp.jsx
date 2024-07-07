import axios from "axios";

export async function signUp(
  email,
  password,
  setLoginVisible,
  setSignUpVisible
) {
  const url = "http://localhost:8080/api/v1/account/register";

  try {
    const response = await axios.post(
      url,
      {
        email: email,
        password: password,
        roles: "user",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("New Account Sign Up Success", response.data.data);
    setLoginVisible(true);
    setSignUpVisible(false);
  } catch (error) {
    console.error("Error signing up", error);
  }
}
