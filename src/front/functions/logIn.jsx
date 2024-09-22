import axios from "axios";

export async function logIn(
  email,
  password,
  handleAuthentication,
  setIsAuthorized,
  authorize,
  setLogInError,
) {
  console.log("base url: ", import.meta.env.VITE_API_BASE_URL);

  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/account/login`;

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
      },
    );
    console.log("Account Log In Success");
    handleAuthentication(response.data.data.token);
    setIsAuthorized(authorize());
    setLogInError(false);
  } catch (error) {
    if (error.response) {
      console.log("Error logging in. Response data:", error.response.data);
    } else if (error.requst) {
      console.log("No response received:", error.request);
    } else {
      console.log("Error setting up the request:", error.message);
    }
  }
}
