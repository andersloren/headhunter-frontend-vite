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

export async function getAllAccountDtos(setAccountList) {
  const url = "http://localhost:8080/api/v1/account/getAllAccountDtos";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Account List Found Success");
    setAccountList(response.data.data);
  } catch (error) {
    console.error("Error get all", error);
  }
}
