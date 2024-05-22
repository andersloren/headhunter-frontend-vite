// Libraries, functions, etc.
import axios from "axios";

/**
 * Returns all ads that belongs to a certain job id.
 * If the fetching is successful, the returned ads will be sorted after the date they were created by the user.
 * The list of ads that the user can see in the UI will then be updated.
 *
 * On success: Logs success message in console.
 * On failure: Logs failure message in console.
 *
 * @function
 * @async
 * @param {number} jobId - The identifier for the Job object that holds all the ads associated to it.
 * @param {function} setAdList - Sets the list of ads returned from the backend.
 * @return {Promise<void>} A promise that resolves when ads have been fetched and the state has been updated.
 */

export async function findAllAdsByJobId(jobId, setAdList) {
  const url = `http://localhost:8080/api/v1/ads/findAllAdsByJobId/${jobId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    // console.log("Find all ads by jobId success");
    const returnedAdList = response.data.data;
    returnedAdList.sort((a, b) =>
      a.createdDateTime > b.createdDateTime ? 1 : -1
    );
    setAdList(returnedAdList);
  } catch (error) {
    console.error("Error get all ads", error);
  }
}
