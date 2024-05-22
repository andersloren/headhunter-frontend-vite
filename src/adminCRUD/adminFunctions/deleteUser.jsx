import axios from "axios";

/**
 * Deletes a user object in the database based on their email. This operation is intended for
 * use by admin users, as dictated by server-side authorization.
 * On success: Logs a success message in the console.
 * On failure: Logs an error to the console.
 *
 * @async
 * @param {String} email - The email of the user to be deleted.
 */

export async function deleteUser(email) {
  const url = `http://localhost:8080/api/v1/users/delete/${email}`;

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("User Delete Success");
  } catch (error) {
    console.error("Error delete user by email", error);
  }
}
