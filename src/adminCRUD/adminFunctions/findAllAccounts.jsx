import axios from "axios";

export async function findAllAccounts() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/account/findAll`;
  console.log(apiUrl);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-type": "application/json",
      },
    });
    console.log("Success: Find All Accounts");
  } catch (error) {
    console.error("Error: Find All Accounts", error);
  }
}
