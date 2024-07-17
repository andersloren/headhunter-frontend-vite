import axios from "axios";

/**
 * Updates a account object's username and roles in the database based on its email.
 * This operation is intended for use by admin accounts, as dictated by server-side authorization.
 *
 * On success: Logs a success message in the console.
 * On failure:
 *
 * @function
 * @async
 * @param {String} email - The email of the account to be updated.
 * @param {String} username - The new username to be updated.
 * @param {String} roles - The new roles to be updated.
 * @param {handleAccountCRUDSuccess} function - Triggers an update on the displayed list of accounts so it includes the newly updated fields of the account object.
 * @param {setIsBlur} boolean - Makes the background component to stop being blurred when the update is finished.
 * @return
 */

export async function updateAccount(
  email,
  roles,
  handleAccountCRUDSuccess,
  setIsBlur
) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/account/update/${email}`;
  console.log(apiUrl);

  try {
    const response = await axios.put(
      url,
      {
        roles: roles,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Success: Update Account");
    handleAccountCRUDSuccess();
    setIsBlur(false);
  } catch (error) {
    console.error("Erro: Updating Account", error);
  }
}
