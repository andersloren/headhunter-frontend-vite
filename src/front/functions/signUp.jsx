import axios from "axios";

export async function signUp(
  email,
  password,
  setLoginVisible,
  setSignUpVisible
) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/account/register`;
  console.log(apiUrl);

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
