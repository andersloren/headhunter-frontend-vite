// Libraries, functions, etc.
import axios from "axios";

/**
 * Updates a job by title, description, and instruction. If successful, resets window.confirm triggering state.
 *
 * On success: Logs success message in console.
 * On failure: Logs failure message in console.
 *
 * @function
 * @async
 * @param {number} jobId - The id of the job to be found.
 * @param {function} handleJobCRUDSuccess - Callback function that is invoked upon successful deletion to refresh the UI.
 * @param {String} title - The updated title for the Job object.
 * @param {String} description - The updated description for the Job object.
 * @param {String} instruction - The updated instruction for the Job object.
 */

export async function updateJob(
  jobId,
  handleJobCRUDSuccess,
  title,
  description,
  instruction,
  recruiterName,
  adCompany,
  adEmail,
  adPhone,
  applicationDeadline
) {
  const url = `http://localhost:8080/api/v1/job/update/${jobId}`;
  try {
    const response = await axios.put(
      url,
      {
        title: title,
        description: description,
        instruction: instruction,
        recruiterName: recruiterName,
        adCompany: adCompany,
        adEmail: adEmail,
        adPhone: adPhone,
        applicationDeadline: applicationDeadline,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Update Job Success");
    handleJobCRUDSuccess();
  } catch (error) {
    console.error("Error updating job by jobId", error);
  }
}
