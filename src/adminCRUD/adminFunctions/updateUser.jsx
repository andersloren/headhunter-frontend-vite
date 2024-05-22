import axios from "axios";

/**
 * Updates a user object's username and roles in the database based on its email.
 * This operation is intended for use by admin users, as dictated by server-side authorization.
 *
 * On success: Logs a success message in the console.
 * On failure:
 *
 * @function
 * @async
 * @param {String} email - The email of the user to be updated.
 * @param {String} username - The new username to be updated.
 * @param {String} roles - The new roles to be updated.
 * @param {handleUserCRUDSuccess} function - Triggers an update on the displayed list of users so it includes the newly updated fields of the user object.
 * @param {setIsBlur} boolean - Makes the background component to stop being blurred when the update is finished.
 * @return
 */

export async function updateUser(
  email,
  username,
  roles,
  handleUserCRUDSuccess,
  setIsBlur
) {
  const url = `http://localhost:8080/api/v1/users/update/${email}`;

  try {
    const response = await axios.put(
      url,
      {
        username: username,
        roles: roles,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Update Successful");
    handleUserCRUDSuccess();
    setIsBlur(false);
  } catch (error) {
    console.error("Error updating user by email", error);
  }
}
