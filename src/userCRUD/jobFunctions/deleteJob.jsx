// Libraries, functions, etc
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

/**
 * Deletes a job by its id. If successful, the user will no longer see the deleted job in the UI.
 *
 * On success: Logs success message in console.
 * On failure: Logs failure message in console.
 *
 * @function
 * @async
 * @param {string} adId - The unique identifier for the job to be deleted.
 * @param {function} handleJobCRUDSuccess - Callback function that is invoked upon successful deletion to refresh the UI.
 * @return {Promise<void>} A promise that resolves when the operation has completed.
 */

export async function deleteJob(jobId, handleJobCRUDSuccess) {
  console.log("Got to deleteJob");

  const email = extractEmailFromToken();

  const url = `http://localhost:8080/api/v1/jobs/delete/${email}/${jobId}`;

  try {
    const response = await axios.delete(url, {
      data: {
        id: jobId,
        email: email,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Job Delete Success");
    handleJobCRUDSuccess();
  } catch (error) {
    console.error("Error deleting job by id", error);
  }
}
