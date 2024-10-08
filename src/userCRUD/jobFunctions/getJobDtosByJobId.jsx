// Libraries, functions, etc.
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

/**
 * Sets all jobs that belongs to the user.
 * The list of jobs that the user can see in the UI will then be updated.
 *
 * On success: Logs success message in console. (currently commented out!)
 * On failure: Logs failure message in console.
 *
 * @function
 * @async
 * @param {Function} setJobList - Sets the list of jobs returned from the backend.
 */

export async function getJobDtosByJobId(setJobList) {
  const email = extractEmailFromToken();

  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/job/getJobDtosByJobId/${email}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    // console.log("Find all jobs by email success");
    setJobList(response.data.data);
  } catch (error) {
    console.error("Error get all Jobs", error);
  }
}
