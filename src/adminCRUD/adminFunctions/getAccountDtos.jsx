import axios from "axios";

/**
 * Retrieves all account objects from the backend. This operation is intended for
 * use by admin accounts, as dictated by server-side authorization.
 * On success: Updates the application state with the list of accounts.
 * On failure: Logs an error to the console.
 *
 * @async
 * @param {Function} setAccountList - The state setter function for updating the user list in the UI.
 */

export async function getAccountDtos(setAccountList) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/account/getAccountDtos`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Get Account Dtos");
    setAccountList(response.data.data);
  } catch (error) {
    console.error("Error: Get Account Dtos", error);
  }
}
