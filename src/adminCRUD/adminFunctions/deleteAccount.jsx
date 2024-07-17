import axios from "axios";

/**
 * Deletes a account object in the database based on their email. This operation is intended for
 * use by admin accounts, as dictated by server-side authorization.
 * On success: Logs a success message in the console.
 * On failure: Logs an error to the console.
 *
 * @async
 * @param {String} email - The email of the account to be deleted.
 */

export async function deleteAccount(email, handleAccountCRUDSuccess) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/account/delete/${email}`;
  console.log(apiUrl);

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Delete Account");
    handleAccountCRUDSuccess();
  } catch (error) {
    console.error("Error: Delete Account", error);
  }
}
