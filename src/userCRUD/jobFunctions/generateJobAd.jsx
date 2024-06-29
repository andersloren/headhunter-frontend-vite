// Libraries, functions, etc.
import axios from "axios";

/**
 * An HTTP request is send to the backend that is then send to the external AI API.
 *
 * @function
 * @async
 * @param {number} jobId - The id for the Job object that the Ad object will be based on and associate with.
 * @param {Function} handleAdCRUDSuccess - Callback function invoked to refresh the list of job ads in the UI upon successful ad generation.
 * @param {function} setIsGenerating - During the communication with the backend and the AI API an animation will show up in the UI to let the user know that things are happening behind the scenes.
 * @returns {Promise<void>} A promise that resolves when the ad has been saved.
 */

export async function generateJobAd(
  jobId,
  handleAdCRUDSuccess,
  setIsGenerating
) {
  const url = `http://localhost:8080/api/v1/job/generate/${jobId}`;

  console.log("Communication with OpenAI API initialized");

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Generate Ad Success");
    handleAdCRUDSuccess();
    setIsGenerating(false);
  } catch (error) {
    console.error("Error generating job ad", error);
    setIsGenerating(false);
  }
}
