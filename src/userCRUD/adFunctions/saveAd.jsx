import axios from "axios";

/**
 * Asynchronuously saves an ad. If successful, the user will see the new Ad in a refreshed list of ads.
 *
 * On success: Logs a success message in the console.
 * On failure: Logs a failure message in the console.
 *
 * @function
 * @async
 * @param {number} jobId - The unique identifier for the job that the ad will be associated to.
 * @param {String} htmlCode - The generated text in Html-format, created by the AI API that the backend connects to.
 * @param {function} handleAdCRUDSuccess - Callback function that is invoked upon successful save to refresh the UI.
 * @return {Promise<void>} A promise that resolves when the ad has been saved.
 */

export async function saveAd(jobId, htmlCode, handleAdCRUDSuccess) {
  console.log("Preparing saveAd:", jobId);
  const url = `http://localhost:8080/api/v1/ads/saveAd/${jobId}`;

  try {
    const response = await axios.post(
      url,
      {
        htmlCode: htmlCode,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Save Ad Success");
    handleAdCRUDSuccess();
  } catch (error) {
    console.error("Error saving ad by jobId and htmlCode", error);
  }
}
