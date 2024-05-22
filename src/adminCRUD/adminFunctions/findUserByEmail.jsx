// Functions, libraries, etc.
import axios from "axios";

/**
 * Retrieves one user object based on its email. This operation is intended for
 * use by admin users, as dictated by server-side authorization.
 *
 * On success: Logs a success message to the console
 * On failure: Logs an error message to the console
 *
 * @function
 * @async
 * @param {String} email - The email of the user to be found.
 */

/**
 * =======================================================
 * Right now, this component is not being used in the code
 * =======================================================
 */

export async function findUserByEmail(email) {
  const url = `http://localhost:8080/api/v1/users/findUser/${email}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("User Found Success");
  } catch (error) {
    console.error("Error get user by email", error);
  }
}
