import axios from "axios";

/**
 * Retrieves all user objects from the backend. This operation is intended for
 * use by admin users, as dictated by server-side authorization.
 * On success: Updates the application state with the list of users.
 * On failure: Logs an error to the console.
 *
 * @async
 * @param {Function} setUserList - The state setter function for updating the user list in the UI.
 */

export async function findAllUsers(setUserList) {
  const url = "http://localhost:8080/api/v1/users/findAll";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("User List Found Success");
    setUserList(response.data.data);
  } catch (error) {
    console.error("Error get all", error);
  }
}
