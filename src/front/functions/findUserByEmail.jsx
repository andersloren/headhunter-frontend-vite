// Functions, libraries, etc.
import axios from "axios";

/**
 * Retrieves one user object based on its email. This operation is intended for
 * preventing an already existing email to be saved again during signup.
 *
 * On success: Sets isEmail to -1 and logs success message to console
 * On failure: Sets isEmail to 1 and logs error message to console
 *
 * @function
 * @async
 * @param {String} email - The email of the user to be found.
 * @param {function} setIsEmailStatus - Sets emailStatus if the email is not already existing in the database.
 */

export async function findUserByEmail(email, setIsEmailStatus) {
  const url = `http://localhost:8080/api/v1/users/findUser/${email}`;

  try {
    const response = await axios.get(url);
    console.log("User Found Success");
    setIsEmailStatus(-1);
  } catch (error) {
    console.error("Error get user by email", error);
    setIsEmailStatus(1);
  }
}
