import axios from "axios";

export async function isEmailAvailable(email, setIsEmailStatus) {
  const url = `localhost:3306/api/v1/account/isEmailAvailable/${email}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Email is not available");
    setIsEmailStatus(0);
  } catch (error) {
    console.error("Email is available");
    setIsEmailStatus(1);
  }
}
