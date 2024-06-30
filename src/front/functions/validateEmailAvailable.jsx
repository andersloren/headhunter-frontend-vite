import axios from "axios";

export async function validateEmailAvailable(email) {
  const url = `http://localhost:8080/api/v1/account/validateEmailAvailable/${email}`;

  try {
    const response = await axios.get(url);
    console.log("Email is available");
    console.log(response.flag);
    return true;
  } catch (error) {
    console.error("Email is not available");
    return false;
  }
}
