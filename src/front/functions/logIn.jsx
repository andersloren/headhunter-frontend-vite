import axios from "axios";

export async function logIn(
  email,
  password,
  handleAuthentication,
  setIsAuthorized,
  authorize
) {
  const url = "http://localhost:8080/api/v1/account/login";

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
  } catch (error) {
    console.error("Error logging in", error);
    setLoginError(true);
  }
}
