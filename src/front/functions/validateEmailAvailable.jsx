import axios from "axios";

export async function validateEmailAvailable(email) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/account/validateEmailAvailable/${email}`;
  console.log(apiUrl);

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
