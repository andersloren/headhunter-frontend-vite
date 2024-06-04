import axios from "axios";

export async function signUp(email, password, setHasSignedUp) {
  const url = "http://localhost:8080/api/v1/users/register";

  console.log("signUp before try");

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
    console.log("New User Sign Up Success", response.data.data);
    setHasSignedUp((is) => !is);
  } catch (error) {
    console.error("Error signing up", error);
  }
}

export default signUp;
