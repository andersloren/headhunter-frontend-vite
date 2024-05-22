// Libraries, functions, etc
import axios from "axios";

/**
 * Asynchronuously deletes an ad by its id. If successful, the user will no longer see the deleted ad in the UI.
 *
 * On success: Logs success message in console.
 * On failure: Logs failure message in console.
 *
 * @function
 * @async
 * @param {string} adId - The unique identifier for the ad to be deleted.
 * @param {function} handleAdCRUDSuccess - Callback function that is invoked upon successful deletion to refresh the UI.
 * @return {Promise<void>} A promise that resolves when the operation has completed.
 */

export async function deleteAd(adId, handleAdCRUDSuccess) {
  const url = `http://localhost:8080/api/v1/ads/deleteAd/${adId}`;

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Ad Delete Success");
    handleAdCRUDSuccess();
  } catch (error) {
    console.error("Error deleting job by id", error);
  }
}
