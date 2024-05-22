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
 * @param {function} setJob - Sets the returned Job object. // TODO - Either start using this state or remove it!
 * @param {function} setTitle - Sets the title of the Job object.
 * @param {function} setDescription - Sets the description of the Job object. The description is later what the AI API will use as guidelines for the response.
 * @param {function} setInstruction - Sets the instruction of the Job object. The instruction is later what the AI API will take in as the text to be modified.
 */

export async function getJobById(
  jobId,
  setJob,
  setTitle,
  setDescription,
  setInstruction
) {
  const url = `http://localhost:8080/api/v1/jobs/findJob/${jobId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    // console.log("Get Job By Id Success");

    /**
     * TODO - Maybe try this:
     *
     * setJob({
     *  title: response.data.data.title,
     *  description: response.data.data.description,
     *  instruction: response.data.data.instruction,
     * });
     */

    setJob(response.data.data);
    setTitle(response.data.data.title);
    setDescription(response.data.data.description);
    setInstruction(response.data.data.instruction);
  } catch (error) {
    console.error("Error getting job by id", error);
  }
}
