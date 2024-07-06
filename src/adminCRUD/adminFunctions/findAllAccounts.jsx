import axios from "axios";

export async function findAllAccounts() {
  const url = `http://localhost:8080/api/v1/account/findAll`;

  try {
    const response = await axios.findAll(url, {
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
