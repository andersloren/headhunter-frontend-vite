// Libraries, functions, etc.
import axios from "axios";

/**
 * Sets a job by id.
 *
 * On success: Logs success message in console.
 * On failure: Logs failure message in console.
 *
 * @function
 * @async
 * @param {number} jobId - The id of the job to be found.
 * @param {function} setTitle - Sets the title of the Job object.
 * @param {function} setDescription - Sets the description of the Job object. The description is later what the AI API will use as guidelines
 */

export async function getJobById(jobId, setTitle, setDescription) {
  const url = `http://localhost:8080/api/v1/jobs/getJobById/${jobId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Get Job By Id Success");
    console.log("getJobById, response.data", response.data);
    setTitle(response.data.data.title);
    setDescription(response.data.data.description);
  } catch (error) {
    console.error("Error getting job by id", error);
  }
}
