import axios from "axios";

export async function checkEmailUnique(email, setIsEmailAvailable) {
  const url = `http://localhost:8080/api/v1/account/checkEmailUnique/${email}`;

  try {
    const response = await axios.get(url);
    console.log("Email is available");
    console.log(response.flag);
    setIsEmailAvailable(true);
  } catch (error) {
    console.error("Email is not available");
    setIsEmailAvailable(false);
  }
}
