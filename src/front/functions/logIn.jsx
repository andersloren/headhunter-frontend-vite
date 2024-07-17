import axios from "axios";

export async function logIn(
  email,
  password,
  handleAuthentication,
  setIsAuthorized,
  authorize,
  setLogInError
) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/account/login`;
  console.log(apiUrl);

  const basicAuth = btoa(`${email}:${password}`);

  try {
    const response = await axios.post(
      url,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Account Log In Success");
    handleAuthentication(response.data.data.token);
    setIsAuthorized(authorize());
    setLogInError(false);
  } catch (error) {
    console.error("Error logging in", error);
    setLogInError(true);
  }
}
